import Image from 'next/image';
const FeatureHighlights = () => (
  <div className='mt-16 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:divide-gray-700 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4'>
    <div className='group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800'>
      <div className='relative space-y-8 p-8 py-12'>
        <Image
          src='https://cdn-icons-png.flaticon.com/512/4341/4341139.png'
          className='w-12'
          width='512'
          height='512'
          alt='burger illustration'
        />

        <div className='space-y-2'>
          <h5 className='group-hover:text-highlight text-xl font-semibold text-gray-700 transition dark:text-white'>
            Secure and Private
          </h5>
          <p className='text-gray-600 dark:text-gray-300'>
            We prioritize your privacy and ensure all your data is securely
            handled.
          </p>
        </div>
        <div className='group-hover:text-highlight flex items-center justify-between'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'
          >
            <path
              fillRule='evenodd'
              d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z'
              clipRule='evenodd'
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div className='group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800'>
      <div className='relative space-y-8 p-8 py-12'>
        <Image
          src='https://cdn-icons-png.flaticon.com/512/4341/4341134.png'
          className='w-12'
          width='512'
          height='512'
          alt='burger illustration'
        />

        <div className='space-y-2'>
          <h5 className='group-hover:text-highlight text-xl font-semibold text-gray-700 transition dark:text-white'>
            Instant Answers
          </h5>
          <p className='text-gray-600 dark:text-gray-300'>
            Ask Quazer anything about your PDF and get quick, accurate
            responses.
          </p>
        </div>
        <div className='group-hover:text-highlight flex items-center justify-between'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'
          >
            <path
              fillRule='evenodd'
              d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z'
              clipRule='evenodd'
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div className='group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800'>
      <div className='relative space-y-8 p-8 py-12'>
        <Image
          src='https://cdn-icons-png.flaticon.com/512/4341/4341160.png'
          className='w-12'
          width='512'
          height='512'
          alt='burger illustration'
        />

        <div className='space-y-2'>
          <h5 className='group-hover:text-highlight text-xl font-semibold text-gray-700 transition dark:text-white'>
            Summarization
          </h5>
          <p className='text-gray-600 dark:text-gray-300'>
            Get concise summaries of lengthy documents in seconds.
          </p>
        </div>
        <div className='group-hover:text-highlight flex items-center justify-between'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'
          >
            <path
              fillRule='evenodd'
              d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z'
              clipRule='evenodd'
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div className='group relative bg-gray-50 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-900'>
      <div className='relative space-y-8 p-8 py-12 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800'>
        <Image
          src='https://cdn-icons-png.flaticon.com/512/4341/4341025.png'
          className='w-12'
          width='512'
          height='512'
          alt='burger illustration'
        />

        <div className='space-y-2'>
          <h5 className='group-hover:text-highlight text-xl font-semibold text-gray-700 transition dark:text-white'>
            User-Friendly Interface
          </h5>
          <p className='text-gray-600 dark:text-gray-300'>
            Enjoy a seamless experience with our intuitive dashboard.
          </p>
        </div>
        <div className='group-hover:text-highlight flex items-center justify-between'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'
          >
            <path
              fillRule='evenodd'
              d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z'
              clipRule='evenodd'
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default FeatureHighlights;
