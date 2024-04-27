import { useParams } from 'react-router-dom';
import { useGetJobByIdQuery } from '@/+core/redux/apis/common/job/job.api';
import { Spin } from 'antd';

const CompanyCard = ({ isSticky }: { isSticky: boolean }) => {
  const { jobId } = useParams<{ jobId: string }>();
  const { data: jobResponse, isLoading: isLoadingJob } = useGetJobByIdQuery(jobId);

  return (
    <>
      {jobResponse ? (
        <>
          <div className={`mr-4 p-2 w-[16.67%] ${isSticky ? 'hidden' : ''}`}>
            <img className='min-w-[70px]' src={jobResponse?.data?.company?.image} alt='' />
          </div>

          <div className={` ${isSticky ? 'w-[100%]' : 'w-[83.33%]'}`}>
            <div className='font-bold text-2xl'>{jobResponse && jobResponse.data.title}</div>
            <div className='uppercase opacity-70 font-bold text-lg'>
              {jobResponse?.data?.company?.name}
            </div>
            <div className={`mt-2 text-base opacity-70`}>{jobResponse?.data?.company?.address}</div>
            <div className={`mt-2 text-base text-orange-600 font-semibold`}>
              {jobResponse?.data?.salary} $
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CompanyCard;
