import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { privateProcedure, publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import { INFINITE_QUERY_LIMIT } from '@/config/infinite-query';

export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id || !user.email)
      throw new TRPCError({ code: 'UNAUTHORIZED' });

    const dbUser = await prisma.user.findFirst({
      where: { id: user.id },
    });

    if (!dbUser) {
      await prisma.user.create({
        data: {
          id: user.id,
          email: user.email,
        },
      });
    }

    return { success: true };
  }),
  getUserFiles: publicProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;
    console.log('userId', userId);
    const files = await prisma.file.findMany({
      where: { userId },
    });
    return files;
  }),
  getFileMessages: privateProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
        fileId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { userId } = ctx;
      const { fileId, cursor } = input;
      const limit = input.limit ?? INFINITE_QUERY_LIMIT;

      const file = await prisma.file.findFirst({
        where: {
          id: fileId,
          userId,
        },
      });

      if (!file) throw new TRPCError({ code: 'NOT_FOUND' });

      const messages = await prisma.message.findMany({
        take: limit + 1,
        where: {
          fileId,
        },
        orderBy: {
          createdAt: 'desc',
        },
        cursor: cursor ? { id: cursor } : undefined,
        select: {
          id: true,
          isUserMessage: true,
          createdAt: true,
          content: true,
        },
      });

      let nextCursor: typeof cursor | undefined = undefined;
      if (messages.length > limit) {
        const nextItem = messages.pop();
        nextCursor = nextItem?.id;
      }

      return {
        messages,
        nextCursor,
      };
    }),

  deleteFile: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { id: fileId } = input;
      const { userId } = ctx;
      const file = await prisma.file.findFirst({
        where: { id: fileId, userId },
      });
      if (!file) throw new TRPCError({ code: 'NOT_FOUND' });
      await prisma.file.delete({ where: { id: fileId } });
      return { success: true };
    }),
  getFile: privateProcedure
    .input(z.object({ key: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { key } = input;
      const { userId } = ctx;
      const file = await prisma.file.findFirst({
        where: { key, userId },
      });
      if (!file) throw new TRPCError({ code: 'NOT_FOUND' });
      return file;
    }),
  getFileUploadStatus: privateProcedure
    .input(z.object({ fileId: z.string() }))
    .query(async ({ input, ctx }) => {
      const { userId } = ctx;
      const { fileId } = input;

      const file = await prisma.file.findFirst({
        where: { id: fileId, userId: userId },
      });

      if (!file) return { status: 'PENDING' as const };

      return { status: file.status };
    }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
