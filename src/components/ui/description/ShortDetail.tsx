import DetailSession, { DetailHeader } from './Session';
import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { CustomJobResponse } from '@/+core/redux/apis/common/job/job.types';
import { JobResponse } from '@/+core/redux/apis/common/job/job.response';

const ListTechs = ({ data }: { data: string[] }) => {
  return (
    <div className='flex gap-2 flex-wrap'>
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

const ShortDetail = ({
  data,
  isLoading,
}: {
  data: CustomJobResponse<JobResponse> | undefined;
  isLoading: boolean;
}) => {
  const { t } = useTranslation();

  return (
    <Spin spinning={isLoading}>
      {data && (
        <div className='rounded bg-white-900 pb-4'>
          <DetailSession isHeader={true}>
            <div className='text-lg opacity-50 font-bold'>Thông tin chung</div>
          </DetailSession>
          <div className='grid grid-cols-12 m-2'>
            <GridChildren>
              <DetailSession hideBottomLine>
                <DetailHeader title='Năm kinh nghiệm tối thiểu' />
                <div className='opacity-80'>
                  {data.data.minExperience ? data.data.minExperience : 0} -{' '}
                  {data.data.maxExperience ? data.data.maxExperience : null}
                  {' ' + t('years')}
                </div>
              </DetailSession>
            </GridChildren>
            <GridChildren>
              <DetailSession hideBottomLine>
                <DetailHeader title='Cấp bậc' />
                <div className='opacity-80 capitalize'>{data.data.level}</div>
              </DetailSession>
            </GridChildren>

            <GridChildren>
              <DetailSession hideBottomLine>
                <DetailHeader title='Loại hợp đồng' />
                <div className='opacity-80 capitalize'>{data.data.contractType}</div>
              </DetailSession>
            </GridChildren>
            <GridChildren>
              <DetailSession hideBottomLine>
                <DetailHeader title='Các công nghệ sử dụng' />
                <ListTechs data={data.data.technicals} />
              </DetailSession>
            </GridChildren>
          </div>

          <DetailSession hideBottomLine>
            <DetailHeader title='Quy trình phỏng vấn' />
            <div
              className='px-4'
              dangerouslySetInnerHTML={{ __html: data.data.interviewProcess }}
            ></div>
          </DetailSession>
        </div>
      )}
    </Spin>
  );
};

export default ShortDetail;
