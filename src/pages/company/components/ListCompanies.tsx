import { useTranslation } from 'react-i18next';
import companyData from '../../../draft/company-new.json';
import { SliderCompanyItem, SliderItem } from './CompanySliders';

const Companies = () => {
  const data: SliderCompanyItem[] = [
    companyData,
    companyData,
    companyData,
    companyData,
    companyData,
  ];
  return (
    <div className='grid grid-cols-12 gap-2'>
      {data.map((company: SliderCompanyItem, index: number) => (
        <SliderItem
          company={company}
          key={company.id + index}
          extraClass='col-span-12 md:col-span-6 lg:col-span-3'
        />
      ))}
    </div>
  );
};

type Props = {
  type: string;
};
const ListCompanies = ({ type }: Props) => {
  const { t } = useTranslation();
  return (
    <div className='mt-8 mb-4' id={type}>
      <h3 className='capitalize font-bold text-lg mb-12'>{t(type)}</h3>
      <div className='h-full '>
        <Companies />
      </div>
    </div>
  );
};

export default ListCompanies;
