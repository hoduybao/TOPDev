import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { CompanyRES } from '@/+core/redux/apis/common/company/company.response';
import { ICONS } from '@/config/icons';
import { ArrowRightOutlined, CaretUpOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
type Props = {
  type: string;
  size: number;
  autoplay?: boolean;
  data?: CompanyRES[];
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
  company: CompanyRES;
  extraClass?: string;
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/companies/${company.id}`);
      }}
      className={'w-full h-full border-[1px] border-gray-300 overflow-visible ' + extraClass}
    >
      <div className='mb-2'>
        <img
          src={company?.coverPhoto}
          alt={company.coverPhoto}
          style={{ height: '200px !important' }}
          className='w-full h-[200px] object-cover'
        />
        <div className='w-full h-[3rem] px-4 flex items-end gap-2'>
          <div className='h-[77px] relative group'>
            <img
              src={company?.logo}
              alt={company?.logo}
              className='w-[96px] h-[77px] object-contain shadow-md bg-white-900'
            />
            <div className='hidden group-hover:block absolute w-[12rem] translate-x-[-50%] left-[50%] z-10 rounded p-2 text-center'>
              <div className='relative flex justify-center rounded bg-gray-400 p-2'>
                <CaretUpOutlined className='absolute top-[-0.6rem] text-gray-400' />
                <span className=' text-white-900'>
                  {company?.name + ' ' + (company?.tagline || '')}
                </span>
              </div>
            </div>
          </div>

          <h4 className='flex-1'>{company?.name}</h4>
        </div>
      </div>

      <div className='grid grid-cols-12 p-4 items-center gap-1 relative flex-1'>
        <div className='col-span-12'>
          <p className='truncate capitalize'>{company?.tagline || 'Unknown'}</p>
        </div>
        <div className='col-span-12 flex justify-between text-gray-400'>
          <p className='flex-1 truncate max-w-[70%]'>
            {company?.addresses && company?.addresses.length > 0
              ? company?.addresses[0].addressDetail
              : 'Unknown'}
          </p>
          <span className='flex items-center gap-1'>
            {company?.followedCount}
            <img className='w-[20px] text-white-900' src={ICONS.bookmark} alt='bookmark' />
          </span>
        </div>
        <div className='col-span-12 text-gray-400 flex justify-between'>
          <div className='flex-1 truncate max-w-[70%]'>
            {company?.industry && company?.industry.length >= 1
              ? company?.industry?.join(', ')
              : 'Unknown'}
          </div>

          <Link to={`/companies/${company.id}`}>
            <div className='flex gap-1 font-bold'>
              <span className='text-orange-500 underline'>{company?.jobCount || 0} Jobs</span>
              <ArrowRightOutlined className='text-orange-500' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Sliders = ({
  size,
  autoplay,
  data,
}: {
  size: number;
  autoplay: boolean;
  data?: CompanyRES[];
}) => {
  const swiperProps = {
    spaceBetween: 5,
    // slidesPerView: size,
    autoHeight: true,
    loop: true,
    modules: autoplay ? [Autoplay, Navigation, Pagination] : [Navigation, Pagination],
    autoplay: autoplay ? { delay: 3000 } : {},
    scrollbar: { draggable: true },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: size,
        spaceBetween: 10,
      },
    },
  };

  return (
    <div>
      <Swiper {...swiperProps} navigation={true} className='swiper-company'>
        {data?.map((company: CompanyRES) => (
          <SwiperSlide key={company.id}>
            <SliderItem company={company} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const CompanySliders = ({ type, size, autoplay = false, data }: Props) => {
  const { t } = useTranslation();
  return (
    <div className='mt-8 mb-4' id={type}>
      <h3 className='capitalize font-bold text-lg mb-12'>{t(type)}</h3>
      <div className='h-full'>
        <Sliders size={size} autoplay={autoplay} data={data} />
      </div>
    </div>
  );
};

export default CompanySliders;
