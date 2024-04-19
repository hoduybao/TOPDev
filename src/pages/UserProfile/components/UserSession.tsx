import { DownloadOutlined, EditOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Image } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const AddSubSession = ({ content }: { content: string }) => {
  return <div className='text-gray-400 text-lg'>{content}</div>;
};

type UserSessionProps = {
  fullName: string;
  role?: string;
  yoe?: number;
  location?: string;
  email?: string;
  phone?: string;
  dob?: string;
  socialMediaLink?: string;
};
const UserInformation = ({
  fullName,
  role,
  yoe,
  location,
  email,
  phone,
  dob,
  socialMediaLink,
}: UserSessionProps) => {
  return (
    <div>
      <div className='flex items-start justify-between gap-4'>
        <div className='flex-1'>
          <h3 className='font-bold text-4xl uppercase'>{fullName}</h3>
          <div className='flex gap-4 mb-4'>
            <div className='font-bold text-xl text-black-600'>{role}</div>
            <div className='text-xl text-gray-400'> - {yoe} Year Experience</div>
          </div>
          <div>{location ? location : <AddSubSession content='Add location' />}</div>
          <div className='flex gap-4'>
            <div className='text-lg'>{email}</div>
            <div className='text-lg'>
              {phone ? phone : <AddSubSession content='Add phone number' />}
            </div>
            <div className='text-lg'>
              {dob ? dob : <AddSubSession content='Add date of birth' />}
            </div>
          </div>
          <div className='mb-4'>
            {socialMediaLink ? (
              <Link className='text-lg' to={socialMediaLink}>
                Social media
              </Link>
            ) : (
              <AddSubSession content='Add social media link' />
            )}
          </div>
          <div className='border-b-[1px] border-gray-200 mb-4' />
          <div className='flex gap-4'>
            <Button
              className='bg-orange-500 text-white-900 px-7 py-6 flex items-center justify-center text-lg font-bold'
              type='primary'
            >
              <UploadOutlined />
              Auto fill
            </Button>
            <Button
              className='bg-gray-200 text-black-400 px-7 py-6 flex items-center justify-center text-lg font-bold'
              type='primary'
            >
              <DownloadOutlined />
              Save as
            </Button>
          </div>
        </div>
        <div>
          <EditOutlined className='font-base' />
        </div>
      </div>
    </div>
  );
};

const UserSession = () => {
  return (
    <div className='flex gap-8 rounded bg-white-900 p-8'>
      <div>
        <img
          className='rounded-full border-[1px] border-gray-200 object-cover'
          src='/assets/icons/empty_avatar.svg'
          alt='User avatar'
        />
      </div>
      <div className='flex-1'>
        <UserInformation
          fullName='Quang Hung Ngo'
          role='Front-end Engineer'
          yoe={1}
          email='123@gmail.com'
        />
      </div>
    </div>
  );
};

export default UserSession;
