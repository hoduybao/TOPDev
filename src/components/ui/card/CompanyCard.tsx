import { CustomJobResponse } from '@/+core/redux/apis/common/job/job.types';
import { JobResponse } from '@/+core/redux/apis/common/job/job.response';

const CompanyCard = ({
  isSticky,
  data,
}: {
  isSticky: boolean;
  data: CustomJobResponse<JobResponse> | undefined;
}) => {
  return (
    <>
      {data ? (
        <>
          <div className={`mr-4 p-2 w-[16.67%] ${isSticky ? 'hidden' : ''}`}>
            <img className='min-w-[70px]' src={data?.data?.company?.image} alt='' />
          </div>

          <div className={` ${isSticky ? 'w-[100%]' : 'w-[83.33%]'}`}>
            <div className='font-bold text-2xl'>{data && data.data.title}</div>
            <div className='uppercase opacity-70 font-bold text-lg'>
              {data?.data?.company?.name}
            </div>
            <div className={`mt-2 text-base opacity-70`}>{data?.data?.company?.address}</div>
            <div className={`mt-2 text-base text-orange-600 font-semibold`}>
              {data?.data?.salary} $
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CompanyCard;
