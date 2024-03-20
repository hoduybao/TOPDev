import SubHeader from '../../components/global/Recruitment/Header/SubHeader';
import ApplicationCard from '../../components/global/Recruitment/Content/ApplicationCard';
import { useGetJobsQuery } from '../../+core/redux/apis/common/job/job.api';
import { Spin } from 'antd';

const MainPage = () => {
  const { data: response, isLoading } = useGetJobsQuery();

  return (
    <div className='flex flex-col'>
      <SubHeader />
      <Spin spinning={isLoading}>
        <div className='px-4 py-2.5 flex gap-5 flex-wrap'>
          {response &&
            response.data.map((job: any) => (
              <ApplicationCard key={job.id} job={job} newestAmount={3} recentAmount={150} />
            ))}
        </div>
      </Spin>
    </div>
  );
};

export default MainPage;
