import { Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';

export const Companies = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col w-full'>
      <h2 className='text-3xl font-bold'>Company information</h2>
      <div className='mt-4 flex flex-col items-center'>
        <div className='mt-4 first:mt-0 w-full'>
          <div className='group flex max-w-[832px] cursor-pointer items-start gap-4 rounded border border-white-900 bg-white-900 p-4 transition-all hover:border-[#FFBCB0] hover:bg-[#FEEEEB] hover:shadow-md'>
            <div className='h-28 w-40 items-center justify-items-center'>
              <a target='_blank' href='/companies/luxoft-vietnam-company-ltd-2-50940'>
                <img
                  alt='Luxoft Vietnam Company Ltd.'
                  loading='lazy'
                  width='160'
                  height='112'
                  decoding='async'
                  data-nimg='1'
                  className='inline-block h-28 w-40 rounded-xl bg-white-900 object-contain p-2 text-transparent'
                  srcSet='https://salt.topdev.vn/NrRiSkw02FnjUA3tE_EhxKxPOFPOsna1Cj8I-Z94SS8/fit/256/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzA4LzA5L1RvcERldi1kNGMxZGM1OTI5ZTZiYWNmZDNkYTVhZjA2YmJlN2ZlZC0xNjI4NDk4Mzc4LlBORw 1x, https://salt.topdev.vn/uGJ726807Fb9dPbYxKtWhYnidgvn495Lp2yTkvEm58Y/fit/384/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzA4LzA5L1RvcERldi1kNGMxZGM1OTI5ZTZiYWNmZDNkYTVhZjA2YmJlN2ZlZC0xNjI4NDk4Mzc4LlBORw 2x'
                  src='https://salt.topdev.vn/uGJ726807Fb9dPbYxKtWhYnidgvn495Lp2yTkvEm58Y/fit/384/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzA4LzA5L1RvcERldi1kNGMxZGM1OTI5ZTZiYWNmZDNkYTVhZjA2YmJlN2ZlZC0xNjI4NDk4Mzc4LlBORw'
                />
              </a>
            </div>
            <div className='flex-1'>
              <a target='_blank' href='/companies/luxoft-vietnam-company-ltd-2-50940'>
                <h3 className='line-clamp-1 text-lg font-bold transition-all text-[#292929] hover:text-[#292929]'>
                  Luxoft Vietnam Company Ltd.
                </h3>
                <div className=' mt-2 flex flex-wrap items-start text-base capitalize text-[#5C5B5B]'>
                  Quận Tân Bình, Hồ Chí Minh
                  <span className='whitespace-nowrap'>
                    <span className='mx-5 inline-block h-[6px] w-[6px] rounded-full bg-[#5C5B5B] align-middle'></span>
                    100-499 Employees
                  </span>
                </div>
                <ul className=' text-base capitalize text-[#5C5B5B]'></ul>
              </a>
              <div className='mt-3 line-clamp-1'>
                <a className='mr-2 inline-block' href='/it-jobs/c-plus-plus-kt19'>
                  <span className='whitespace-nowrap rounded border border-solid font-normal transition-all inline-flex items-center justify-center border-[#EDFBFF] text-[#1047B2] bg-[#EDFBFF] hover:border-[#1047B2] h-[1.625rem] px-2 text-xs md:h-7 md:px-2 md:text-sm'>
                    C++
                  </span>
                </a>
              </div>
              <div className='mt-2'></div>
            </div>
            <Tooltip placement='top' title={t('follow')}>
              <div className=' text-right'>
                <span className='inline-block select-none text-2xl text-[#5C5B5B] hover:text-primary-red'>
                  <div className='w-fit'>
                    <button type='button' aria-label='Follow button'>
                      <span className='text-[#5C5B5B] cursor-pointer select-none text-xl leading-none hover:text-primary-red lg:text-2xl'>
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
                  </div>
                </span>
              </div>
            </Tooltip>
          </div>
        </div>
        <div className='mt-4 first:mt-0 w-full'>
          <div className='group flex max-w-[832px] cursor-pointer items-start gap-4 rounded border border-white-900 bg-white-900 p-4 transition-all hover:border-[#FFBCB0] hover:bg-[#FEEEEB] hover:shadow-md'>
            <div className='h-28 w-40 items-center justify-items-center'>
              <a target='_blank' href='/companies/luxoft-vietnam-company-ltd-2-50940'>
                <img
                  alt='Luxoft Vietnam Company Ltd.'
                  loading='lazy'
                  width='160'
                  height='112'
                  decoding='async'
                  data-nimg='1'
                  className='inline-block h-28 w-40 rounded-xl bg-white-900 object-contain p-2 text-transparent'
                  srcSet='https://salt.topdev.vn/NrRiSkw02FnjUA3tE_EhxKxPOFPOsna1Cj8I-Z94SS8/fit/256/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzA4LzA5L1RvcERldi1kNGMxZGM1OTI5ZTZiYWNmZDNkYTVhZjA2YmJlN2ZlZC0xNjI4NDk4Mzc4LlBORw 1x, https://salt.topdev.vn/uGJ726807Fb9dPbYxKtWhYnidgvn495Lp2yTkvEm58Y/fit/384/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzA4LzA5L1RvcERldi1kNGMxZGM1OTI5ZTZiYWNmZDNkYTVhZjA2YmJlN2ZlZC0xNjI4NDk4Mzc4LlBORw 2x'
                  src='https://salt.topdev.vn/uGJ726807Fb9dPbYxKtWhYnidgvn495Lp2yTkvEm58Y/fit/384/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzA4LzA5L1RvcERldi1kNGMxZGM1OTI5ZTZiYWNmZDNkYTVhZjA2YmJlN2ZlZC0xNjI4NDk4Mzc4LlBORw'
                />
              </a>
            </div>
            <div className='flex-1'>
              <a target='_blank' href='/companies/luxoft-vietnam-company-ltd-2-50940'>
                <h3 className='line-clamp-1 text-lg font-bold transition-all text-[#292929] hover:text-[#292929]'>
                  Luxoft Vietnam Company Ltd.
                </h3>
                <div className=' mt-2 flex flex-wrap items-start text-base capitalize text-[#5C5B5B]'>
                  Quận Tân Bình, Hồ Chí Minh
                  <span className='whitespace-nowrap'>
                    <span className='mx-5 inline-block h-[6px] w-[6px] rounded-full bg-[#5C5B5B] align-middle'></span>
                    100-499 Employees
                  </span>
                </div>
                <ul className=' text-base capitalize text-[#5C5B5B]'></ul>
              </a>
              <div className='mt-3 line-clamp-1'>
                <a className='mr-2 inline-block' href='/it-jobs/c-plus-plus-kt19'>
                  <span className='whitespace-nowrap rounded border border-solid font-normal transition-all inline-flex items-center justify-center border-[#EDFBFF] text-[#1047B2] bg-[#EDFBFF] hover:border-[#1047B2] h-[1.625rem] px-2 text-xs md:h-7 md:px-2 md:text-sm'>
                    C++
                  </span>
                </a>
              </div>
              <div className='mt-2'></div>
            </div>
            <Tooltip placement='top' title={t('follow')}>
              <div className=' text-right'>
                <span className='inline-block select-none text-2xl text-[#5C5B5B] hover:text-primary-red'>
                  <div className='w-fit'>
                    <button type='button' aria-label='Follow button'>
                      <span className='text-[#5C5B5B] cursor-pointer select-none text-xl leading-none hover:text-primary-red lg:text-2xl'>
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
                  </div>
                </span>
              </div>
            </Tooltip>
          </div>
        </div>
        <button
          type='button'
          className='inline-flex items-center justify-center gap-1 border border-solid text-sm transition-all disabled:cursor-not-allowed lg:gap-3 lg:text-base border-primary-red bg-transparent text-primary-red hover:bg-[#FEEEEB] dark:border-white-900 dark:text-white-900 undefined h-9 rounded px-4 font-semibold lg:h-12 lg:px-6 w-full lg:w-[238px] mt-4'
        >
          <span className=''>{t('view_more')}</span>
        </button>
      </div>
    </div>
  );
};
