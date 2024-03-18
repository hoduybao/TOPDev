import companyData from '../../../draft/company.json';
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

const CompanyDescription = () => {
  return (
    <div className='mt-4 bg-white-900 rounded'>
      <DetailSession hideBottomLine>
        <DetailHeader title='Công ty' />
        <div className='uppercase opacity-80 text-base font-bold'>{companyData.name}</div>
      </DetailSession>

      <DetailSession hideBottomLine>
        <div className='grid grid-cols-12'>
          <ListItem title='Ngành nghề' data={companyData.fields} />
          <ListItem title='Quy mô công ty' size={companyData.size} />
          <ListItem title='Quốc tịch côngty' data={companyData.nations} />
        </div>
      </DetailSession>

      <DetailSession hideBottomLine>
        <DetailHeader title='Về chúng tôi' />
        <div>{companyData.about.join('. ')}</div>
      </DetailSession>
      <DetailSession hideBottomLine>
        <DetailHeader title='INTRODUCTION' />
        <div className='truncate w-full relative flex items-center'>
          {companyData.introduction.join('. ')}
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
          {companyData.imgs.map((item) => {
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
  );
};

export default CompanyDescription;
