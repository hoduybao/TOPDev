import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Activity } from './ActivitiesSession';
import ActivityModal from './ActivityModal';

const data: Activity[] = [
  {
    name: 'Activity 1',
    startDate: '2021-10-10',
    endDate: '2021-10-11',
    description: 'Activity description',
    isWorking: true,
  },
  {
    name: 'Activity 2',
    startDate: '2021-10-10',
    endDate: '2021-10-11',
    description: 'Activity description',
    isWorking: true,
  },
];

const ListItem = ({ act }: { act: Activity }) => {
  const { name, description, endDate, startDate } = act;
  return (
    <div className='flex justify-between bg-gray-100 p-4 rounded'>
      <div>
        <div className='font-bold'>{name}</div>
        <div>
          {startDate} - {endDate}{' '}
        </div>
        <p className='text-gray-400'>{description}</p>
      </div>

      <div className='flex gap-4'>
        <ActivityModal isEdit initValue={act} handleChange={() => {}} />
        <DeleteOutlined className='text-base' />
      </div>
    </div>
  );
};

const ActivitiesModal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <>
      <EditOutlined className='font-base' onClick={() => setIsModalOpen(true)} />
      <Modal
        title={
          <div className='py-4'>
            <h3 className='text-xl text-black-900'>Activities Infomation</h3>
          </div>
        }
        width={'50%'}
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className='flex flex-col gap-2'>
          {data.map((act: Activity) => {
            return <ListItem key={uuidv4()} act={act} />;
          })}
        </div>
        <ActivityModal isEdit={false} handleChange={() => {}} />
      </Modal>
    </>
  );
};

export default ActivitiesModal;
