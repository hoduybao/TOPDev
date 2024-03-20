import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { KanbanApplicationType } from '@/+core/utilities/types/recruitment.type';

import ProcessSubHeader from '../../components/global/Recruitment/Header/ProcessSubHeader';
import KanbanBoard from '../../components/global/Recruitment/Content/ProcessKanban/KanbanBoard';

// import MockApplicationData from '../../draft/application.json';
import { useParams } from 'react-router-dom';
import { useGetApplicationsByJobIdQuery } from '../../+core/redux/apis/common/application/application.api';
import { Spin } from 'antd';

// const defaultApplicationsData: KanbanApplicationType[] = [
//   {
//     columnId: 'new',
//     ...MockApplicationData,
//   },
// ];

const ProcessPage = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const { data: response, isLoading } = useGetApplicationsByJobIdQuery(jobId);

  const [applications, setApplications] = useState<KanbanApplicationType[]>();

  const createNewDetailApplication = (
    title: string,
    name: string,
    phone: string,
    email: string,
  ) => {
    // todo: call api to add new application
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

      <Spin spinning={isLoading}>
        {response && (
          <KanbanBoard
            applications={response.map((item: any) => ({
              ...item,
              columnId: 'new',
            }))}
            setApplications={setApplications}
          />
        )}
      </Spin>
    </div>
  );
};

export default ProcessPage;
