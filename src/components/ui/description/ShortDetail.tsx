import { useParams } from 'react-router-dom';
// import jobData from '../../../draft/job.json';
import DetailSession, { DetailHeader } from './Session';
import { useGetJobByIdQuery } from '../../../+core/redux/apis/common/job/job.api';
import { Spin } from 'antd';

const ListTechs = ({ data }: { data: string[] }) => {
  return (
    <div className='flex gap-2'>
      {data.map((item) => {
        return (
          <div key={item} className='text-blue-500 px-2 bg-blue-200 rounded'>
            {item}
          </div>
        );
      })}
    </div>
  );
};

const ShortDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const { data: jobResponse, isLoading } = useGetJobByIdQuery(jobId);

  return (
    <Spin spinning={isLoading}>
      {jobResponse && (
        <div className='rounded bg-white-900'>
          <DetailSession>
            <div className='text-lg opacity-50 font-bold'>Thông tin chung</div>
          </DetailSession>
          <DetailSession hideBottomLine>
            <DetailHeader title='Năm kinh nghiệm tối thiểu' />
            <div className='opacity-80'>Tất cả kinh nhiệm</div>
          </DetailSession>
          <DetailSession hideBottomLine>
            <DetailHeader title='Cấp bậc' />
            <div className='opacity-80 capitalize'>{jobResponse.data.level}</div>
          </DetailSession>
          <DetailSession hideBottomLine>
            <DetailHeader title='Loại hình' />
            <div className='opacity-80 capitalize'>{jobResponse.data.type}</div>
          </DetailSession>
          <DetailSession hideBottomLine>
            <DetailHeader title='Loại hợp đồng' />
            <div className='opacity-80 capitalize'>{jobResponse.data.typeContract}</div>
          </DetailSession>
          <DetailSession hideBottomLine>
            <DetailHeader title='Các công nghệ sử dụng' />
            <ListTechs data={jobResponse.data.techs} />
          </DetailSession>
          <DetailSession hideBottomLine>
            <DetailHeader title='Quy trình phỏng vấn' />
            <ul className='px-4'>
              {jobResponse.data.interviewProcess.map((item: string) => (
                <li key={item} className='list-disc'>
                  {item}
                </li>
              ))}
            </ul>
          </DetailSession>
        </div>
      )}
    </Spin>
  );
};

export default ShortDetail;
