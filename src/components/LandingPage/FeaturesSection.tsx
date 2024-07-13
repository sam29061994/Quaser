const FeaturesSection = () => (
  <div className='mx-auto my-32 hidden max-w-6xl justify-between space-x-4 border-y border-gray-100 py-8 dark:border-gray-800 sm:flex'>
    <div className='text-left'>
      <h6 className='text-lg font-semibold text-gray-700 dark:text-white'>
        Interactive Document Analysis
      </h6>
      <p className='mt-2 text-gray-500'>
        Quazer reads and understands your PDFs, providing accurate answers and
        summaries instantly.
      </p>
    </div>
    <div className='text-left'>
      <h6 className='text-lg font-semibold text-gray-700 dark:text-white'>
        Enhanced Productivity
      </h6>
      <p className='mt-2 text-gray-500'>
        Save time and effort by letting Quazer handle document parsing and
        information retrieval.
      </p>
    </div>
    <div className='text-left'>
      <h6 className='text-lg font-semibold text-gray-700 dark:text-white'>
        Flexible Plans
      </h6>
      <p className='mt-2 text-gray-500'>
        Whether you need basic functionality or advanced features, Quazer offers
        both free and pro plans.
      </p>
    </div>
  </div>
);
export default FeaturesSection;
