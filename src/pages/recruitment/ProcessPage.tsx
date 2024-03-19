import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { KanbanApplicationType } from '@/+core/utilities/types/recruitment.type';

import ProcessSubHeader from '../../components/global/Recruitment/Header/ProcessSubHeader';
import KanbanBoard from '../../components/global/Recruitment/Content/ProcessKanban/KanbanBoard';

import MockApplicationData from '../../draft/application.json';

const defaultApplicationsData: KanbanApplicationType[] = [
  {
    columnId: 'new',
    ...MockApplicationData,
  },
];

const ProcessPage = () => {
  const [applications, setApplications] =
    useState<KanbanApplicationType[]>(defaultApplicationsData);

  const createNewDetailApplication = (
    title: string,
    name: string,
    phone: string,
    email: string,
  ) => {
    const newApplication: KanbanApplicationType = {
      id: uuidv4(),
      jobId: uuidv4(),
      columnId: 'new',
      title: title,
      name: name,
      phone: phone,
      email: email,
      rating: 1,
    };

    setApplications([...applications, newApplication]);
  };

  return (
    <div className='flex flex-col'>
      <ProcessSubHeader createNewDetailApplication={createNewDetailApplication} />
      <KanbanBoard applications={applications} setApplications={setApplications} />
    </div>
  );
};

export default ProcessPage;
