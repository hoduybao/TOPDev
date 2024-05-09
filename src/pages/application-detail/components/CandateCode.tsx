import { Button } from 'antd';
import React from 'react';
import mockData from './mockData';

const CandateCode = () => {
  return (
    <div className='mt-3'>
      <h3 className='font-bold text-base'>Mã ứng viên</h3>
      <div className='mt-3 rounded bg-gray-200 text-gray-400 font-semibold p-2'>
        {mockData.cv.candidateId}
      </div>

      <div className='grid grid-cols-2 gap-2 mt-4'>
        <Button className='col-span-1 w-full bg-gray-200 text-black-800 font-semibold rounded'>
          Sao chép mã
        </Button>
        <Button className='col-span-1 w-full bg-gray-200 text-black-800 font-semibold rounded'>
          Báo cáo CV
        </Button>
      </div>
    </div>
  );
};

export default CandateCode;
