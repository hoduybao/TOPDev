import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

export type Company = {
  alias: string;
  url: string;
  isSelected?: boolean;
  ref: React.RefObject<HTMLDivElement>;
};
const CompanyItem = ({ data }: { data: Company }) => {
  const { alias, url, isSelected = false, ref } = data;
  const { t } = useTranslation();
  return (
    <div
      className={`
      py-2 border-[0.5px] border-orange-500 text-center
      ${isSelected ? 'text-white-900 bg-orange-500' : ' text-black-900 bg-white-900'} `}
    >
      <Link
        className='capitalize font-bold text-base'
        to={url}
        onClick={() => {
          console.log('clicked ', ref);
          if (ref && ref.current) {
            ref.current.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' });
          }
        }}
      >
        {t(alias)}
      </Link>
    </div>
  );
};

const CompanyTypes = ({ list }: { list: Company[] }) => {
  return (
    <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-0'>
      {list.map((item, index) => {
        console.log(item);
        return (
          <div key={index} className='md:col-span-1'>
            <CompanyItem data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default CompanyTypes;
