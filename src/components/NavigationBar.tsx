import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server';
import { cn } from '@/lib/utils';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import UserAccount from './UserAccount';

const NavigationBar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className='sticky inset-x-0 top-0 z-30 mx-auto max-w-full border-gray-200 bg-white/75 px-6 transition-all dark:bg-gray-900/75 md:px-12 xl:px-6'>
      <MaxWidthWrapper>
        <div className='relative flex flex-wrap items-center justify-between gap-6 py-2 md:gap-0 md:py-4'>
          <input
            aria-hidden='true'
            type='checkbox'
            name='toggle_nav'
            id='toggle_nav'
            className='peer hidden'
          />
          <div className='relative z-20 flex w-full justify-between md:px-0 lg:w-max'>
            <Link
              href='/'
              aria-label='logo'
              className='flex items-center space-x-2'
            >
              <div aria-hidden='true' className='flex space-x-1'>
                <div className='h-4 w-4 rounded-full bg-gray-900 dark:bg-white'></div>
                <div className='h-6 w-2 bg-primary'></div>
              </div>
              <span className='text-2xl font-bold text-gray-900 dark:text-white'>
                Quaser
              </span>
            </Link>
          </div>

          <div className='flex w-full text-gray-600 dark:text-gray-300 lg:w-auto lg:pr-4 lg:pt-0'>
            <div className='flex-col space-x-4 font-medium tracking-wide sm:flex lg:flex-row lg:text-sm'>
              {!user ? (
                <>
                  <Link
                    href='/pricing'
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}
                  >
                    Pricing
                  </Link>

                  <LoginLink
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}
                  >
                    Sign in
                  </LoginLink>

                  <RegisterLink className='relative flex h-10 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'>
                    {' '}
                    <span className='dark:text-dark relative text-sm font-semibold text-white'>
                      Get Started
                    </span>
                  </RegisterLink>
                </>
              ) : (
                <>
                  <Link
                    href='/dashboard'
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}
                  >
                    Dashboard
                  </Link>
                  <UserAccount
                    name={
                      !user.given_name || !user.family_name
                        ? 'Your Account'
                        : `${user.given_name} ${user.family_name}`
                    }
                    email={user.email ?? ''}
                    imageUrl={user.picture ?? ''}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavigationBar;
