import React from 'react';
import SummaryModal from './SummaryModal';

const SummarySession = () => {
  return (
    <div className='flex gap-4 justify-around rounded bg-white-900 p-4 mb-4'>
      <div className='flex-1'>
        <h3 className='text-2xl font-bold text-black-900'>Summary</h3>
        <p className='text-gray-400 text-base'>
          Provide detail information helps us find easily the jobs that fit for you.
        </p>
      </div>
      <div className='px-4'>
        <img src='/assets/icons/summary.svg' alt='summary' />
      </div>
      <div>
        <SummaryModal />
      </div>
    </div>
  );
};

export default SummarySession;
