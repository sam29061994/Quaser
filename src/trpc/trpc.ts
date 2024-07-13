import { TRPCError, initTRPC } from '@trpc/server';
import { Context } from './context';

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().create();

/**
 * Middleware for checking if user is authorized
 */
const isAuth = t.middleware(async (opts) => {
  if (!opts.ctx.userId) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
    });
  }

  return opts.next({
    ctx: {
      user: opts.ctx.user,
      userId: opts.ctx.userId,
    },
  });
});

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);
