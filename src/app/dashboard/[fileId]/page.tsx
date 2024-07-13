import ChatWrapper from '@/components/PdfChat/ChatWrapper';
import PdfDisplay from '@/components/PdfDisplay';
import prisma from '@/lib/prisma';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { notFound, redirect } from 'next/navigation';

interface PageProps {
  params: {
    fileId: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { fileId } = params;

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) redirect(`/auth-callback?origin=/dashboard/${fileId}`);

  const file = await prisma.file.findUnique({
    where: {
      id: fileId,
      userId: user.id,
    },
  });

  if (!file) notFound();

  return (
    <div className='flex h-[calc(100vh-3.5rem)] flex-1 flex-col justify-between'>
      <div className='max-w-8xl mx-auto w-full grow lg:flex xl:px-2'>
        <div className='flex-1 xl:flex'>
          <div className='px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6'>
            {/* Main area */}
            <PdfDisplay fileUrl={file.url} />
          </div>
        </div>

        <div className='flex-[0.75] shrink-0 border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0'>
          <ChatWrapper fileId={fileId} />
        </div>
      </div>
    </div>
  );
};

export default Page;
