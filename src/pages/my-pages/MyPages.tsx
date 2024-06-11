import { Show } from '@/components/ui/Show';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MyCV from '../UserProfile/MyCV';
import ManageFollowPage from '../manage-follow/ManageFollowPage';
import { AppliedJobs } from './AppliedJobs/AppliedJobs';
import { CVManagement } from './CVManagement/CVManagement';
import { TabBar } from './components/TabBar';

export const MyPages = () => {
  const [searchParams] = useSearchParams();
  const [tab, setTab] = useState<string>(searchParams.get('tab') || 'profile');

  return (
    <div className='w-full bg-mainBackground flex justify-center'>
      <div className='w-4/5 flex flex-col mb-[100px]'>
        <TabBar tab={tab} setTab={setTab} />

        <Show isShow={tab === 'profile'}>
          <MyCV />
        </Show>

        <Show isShow={tab === 'cv-management'}>
          <CVManagement />
        </Show>
        <Show isShow={tab === 'jobs-applied'}>
          <AppliedJobs />
        </Show>
        <Show isShow={tab === 'jobs-followed'}>
          <ManageFollowPage />
        </Show>
      </div>
    </div>
  );
};
