import React from 'react';

type Props = {
  header: string;
  children: React.ReactNode;
};

const InformationSession = ({ header, children }: Props) => {
  return (
    <div className='w-full bg-white-900 rounded mb-4'>
      <h3 className='p-4 border-b-[1px] border-gray-200 font-bold text-lg capitalize'>{header}</h3>
      <div>{children}</div>
    </div>
  );
};

export default InformationSession;
