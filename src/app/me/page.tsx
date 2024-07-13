import PdfDisplay from '@/components/PdfDisplay';
import Image from 'next/image';

const Me = () => {
  return (
    <div className='flex h-[calc(100vh-3.5rem)] flex-1 flex-col justify-between'>
      <div className='max-w-8xl mx-auto w-full grow lg:flex xl:px-2'>
        <div className='flex-1 xl:flex'>
          <div className='px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6'>
            {/* Main area */}
            <PdfDisplay fileUrl='https://utfs.io/f/c305f117-32f9-46a3-9acd-d790274f31b9-7clalj.pdf' />
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
                    I’m a front-end heavy full-stack engineer with a knack for
                    optimizing application performance, specializing in
                    migrations to Next.js and React.js. I have a solid
                    background in developing applications independently and
                    collaboratively, with expertise in unit, integration, and
                    end-to-end testing.
                  </p>

                  <p className='mt-3 max-w-lg text-lg font-thin leading-relaxed text-gray-500 dark:text-gray-200 md:mt-8'>
                    At Arc’teryx, I developed a new landing page application
                    using React.js and TypeScript. This involved creating and
                    supporting diverse designs for weekly homepage campaigns,
                    where I collaborated closely with Product Designers to
                    ensure visually appealing and UX-friendly designs. Utilizing
                    AWS S3 buckets, CloudFront, and Lambda edge functions, I
                    optimized performance and scalability for the application.
                    Additionally, I administered Fastly CDN configurations,
                    managed Terraform files for route additions, and optimized
                    HTTP headers to enhance application delivery.
                  </p>

                  <p className='mt-3 max-w-lg text-lg font-thin leading-relaxed text-gray-500 dark:text-gray-200 md:mt-8'>
                    My previous role at Ooma Inc. further strengthened my
                    expertise in creating reusable components with Material UI,
                    transitioning teams to TypeScript, and improving application
                    efficiency through cache optimization strategies.
                  </p>

                  <p className='mt-4 text-lg text-gray-600 dark:text-gray-300 md:mt-8'>
                    <span className='relative inline-block'>
                      <span className='absolute bottom-0.5 inline-block h-2 w-full bg-yellow-300 dark:bg-gray-900'></span>
                      <span className='relative'> Have a question? </span>
                    </span>
                    <br className='block sm:hidden' />
                    <span className='px-2'>Give me a call on</span>
                    <p
                      title=''
                      className='text-sky-500 transition-all duration-200 hover:text-sky-600 hover:underline dark:text-sky-400 dark:hover:text-sky-500'
                    >
                      519-897-2840
                    </p>
                  </p>
                </div>
                <div className='relative mt-16'>
                  <img
                    className='absolute inset-x-0 bottom-10 left-1/2 -mb-1 w-1/2 xl:w-full -translate-x-2/3 xl:-translate-x-1/2'
                    src='https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg'
                    alt=''
                  />

                  <Image
                    className='2xl:scale-210 relative w-1/2 xl:w-full xl:mx-auto xl:max-w-lg 2xl:origin-bottom'
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
