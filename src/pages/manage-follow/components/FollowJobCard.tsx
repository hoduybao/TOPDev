import { useTranslation } from 'react-i18next';
import { JobType } from '@/+core/utilities/types/recruitment.type';

interface PropType {
  job: JobType;
  handleUnfollowJob: (job: JobType) => void;
  handleApplyJob: (job: JobType) => void;
}

const FollowJobCard = (props: PropType) => {
  const { job, handleUnfollowJob, handleApplyJob } = props;

  const { t } = useTranslation();

  const JOB_TITLE_LENGTH = 50;

  const summaryJobTitle = (title: string) => {
    let newTitle = '';

    for (let i = 0; i < JOB_TITLE_LENGTH; ++i) {
      if (title[i]) newTitle += title[i];
    }

    if (title?.length > JOB_TITLE_LENGTH) newTitle += '...';

    return newTitle;
  };

  return (
    <div>
      <div className='w-[100%] h-[180px] p-4 flex gap-5 border border-t-gray-700 border-x-gray-700'>
        <div className='w-[30%]'>
          <img className='w-full' src={job?.company?.logo} alt='company-logo' />
        </div>
        <div className='w-[70%] flex flex-col justify-between'>
          <h1 className='text-[18px] font-bold'>
            {job?.title ? summaryJobTitle(job?.title) : 'Job not found'}
          </h1>

          <div>
            <p className='mt-1 text-[16px]'>
              {job?.company?.addresses && job.company.addresses.length
                ? `${job.company.addresses[0].addressDetail} ${job.company.addresses[0].city}`
                : null}
            </p>
            <div className='mt-6 text-primary-red flex items-center justify-between'>
              <p className='flex items-center gap-2 max-w-[200px] truncate text-[16px] font-semibold'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-circle-dollar-sign'
                >
                  <circle cx='12' cy='12' r='10' />
                  <path d='M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8' />
                  <path d='M12 18V6' />
                </svg>
                {job.minSalary ? job.minSalary : 0} - {job?.maxSalary}
              </p>
              <button
                onClick={() => {
                  handleUnfollowJob(job);
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-bookmark'
                >
                  <path d='m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`w-[100%] py-2 text-primary-red border border-primary-red transition duration-500 hover:text-[#fff] hover:bg-primary-red`}
        onClick={() => {
          handleApplyJob(job);
        }}
      >
        <p className='text-[18px] font-bold'>{t('availableJob')}</p>
      </button>
    </div>
  );
};

export default FollowJobCard;
