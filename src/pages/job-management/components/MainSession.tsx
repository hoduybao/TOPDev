import CompaniesView from './CompaniesView';
import HideCVs from './HideCVs';
import HideEmployee from './HideEmployee';
import MainCVs from './MainCVs';

const MainSession = () => {
  return (
    <div className='flex flex-col gap-4 mb-4'>
      <HideEmployee />
      <MainCVs />
      <HideCVs />
      <CompaniesView />
    </div>
  );
};

export default MainSession;
