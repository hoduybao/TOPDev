import { ExperienceEnum, ExperienceTranslation } from '@/+core/enums/experience.enum';
import {
  ContractTypeEnum,
  ContractTypeTranslation,
  JobTypeEnum,
  JobTypeTranslation,
  LevelEnum,
  LevelTranslation,
  TechnicalsEnum,
  TechnicalsEnumTranslation,
} from '@/+core/enums/job.enum';
import { JobResponse } from '@/+core/redux/apis/common/job/job.response';
import { CustomJobResponse } from '@/+core/redux/apis/common/job/job.types';
import { useTranslation } from 'react-i18next';
import DetailSession, { DetailHeader } from './Session';

const ListTechs = ({ data }: { data: string[] }) => {
  return (
    <div className='flex gap-2 flex-wrap'>
      {data?.map((item: any) => {
        return (
          <div key={item} className='text-blue-500 px-2 bg-blue-200 rounded'>
            {TechnicalsEnumTranslation[item as TechnicalsEnum]}
          </div>
        );
      })}
    </div>
  );
};

const GridChildren = ({ children }: { children: React.ReactNode }) => {
  return <div className='col-span-6 lg:col-span-12'>{children}</div>;
};

const ShortDetail = ({ data }: { data: CustomJobResponse<JobResponse> | undefined }) => {
  const { t } = useTranslation();

  return (
    <div className='rounded bg-white-900 pb-4'>
      <DetailSession isHeader={true}>
        <div className='text-lg opacity-50 font-bold'>Thông tin chung</div>
      </DetailSession>
      <div className='grid grid-cols-12 m-2'>
        <GridChildren>
          <DetailSession hideBottomLine>
            <DetailHeader title='Năm kinh nghiệm tối thiểu' />
            <div className='opacity-80'>
              {ExperienceTranslation(t)[data?.data?.experience as ExperienceEnum]}
            </div>
          </DetailSession>
        </GridChildren>
        <GridChildren>
          <DetailSession hideBottomLine>
            <DetailHeader title='Cấp bậc' />
            <div className='opacity-80 capitalize'>
              {data?.data?.level?.map((item) => LevelTranslation[item as LevelEnum]).join(', ')}
            </div>
          </DetailSession>
        </GridChildren>
        <GridChildren>
          <DetailSession hideBottomLine>
            <DetailHeader title='Loại hình' />
            <div className='opacity-80 capitalize'>
              {JobTypeTranslation[data?.data?.jobType as JobTypeEnum]}
            </div>
          </DetailSession>
        </GridChildren>
        <GridChildren>
          <DetailSession hideBottomLine>
            <DetailHeader title='Loại hợp đồng' />
            <div className='opacity-80 capitalize'>
              {ContractTypeTranslation[data?.data?.contractType as ContractTypeEnum]}
            </div>
          </DetailSession>
        </GridChildren>
        <GridChildren>
          <DetailSession hideBottomLine>
            <DetailHeader title='Các công nghệ sử dụng' />
            <ListTechs data={data?.data?.technicals || []} />
          </DetailSession>
        </GridChildren>
      </div>

      <DetailSession hideBottomLine>
        <DetailHeader title='Quy trình phỏng vấn' />
        <div
          className='px-4'
          dangerouslySetInnerHTML={{ __html: data?.data?.interviewProcess || '' }}
        ></div>
      </DetailSession>
    </div>
  );
};

export default ShortDetail;
