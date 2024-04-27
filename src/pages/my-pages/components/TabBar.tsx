import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const TabBar = ({ tab, setTab }: { tab: string; setTab: (tab: string) => void }) => {
  const { t } = useTranslation();
  return (
    <div className='flex justify-stretch overflow-hidden rounded bg-white-900 text-base my-[2rem]'>
      <div
        onClick={() => setTab('profile')}
        className={`group block w-full transition-all duration-300 ${
          tab === 'profile' ? 'border-b-2' : 'border-b'
        } hover:border-b-2`}
      >
        <Link
          to=''
          className={`${
            tab === 'profile' ? 'font-bold' : ''
          } block py-[22px] text-center text-primary-red transition-all duration-300 group-hover:font-bold group-hover:text-primary-red`}
        >
          {t('myTopDevCv')}
        </Link>
      </div>
      <div
        onClick={() => setTab('job-management')}
        className={`group block w-full transition-all duration-300 ${
          tab === 'job-management' ? 'border-b-2' : 'border-b'
        } hover:border-b-2`}
      >
        <Link
          to=''
          className={`${
            tab === 'job-management' ? 'font-bold' : ''
          } block py-[22px] text-center text-primary-red transition-all duration-300 group-hover:font-bold group-hover:text-primary-red`}
        >
          {t('jobManagement')}
        </Link>
      </div>
      <div
        onClick={() => setTab('cv-management')}
        className={`group block w-full transition-all duration-300 ${
          tab === 'cv-management' ? 'border-b-2' : 'border-b'
        } hover:border-b-2`}
      >
        <Link
          to=''
          className={`${
            tab === 'cv-management' ? 'font-bold' : ''
          } block py-[22px] text-center text-primary-red transition-all duration-300 group-hover:font-bold group-hover:text-primary-red`}
        >
          {t('cvManagement')}
        </Link>
      </div>
      <div
        onClick={() => setTab('jobs-applied')}
        className={`group block w-full transition-all duration-300 ${
          tab === 'jobs-applied' ? 'border-b-2' : 'border-b'
        } hover:border-b-2`}
      >
        <Link
          to=''
          className={`${
            tab === 'jobs-applied' ? 'font-bold' : ''
          } block py-[22px] text-center text-primary-red transition-all duration-300 group-hover:font-bold group-hover:text-primary-red`}
        >
          {t('appliedJobs')}
        </Link>
      </div>
      <div
        onClick={() => setTab('jobs-followed')}
        className={`group block w-full transition-all duration-300 ${
          tab === 'jobs-followed' ? 'border-b-2' : 'border-b'
        } hover:border-b-2`}
      >
        <Link
          to=''
          className={`${
            tab === 'jobs-followed' ? 'font-bold' : ''
          } block py-[22px] text-center text-primary-red transition-all duration-300 group-hover:font-bold group-hover:text-primary-red`}
        >
          {t('followingJobs')}
        </Link>
      </div>
    </div>
  );
};
