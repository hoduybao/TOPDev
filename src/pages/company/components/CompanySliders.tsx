import { Swiper, SwiperSlide } from 'swiper/react';
import companyData from '../../../draft/company-new.json';
// Import Swiper styles
import 'swiper/css';
import { useTranslation } from 'react-i18next';
import { ICONS } from '@/config/icons';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Autoplay } from 'swiper/modules';
type Props = {
  type: string;
  size: number;
  autoplay?: boolean;
};

export type SliderCompanyItem = {
  id: string;
  name: string;
  avatar: string;
  address: string;
  fields: string[];
  slogan: string;
  background: string;
};
export const SliderItem = ({
  company,
  extraClass,
}: {
  company: SliderCompanyItem;
  extraClass?: string;
}) => {
  return (
    <div className={'w-full h-full border-[1px] border-gray-300 ' + extraClass}>
      <div className='mb-2'>
        <img
          src={company.background}
          alt={company.background}
          style={{ height: '200px!important' }}
          className='w-full h-[200px] object-cover'
        />
        <div className='w-full h-[3rem] px-4 flex items-end gap-2'>
          <img
            src={company.avatar}
            alt={company.avatar}
            className='w-[6rem] h-[77px] object-fill shadow-md'
          />
          <h4 className='flex-1'>{company.name}</h4>
        </div>
      </div>

      <div className='grid grid-cols-12 p-4 items-center gap-1 relative '>
        <div className='col-span-12'>
          <p className='truncate capitalize'>{company.slogan}</p>
        </div>
        <div className='col-span-12 flex justify-between text-gray-400'>
          <p className='flex-1 truncate max-w-[70%]'>{company.address}</p>
          <span className='flex items-center gap-1'>
            29
            <img className='w-[20px] text-white-900' src={ICONS.bookmark} alt='bookmark' />
          </span>
        </div>
        <div className='col-span-12 text-gray-400 flex justify-between'>
          <div className='flex-1 truncate max-w-[70%]'>{company.fields.join(',')}</div>

          <Link to='/'>
            <div className='flex gap-1 font-bold'>
              <span className='text-orange-500 underline'>3 Jobs</span>
              <ArrowRightOutlined className='text-orange-500' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Sliders = ({ size, autoplay }: { size: number; autoplay: boolean }) => {
  const data: SliderCompanyItem[] = [
    companyData,
    companyData,
    companyData,
    companyData,
    companyData,
  ];

  const swiperProps = {
    spaceBetween: 5,
    slidesPerView: size,
    autoHeight: true,
    loop: true,
    modules: autoplay ? [Autoplay] : [],
    autoplay: autoplay ? { delay: 3000 } : {},
  };

  return (
    <div>
      <Swiper {...swiperProps}>
        {data.map((company: SliderCompanyItem, index: number) => (
          <SwiperSlide key={company.id + index}>
            <SliderItem company={company} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const CompanySliders = ({ type, size, autoplay = false }: Props) => {
  const { t } = useTranslation();
  return (
    <div className='my-4' id={type}>
      <h3 className='capitalize font-bold text-lg mb-4'>{t(type)}</h3>
      <div className='h-full '>
        <Sliders size={size} autoplay={autoplay} />
      </div>
    </div>
  );
};

export default CompanySliders;
