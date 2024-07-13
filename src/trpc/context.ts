import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/v11/context
 */
export async function createContext(opts: FetchCreateContextFnOptions) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return {
    user,
    userId: user?.id,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
