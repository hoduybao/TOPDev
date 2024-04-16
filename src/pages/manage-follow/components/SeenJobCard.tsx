import { useTranslation } from 'react-i18next';
import { JobType } from '@/+core/utilities/types/recruitment.type';

interface PropType {
  job: JobType;
  handleApplyJob: (job: JobType) => void;
  checkSaveJob: (job: JobType) => boolean;
  handleSaveJob: (job: JobType) => void;
}

const SeenJobCard = (props: PropType) => {
  const { job, handleApplyJob, checkSaveJob, handleSaveJob } = props;

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
      <div className='w-[100%] p-4 flex gap-5 border border-t-gray-700 border-x-gray-700'>
        <div className='w-[30%]'>
          <img className='w-full' src={job?.companyLogo} alt='company-logo' />
        </div>
        <div className='w-[70%]'>
          <h1 className='text-[18px] font-bold'>
            {job?.title ? summaryJobTitle(job?.title) : 'Job not found'}
          </h1>
          <p className='mt-1 text-[16px]'>{job?.location}</p>
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
              {job?.salary}
            </p>
          </div>
        </div>
      </div>
      <div className='flex'>
        <button
          disabled={checkSaveJob(job) ? true : false}
          className={`w-[30%] p-2 border border-t-gray-400 border-l-gray-400 border-b-gray-400 transition duration-500 hover:text-[#fff] hover:bg-gray-700`}
          onClick={() => {
            handleSaveJob(job);
          }}
        >
          <p className='text-[18px] font-bold'>
            {checkSaveJob(job) ? t('savedJob') : t('saveJob')}
          </p>
        </button>
        <button
          className={`w-[70%] py-2 text-primary-red border border-primary-red transition duration-500 hover:text-[#fff] hover:bg-primary-red`}
          onClick={() => {
            handleApplyJob(job);
          }}
        >
          <p className='text-[18px] font-bold'>{t('availableJob')}</p>
        </button>
      </div>
    </div>
  );
};

export default SeenJobCard;
