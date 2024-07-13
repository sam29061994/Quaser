import Image from 'next/image';
const ClientsLogo = () => (
  <div className='mx-auto my-32 grid max-w-6xl grid-cols-3 sm:grid-cols-4 md:grid-cols-6'>
    <div className='p-4 grayscale transition duration-200 hover:grayscale-0'>
      <Image
        src='/clients/microsoft.svg'
        className='mx-auto h-12 w-auto'
        alt='client logo'
        width={20}
        height={48}
      />
    </div>
    <div className='p-4 grayscale transition duration-200 hover:grayscale-0'>
      <Image
        src='/clients/airbnb.svg'
        className='mx-auto h-12 w-auto'
        alt='client logo'
        width={20}
        height={48}
      />
    </div>
    <div className='flex p-4 grayscale transition duration-200 hover:grayscale-0'>
      <Image
        src='/clients/google.svg'
        className='m-auto h-9 w-auto'
        alt='client logo'
        width={20}
        height={48}
      />
    </div>
    <div className='p-4 grayscale transition duration-200 hover:grayscale-0'>
      <Image
        src='/clients/ge.svg'
        className='mx-auto h-12 w-auto'
        alt='client logo'
        width={20}
        height={48}
      />
    </div>
    <div className='flex p-4 grayscale transition duration-200 hover:grayscale-0'>
      <Image
        src='/clients/netflix.svg'
        className='m-auto h-8 w-auto'
        alt='client logo'
        width={20}
        height={48}
      />
    </div>
    <div className='p-4 grayscale transition duration-200 hover:grayscale-0'>
      <Image
        src='/clients/google-cloud.svg'
        className='mx-auto h-12 w-auto'
        alt='client logo'
        width={20}
        height={48}
      />
    </div>
  </div>
);

export default ClientsLogo;
