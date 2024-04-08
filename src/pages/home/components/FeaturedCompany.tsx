import { Swiper, SwiperSlide } from 'swiper/react';
import FollowIcon from '../../../../public/assets/icons/follow';

// Import Swiper styles
import { ICONS } from '@/config/icons';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

export default function FeaturedCompany() {
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
      modules={[EffectCoverflow, Pagination, Navigation]}
      className='swiper_container'
    >
      <SwiperSlide>
        <div className='w-[816px] h-[190px] relative group flex justify-center company_item_slider'>
          <img
            srcSet='https://salt.topdev.vn/yZu49eJi-tc20ZQ95HZP7mZ99USaGC_dajSPmT5SN8k/fit/1080/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzExLzE1L1RvcERldi1lOTU1NzNhMDVlYTU4MGZiZDliNC0xNzAwMDQyODUyLmpwZw'
            className='w-full h-full rounded object-cover'
          />
          <div className='absolute bottom-0 translate-y-1/2 bg-white shadow-md w-[94%] rounded p-4 flex gap-2 cursor-pointer'>
            <div className='p-2 w-[160px] h-[112px]'>
              <img
                srcSet='https://salt.topdev.vn/mipLnM6MrEoN03jjKtZvBf9kPk6EwOQH3jj6H66gFCI/fit/256/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzExLzAzL1RvcERldi1Mb2dvLUNvbmctVHktQ3AtQ2h1bmctS2hvYW4tVklFVENBUC0xNjk4OTk4OTcwLnBuZw'
                className='w-full h-full object-contain'
              />
            </div>
            <div className='flex flex-col items-start gap-1 pl-8 pr-4 truncate w-full'>
              <div className='text-lg font-bold group-hover:text-primary-red w-full'>
                VIETCAP SECURITIES
              </div>
              <div className='text-lg text-main truncate w-full'>
                VIETCAP SECURITIES JOINT STOCK COMPANY
              </div>
              <div className='text-wrap line-clamp-2 text-base text-[#5C5B5B] w-full'>
                Vietcap TradingOur trading platform is built on the core values of transparency,
                efficiency and usability. It aims to provide investors with the tools to make the
                best investing and financial planning decisions that will shape their
              </div>
              <div className='flex justify-end items-center gap-2 w-full mt-1'>
                <div className='text-sm font-medium underline text-primary-red'>
                  4 vị trí tuyển dụng
                </div>
                <img src={ICONS.minorRightArrow} className='mt-1' />
              </div>
            </div>
            <FollowIcon className='hover:stroke-primary-red stroke-[#dbdbdb] !w-' />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <div className='w-[816px] h-[190px] relative group flex justify-center company_item_slider'>
          <img
            srcSet='https://salt.topdev.vn/yZu49eJi-tc20ZQ95HZP7mZ99USaGC_dajSPmT5SN8k/fit/1080/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzExLzE1L1RvcERldi1lOTU1NzNhMDVlYTU4MGZiZDliNC0xNzAwMDQyODUyLmpwZw'
            className='w-full h-full rounded object-cover'
          />
          <div className='absolute bottom-0 translate-y-1/2 bg-white shadow-md w-[94%] rounded p-4 flex gap-2 cursor-pointer'>
            <div className='p-2 w-[160px] h-[112px]'>
              <img
                srcSet='https://salt.topdev.vn/mipLnM6MrEoN03jjKtZvBf9kPk6EwOQH3jj6H66gFCI/fit/256/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzExLzAzL1RvcERldi1Mb2dvLUNvbmctVHktQ3AtQ2h1bmctS2hvYW4tVklFVENBUC0xNjk4OTk4OTcwLnBuZw'
                className='w-full h-full object-contain'
              />
            </div>
            <div className='flex flex-col items-start gap-1 pl-8 pr-4 truncate w-full'>
              <div className='text-lg font-bold group-hover:text-primary-red w-full'>
                VIETCAP SECURITIES
              </div>
              <div className='text-lg text-main truncate w-full'>
                VIETCAP SECURITIES JOINT STOCK COMPANY
              </div>
              <div className='text-wrap line-clamp-2 text-base text-[#5C5B5B] w-full'>
                Vietcap TradingOur trading platform is built on the core values of transparency,
                efficiency and usability. It aims to provide investors with the tools to make the
                best investing and financial planning decisions that will shape their
              </div>
              <div className='flex justify-end items-center gap-2 w-full mt-1'>
                <div className='text-sm font-medium underline text-primary-red'>
                  4 vị trí tuyển dụng
                </div>
                <img src={ICONS.minorRightArrow} className='mt-1' />
              </div>
            </div>
            <FollowIcon className='hover:stroke-primary-red stroke-[#dbdbdb] !w-' />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <div className='w-[816px] h-[190px] relative group flex justify-center company_item_slider'>
          <img
            srcSet='https://salt.topdev.vn/yZu49eJi-tc20ZQ95HZP7mZ99USaGC_dajSPmT5SN8k/fit/1080/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzExLzE1L1RvcERldi1lOTU1NzNhMDVlYTU4MGZiZDliNC0xNzAwMDQyODUyLmpwZw'
            className='w-full h-full rounded object-cover'
          />
          <div className='absolute bottom-0 translate-y-1/2 bg-white shadow-md w-[94%] rounded p-4 flex gap-2 cursor-pointer'>
            <div className='p-2 w-[160px] h-[112px]'>
              <img
                srcSet='https://salt.topdev.vn/mipLnM6MrEoN03jjKtZvBf9kPk6EwOQH3jj6H66gFCI/fit/256/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzExLzAzL1RvcERldi1Mb2dvLUNvbmctVHktQ3AtQ2h1bmctS2hvYW4tVklFVENBUC0xNjk4OTk4OTcwLnBuZw'
                className='w-full h-full object-contain'
              />
            </div>
            <div className='flex flex-col items-start gap-1 pl-8 pr-4 truncate w-full'>
              <div className='text-lg font-bold group-hover:text-primary-red w-full'>
                VIETCAP SECURITIES
              </div>
              <div className='text-lg text-main truncate w-full'>
                VIETCAP SECURITIES JOINT STOCK COMPANY
              </div>
              <div className='text-wrap line-clamp-2 text-base text-[#5C5B5B] w-full'>
                Vietcap TradingOur trading platform is built on the core values of transparency,
                efficiency and usability. It aims to provide investors with the tools to make the
                best investing and financial planning decisions that will shape their
              </div>
              <div className='flex justify-end items-center gap-2 w-full mt-1'>
                <div className='text-sm font-medium underline text-primary-red'>
                  4 vị trí tuyển dụng
                </div>
                <img src={ICONS.minorRightArrow} className='mt-1' />
              </div>
            </div>
            <FollowIcon className='hover:stroke-primary-red stroke-[#dbdbdb] !w-' />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <div className='w-[816px] h-[190px] relative group flex justify-center company_item_slider'>
          <img
            srcSet='https://salt.topdev.vn/yZu49eJi-tc20ZQ95HZP7mZ99USaGC_dajSPmT5SN8k/fit/1080/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzExLzE1L1RvcERldi1lOTU1NzNhMDVlYTU4MGZiZDliNC0xNzAwMDQyODUyLmpwZw'
            className='w-full h-full rounded object-cover'
          />
          <div className='absolute bottom-0 translate-y-1/2 bg-white shadow-md w-[94%] rounded p-4 flex gap-2 cursor-pointer'>
            <div className='p-2 w-[160px] h-[112px]'>
              <img
                srcSet='https://salt.topdev.vn/mipLnM6MrEoN03jjKtZvBf9kPk6EwOQH3jj6H66gFCI/fit/256/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzExLzAzL1RvcERldi1Mb2dvLUNvbmctVHktQ3AtQ2h1bmctS2hvYW4tVklFVENBUC0xNjk4OTk4OTcwLnBuZw'
                className='w-full h-full object-contain'
              />
            </div>
            <div className='flex flex-col items-start gap-1 pl-8 pr-4 truncate w-full'>
              <div className='text-lg font-bold group-hover:text-primary-red w-full'>
                VIETCAP SECURITIES
              </div>
              <div className='text-lg text-main truncate w-full'>
                VIETCAP SECURITIES JOINT STOCK COMPANY
              </div>
              <div className='text-wrap line-clamp-2 text-base text-[#5C5B5B] w-full'>
                Vietcap TradingOur trading platform is built on the core values of transparency,
                efficiency and usability. It aims to provide investors with the tools to make the
                best investing and financial planning decisions that will shape their
              </div>
              <div className='flex justify-end items-center gap-2 w-full mt-1'>
                <div className='text-sm font-medium underline text-primary-red'>
                  4 vị trí tuyển dụng
                </div>
                <img src={ICONS.minorRightArrow} className='mt-1' />
              </div>
            </div>
            <FollowIcon className='hover:stroke-primary-red stroke-[#dbdbdb] !w-' />
          </div>
        </div>
      </SwiperSlide>
      <div className='slider-controler !flex !justify-center !items-center gap-2'>
        <div className='swiper-button-prev slider-arrow left-[43%] bottom-4'>
          <img srcSet='https://c.topdevvn.com/v4/_next/static/media/pagination-prev.563dbf28.svg' />
        </div>

        <div className='swiper-pagination mt-4'></div>
        <div className='swiper-button-next slider-arrow left-[54.8%]'>
          <img srcSet='https://c.topdevvn.com/v4/_next/static/media/pagination-next.ec992db3.svg' />
        </div>
      </div>
    </Swiper>
  );
}
