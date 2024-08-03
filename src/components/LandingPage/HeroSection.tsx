import Link from 'next/link';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Background from '../ui/background';

const HeroSection = () => (
  <>
    <Background />
    <MaxWidthWrapper className='mb-12 mt-28 flex flex-col items-center justify-center text-center sm:mt-40'>
      <div className='mx-auto mb-12 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all'>
        <a
          className='text-sm font-semibold dark:text-zinc-800'
          target='_blank'
          href='https://github.com/sam29061994/Quaser'
        >
          Github Link!
        </a>
      </div>

      <h1 className='max-w-4xl text-5xl font-superbold md:text-6xl lg:text-7xl'>
        Chat with your <span className='text-purple-600'>documents</span> in
        seconds.
      </h1>
      <p className='mt-5 max-w-prose text-gray-700 dark:text-gray-400 sm:text-lg'>
        The ultimate PDF reader that understands and responds. Upload, ask, and
        get instant answers from your documents!
      </p>

      <Link
        href='/dashboard'
        className='relative mt-12 flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
      >
        <span className='dark:text-dark relative text-base font-semibold text-white'>
          Get Started
        </span>
      </Link>
    </MaxWidthWrapper>
  </>
);

export default HeroSection;
