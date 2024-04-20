import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Form, Modal } from 'antd';
import React from 'react';
import { YOEProps } from './ExpSession';
import ManageJobModal from './ManageJobModal';
import { v4 as uuidv4 } from 'uuid';

const JobItem = ({ data }: { data: YOEProps }) => {
  const { timeBegin, appliedSkills, companyName, position, timeEnd, description } = data;
  return (
    <div className='flex gap-4 justify-between bg-gray-100 p-4'>
      <div className='mb-3'>
        <div>
          <span className='text-orange-500 text-base font-bold'>{position}</span> at{' '}
          <span className='uppercase text-base text-gray-400 font-bold'>{companyName}</span>
        </div>
        <div>
          <div className='text-base text-gray-400'>
            {timeBegin} - {timeEnd}
          </div>
        </div>
      </div>

      <div className='flex gap-6'>
        <ManageJobModal data={data} />
        <DeleteOutlined className='font-base' />
      </div>
    </div>
  );
};

const ExpModal = () => {
  const data: YOEProps[] = [
    {
      timeBegin: '04-2024',
      timeEnd: 'Present',
      position: 'developer',
      companyName: 'ABC',
      appliedSkills: ['JS', 'C++', 'Java'],
    },
    {
      timeBegin: '04-2024',
      timeEnd: 'Present',
      position: 'developer',
      companyName: 'ABC',
      appliedSkills: ['JS', 'C++', 'Java'],
    },
  ];
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const handleOk = () => {
    //setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <EditOutlined className='font-base' onClick={() => setIsModalOpen(true)} />
      <Modal
        title={
          <div className='py-4'>
            <h3 className='text-xl text-black-900'>Work Experience</h3>
          </div>
        }
        width={'50%'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <div className='w-full h-full border-t border-gray-300 flex justify-end gap-2'>
            <Button
              type='primary'
              className='mt-5 p-6 flex items-center font-bold'
              danger
              onClick={handleOk}
            >
              Add new position
            </Button>
          </div>
        }
      >
        <div className='flex gap-4 flex-col'>
          {data.map((item) => {
            return (
              <div key={uuidv4()}>
                <JobItem data={item} />
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};

export default ExpModal;
