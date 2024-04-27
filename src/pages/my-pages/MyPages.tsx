import { Show } from '@/components/ui/Show';
import { useState } from 'react';
import { AppliedJobs } from './AppliedJobs/AppliedJobs';
import { CVManagement } from './CVManagement/CVManagement';
import { TabBar } from './components/TabBar';

export const MyPages = () => {
  const [tab, setTab] = useState<string>('cv-management');

  return (
    <div className='w-full bg-mainBackground flex justify-center'>
      <div className='w-4/5 flex flex-col'>
        <TabBar tab={tab} setTab={setTab} />

        <Show isShow={tab === 'cv-management'}>
          <CVManagement />
        </Show>
        <Show isShow={tab === 'jobs-applied'}>
          <AppliedJobs />
        </Show>
      </div>
    </div>
  );
};
