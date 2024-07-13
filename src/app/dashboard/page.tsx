import Dashboard from '@/components/Dashboard';
import prisma from '@/lib/prisma';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) {
    redirect('/auth-callback?origin=/dashboard');
  }
  let dbUser;
  try {
    dbUser = await prisma.user.findFirst({
      where: {
        id: user.id,
      },
    });
  } catch (error) {
    console.error(error);
  }

  console.log('dbUser', dbUser);

  if (!dbUser) redirect('/auth-callback?origin=dashboard');

  return <Dashboard />;
};

export default Page;
