'use client';
import {
  ChevronDown,
  ChevronUp,
  Loader2,
  RotateCw,
  Search,
} from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useToast } from './ui/use-toast';
import { useResizeDetector } from 'react-resize-detector';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import SimpleBar from 'simplebar-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from './ui/dropdown-menu';
import PdfDialog from './PdfDialog';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
import 'simplebar-react/dist/simplebar.min.css';

const PdfDisplay = ({ fileUrl }: { fileUrl: string }) => {
  const { toast } = useToast();
  const { width, ref } = useResizeDetector();
  const [numPages, setNumPages] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  const [rotate, setRotate] = useState<number>(0);
  const [renderedScale, setRenderedScale] = useState<number | null>(null);

  const isLoading = renderedScale !== scale;

  const schema = z.object({
    pageNumber: z
      .number()
      .int()
      .min(1, 'Page number must be at least 1')
      .max(numPages ?? 1, `Page number cannot exceed ${numPages ?? 1}`),
  });

  // Initialize React Hook Form
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    getValues,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      pageNumber: currentPage,
    },
  });

  const hanldePageInputSubmit = handleSubmit((data) => {
    setValue('pageNumber', data.pageNumber, { shouldValidate: true });
    setCurrentPage(getValues('pageNumber'));
  });

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const onClickNextPage = () => {
    setValue(
      'pageNumber',
      currentPage + 1 <= (numPages || 1) ? currentPage + 1 : currentPage
    );
    setCurrentPage((prev) => (prev + 1 <= (numPages || 0) ? prev + 1 : prev));
  };

  const onClickPreviousPage = () => {
    setValue(
      'pageNumber',
      currentPage - 1 >= 1 ? currentPage - 1 : currentPage
    );
    setCurrentPage((prev) => (prev - 1 >= 1 ? prev - 1 : prev));
  };

  const onClickRotatePdf = () => {
    setRotate((currentRotate) => (currentRotate + 90) % 360);
  };

  useEffect(() => {
    if (errors.pageNumber) {
      toast({
        title: 'Invalid page number',
        description: errors.pageNumber.message,
        variant: 'destructive',
      });
    }
  }, [errors, toast]);

  return (
    <div className='flex w-full flex-col items-center rounded-md bg-white shadow'>
      <div className='flex h-14 w-full items-center justify-between border-b border-zinc-200 px-2'>
        <div className='flex items-center gap-1.5'>
          <Button
            variant='ghost'
            aria-label='Previous page'
            onClick={onClickPreviousPage}
            disabled={currentPage <= 1}
            className='dark:text-black'
          >
            <ChevronDown className='h-4 w-4' />
          </Button>
          <Input
            {...register('pageNumber', { valueAsNumber: true })}
            className={cn(
              'h-8 w-12 dark:bg-white dark:text-zinc-900',
              errors.pageNumber && 'focus-visible:ring-red-500'
            )}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                hanldePageInputSubmit();
              }
            }}
          />{' '}
          / {numPages ?? 'x'}
          <Button
            variant='ghost'
            aria-label='Previous page'
            onClick={onClickNextPage}
            disabled={currentPage >= (numPages || 1)}
            className='text-black'
          >
            <ChevronUp className='h-4 w-4' />
          </Button>
        </div>
        <div className='flex space-x-2'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                aria-label='zoom'
                className='text-slate-950'
              >
                <Search className='pr-1' />
                {scale * 100}%<ChevronDown className='pl-1 opacity-50' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => setScale(0.75)}>
                75%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(1)}>
                100%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(1.5)}>
                150%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(2)}>
                200%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(2.5)}>
                250%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(3)}>
                300%
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant='ghost'
            aria-label='Rotate 90 degrees'
            onClick={onClickRotatePdf}
            className='text-slate-950'
          >
            <RotateCw className='h-4 w-4' />
          </Button>
          <PdfDialog fileUrl={fileUrl} />
        </div>
      </div>
      <div className='max-h-screen w-full flex-1'>
        <SimpleBar autoHide={false} className='max-h-[calc(100vh-10rem)]'>
          <div ref={ref}>
            <Document
              file={fileUrl}
              className='max-h-full'
              loading={
                <div className='flex justify-center'>
                  <Loader2 className='my-24 h-6 w-6 animate-spin' />
                </div>
              }
              onLoadError={() => {
                toast({
                  title: 'Error loading PDF',
                  description: 'Please try again later',
                  variant: 'destructive',
                });
              }}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {isLoading && renderedScale ? (
                <Page
                  pageNumber={currentPage}
                  width={width ? width : 1}
                  scale={scale}
                  rotate={rotate}
                  key={`key_${scale}`}
                />
              ) : null}

              <Page
                className={isLoading ? 'hidden' : ''}
                pageNumber={currentPage}
                width={width ? width : 1}
                scale={scale}
                rotate={rotate}
                key={`key_${renderedScale}`}
                loading={
                  <div className='flex justify-center'>
                    <Loader2 className='my-24 h-6 w-6 animate-spin' />
                  </div>
                }
                onRenderSuccess={() => setRenderedScale(scale)}
              />
            </Document>
          </div>
        </SimpleBar>
      </div>
    </div>
  );
};

export default PdfDisplay;
