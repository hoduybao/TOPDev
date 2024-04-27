import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import SchollModal from './SchollModal';

export type Scholl = {
  name: string;
  isStudying: boolean;
  startDate: string;
  endDate: string;
  description: string;
  major: string;
};

const scholls: Scholl[] = [
  {
    name: 'University of Information Technology',
    isStudying: false,
    startDate: '2016',
    endDate: '2020',
    description: 'I am a student at UIT',
    major: 'Software Engineering',
  },
  {
    name: 'University of Information Technology',
    isStudying: true,
    startDate: '2020',
    endDate: '2024',
    description: 'I am a student at UIT',
    major: 'Software Engineering',
  },
];

const SchollItem = ({ scholl }: { scholl: Scholl }) => {
  const { name, startDate, endDate, major } = scholl;
  return (
    <div className='flex justify-between bg-gray-100 p-4 rounded'>
      <div>
        <h3 className='text-base font-semibold'>{name}</h3>
        <h4 className='text-base text-orange-500'>{major}</h4>
        <p className='text-base text-gray-400'>
          {' '}
          {startDate} - {endDate}{' '}
        </p>
      </div>

      <div className='flex gap-4'>
        <SchollModal
          isEdit
          initValue={scholl}
          handleChange={(value: Scholl) => {
            console.log('handle edit scholl infomation', value);
          }}
        />
        <DeleteOutlined className='text-base' />
      </div>
    </div>
  );
};

const EducationModal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <>
      <EditOutlined className='font-base' onClick={() => setIsModalOpen(true)} />
      <Modal
        title={
          <div className='py-4'>
            <h3 className='text-xl text-black-900'>Education</h3>
          </div>
        }
        width={'50%'}
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className='flex flex-col gap-2'>
          {scholls.map((scholl) => {
            return <SchollItem key={uuidv4()} scholl={scholl} />;
          })}
        </div>
        <SchollModal handleChange={() => {}} />
      </Modal>
    </>
  );
};

export default EducationModal;
