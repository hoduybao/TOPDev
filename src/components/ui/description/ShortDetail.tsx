import { useParams } from 'react-router-dom';
import jobData from '../../../draft/jsob-new.json';
import DetailSession, { DetailHeader } from './Session';
import { useGetJobByIdQuery } from '../../../+core/redux/apis/common/job/job.api';
import { Spin } from 'antd';

const ListTechs = ({ data }: { data: string[] }) => {
  return (
    <div className='flex gap-2'>
      {data.map((item: any) => {
        return (
          <div key={item} className='text-blue-500 px-2 bg-blue-200 rounded'>
            {item}
          </div>
        );
      })}
    </div>
  );
};

const GridChildren = ({ children }: { children: React.ReactNode }) => {
  return <div className='col-span-6 lg:col-span-12'>{children}</div>;
};

const ShortDetail = () => {
  // const { jobId } = useParams<{ jobId: string }>();
  // const { data: jobResponse, isLoading } = useGetJobByIdQuery(jobId);
  const jobResponse = { data: jobData };
  const isLoading = false;

  return (
    <Spin spinning={isLoading}>
      {jobResponse && (
        <div className='rounded bg-white-900 pb-4'>
          <DetailSession isHeader={true}>
            <div className='text-lg opacity-50 font-bold'>Thông tin chung</div>
          </DetailSession>
          <div className='grid grid-cols-12 m-2'>
            <GridChildren>
              <DetailSession hideBottomLine>
                <DetailHeader title='Năm kinh nghiệm tối thiểu' />
                <div className='opacity-80'>Tất cả kinh nhiệm</div>
              </DetailSession>
            </GridChildren>
            <GridChildren>
              <DetailSession hideBottomLine>
                <DetailHeader title='Cấp bậc' />
                <div className='opacity-80 capitalize'>{jobResponse.data.level}</div>
              </DetailSession>
            </GridChildren>
            <GridChildren>
              <DetailSession hideBottomLine>
                <DetailHeader title='Loại hình' />
                <div className='opacity-80 capitalize'>{jobResponse.data.type}</div>
              </DetailSession>
            </GridChildren>
            <GridChildren>
              <DetailSession hideBottomLine>
                <DetailHeader title='Loại hợp đồng' />
                <div className='opacity-80 capitalize'>{jobResponse.data.typeContract}</div>
              </DetailSession>
            </GridChildren>
            <GridChildren>
              <DetailSession hideBottomLine>
                <DetailHeader title='Các công nghệ sử dụng' />
                <ListTechs data={jobResponse.data.techs} />
              </DetailSession>
            </GridChildren>
          </div>

          <DetailSession hideBottomLine>
            <DetailHeader title='Quy trình phỏng vấn' />
            <div
              className='px-4'
              dangerouslySetInnerHTML={{ __html: jobResponse.data.interviewProcess }}
            ></div>
          </DetailSession>
        </div>
      )}
    </Spin>
  );
};

export default ShortDetail;
