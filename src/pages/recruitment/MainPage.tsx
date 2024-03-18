import SubHeader from '../../components/global/Recruitment/Header/SubHeader';
import ApplicationCard from '../../components/global/Recruitment/Content/ApplicationCard';

import JobMockData from '../../draft/job.json';

const MainPage = () => {
  return (
    <div className='flex flex-col'>
      <SubHeader />
      <div className='px-4 py-2.5 flex gap-5 flex-wrap'>
        <ApplicationCard job={JobMockData} newestAmount={3} recentAmount={150} />
      </div>
    </div>
  );
};

export default MainPage;
