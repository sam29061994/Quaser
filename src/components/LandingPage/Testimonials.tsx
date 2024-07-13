import Link from 'next/link';
import Image from 'next/image';
import { Smile } from 'lucide-react';

const Testomonials = () => (
  <>
    <div className='mx-auto max-w-7xl px-6 md:px-12 xl:px-6'>
      <div className='mb-20 space-y-4 px-6 md:px-0'>
        <h2 className='text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl'>
          We have some fans
          <Smile color='#ff7e33' className='mx-4 inline' size={30} />
        </h2>
      </div>
      <div className='gap-8 space-y-8 md:columns-2 lg:columns-3'>
        <div className='aspect-auto rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none'>
          <div className='flex gap-4'>
            <Image
              className='h-12 w-12 rounded-full'
              src='/avatars/avatar.webp'
              alt='user avatar'
              width='400'
              height='400'
              loading='lazy'
            />
            <div>
              <h6 className='text-lg font-medium text-gray-700 dark:text-white'>
                Daniella Doe
              </h6>
              <p className='text-sm text-gray-500 dark:text-gray-300'>
                Mobile dev
              </p>
            </div>
          </div>
          <p className='mt-8'>
            Quazer has completely transformed how I manage my documents. The AI
            chat feature is intuitive and saves me hours of work every week!
          </p>
        </div>
        <div className='aspect-auto rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none'>
          <div className='flex gap-4'>
            <Image
              className='h-12 w-12 rounded-full'
              src='/avatars/avatar-1.webp'
              alt='user avatar'
              width='200'
              height='200'
              loading='lazy'
            />
            <div>
              <h6 className='text-lg font-medium text-gray-700 dark:text-white'>
                Emily R.
              </h6>
              <p className='text-sm text-gray-500 dark:text-gray-300'>
                Attorney
              </p>
            </div>
          </div>
          <p className='mt-8'>
            {' '}
            As a legal professional, I deal with numerous PDFs daily. Quazer's
            ability to provide instant summaries and detailed answers is a
            game-changer. It has made my work much more efficient and
            streamlined. This tool has dramatically improved my efficiency and
            has become indispensable in my daily routine.
          </p>
        </div>
        <div className='aspect-auto rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none'>
          <div className='flex gap-4'>
            <Image
              className='h-12 w-12 rounded-full'
              src='/avatars/avatar-2.webp'
              alt='user avatar'
              width='200'
              height='200'
              loading='lazy'
            />
            <div>
              <h6 className='text-lg font-medium text-gray-700 dark:text-white'>
                James T.
              </h6>
              <p className='text-sm text-gray-500 dark:text-gray-300'>
                Research Scientist
              </p>
            </div>
          </div>
          <p className='mt-8'>
            I've been using Quazer for several months now, and I can't imagine
            going back to my old way of handling PDFs. The AI's ability to
            quickly parse and provide detailed summaries is nothing short of
            miraculous. It's especially useful for academic research, where
            diving into hundreds of pages is common. Quazer's real-time insights
            help me pinpoint exactly what I need without the hassle.
          </p>
        </div>
        <div className='aspect-auto rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none'>
          <div className='flex gap-4'>
            <Image
              className='h-12 w-12 rounded-full'
              src='/avatars/avatar-3.webp'
              alt='user avatar'
              width='200'
              height='200'
              loading='lazy'
            />
            <div>
              <h6 className='text-lg font-medium text-gray-700 dark:text-white'>
                Sarah L.
              </h6>
              <p className='text-sm text-gray-500 dark:text-gray-300'>
                Freelance Writer
              </p>
            </div>
          </div>
          <p className='mt-8'>
            I love how Quazer keeps my data secure while providing accurate and
            quick responses to my PDF queries. Highly recommended!
          </p>
        </div>
        <div className='aspect-auto rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none'>
          <div className='flex gap-4'>
            <Image
              className='h-12 w-12 rounded-full'
              src='/avatars/avatar-4.webp'
              alt='user avatar'
              width='200'
              height='200'
              loading='lazy'
            />
            <div>
              <h6 className='text-lg font-medium text-gray-700 dark:text-white'>
                David K.
              </h6>
              <p className='text-sm text-gray-500 dark:text-gray-300'>
                Marketing Executive
              </p>
            </div>
          </div>
          <p className='mt-8'>
            {' '}
            Quazer's AI-powered PDF reader has become an essential part of my
            workflow. It’s incredibly efficient and easy to use.
          </p>
        </div>
        <div className='aspect-auto rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none'>
          <div className='flex gap-4'>
            <Image
              className='h-12 w-12 rounded-full'
              src='/avatars/avatar-5.jpg'
              alt='user avatar'
              width='400'
              height='400'
              loading='lazy'
            />
            <div>
              <h6 className='text-lg font-medium text-gray-700 dark:text-white'>
                Justin M.
              </h6>
              <p className='text-sm text-gray-500 dark:text-gray-300'>
                Team Lead
              </p>
            </div>
          </div>
          <p className='mt-8'>
            Switching to Quazer was the best decision for our team. The
            customizable responses and multi-format support have significantly
            enhanced our productivity. It's now so much easier to extract and
            understand the key points from lengthy documents. Quazer is a
            brilliant tool for any team dealing with complex documents.
          </p>
        </div>
      </div>
    </div>
    <div className='relative mt-40 py-16'>
      <div
        aria-hidden='true'
        className='absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-20'
      >
        <div className='h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700'></div>
        <div className='h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600'></div>
      </div>
      <div className='mx-auto max-w-7xl px-6 md:px-12 xl:px-6'>
        <div className='relative'>
          <div className='flex items-center justify-center -space-x-2'>
            <Image
              loading='lazy'
              width='400'
              height='400'
              src='/avatars/avatar.webp'
              alt='member photo'
              className='h-8 w-8 rounded-full object-cover'
            />
            <Image
              loading='lazy'
              width='200'
              height='200'
              src='/avatars/avatar-2.webp'
              alt='member photo'
              className='h-12 w-12 rounded-full object-cover'
            />
            <Image
              loading='lazy'
              width='200'
              height='200'
              src='/avatars/avatar-3.webp'
              alt='member photo'
              className='z-10 h-16 w-16 rounded-full object-cover'
            />
            <Image
              loading='lazy'
              width='200'
              height='200'
              src='/avatars/avatar-4.webp'
              alt='member photo'
              className='relative h-12 w-12 rounded-full object-cover'
            />
            <Image
              loading='lazy'
              width='200'
              height='200'
              src='/avatars/avatar-1.webp'
              alt='member photo'
              className='h-8 w-8 rounded-full object-cover'
            />
          </div>
          <div className='m-auto mt-6 space-y-6 md:w-8/12 lg:w-7/12'>
            <h1 className='text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl'>
              Get Started now
            </h1>
            <p className='text-center text-xl text-gray-600 dark:text-gray-300'>
              Users consistently upgrade to Pro, reflecting satisfaction and
              trust in our service.
            </p>
            <div className='flex flex-wrap justify-center gap-6'>
              <Link
                href='/dashboard'
                className='relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
              >
                <span className='dark:text-dark relative text-base font-semibold text-white'>
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Testomonials;
