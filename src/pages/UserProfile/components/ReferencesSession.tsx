import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReferencesModal from './ReferencesModal';

export type Reference = {
  name: string;
  company: string;
  email: string;
  phone: string;
};

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

const ReferenceItem = ({ reference }: { reference: Reference }) => {
  const { name, company, email, phone } = reference;
  return (
    <div>
      <div>
        <span className='font-bold'>{name}</span>- {company}
      </div>
      <div>
        {email} - {phone}
      </div>
    </div>
  );
};

const ReferencesSession = () => {
  return (
    <div className='rounded bg-white-900 mb-4'>
      <div className='flex-1'>
        <div className='p-4 flex gap-4 justify-between'>
          <div>
            <h3 className='text-2xl font-bold text-black-900'>References</h3>
          </div>
          <ReferencesModal />
        </div>
        <div className='border-[1px] border-gray-200 mt-4'></div>
        <div className='p-4 flex gap-4 flex-col'>
          {data.map((ref: Reference) => {
            return <ReferenceItem key={uuidv4()} reference={ref} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ReferencesSession;
