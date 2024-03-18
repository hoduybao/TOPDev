import SubHeader from '../../components/global/Recruitment/Header/SubHeader';
import ApplicationCard from '../../components/global/Recruitment/Content/ApplicationCard';

const MainPage = () => {
  return (
    <div className='flex flex-col'>
      <SubHeader />
      <div className='px-4 py-2.5 flex gap-5 flex-wrap'>
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
      </div>
    </div>
  );
};

export default MainPage;
