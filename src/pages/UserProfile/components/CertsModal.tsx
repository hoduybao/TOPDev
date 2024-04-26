import React from 'react';
import { Certificate } from './CertificatesSession';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import CertModal from './CertModal';

const data: Certificate[] = [
  {
    name: 'Certificate 1',
    time: '2021',
    description: 'Certificate description',
  },
  {
    name: 'Certificate 2',
    time: '2021',
    description: 'Certificate description',
  },
];

const CertItem = ({ cert }: { cert: Certificate }) => {
  const { name, description, time } = cert;
  return (
    <div className='flex justify-between bg-gray-100 p-4 rounded'>
      <div>
        <h3 className='text-base font-semibold'>{name}</h3>
        <div className='text-base text-gray-400'>{time}</div>
        <div className='text-base text-gray-400'>{description}</div>
      </div>

      <div className='flex gap-4'>
        <CertModal isEdit initValue={cert} handleChange={() => {}} />
        <DeleteOutlined className='text-base' />
      </div>
    </div>
  );
};

const CertsModal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <>
      <EditOutlined className='font-base' onClick={() => setIsModalOpen(true)} />
      <Modal
        title={
          <div className='py-4'>
            <h3 className='text-xl text-black-900'>Certifiactes</h3>
          </div>
        }
        width={'50%'}
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className='flex flex-col gap-2'>
          {data.map((cert: Certificate) => {
            return <CertItem key={uuidv4()} cert={cert} />;
          })}
        </div>
        <CertModal handleChange={() => {}} />
      </Modal>
    </>
  );
};

export default CertsModal;
