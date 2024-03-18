import JobDescription from '../../components/ui/description/JobDescription';
import CompanyCard from '../../components/ui/card/CompanyCard';
import React from 'react';
import CompanyDescription from '../../components/ui/description/CompanyDescription';

const JobPage = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='max-w-[80rem]  bg-mainBackground '>
        <div className='grid grid-cols-12 gap-6'>
          {/* jd session */}
          <div className='col-span-8'>
            <CompanyCard />
            <JobDescription />
            <CompanyDescription />
          </div>

          {/* submit session */}
          <div className='col-span-4 bg-red-500'></div>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
