import { useParams } from 'react-router-dom';
// import jobData from '../../../draft/job.json';
import DetailSession, { DetailHeader } from './Session';
import { useGetJobByIdQuery } from '../../../+core/redux/apis/common/job/job.api';
import Loading from '../loading/Loading';

const ListTechs = ({ data }: { data: string[] }) => {
  return (
    <div className='flex gap-2'>
      {data.map((item) => {
        return <div className='text-blue-500 px-2 bg-blue-200 rounded'>{item}</div>;
      })}
    </div>
  );
};

const ShortDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const { data: jobResponse, error, isLoading } = useGetJobByIdQuery(jobId);

  if (isLoading) return <Loading />;

  const { data: jobData } = jobResponse;

  return (
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
        <div className='opacity-80 capitalize'>{jobData.level}</div>
      </DetailSession>
      <DetailSession hideBottomLine>
        <DetailHeader title='Loại hình' />
        <div className='opacity-80 capitalize'>{jobData.type}</div>
      </DetailSession>
      <DetailSession hideBottomLine>
        <DetailHeader title='Loại hợp đồng' />
        <div className='opacity-80 capitalize'>{jobData.typeContract}</div>
      </DetailSession>
      <DetailSession hideBottomLine>
        <DetailHeader title='Các công nghệ sử dụng' />
        <ListTechs data={jobData.techs} />
      </DetailSession>
      <DetailSession hideBottomLine>
        <DetailHeader title='Quy trình phỏng vấn' />
        <ul className='px-4'>
          {jobData.interviewProcess.map((item, index) => (
            <li className='list-disc'>{item}</li>
          ))}
        </ul>
      </DetailSession>
    </div>
  );
};

export default ShortDetail;
