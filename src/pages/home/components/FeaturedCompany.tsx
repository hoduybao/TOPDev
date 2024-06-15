import { Swiper, SwiperSlide } from 'swiper/react';
import FollowIcon from '../../../../public/assets/icons/follow';

// Import Swiper styles
import { CompanyHome } from '@/+core/redux/apis/common/home/home.response';
import { ICONS } from '@/config/icons';
import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
type FeaturedCompanyProps = {
  data?: CompanyHome[];
};

export default function FeaturedCompany({ data }: FeaturedCompanyProps) {
  const sliderRef = useRef<any>(null);
  const navigate = useNavigate();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      autoplay={{ delay: 2000 }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className='swiper_container'
      initialSlide={2}
    >
      {data?.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='w-[816px] h-[190px] relative group flex justify-center company_item_slider'>
            <img srcSet={item?.coverPhoto} className='w-full h-full rounded object-cover' />
            <div className='absolute bottom-0 translate-y-1/2 bg-white-900 shadow-md w-[94%] rounded p-4 flex gap-2 cursor-pointer'>
              <div className='p-2 w-[160px] h-[112px]'>
                <img srcSet={item?.logo} className='w-full h-full object-contain' />
              </div>
              <div className='flex flex-col items-start gap-1 pl-8 pr-4 truncate w-full'>
                <div
                  className='text-lg font-bold group-hover:text-primary-red w-full'
                  onClick={() => {
                    navigate(`/companies/${item.id}`);
                  }}
                >
                  {item?.name}
                </div>
                <div className='text-lg text-main truncate w-full'>{item?.tagline}</div>
                <div className='text-wrap line-clamp-2 text-base text-[#5C5B5B] w-full'>
                  {item?.introduction}
                </div>
                <div className='flex justify-end items-center gap-2 w-full mt-1'>
                  <div className='text-sm font-medium underline text-primary-red'>
                    {item?.jobCount} vị trí tuyển dụng
                  </div>
                  <img src={ICONS.minorRightArrow} className='mt-1' />
                </div>
              </div>
              <FollowIcon className='hover:stroke-primary-red stroke-[#dbdbdb]' />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className='slider-controler !flex !justify-center'>
        <div className='swiper-button-prev slider-arrow left-[43%] ' onClick={handlePrev}>
          <img srcSet='https://c.topdevvn.com/v4/_next/static/media/pagination-prev.563dbf28.svg' />
        </div>
        <div className='swiper-pagination !-top-2'></div>
        <div className='swiper-button-next slider-arrow left-[54.8%] !mb-4 ' onClick={handleNext}>
          <img srcSet='https://c.topdevvn.com/v4/_next/static/media/pagination-next.ec992db3.svg' />
        </div>
      </div>
    </Swiper>
  );
}
