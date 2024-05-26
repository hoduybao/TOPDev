import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from 'swiper/modules';
import './swiper.css';

const images: string[] = [
  'https://salt.topdev.vn/pddEafM4R4GYrG-DEJU8JrOLBEYjs_Ib8XU5wjW-fB4/fit/3034/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL3RvcGRldi1iYW5uZXItdmllLXJlcG9ydC03Mjh4OTAtcG5nLTIwMjMwOTE1MDkzMzUyLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/KXKq7OzonHi6q5pCDkm__xjGLxCvRjGX6rFG3Z5w-3Y/fit/1400/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2Jhbm5lci1jdi10b3BkZXYtdm4tcG5nLTIwMjEwOTA4MTAyNjMzLnBuZw.jpg',
  'https://salt.topdev.vn/pUcDn1YudcA_vxzGht_CqvYhD169pHG6L3NdHcDcBsg/fit/2912/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2FydGJvYXJkLTMtY29weS0yLTR4LXBuZy0yMDIxMDczMDE3NTcyMC5wbmc.jpg',
  'https://salt.topdev.vn/pUcDn1YudcA_vxzGht_CqvYhD169pHG6L3NdHcDcBsg/fit/2912/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2FydGJvYXJkLTMtY29weS0yLTR4LXBuZy0yMDIxMDczMDE3NTcyMC5wbmc.jpg',
  'https://salt.topdev.vn/pUcDn1YudcA_vxzGht_CqvYhD169pHG6L3NdHcDcBsg/fit/2912/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2FydGJvYXJkLTMtY29weS0yLTR4LXBuZy0yMDIxMDczMDE3NTcyMC5wbmc.jpg',
  'https://salt.topdev.vn/pUcDn1YudcA_vxzGht_CqvYhD169pHG6L3NdHcDcBsg/fit/2912/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2FydGJvYXJkLTMtY29weS0yLTR4LXBuZy0yMDIxMDczMDE3NTcyMC5wbmc.jpg',
  'https://salt.topdev.vn/pUcDn1YudcA_vxzGht_CqvYhD169pHG6L3NdHcDcBsg/fit/2912/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2FydGJvYXJkLTMtY29weS0yLTR4LXBuZy0yMDIxMDczMDE3NTcyMC5wbmc.jpg',
  'https://salt.topdev.vn/pUcDn1YudcA_vxzGht_CqvYhD169pHG6L3NdHcDcBsg/fit/2912/0/ce/1/aHR0cHM6Ly9uZXR3b3JrLnRvcGRldi52bi91cGxvYWRzL2FydGJvYXJkLTMtY29weS0yLTR4LXBuZy0yMDIxMDczMDE3NTcyMC5wbmc.jpg',
];

const chunkImages = (images: string[], chunkSize: number) => {
  let result = [];
  for (let i = 0; i < images.length; i += chunkSize) {
    result.push(images.slice(i, i + chunkSize));
  }
  return result;
};

const ListCompanies = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        // grabCursor={true}
        centeredSlides={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation]}
      >
        {chunkImages(images, 18).map((images, index) => {
          console.log(images);

          return (
            <SwiperSlide key={index}>
              <div className='flex flex-row flex-wrap items-start h-full w-full justify-start'>
                {images.map((image, index) => (
                  <div key={image + index} className='w-[calc(100%/6)] h-[33%] p-2 box-border'>
                    <img className='object-cover h-full' src={image} alt='company' />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          );
        })}

        <div className='slider-controler !flex !justify-center !items-center gap-2'>
          <div className='swiper-button-prev slider-arrow left-[43%] bottom-4'>
            <img srcSet='https://c.topdevvn.com/v4/_next/static/media/pagination-prev.563dbf28.svg' />
          </div>

          <div className='swiper-pagination mt-4'></div>
          <div className='swiper-button-next slider-arrow left-[53%]'>
            <img srcSet='https://c.topdevvn.com/v4/_next/static/media/pagination-next.ec992db3.svg' />
          </div>
        </div>
      </Swiper>
    </>
  );
};

const TopdevCustomers = () => {
  return (
    <div className='p-4'>
      <h3 className='font-bold text-orange-500 text-center text-2xl mb-4'>
        Hơn 3,500 khách hàng tin dùng
      </h3>
      <p className='text-gray-400 text-center'>
        Cả các công ty Việt Nam, FDI và đa quốc gia, trải rộng tất cả các ngành từ ngân hàng,
        fintech đến gia công phần mềm (outsource), thương mại điện tử, truyền thông, quảng cáo, v.v.
      </p>
      <ListCompanies />
    </div>
  );
};
export default TopdevCustomers;
