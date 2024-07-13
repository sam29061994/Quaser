import prisma from '@/lib/prisma';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { pinecone } from '@/lib/pinecone';
import { OpenAIEmbeddings } from '@langchain/openai';
import { PineconeStore } from '@langchain/pinecone';

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  fileUploader: f({ pdf: { maxFileSize: '4MB' } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      const { getUser } = await getKindeServerSession();

      const user = await getUser();
      if (!user || !user.id) {
        throw new UploadThingError('UNAUTHORIZED');
      }
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const isFileExist = await prisma.file.findFirst({
        where: {
          key: file.key,
        },
      });

      if (isFileExist) return;
      // This code RUNS ON YOUR SERVER after upload

      const newFile = await prisma.file.create({
        data: {
          name: file.name,
          userId: metadata.userId,
          url: file.url,
          status: 'PROCESSING',
          messages: [],
          key: file.key,
        },
      });

      try {
        const blob = await fetch(file.url).then((res) => res.blob());

        const loader = new PDFLoader(blob);

        const docs = await loader.load();

        const totalPages = docs.length;

        const pineconeIndex = pinecone.Index('quasar');

        const embeddings = new OpenAIEmbeddings({
          openAIApiKey: process.env.OPENAI_API_KEY,
        });

        await PineconeStore.fromDocuments(docs, embeddings, {
          pineconeIndex,
          namespace: newFile.id,
        });

        await prisma.file.update({
          data: {
            status: 'SUCCESS',
          },
          where: {
            id: newFile.id,
          },
        });
      } catch (e) {
        await prisma.file.update({
          data: {
            status: 'FAILED',
          },
          where: {
            id: newFile.id,
          },
        });
      }

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
