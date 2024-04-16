import { Show } from '@/components/ui/Show';
import { TabsProps } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SearchJob from '../home/components/SearchJob';
import { Companies } from './components/Companies';
import { JobHighlight } from './components/JobHighlight';
import { Jobs } from './components/Jobs';

export function ITJobs() {
  const { t } = useTranslation();
  const [tab, setTab] = useState<string>('all');

  const items: TabsProps['items'] = [
    {
      key: 'all',
      label: t('all'),
      children: <div>A</div>,
    },
    {
      key: 'jobs',
      label: t('jobs'),
      children: <Jobs />,
    },
    {
      key: 'companies',
      label: t('companies'),
      children: <div>C</div>,
    },
  ];
  return (
    <div className="bg-[url('https://c.topdevvn.com/v4/assets/images/bg-search.jpg')]  w-full flex flex-col mb-10">
      <div className='flex justify-center py-12'>
        <div className='w-4/5 flex flex-col gap-4'>
          <SearchJob />
        </div>
      </div>
      <div className='bg-[#F5F5F5] w-full'>
        <div className='bg-white-900 flex justify-center'>
          <div className='w-4/5 flex items-center justify-start'>
            <div
              onClick={() => setTab('all')}
              className={`relative flex flex-1 select-none items-center justify-center gap-3 bg-white-900 py-2 text-sm transition-all lg:flex-none lg:px-9 lg:py-[1.125rem] lg:text-base after:absolute after:bottom-0 after:left-0 after:w-full after:transition-all after:content-[''] cursor-pointer ${
                tab === 'all'
                  ? 'font-bold text-primary-red after:h-1 after:bg-primary-red'
                  : 'text-[#424242] after:h-px after:bg-[#424242] hover:text-primary-red hover:after:bg-primary-red'
              }`}
            >
              {t('all')}
            </div>
            <div
              onClick={() => setTab('jobs')}
              className={`relative flex flex-1 select-none items-center justify-center gap-3 bg-white-900 py-2 text-sm transition-all lg:flex-none lg:px-9 lg:py-[1.125rem] lg:text-base after:absolute after:bottom-0 after:left-0 after:w-full after:transition-all after:content-[''] cursor-pointer ${
                tab === 'jobs'
                  ? 'font-bold text-primary-red after:h-1 after:bg-primary-red'
                  : 'text-[#424242] after:h-px after:bg-[#424242] hover:text-primary-red hover:after:bg-primary-red'
              }`}
            >
              {t('jobs')}
            </div>
            <div
              onClick={() => setTab('companies')}
              className={`relative flex flex-1 select-none items-center justify-center gap-3 bg-white-900 py-2 text-sm transition-all lg:flex-none lg:px-9 lg:py-[1.125rem] lg:text-base after:absolute after:bottom-0 after:left-0 after:w-full after:transition-all after:content-[''] cursor-pointer ${
                tab === 'companies'
                  ? 'font-bold text-primary-red after:h-1 after:bg-primary-red'
                  : 'text-[#424242] after:h-px after:bg-[#424242] hover:text-primary-red hover:after:bg-primary-red'
              }`}
            >
              {t('companies')}
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <div className='w-4/5 grid grid-cols-3 gap-6'>
            <div className='col-span-2 flex flex-col gap-10'>
              <div className='flex items-center justify-between px-5 py-4 transition-all bg-gray-200'>
                <p className='text-sm font-semibold lg:text-lg'>{t('getJobAlerts')}</p>
                <button
                  className='bg-gray-300 w-10 h-5 relative inline-flex items-center rounded-full outline-none transition duration-200 ease-in-out'
                  id='switchToggle'
                  role='switch'
                  type='button'
                  aria-checked='false'
                  data-headlessui-state=''
                >
                  <span className='translate-x-1 w-3 h-3 inline-block transform rounded-full bg-white-900 transition duration-200 ease-in-out'></span>
                </button>
              </div>
              <Show isShow={tab === 'all' || tab === 'jobs'}>
                <Jobs />
              </Show>
              <Show isShow={tab === 'all' || tab === 'companies'}>
                <Companies />
              </Show>
            </div>
            <JobHighlight />
          </div>
        </div>
      </div>
    </div>
  );
}
