'use client';
import { Dialog } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { DialogContent, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import Dropzone from 'react-dropzone';
import { Cloud, File, Loader2 } from 'lucide-react';
import { Progress } from './ui/progress';
import { useUploadThing } from '@/lib/uploadthing';
import { useToast } from './ui/use-toast';
import { trpc } from '@/app/_trpc/client';
import { useRouter } from 'next/navigation';

const DropzoneUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgressBar, setUploadProgressBar] = useState(0);
  const { startUpload } = useUploadThing('fileUploader');
  const { toast } = useToast();
  const router = useRouter();

  const { mutate: startPollingFile } = trpc.getFile.useMutation({
    onSuccess: (file) => {
      router.push(`/dashboard/${file.id}`);
    },
    retry: true,
    retryDelay: 500,
  });

  const startSimulatingProgressBar = () => {
    setUploadProgressBar(0);

    const interval = setInterval(() => {
      setUploadProgressBar((prev) => {
        if (prev > 95) {
          clearInterval(interval);
          return prev;
        }
        return prev + 10;
      });
    }, 500);

    return interval;
  };

  return (
    <Dropzone
      multiple={false}
      onDrop={async (acceptedFiles) => {
        setIsUploading(true);
        const progressInterval = startSimulatingProgressBar();
        const res = await startUpload(acceptedFiles);
        if (!res) {
          return toast({
            title: 'Something went wrong',
            description: 'Please try again',
            variant: 'destructive',
          });
        }
        const [fileResponse] = res;

        const key = fileResponse?.key;

        if (!key) {
          return toast({
            title: 'Something went wrong',
            description: 'Please try again later',
            variant: 'destructive',
          });
        }

        clearInterval(progressInterval);
        setUploadProgressBar(100);

        startPollingFile({ key });
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="'border rounded-lg' m-4 h-64 border-dashed border-gray-300"
        >
          <label
            htmlFor='dropzone-file'
            className='flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-violet-200'
          >
            <div className='flex flex-col items-center justify-center pb-6 pt-5'>
              <Cloud className='mb-2 h-6 w-6 text-zinc-500 dark:text-zinc-800' />
              <p className='mb-2 text-sm text-zinc-700 dark:text-zinc-800'>
                <span className='font-semibold'>Click to upload</span> or drag
                and drop
              </p>
              <p className='text-xs text-zinc-500 dark:text-zinc-800'>
                PDF (upto 4 MB)
              </p>
            </div>

            {acceptedFiles && acceptedFiles[0] ? (
              <div className='flex max-w-xs items-center divide-x divide-zinc-200 overflow-hidden rounded-md bg-white outline outline-[1px] outline-zinc-200'>
                <div className='grid h-full place-items-center px-3 py-2'>
                  <File className='h-4 w-4 text-blue-500' />
                </div>
                <div className='h-full truncate px-3 py-2 text-sm dark:text-zinc-800'>
                  {acceptedFiles[0].name}
                </div>
              </div>
            ) : null}
            {isUploading ? (
              <div className='mx-auto mt-4 w-full max-w-xs'>
                <Progress
                  value={uploadProgressBar}
                  className='h-1 w-full bg-zinc-200'
                />
                {uploadProgressBar === 100 ? (
                  <div className='flex items-center justify-center gap-1 pt-2 text-center text-sm text-zinc-700'>
                    <Loader2 className='h-3 w-3 animate-spin' />
                    Redirecting...
                  </div>
                ) : null}
              </div>
            ) : null}
            <input {...getInputProps()} id='dropzone-file' className='hidden' />
          </label>
        </div>
      )}
    </Dropzone>
  );
};

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>Upload File</Button>
      </DialogTrigger>
      <DialogContent>
        <DropzoneUpload />
      </DialogContent>
    </Dialog>
  );
};
export default UploadButton;
