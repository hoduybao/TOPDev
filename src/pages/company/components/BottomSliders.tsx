import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const images: string[] = [
  'https://salt.topdev.vn/pddEafM4R4GYrG-DEJU8JrOLBEYjs_Ib8XU5wjW-fB4/fit/3034/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL3RvcGRldi1iYW5uZXItdmllLXJlcG9ydC03Mjh4OTAtcG5nLTIwMjMwOTE1MDkzMzUyLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/pUcDn1YudcA_vxzGht_CqvYhD169pHG6L3NdHcDcBsg/fit/2912/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2FydGJvYXJkLTMtY29weS0yLTR4LXBuZy0yMDIxMDczMDE3NTcyMC5wbmc.jpg',
];

const SliderItem = ({ image }: { image: string }) => {
  return (
    <div className='w-full h-full flex items-center '>
      <img src={image} alt='company' className='min-h-[150px] object-cover' />
    </div>
  );
};

const BottomSliders = () => {
  return (
    <div className='max-w-[1260px] m-auto'>
      <Swiper
        className='h-full'
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide className='h-full' key={index}>
            <SliderItem image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BottomSliders;
