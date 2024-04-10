import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Company = {
  alias: string;
  url: string;
  isSelected?: boolean;
};
const CompanyItem = ({ alias, url, isSelected = false }: Company) => {
  const { t } = useTranslation();
  return (
    <div
      className={`
      py-2 border-[0.5px] border-orange-500 text-center
      ${isSelected ? 'text-white-900 bg-orange-500' : ' text-black-900 bg-white-900'} `}
    >
      <Link className='capitalize font-bold text-base' to={url}>
        {t(alias)}
      </Link>
    </div>
  );
};

const CompanyTypes = () => {
  const list: Company[] = [
    { alias: 'trend.top', url: '/', isSelected: true },
    { alias: 'trend.follow', url: '/' },
    { alias: 'trend.job', url: '/' },
    { alias: 'trend.total', url: '/' },
  ];
  return (
    <div className='flex'>
      {list.map((item, index) => (
        <div className='w-[25%]'>
          <CompanyItem key={index} {...item} />
        </div>
      ))}
    </div>
  );
};

export default CompanyTypes;
