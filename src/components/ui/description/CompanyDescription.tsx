import { JobResponse } from '@/+core/redux/apis/common/job/job.response';
import { CustomJobResponse } from '@/+core/redux/apis/common/job/job.types';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import DetailSession, { DetailHeader } from './Session';

const ListItem = ({ title, data, size }: { title: string; data?: string[]; size?: string }) => {
  return (
    <div className='col-span-4 text-center'>
      <div className='text-base font-bold'>{title}</div>
      <div className='px-4'>{size ? size : data && data.join(', ')}</div>
    </div>
  );
};

const CompanyDescription = ({
  data,
  isLoading,
}: {
  data: CustomJobResponse<JobResponse> | undefined;
  isLoading: boolean;
}) => {
  return (
    <Spin spinning={isLoading}>
      {data && (
        <div className='mt-4 bg-white rounded' id='companyDescription'>
          <DetailSession hideBottomLine>
            <DetailHeader title='Công ty' />
            <div className='uppercase opacity-80 text-base font-bold'>{data.data.company.name}</div>
          </DetailSession>

          <DetailSession hideBottomLine>
            <div className='grid grid-cols-12'>
              <ListItem title='Ngành nghề' data={data.data.company.fields} />
              <ListItem title='Quy mô công ty' size={data.data.company.companySize} />
              <ListItem title='Quốc tịch côngty' size={data.data.company.nations} />
            </div>
          </DetailSession>

          <DetailSession hideBottomLine>
            <DetailHeader title='Về chúng tôi' />
            <div dangerouslySetInnerHTML={{ __html: data.data.company.slogan }}></div>
          </DetailSession>
          <DetailSession hideBottomLine>
            <DetailHeader title='INTRODUCTION' />
            <div className='w-full relative flex items-center'>
              <div
                className='truncate'
                dangerouslySetInnerHTML={{ __html: data.data.company.about }}
              ></div>
              <Link
                className='text-md font-bold absolute right-0 bottom-0 bg-white pl-4 text-orange-600 underline'
                to='/company'
              >
                đọc thêm
              </Link>
            </div>
          </DetailSession>
          <DetailSession hideBottomLine>
            <div className='grid grid-cols-12 justify-center'>
              {data.data.company.images.map((item: string) => {
                return <img key={item} src={item} alt='company' className='col-span-4' />;
              })}
            </div>
          </DetailSession>
          <DetailSession hideBottomLine>
            <div className='flex justify-center'>
              <Link
                className='text-base font-bold bg-white px-4 text-orange-600 underline'
                to='/company'
              >
                Xem công ty
              </Link>
            </div>
          </DetailSession>
        </div>
      )}
    </Spin>
  );
};

export default CompanyDescription;
