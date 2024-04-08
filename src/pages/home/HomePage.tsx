import FeaturedCompany from './components/FeaturedCompany';
import SearchJob from './components/SearchJob';
import ToolSection from './components/ToolSection';

export function HomePage() {
  const recommendations = [
    'Java',
    'C++',
    'JavaScript',
    'UI/UX',
    'C#',
    'Fresher',
    'React',
    'Angular',
    'NodeJS',
    'VueJS',
  ];

  return (
    <div className='w-full flex flex-col'>
      <div className="bg-[url('https://c.topdevvn.com/v4/assets/images/bg-search.jpg')] flex justify-center pt-12 h-[470px]">
        <div className='w-4/5 flex flex-col gap-4'>
          <SearchJob />
          <div className='flex gap-4 items-center'>
            <div className='text-base text-[#292929]'>Đề xuất từ khóa:</div>
            {recommendations.map((recommendation, index) => (
              <div
                key={index}
                className='px-3 py-2 border border-[#C2C2C2] text-base bg-white-900 rounded-[4px] hover:bg-[#F5F5F5] cursor-pointer'
              >
                {recommendation}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full bg-white-900 !rounded-t-[54px] -mt-12 flex justify-center'>
        <div className='w-4/5 relative'>
          <ToolSection />
          <div className='mt-[150px] text-[36px] font-bold'>
            ☀️ Công Ty <span className='text-primary-red'>Nổi Bật</span>{' '}
          </div>
          <FeaturedCompany />
          <div className='mt-14 text-[36px] font-bold'>Nhà tuyển dụng nổi bật</div>
          <div className='mt-6 flex justify-center items-center gap-4 '>
            <div className='px-2 hover:shadow rounded'>
              <img
                className='w-[160px] h-[112px] max-h-[112px] max-w-full object-contain'
                loading='lazy'
                src='https://salt.topdev.vn/q7GZOic6ieVpiO8IYd3btuhC68LlqGnBExGO8O1lm_Y/fit/256/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzA5LzI3L1RvcERldi0zYTE0NDFkYzZlZWIzMGE3ZTY3NmM1MzhhOTQzOGNiZi0xNjMyNzI3NTkwLlBORw'
              />
            </div>
            <div className='px-2 hover:shadow rounded'>
              <img
                className='w-[160px] h-[112px] max-h-[112px] max-w-full object-contain'
                loading='lazy'
                src='https://salt.topdev.vn/UWSI8ltuXKQlDy9Tb9XSftQqqAb_H8Uygop_YAXbnQQ/fit/256/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzA1LzE2L1RvcERldi1Ub3BEZXYtODFmMzY3N2NkNjBkMmNiOWViNmQ3ZmVkNmI3ZDUyNTEtMTY1ODExMDkwNy0xNjg0MjAzNzQ4LnBuZw'
              />
            </div>
            <div className='px-2 hover:shadow rounded'>
              <img
                className='w-[160px] h-[112px] max-h-[112px] max-w-full object-contain'
                loading='lazy'
                src='https://salt.topdev.vn/SlaB0r9XhFcEICb6fMEs2-0HCwIjDBiyTcQUDwkL6Vw/fit/256/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzA0LzExL1RvcERldi1VUFAtTG9nby0xNjgxMTc4OTE2LnBuZw'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
