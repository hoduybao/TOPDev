import { JobResponse } from '@/+core/redux/apis/common/job/job.response';
import { CustomJobResponse } from '@/+core/redux/apis/common/job/job.types';
import DetailSession from './Session';

const JobDescription = ({ data }: { data: CustomJobResponse<JobResponse> | undefined }) => {
  return (
    <div className=' bg-white-900 rounded rounded-t-none' id='jobDescription'>
      <DetailSession>
        <div
          className='prose'
          dangerouslySetInnerHTML={{
            __html: data?.data?.company?.introduction || '',
          }}
        />
      </DetailSession>
      <DetailSession>
        <div
          className='prose'
          dangerouslySetInnerHTML={{ __html: data?.data?.jobDescription || '' }}
        />
      </DetailSession>
    </div>
  );
};

export default JobDescription;
