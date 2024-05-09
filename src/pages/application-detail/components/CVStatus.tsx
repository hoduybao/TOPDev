import React from 'react';
import mockData from './mockData';
import { Button } from 'antd';

const CVStatus = () => {
  return (
    <div>
      <h3 className='font-bold text-base'>Trạng thái CV</h3>

      <div className='flex mt-2'>
        <div className='w-[50%] text-sm text-gray-400 font-semibold border border-r-1 border-gray-200 p-2'>
          Trạng thái
        </div>
        <div className='flex-1 text-sm text-blue-400 font-semibold border border-r-1 border-gray-200 p-2'>
          {mockData.cv.status}
        </div>
      </div>

      <div className='flex'>
        <div className='w-[50%] text-sm text-gray-400 font-semibold border border-r-[1px] border-gray-200 p-2'>
          Nguồn
        </div>
        <div className='flex-1 text-sm text-gray-400 font-semibold border border-r-1 border-gray-200 p-2'>
          {mockData.cv.origin}
        </div>
      </div>
      <div>
        <Button className='mt-4 w-full bg-gray-200 text-black-800 font-semibold rounded'>
          Đổi trạng thái CV
        </Button>
      </div>
      <div className='grid grid-cols-2 gap-2 mt-4'>
        <Button className='col-span-1 w-full bg-gray-200 text-black-800 font-semibold rounded'>
          Chia sẻ CV
        </Button>
        <Button className='col-span-1 w-full bg-gray-200 text-black-800 font-semibold rounded'>
          Tải CV PDF
        </Button>
      </div>
      <div className='w-full border border-b-[1px] border-black-100 mt-4 mb-3'></div>
    </div>
  );
};

export default CVStatus;
