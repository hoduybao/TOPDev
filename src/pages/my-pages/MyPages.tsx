import { Show } from '@/components/ui/Show';
import queryString from 'query-string';
import { useState } from 'react';
import MyCV from '../UserProfile/MyCV';
import ManageFollowPage from '../manage-follow/ManageFollowPage';
import { AppliedJobs } from './AppliedJobs/AppliedJobs';
import { CVManagement } from './CVManagement/CVManagement';
import { TabBar } from './components/TabBar';

export const MyPages = () => {
  const params: any = queryString.parse(window.location.search);

  const [tab, setTab] = useState<string>(params?.tab || 'profile');

  return (
    <div className='w-full bg-mainBackground flex justify-center'>
      <div className='w-4/5 flex flex-col'>
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
