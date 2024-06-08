import {
  JobTypeEnum,
  JobTypeTranslation,
  LevelEnum,
  LevelTranslation,
  TechnicalsEnum,
  TechnicalsEnumTranslation,
} from '@/+core/enums/job.enum';
import { ListJobsRES } from '@/+core/redux/apis/common/job-service/job-service.response';
import { Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';

type JobsProps = {
  data?: ListJobsRES[];
  page: number;
  limit: number;
  total?: number;
  keywords?: string[];
  handleFilterChange?: (values: any) => void;
};

export const Jobs = ({ data, limit = 10, total, keywords, handleFilterChange }: JobsProps) => {
  const { t } = useTranslation();
  console.log(data);
  return (
    <div className='flex flex-col w-full'>
      <h1 className='text-sm font-bold lg:text-xl'>
        <span className='text-primary-red'>{total} </span>
        {t('minor_jobs')}
        <span className='ml-2 inline-flex flex-wrap gap-2 font-normal'>
          {keywords?.map((keyword, index) => (
            <span
              key={index}
              className='whitespace-nowrap rounded border border-solid font-normal transition-all inline-flex items-center justify-center border-[#1047B2] text-[#1047B2] bg-[#EDFBFF] h-[1.625rem] px-2 text-xs md:h-7 md:px-2 md:text-sm lg:h-[2.375rem] lg:px-3 lg:text-base'
            >
              {keyword}
            </span>
          ))}
        </span>
      </h1>
      <div className='mt-4 flex flex-col items-center'>
        {data?.map((job, index) => (
          <div key={index} className='mb-4 last:mb-0 w-full'>
            <div className='relative rounded border border-solid transition-all hover:shadow-md border-primary-red bg-[#FEEEEB]'>
              <div className='flex items-start justify-between gap-6 p-4'>
                <div>
                  <a
                    className='block h-[7.5rem] w-[10rem]'
                    target='_blank'
                    href={`/jobs/${job.id}`}
                    rel='noreferrer'
                  >
                    <img
                      alt='LG CNS Việt Nam'
                      loading='lazy'
                      width='160'
                      height='112'
                      decoding='async'
                      data-nimg='1'
                      className='h-28 w-40 max-w-full rounded-xl bg-white-900 object-contain p-2 text-transparent'
                      src={job?.company?.logo || ''}
                    />
                  </a>
                </div>
                <div className='flex-1'>
                  <h3 className='line-clamp-1'>
                    <a
                      target='_blank'
                      className='text-lg font-bold transition-all text-primary-red hover:text-primary-red'
                      href={`/jobs/${job.id}`}
                      rel='noreferrer'
                    >
                      {job?.title}
                    </a>
                  </h3>
                  <div className='mt-1 line-clamp-1'>
                    <a
                      target='_blank'
                      className='text-[#424242] transition-all hover:text-primary-red'
                      href={`/jobs/${job.id}`}
                      rel='noreferrer'
                    >
                      {job?.company?.name}
                    </a>
                  </div>
                  <div className='mt-2 flex items-center justify-start gap-5'>
                    <div className='text-primary-red'>
                      <p>
                        <span className='cursor-pointer text-primary-red transition-all hover:underline'>
                          {t('loginToViewSalary')}
                        </span>
                      </p>
                    </div>
                    <div className='text-[#424242]'>
                      <svg
                        stroke='#424242'
                        fill='#424242'
                        strokeWidth='0'
                        viewBox='0 0 256 256'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z'></path>
                      </svg>
                    </div>
                    <div>
                      <p className='text-[#5C5B5B]'>
                        {job.level?.map((item) => LevelTranslation[item as LevelEnum]).join(', ')}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-wrap items-end gap-2 text-[#5C5B5B]'>
                    <p>
                      {`${job.addressDetails} (${JobTypeTranslation[job.jobType as JobTypeEnum]})`}{' '}
                    </p>
                    {/* <p>{job.}</p> */}
                  </div>
                  <div className='mt-2'>
                    <div
                      className=' text-[#424242] line-clamp-3'
                      dangerouslySetInnerHTML={{ __html: job.jobDescription || '' }}
                    ></div>
                  </div>
                  <hr className='mt-2 h-px w-full bg-[#DBDBDB]' />
                  <div className='mt-4 flex items-center justify-between'>
                    <div className='line-clamp-1'>
                      {job?.technicals?.map((technical, index) => (
                        <a key={index} className='mr-2 inline-block' href='/it-jobs/java-kt21'>
                          <span className='whitespace-nowrap rounded border border-solid font-normal transition-all inline-flex items-center justify-center border- text-[#1047B2] bg-[#EDFBFF] hover:border-[#1047B2] h-[1.625rem] px-2 text-xs md:h-7 md:px-2 md:text-sm'>
                            {TechnicalsEnumTranslation[technical as TechnicalsEnum]}
                          </span>
                        </a>
                      ))}
                    </div>
                    <p className='whitespace-nowrap text-sm text-[#757575]'>Posted 1 day ago</p>
                  </div>
                </div>
                <div>
                  <Tooltip placement='top' title={t('follow')}>
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
            </div>
          </div>
        ))}

        <button
          onClick={() => {
            handleFilterChange && handleFilterChange({ page: 1, limit: limit + 10 });
          }}
          type='button'
          className={`${
            limit >= (total || 10) && 'hidden'
          } inline-flex items-center justify-center gap-1 border border-solid text-sm transition-all disabled:cursor-not-allowed lg:gap-3 lg:text-base border-primary-red bg-transparent text-primary-red hover:bg-[#FEEEEB] dark:border-white-900 dark:text-white-900 undefined h-9 rounded px-4 font-semibold lg:h-12 lg:px-6 w-full lg:w-[238px]`}
        >
          <span className=''>{t('view_more')}</span>
        </button>
      </div>
    </div>
  );
};
