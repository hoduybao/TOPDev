import { useEffect, useState } from 'react';
import { notification } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

import {
  useCreateApplicationRecruitmentMutation,
  useGetApplicationsByJobIdQuery,
} from '@/+core/redux/apis/common/recruitment/recruitment.api';

import { ApplicationType, KanbanApplicationType } from '@/+core/utilities/types/recruitment.type';

import ProcessSubHeader from '../../components/global/Recruitment/Header/ProcessSubHeader';
import KanbanBoard from '../../components/global/Recruitment/Content/ProcessKanban/KanbanBoard';

// const defaultApplicationsData: KanbanApplicationType[] = [
//   {
//     columnId: 'false',
//     id: 'application1',
//     jobId: 'job1',
//     name: 'Nguyen Van A',
//     cvUrl: '',
//     email: '123@gmail.com',
//     phone: '123456789',
//     status: 'new',
//     rating: 3,
//     note: 'this is note 1',
//   },
// ];

const ProcessPage = () => {
  const JOB_ID: string = '6tmFCHf';

  const [api, contextHolder] = notification.useNotification();

  const { data, isLoading } = useGetApplicationsByJobIdQuery(JOB_ID);
  const [createNewApplication] = useCreateApplicationRecruitmentMutation();

  const [applications, setApplications] = useState<KanbanApplicationType[]>([]);

  const createNewDetailApplication = async (
    name: string,
    phone: string,
    email: string,
    cvUrl: string,
    description: string,
  ) => {
    const app: KanbanApplicationType = {
      jobId: JOB_ID,
      columnId: false,
      fullName: name,
      phone: phone,
      email: email,
      cvUrl: cvUrl,
      description: description,
    };

    // eslint-disable-next-line unused-imports/no-unused-vars
    const { columnId, ...otherProperties } = app;
    const newApplication = { ...otherProperties };

    const appRes = await createNewApplication(newApplication).unwrap();

    if (appRes?.statusCode === 200 && appRes?.data) {
      const newApp: ApplicationType = appRes?.data;
      console.log(newApp);

      setApplications([
        ...applications,
        {
          ...newApp,
          columnId: newApp?.isApprove ? newApp?.isApprove : false,
          rating: newApp?.rating ? newApp?.rating : 3,
        },
      ]);

      api.open({
        message: 'Notification',
        icon: <CheckCircleOutlined style={{ color: 'green' }} />,
        description: 'Create new application successfully',
        duration: 5,
        placement: 'bottomLeft',
      });
    } else {
      api.open({
        message: 'Notification',
        icon: <CloseCircleOutlined style={{ color: 'red' }} />,
        description: 'Create new application failed',
        duration: 5,
        placement: 'bottomLeft',
      });
    }
  };

  useEffect(() => {
    if (!isLoading && data?.statusCode === 200) {
      const apps: KanbanApplicationType[] = data?.data;
      console.log('GET APPLICATIONS BY JOB ID SUCCESSFULLY');
      console.table(apps);

      const appsColumn = apps?.map((app: KanbanApplicationType) => {
        return {
          ...app,
          columnId: app?.isApprove ? app?.isApprove : false,
          rating: app?.rating ? app?.rating : 3,
        };
      });

      setApplications(appsColumn);
    }
  }, [isLoading]);

  return (
    <div className='flex flex-col'>
      {contextHolder}
      <ProcessSubHeader createNewDetailApplication={createNewDetailApplication} />
      <KanbanBoard applications={applications} setApplications={setApplications} />
    </div>
  );
};

export default ProcessPage;
