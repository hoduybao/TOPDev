import companyData from '../../../draft/company-new.json';
import jobData from '../../../draft/job.json';

// import { useParams } from 'react-router-dom';
// import { useGetJobByIdQuery } from '../../../+core/redux/apis/common/job/job.api';
// import { useGetCompanyByIdQuery } from '../../../+core/redux/apis/common/company/company.api';
import { Spin } from 'antd';
import useSticky from '../../../hooks/sticky';

const CompanyCard = () => {
  const { ref: stickyRef } = useSticky();
  let isSticky = false;
  isSticky = true;

  // const { ref: stickyRef, isSticky } = useSticky();
  // console.log('isSticky', isSticky);

  // apply API call
  // const { jobId, companyId } = useParams<{ jobId: string; companyId: string }>();
  // const { data: jobResponse, isLoading } = useGetJobByIdQuery(jobId);
  // const { data: companyResponse, isLoading: isLoadingCompany } = useGetCompanyByIdQuery(companyId);

  const isLoading = false;
  const isLoadingCompany = false;
  const jobResponse = { data: jobData };
  const companyResponse = { data: companyData };

  return (
    <div className={`bg-white-900 p-4 rounded sticky z-10`} ref={stickyRef}>
      <Spin spinning={isLoadingCompany || isLoading}>
        <div className='grid grid-cols-12 p-2 gap-8'>
          {/* image */}
          <div className={`col-span-2 ${isSticky ? 'hidden' : ''}`}>
            {/* <img
              className='min-w-[70px]'
              src={companyResponse && companyResponse.data.avatar}
              alt=''
            /> */}
          </div>
          {/* info */}
          <div className={`col-span-10 ${isSticky && 'col-span-12'}`}>
            <div className='font-bold text-2xl'>{jobResponse && jobResponse.data.title}</div>
            <div className='uppercase opacity-70 font-bold text-lg'>
              {companyResponse && companyResponse.data.name}
            </div>
            <div className={`mt-2 text-base opacity-70`}>
              {!isSticky && companyResponse && companyResponse.data.address}
            </div>
            <div className={`mt-2 text-base text-orange-600 font-semibold`}>
              {!isSticky && 'Thương lượng'}
            </div>
          </div>
        </div>
      </Spin>
    </div>
  );
};

export default CompanyCard;
