import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import CertsModal from './CertsModal';

export type Certificate = {
  name: string;
  time: string;
  description: string;
};

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
    <div className='flex gap-4'>
      <div>{time}</div>
      <div className='flex-1'>
        <div className='font-bold'>{name}</div>
        <div className='text-gray-400' dangerouslySetInnerHTML={{ __html: time }}></div>
      </div>
    </div>
  );
};

const CertificatesSession = () => {
  return (
    <div className='rounded bg-white-900 mb-4'>
      <div className='flex-1'>
        <div className='p-4 flex gap-4 justify-between'>
          <div>
            <h3 className='text-2xl font-bold text-black-900'>Certificates</h3>
          </div>
          <CertsModal />
        </div>
        <div className='border-[1px] border-gray-200 mt-4'></div>
        <div className='p-4 flex gap-4 flex-col'>
          {data.map((cert: Certificate) => {
            return <CertItem key={uuidv4()} cert={cert} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CertificatesSession;
