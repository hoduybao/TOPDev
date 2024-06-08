import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export type Company = {
  alias: string;
  url: string;
  isSelected?: boolean;
  ref: React.RefObject<HTMLDivElement>;
};
const CompanyItem = ({
  data,
  selected,
  setSelected,
}: {
  data: Company;
  selected: string;
  setSelected: (selected: string) => void;
}) => {
  const { alias, url, ref } = data;
  const { t } = useTranslation();
  return (
    <div
      className={`
      py-2 border-[0.5px] border-orange-500 text-center
      ${selected === alias ? 'text-white-900 bg-orange-500' : ' text-black-900 bg-white-900'} `}
    >
      <Link
        className={`capitalize font-bold text-base ${
          selected !== alias ? 'hover:text-primary-red' : 'hover:text-white-900'
        } `}
        to={url}
        onClick={() => {
          setSelected(alias);
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
  const [selected, setSelected] = useState(list[0].alias);
  return (
    <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-0'>
      {list.map((item, index) => {
        return (
          <div key={index} className='md:col-span-1'>
            <CompanyItem data={item} selected={selected} setSelected={setSelected} />
          </div>
        );
      })}
    </div>
  );
};

export default CompanyTypes;
