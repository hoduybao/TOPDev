import React from 'react';
import ExpModal from './ExpModal';

export type YOEProps = {
  timeBegin: string;
  timeEnd: string;
  position: string;
  companyName: string;
  description?: string;
  appliedSkills: string[];
};

const YOEItem = ({
  timeBegin,
  timeEnd,
  position,
  companyName,
  description,
  appliedSkills,
}: YOEProps) => {
  return (
    <div className='flex gap-4'>
      <div className='w-[20%]'>
        {timeBegin} - {timeEnd}
      </div>

      <div className='flex-1'>
        <div className='mb-3'>
          <span className='text-orange-500 text-lg font-bold'>{position}</span> at{' '}
          <span className='uppercase text-lg text-gray-400 font-bold'>{companyName}</span>
        </div>
        <p className='mb-3'>{description}</p>
        <div>
          <h3 className='font-bold text-gray-400 text-base mb-3'>Applied Skills</h3>
          <div className='flex gap-4'>
            {appliedSkills.map((skill) => {
              return (
                <div
                  className='bg-white-900 border-[1px] border-gray-200 rounded px-2 py-1'
                  key={skill}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpSession = () => {
  const data: YOEProps[] = [
    {
      timeBegin: '04-2024',
      timeEnd: 'Present',
      position: 'developer',
      companyName: 'ABC',
      description:
        'Detail experience reflects your skills, values, and contributions during the time you spent at your previous companies.',
      appliedSkills: ['JS', 'C++', 'Java'],
    },
    {
      timeBegin: '04-2024',
      timeEnd: 'Present',
      position: 'developer',
      companyName: 'ABC',
      description:
        'Detail experience reflects your skills, values, and contributions during the time you spent at your previous companies.',
      appliedSkills: ['JS', 'C++', 'Java'],
    },
  ];
  return (
    <div className='rounded bg-white-900'>
      <div className='flex-1'>
        <div className='p-4 flex gap-4 justify-between'>
          <div>
            <h3 className='text-2xl font-bold text-black-900'>Work Experience</h3>
            <p className='text-gray-400 text-base'>
              Detail experience reflects your skills, values, and contributions during the time you
              spent at your previous companies. 04-2024 - Present developer at ABC
            </p>
          </div>
          <ExpModal />
        </div>
        <div className='border-[1px] border-gray-200 mt-4'></div>
        <div className='p-4 flex flex-col gap-4'>
          {data.map((item, index) => {
            return (
              <div key={item.position + item.companyName}>
                <YOEItem {...item} />
                {index !== data.length - 1 && (
                  <div className='mt-4 border-[1px] border-gray-200'></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpSession;
