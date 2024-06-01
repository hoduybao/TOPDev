import { CompanyHome } from '@/+core/redux/apis/common/home/home.response';
import { Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';

type PopularCompanyProps = {
  data?: CompanyHome[];
};

export default function PopularCompany({ data }: PopularCompanyProps) {
  const { t } = useTranslation();

  return (
    <div className='grid grid-cols-3 gap-6 mt-8'>
      {data?.map((item, index) => (
        <div
          key={index}
          className='rounded border border-solid bg-white-900 p-4 transition-all hover:border-primary-200 hover:shadow-md border-gray-200 h-full'
        >
          <div className='just flex items-start justify-between'>
            <a
              target='_blank'
              title='Mid HTS (Home Trading System) Developer - Windows Desktop Application'
              href='/viec-lam/mid-hts-home-trading-system-developer-windows-desktop-application-daoukiwoom-innovation-2033267?src=topdev_home&amp;medium=popularcompanies'
            >
              <img
                alt='DaouKiwoom Innovation'
                loading='lazy'
                width='120'
                height='70'
                decoding='async'
                data-nimg='1'
                className='h-[66px] w-[88px] max-w-full bg-white-900 object-contain md:h-[70px] md:w-[100px]'
                srcSet='https://salt.topdev.vn/EAa4z6lF6z3JJ5kxL-iMp0DCmnyPfgjscTomQuJ0lF4/fit/128/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzEwLzEzL1RvcERldi1hMmUwZTdlMTk4MmYzYzI1NzQ5MjAxZTNhNDY1ODNhZi0xNjM0MTA3NzIyLlBORw 1x, https://salt.topdev.vn/siA_Jl35y8CiTqWqJZs4_UlogxsRZs5zu27njUImREg/fit/256/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzEwLzEzL1RvcERldi1hMmUwZTdlMTk4MmYzYzI1NzQ5MjAxZTNhNDY1ODNhZi0xNjM0MTA3NzIyLlBORw 2x'
                src='https://salt.topdev.vn/siA_Jl35y8CiTqWqJZs4_UlogxsRZs5zu27njUImREg/fit/256/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzEwLzEzL1RvcERldi1hMmUwZTdlMTk4MmYzYzI1NzQ5MjAxZTNhNDY1ODNhZi0xNjM0MTA3NzIyLlBORw'
              />
            </a>
            <div>
              <Tooltip placement='bottom' title={t('follow')}>
                <div className='w-fit'>
                  <button type='button' aria-label='Follow button'>
                    <span className='text-gray cursor-pointer select-none text-xl leading-none hover:text-primary-red lg:text-2xl'>
                      <svg
                        stroke='currentColor'
                        fill='none'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>{' '}
              </Tooltip>
            </div>
          </div>
          <div className='mt-2'>
            <h3 className='text-sm font-bold md:text-lg line-clamp-1'>
              <a
                target='_blank'
                title='Mid HTS (Home Trading System) Developer - Windows Desktop Application'
                className='transition-all hover:text-primary-red'
                href='/viec-lam/mid-hts-home-trading-system-developer-windows-desktop-application-daoukiwoom-innovation-2033267?src=topdev_home&amp;medium=popularcompanies'
              >
                Mid HTS (Home Trading System) Developer - Windows Desktop Application
              </a>
            </h3>
            <div className='mt-1 line-clamp-1 text-[#5C5B5B] md:mt-2 text-sm font-semibold md:text-base'>
              <a
                target='_blank'
                className='transition-all hover:text-primary-red'
                href='/viec-lam/mid-hts-home-trading-system-developer-windows-desktop-application-daoukiwoom-innovation-2033267?src=topdev_home&amp;medium=popularcompanies'
              >
                <h3>DaouKiwoom Innovation</h3>
              </a>
            </div>
            <div className='mt-2 line-clamp-1 text-xs font-normal text-primary-red lg:text-base'>
              <p>1.000 USD to 2.000 USD</p>
            </div>
            <p className='line-clamp-1 text-sm text-[#5C5B5B] lg:text-base'>
              Quận Bình Thạnh, Hồ Chí Minh
            </p>
            <div className='mt-2'>
              <div className='line-clamp-1 gap-2'>
                <a
                  className='mr-2 inline-block'
                  href='/viec-lam-it/agile-kt2?src=topdev_home&amp;medium=skilltag'
                >
                  <span className='whitespace-nowrap rounded border border-solid font-normal transition-all inline-flex items-center justify-center border-blue-light text-blue-dark bg-blue-light hover:border-blue-dark h-[1.625rem] px-2 text-xs md:h-7 md:px-2 md:text-sm'>
                    Agile
                  </span>
                </a>
                <a
                  className='mr-2 inline-block'
                  href='/viec-lam-it/c-plus-plus-kt19?src=topdev_home&amp;medium=skilltag'
                >
                  <span className='whitespace-nowrap rounded border border-solid font-normal transition-all inline-flex items-center justify-center border-blue-light text-blue-dark bg-blue-light hover:border-blue-dark h-[1.625rem] px-2 text-xs md:h-7 md:px-2 md:text-sm'>
                    C++
                  </span>
                </a>
                <a
                  className='mr-2 inline-block'
                  href='/viec-lam-it/javascript-kt22?src=topdev_home&amp;medium=skilltag'
                >
                  <span className='whitespace-nowrap rounded border border-solid font-normal transition-all inline-flex items-center justify-center border-blue-light text-blue-dark bg-blue-light hover:border-blue-dark h-[1.625rem] px-2 text-xs md:h-7 md:px-2 md:text-sm'>
                    JavaScript
                  </span>
                </a>
                <a
                  className='mr-2 inline-block'
                  href='/viec-lam-it/mvc-kt26?src=topdev_home&amp;medium=skilltag'
                >
                  <span className='whitespace-nowrap rounded border border-solid font-normal transition-all inline-flex items-center justify-center border-blue-light text-blue-dark bg-blue-light hover:border-blue-dark h-[1.625rem] px-2 text-xs md:h-7 md:px-2 md:text-sm'>
                    MVC
                  </span>
                </a>
                <a
                  className='mr-2 inline-block'
                  href='/viec-lam-it/mvvm-kt7409?src=topdev_home&amp;medium=skilltag'
                >
                  <span className='whitespace-nowrap rounded border border-solid font-normal transition-all inline-flex items-center justify-center border-blue-light text-blue-dark bg-blue-light hover:border-blue-dark h-[1.625rem] px-2 text-xs md:h-7 md:px-2 md:text-sm'>
                    MVVM
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
