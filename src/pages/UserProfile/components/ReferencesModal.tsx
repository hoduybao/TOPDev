import React from 'react';
import { Reference } from './ReferencesSession';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import ReferenceModal from './ReferenceModal';

const data: Reference[] = [
  {
    name: 'John Doe',
    company: 'Google',
    email: '123@gail.com',
    phone: '123456789',
  },
  {
    name: 'Jane Doe',
    company: 'Facebook',
    email: '123@gail.com',
    phone: '123456789',
  },
];

const RefItem = ({ reference }: { reference: Reference }) => {
  const { name, company, email, phone } = reference;
  return (
    <div className='flex justify-between bg-gray-100 p-4 rounded'>
      <div>
        <h3 className='text-base font-semibold'>{name}</h3>
        <div className='text-base text-gray-400'>{company}</div>
        <div className='text-base text-gray-400'>
          {email} - {phone}
        </div>
      </div>

      <div className='flex gap-4'>
        <ReferenceModal isEdit initValue={reference} handleChange={() => {}} />
        <DeleteOutlined className='text-base' />
      </div>
    </div>
  );
};

const ReferencesModal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <>
      <EditOutlined className='font-base' onClick={() => setIsModalOpen(true)} />
      <Modal
        title={
          <div className='py-4'>
            <h3 className='text-xl text-black-900'>References</h3>
          </div>
        }
        width={'50%'}
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className='flex flex-col gap-2'>
          {data.map((ref: Reference) => {
            return <RefItem key={uuidv4()} reference={ref} />;
          })}
        </div>
        <ReferenceModal handleChange={() => {}} />
      </Modal>
    </>
  );
};

export default ReferencesModal;
