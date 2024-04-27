import { useParams } from 'react-router-dom';
import DetailSession, { DetailHeader } from './Session';
import { Spin } from 'antd';
import { useGetJobByIdQuery } from '@/+core/redux/apis/common/job/job.api';

const JobDescription = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const { data: jobResponse, isLoading } = useGetJobByIdQuery(jobId);

  return (
    <Spin spinning={isLoading}>
      {jobResponse && (
        <div className=' bg-white-900 rounded rounded-t-none' id='jobDescription'>
          <DetailSession>
            <div
              className='text-md text-justify'
              dangerouslySetInnerHTML={{ __html: jobResponse.data.company.about }}
            ></div>
          </DetailSession>
          <DetailSession>
            <DetailHeader title='Trách nhiệm công việc' />
            <div
              className='px-4 text-md text-justify'
              dangerouslySetInnerHTML={{
                __html: jobResponse.data && jobResponse.data.jobDescription,
              }}
            />
          </DetailSession>
          <DetailSession>
            <DetailHeader title='Kỹ năng chuyên môn' />
            <div
              className='px-4 text-md text-justify'
              dangerouslySetInnerHTML={{ __html: jobResponse.data && jobResponse.data.technicals }}
            />
          </DetailSession>
          {/* <DetailSession>
            <DetailHeader title='Nice to have' />
            <div
              className='px-4 text-md text-justify'
              dangerouslySetInnerHTML={{ __html: jobResponse.data && jobResponse.data.extends }}
            />
          </DetailSession>
          <DetailSession hideBottomLine>
            <DetailHeader title='Phúc lợi dành cho bạn' />
            <div
              className='px-4 text-md'
              dangerouslySetInnerHTML={{ __html: jobResponse && jobResponse.data.welfare }}
            />
          </DetailSession> */}
        </div>
      )}
    </Spin>
  );
};

export default JobDescription;
