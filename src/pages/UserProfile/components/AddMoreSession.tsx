import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const CustomButton = ({ title }: { title: string }) => {
  return (
    <Button className='text-orange-500 font-bold p-6 flex items-center justify-center border-[1px] border-orange-500 rounded'>
      <PlusOutlined className='text-base' />
      {title}
    </Button>
  );
};

const list = [
  'Add languages',
  'Add hobbies',
  'Add references',
  'Add activities',
  'Add certificates',
  'Add Others',
];

const AddMoreSession = () => {
  return (
    <div className='rounded bg-white-900 mb-4'>
      <div className='flex-1'>
        <div className='p-4 flex gap-4 justify-between'>
          <div>
            <h3 className='text-2xl font-bold text-black-900'>Add more section</h3>
          </div>
          {/* <EducationModal /> */}
        </div>
        <div className='border-[1px] border-gray-200 mt-4'></div>
        <div className='p-4 flex gap-4 w-full flex-wrap'>
          {list.map((item: string) => {
            return <CustomButton key={uuidv4()} title={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AddMoreSession;
