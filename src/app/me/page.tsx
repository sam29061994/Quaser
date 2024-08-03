import PdfDisplay from '@/components/PdfDisplay';
import Image from 'next/image';

const Me = () => {
  return (
    <div className='flex h-[calc(100vh-3.5rem)] flex-1 flex-col justify-between'>
      <div className='max-w-8xl mx-auto w-full grow lg:flex xl:px-2'>
        <div className='flex-1 xl:flex'>
          <div className='px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6'>
            {/* Main area */}
            <PdfDisplay fileUrl='https://utfs.io/f/9323f125-d309-47f1-af2d-8f177a8a45e8-7clawy.pdf' />
          </div>

          <section className='overflow-hidde w-full pt-10 sm:py-16 xl:w-7/12 xl:pt-0 2xl:pt-16'>
            <div className='mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
              <div className='grid grid-cols-1 items-center xl:grid-cols-2'>
                <div className='justify-self-center'>
                  <h2 className='text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl'>
                    Hey 👋 I am
                    <br className='block' />
                    Sam Barot
                  </h2>
                  <p className='mt-3 max-w-lg text-lg leading-relaxed text-gray-500 dark:text-gray-200 md:mt-8'>
                    I’m a front-end heavy full-stack engineer with a strong
                    passion for optimizing application performance, specializing
                    in migrations to Next.js and React.js. I have a robust
                    foundation in developing applications independently and
                    collaboratively, with a focus on unit, integration, and
                    end-to-end testing.
                  </p>

                  <p className='mt-3 max-w-lg text-lg font-thin leading-relaxed text-gray-500 dark:text-gray-200 md:mt-8'>
                    For example, the Quaser app you’re seeing is built using
                    Next.js 14 with App Router and leverages a modern tech stack
                    including Tailwind CSS for streamlined styling and Shadcn UI
                    components for enhanced user interfaces. It utilizes
                    TypeScript for type safety and integrates with the tRPC
                    protocol and Prisma ORM, utilizing a Supabase PostgreSQL
                    database. Authentication and session management are handled
                    through the Kindle authentication provider.
                  </p>

                  <p className='mt-3 max-w-lg text-lg font-thin leading-relaxed text-gray-500 dark:text-gray-200 md:mt-8'>
                    The app also incorporates server components to optimize
                    performance by selectively shipping React libraries to the
                    browser only when necessary. Deployed on Vercel, Quaser is
                    currently a work in progress, continuously evolving to
                    enhance functionality and user experience.
                  </p>

                  <p className='mt-4 text-lg text-gray-600 dark:text-gray-300 md:mt-8'>
                    <span className='relative inline-block'>
                      <span className='absolute bottom-0.5 inline-block h-2 w-full bg-yellow-300 dark:bg-gray-900'></span>
                    </span>
                    <br className='block sm:hidden' />
                    <span className='px-2'>
                      Have a question? Feel free to reach out to me on{' '}
                    </span>
                    <p
                      title=''
                      className='text-sky-500 transition-all duration-200 hover:text-sky-600 hover:underline dark:text-sky-400 dark:hover:text-sky-500'
                    >
                      519-897-2840 | sam29061994@gmail.com
                    </p>
                  </p>
                </div>
                <div className='relative mt-16'>
                  <Image
                    className='absolute inset-x-0 bottom-10 left-1/2 -mb-1 w-1/2 -translate-x-2/3 xl:w-full xl:-translate-x-1/2'
                    src='https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg'
                    alt=''
                    width={1000}
                    height={1000}
                  />

                  <Image
                    className='2xl:scale-210 relative w-1/2 xl:mx-auto xl:w-full xl:max-w-lg 2xl:origin-bottom'
                    src='/me/me.png'
                    alt=''
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Me;
