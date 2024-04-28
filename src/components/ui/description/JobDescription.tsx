import DetailSession from './Session';
import { Spin } from 'antd';
import { CustomJobResponse } from '@/+core/redux/apis/common/job/job.types';
import { JobResponse } from '@/+core/redux/apis/common/job/job.response';

const JobDescription = ({
  data,
  isLoading,
}: {
  data: CustomJobResponse<JobResponse> | undefined;
  isLoading: boolean;
}) => {
  return (
    <Spin spinning={isLoading}>
      {data && (
        <div className=' bg-white-900 rounded rounded-t-none' id='jobDescription'>
          <DetailSession>
            <div
              className='text-md text-justify'
              dangerouslySetInnerHTML={{ __html: data.data.company.about }}
            ></div>
          </DetailSession>
          <DetailSession>
            <div
              className='text-md text-justify'
              dangerouslySetInnerHTML={{ __html: data.data.jobDescription }}
            ></div>
          </DetailSession>
        </div>
      )}
    </Spin>
  );
};

export default JobDescription;
