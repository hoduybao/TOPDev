// import companyData from '../../../draft/company.json';
import { Link, useParams } from 'react-router-dom';
import DetailSession, { DetailHeader } from './Session';
// import { useGetJobByIdQuery } from '../../../+core/redux/apis/common/job/job.api';
import { Spin } from 'antd';
import { useGetCompanyByIdQuery } from '../../../+core/redux/apis/common/company/company.api';

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
  const { data: companyData, isLoading } = useGetCompanyByIdQuery(companyId);

  return (
    <Spin spinning={isLoading}>
      {companyData && (
        <div className='mt-4 bg-white-900 rounded'>
          <DetailSession hideBottomLine>
            <DetailHeader title='Công ty' />
            <div className='uppercase opacity-80 text-base font-bold'>{companyData.data.name}</div>
          </DetailSession>

          <DetailSession hideBottomLine>
            <div className='grid grid-cols-12'>
              <ListItem title='Ngành nghề' data={companyData.data.fields} />
              <ListItem title='Quy mô công ty' size={companyData.data.size} />
              <ListItem title='Quốc tịch côngty' data={companyData.data.nations} />
            </div>
          </DetailSession>

          <DetailSession hideBottomLine>
            <DetailHeader title='Về chúng tôi' />
            <div>{companyData.data.about.join('. ')}</div>
          </DetailSession>
          <DetailSession hideBottomLine>
            <DetailHeader title='INTRODUCTION' />
            <div className='truncate w-full relative flex items-center'>
              {companyData.data.introduction.join('. ')}
              <Link
                className='text-base font-bold absolute right-0 bg-white-900 px-4 text-orange-600 underline'
                to='/company'
              >
                đọc thêm
              </Link>
            </div>
          </DetailSession>
          <DetailSession hideBottomLine>
            <div className='grid grid-cols-12 justify-center'>
              {companyData.data.imgs.map((item: any) => {
                return <img src={item} alt='company' className='col-span-4' />;
              })}
            </div>
          </DetailSession>
          <DetailSession hideBottomLine>
            <div className='flex justify-center'>
              <Link
                className='text-base font-bold bg-white-900 px-4 text-orange-600 underline'
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
