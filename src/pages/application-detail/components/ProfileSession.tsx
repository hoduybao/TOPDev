import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import React from 'react';
import mockData from './mockData';
import { Image } from 'antd';

const ProfileSession = () => {
  return (
    <div className='w-full'>
      <div className='flex gap-2'>
        <div className='w-[50px] h-[50px]'>
          <Image
            alt='avatar'
            className='rounded-full'
            src={mockData.profile.avatar}
            preview={false}
          />
        </div>
        <div className='flex-1 flex flex-col justify-between'>
          <h4 className='font-semibold text-base'>{mockData.profile.name}</h4>
          <span className='text-sm'>
            {mockData.profile.email} | {mockData.profile.phone}
          </span>
        </div>
      </div>
      <div className='flex gap-2 mt-2'>
        <div className='w-[50px]'></div>
        <div className='flex-1 flex gap-2'>
          <PhoneOutlined className='text-green-500 p-1 rounded-full bg-gray-200' />
          <MailOutlined className='text-green-500 p-1 rounded-full bg-gray-200' />
        </div>
      </div>
      <div className='w-full border border-b-[1px] border-black-100 my-3'></div>
    </div>
  );
};

export default ProfileSession;
