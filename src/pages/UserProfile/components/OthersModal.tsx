import React from 'react';
import { Other } from './OthersSession';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import OtherModal from './OtherModal';

const data: Other[] = [
  {
    name: 'Other 1',
    description: 'Other description',
  },
  {
    name: 'Other 2',
    description: 'Other description',
  },
];

const OtherItem = ({ other }: { other: Other }) => {
  const { name, description } = other;
  return (
    <div className='flex justify-between bg-gray-100 p-4 rounded'>
      <div>
        <div className='font-bold'>{name}</div>
        <p className='text-gray-400'>{description}</p>
      </div>

      <div className='flex gap-4'>
        <OtherModal isEdit initValue={other} handleChange={() => {}} />
        <DeleteOutlined className='text-base' />
      </div>
    </div>
  );
};

const OthersModal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <>
      <EditOutlined className='font-base' onClick={() => setIsModalOpen(true)} />
      <Modal
        title={
          <div className='py-4'>
            <h3 className='text-xl text-black-900'>Other Infomation</h3>
          </div>
        }
        width={'50%'}
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className='flex flex-col gap-2'>
          {data.map((other: Other) => {
            return <OtherItem key={uuidv4()} other={other} />;
          })}
        </div>
        <OtherModal isEdit={false} handleChange={() => {}} />
      </Modal>
    </>
  );
};

export default OthersModal;
