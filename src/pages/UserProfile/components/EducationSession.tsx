import React from 'react';
import EducationModal, { Scholl } from './EducationModal';
import { v4 as uuidv4 } from 'uuid';

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
    <div className='flex gap-2'>
      <p className='text-base text-gray-400 w-[20%]'>
        {startDate} - {endDate}
      </p>
      <div className='flex-1'>
        <h3 className='text-base font-semibold'>{name}</h3>
        <h4 className='text-base text-orange-500'>{major}</h4>
      </div>
    </div>
  );
};

const EducationSession = () => {
  return (
    <div className='rounded bg-white-900 mb-4'>
      <div className='flex-1'>
        <div className='p-4 flex gap-4 justify-between'>
          <div>
            <h3 className='text-2xl font-bold text-black-900'>Education</h3>
            <p className='text-gray-400 text-base'>
              Choose skills that show you are fit the position to helps you catch the employers eyes
              to match you as a good fit.
            </p>
          </div>
          <EducationModal />
        </div>
        <div className='border-[1px] border-gray-200 mt-4'></div>
        <div className='p-4 flex gap-4 flex-col'>
          {scholls.map((scholl: Scholl) => {
            return <SchollItem key={uuidv4()} scholl={scholl} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationSession;
