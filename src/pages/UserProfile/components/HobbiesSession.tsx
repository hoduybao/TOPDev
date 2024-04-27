import React from 'react';
import HobbiesModal from './HobbiesModal';

const data = '<p>hello</p>';

const HobbiesSession = () => {
  return (
    <div className='rounded bg-white-900 mb-4'>
      <div className='flex-1'>
        <div className='p-4 flex gap-4 justify-between'>
          <div>
            <h3 className='text-2xl font-bold text-black-900'>Hobbies</h3>
          </div>
          <HobbiesModal />
        </div>
        <div className='border-[1px] border-gray-200 mt-4'></div>
        <div className='p-4 flex gap-4 flex-col'>
          <div className='text-gray-400' dangerouslySetInnerHTML={{ __html: data }}></div>
        </div>
      </div>
    </div>
  );
};

export default HobbiesSession;
