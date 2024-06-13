import { CompanyRES } from '@/+core/redux/apis/common/company/company.response';
import { useTranslation } from 'react-i18next';
import { SliderItem } from './CompanySliders';

const Companies = ({ data }: { data?: CompanyRES[] }) => {
  return (
    <div className='grid grid-cols-12 gap-2'>
      {data?.map((company: CompanyRES, index: number) => (
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
  data?: CompanyRES[];
};
const ListCompanies = ({ type, data }: Props) => {
  const { t } = useTranslation();
  return (
    <div className='mt-8 mb-4' id={type}>
      <h3 className='capitalize font-bold text-lg mb-12'>{t(type)}</h3>
      <div className='h-full '>
        <Companies data={data} />
      </div>
    </div>
  );
};

export default ListCompanies;
