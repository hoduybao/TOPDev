import { useGetCompanyByIdQuery } from '@/+core/redux/apis/common/company/company.api';
import { useParams } from 'react-router-dom';
import { useGetJobByIdQuery } from '@/+core/redux/apis/common/job/job.api';
import { Spin } from 'antd';

const CompanyCard = ({ isSticky }: { isSticky: boolean }) => {
  const { companyId, jobId } = useParams<{ companyId: string; jobId: string }>();
  const { data: companyResponse, isLoading: isLoadingCompany } = useGetCompanyByIdQuery(companyId);
  const { data: jobResponse, isLoading: isLoadingJob } = useGetJobByIdQuery(jobId);

  return (
    <Spin spinning={isLoadingCompany || isLoadingJob}>
      <div className={`mr-4 p-2 w-[16.67%] ${isSticky ? 'hidden' : ''}`}>
        <img className='min-w-[70px]' src={companyResponse && companyResponse.data.cover} alt='' />
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
    </Spin>
  );
};

export default CompanyCard;
