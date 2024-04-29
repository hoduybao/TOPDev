import { JobResponse } from '@/+core/redux/apis/common/job/job.response';
import { CustomJobResponse } from '@/+core/redux/apis/common/job/job.types';
import { Spin } from 'antd';
import DetailSession from './Session';

const JobDescription = ({
  data,
  isLoading,
}: {
  data: CustomJobResponse<JobResponse> | undefined;
  isLoading: boolean;
}) => {
  console.log(data?.data.jobDescription);

  return (
    <Spin spinning={isLoading}>
      {data && (
        <div className=' bg-white-900 rounded rounded-t-none' id='jobDescription'>
          <DetailSession>
            <div
              className='prose'
              dangerouslySetInnerHTML={{
                __html: data?.data.company.about,
              }}
            />
          </DetailSession>
          <DetailSession>
            <div className='prose' dangerouslySetInnerHTML={{ __html: data.data.jobDescription }} />
          </DetailSession>
        </div>
      )}
    </Spin>
  );
};

export default JobDescription;
