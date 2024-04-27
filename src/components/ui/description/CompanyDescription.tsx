import { Link, useParams } from 'react-router-dom';
import DetailSession, { DetailHeader } from './Session';
import { useGetCompanyByIdQuery } from '@/+core/redux/apis/common/company/company.api';
import { Spin } from 'antd';

const ListItem = ({ title, data, size }: { title: string; data?: string[]; size?: string }) => {
  return (
    <div className='col-span-4 text-center'>
      <div className='text-base font-bold'>{title}</div>
      <div className='px-4'>{size ? size : data && data.join(', ')}</div>
    </div>
  );
};

const CompanyDescription = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const { data: response, isLoading } = useGetCompanyByIdQuery(companyId);

  return (
    <Spin spinning={isLoading}>
      {response && response.data && (
        <div className='mt-4 bg-white rounded' id='companyDescription'>
          <DetailSession hideBottomLine>
            <DetailHeader title='Công ty' />
            <div className='uppercase opacity-80 text-base font-bold'>{response.data.name}</div>
          </DetailSession>

          <DetailSession hideBottomLine>
            <div className='grid grid-cols-12'>
              <ListItem title='Ngành nghề' data={response.data.fields} />
              <ListItem title='Quy mô công ty' size={response.data.companySize} />
              <ListItem title='Quốc tịch côngty' size={response.data.nations} />
            </div>
          </DetailSession>

          <DetailSession hideBottomLine>
            <DetailHeader title='Về chúng tôi' />
            <div dangerouslySetInnerHTML={{ __html: response.data.slogan }}></div>
          </DetailSession>
          <DetailSession hideBottomLine>
            <DetailHeader title='INTRODUCTION' />
            <div className='w-full relative flex items-center'>
              <div
                className='truncate'
                dangerouslySetInnerHTML={{ __html: response.data.about }}
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
              {response.data.images.map((item: string) => {
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
