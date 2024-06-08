import { useGetCompaniesHomePageQuery } from '@/+core/redux/apis/common/home/home.api';
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import FeaturedCompany from './components/FeaturedCompany';
import PopularCompany from './components/PopularCompany';
import SearchJob from './components/SearchJob';
import ToolSection from './components/ToolSection';

export function HomePage() {
  const navigate = useNavigate();

  const { data, isFetching } = useGetCompaniesHomePageQuery({});

  return (
    <div className="w-full flex flex-col bg-[url('https://c.topdevvn.com/v4/assets/images/bg-search.jpg')]">
      <div className='flex justify-center py-12'>
        <div className='w-4/5 flex flex-col gap-4'>
          <SearchJob
            onSubmit={(values) => {
              navigate(`/it-jobs${values.keywords && '?keywords=' + values.keywords}`);
            }}
          />
        </div>
      </div>
      <Spin spinning={isFetching}>
        <div className='w-full bg-white-900 !rounded-t-[54px] mt-[140px] pb-[80px] flex justify-center'>
          <div className='w-4/5 relative'>
            <ToolSection />
            <div className='mt-[150px] text-[36px] font-bold'>
              ☀️ Công Ty <span className='text-primary-red'>Nổi Bật</span>{' '}
            </div>
            <FeaturedCompany data={data?.data?.supperSpotlight?.slice(0, 5)} />
            <div className='mt-14 text-[36px] font-bold'>Nhà tuyển dụng nổi bật</div>
            <div className='mt-6 flex justify-center items-center gap-4 '>
              {data?.data?.featured?.slice(0, 6).map((item, index) => (
                <div className='px-2 hover:shadow rounded' key={index}>
                  <img
                    className='w-[160px] h-[112px] max-h-[112px] max-w-full object-contain'
                    loading='lazy'
                    src={item?.logo}
                  />
                </div>
              ))}
            </div>
            <div className='mt-14 text-[36px] font-bold'>✨ Các Công Ty Phổ Biến</div>

            <PopularCompany data={data?.data?.popular?.slice(0, 9)} />
          </div>
        </div>
      </Spin>
    </div>
  );
}
