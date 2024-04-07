import companyData from '../../../draft/company-new.json';
import jobData from '../../../draft/job.json';

// import { useParams } from 'react-router-dom';
// import { useGetJobByIdQuery } from '../../../+core/redux/apis/common/job/job.api';
// import { useGetCompanyByIdQuery } from '../../../+core/redux/apis/common/company/company.api';
import { Spin } from 'antd';

const CompanyCard = ({ isSticky }: { isSticky: boolean }) => {
  // apply API call
  // const { jobId, companyId } = useParams<{ jobId: string; companyId: string }>();
  // const { data: jobResponse, isLoading } = useGetJobByIdQuery(jobId);
  // const { data: companyResponse, isLoading: isLoadingCompany } = useGetCompanyByIdQuery(companyId);

  const isLoading = false;
  const isLoadingCompany = false;
  const jobResponse = { data: jobData };
  const companyResponse = { data: companyData };

  return (
    // <Spin spinning={isLoadingCompany || isLoading}>
    <>
      <div className={`mr-4 p-2 w-[16.67%] ${isSticky ? 'hidden' : ''}`}>
        <img className='min-w-[70px]' src={companyResponse && companyResponse.data.avatar} alt='' />
      </div>

      <div className={` ${isSticky ? 'w-[100%]' : 'w-[83.33%]'}`}>
        <div className='font-bold text-2xl'>{jobResponse && jobResponse.data.title}</div>
        <div className='uppercase opacity-70 font-bold text-lg'>
          {companyResponse && companyResponse.data.name}
        </div>
        <div className={`mt-2 text-base opacity-70`}>
          {companyResponse ? companyResponse.data.address : ''}
        </div>
        <div className={`mt-2 text-base text-orange-600 font-semibold`}>{'Thương lượng'}</div>
      </div>
    </>
    // </Spin>
  );
};

export default CompanyCard;
