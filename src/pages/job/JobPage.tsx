import JobDescription from '../../components/ui/description/JobDescription';
import CompanyCard from '../../components/ui/card/CompanyCard';
import ShortDetail from '../../components/ui/description/ShortDetail';
import CompanyDescription from '../../components/ui/description/CompanyDescription';
import JobSubmitModal from '../../components/ui/modal/JobSubmitModal';
import UserSubmitButton from '../../components/ui/button/UserSubmitButton';

const JobPage = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='max-w-[80rem] bg-mainBackground '>
        <div className='grid grid-cols-12 gap-6 mt-6'>
          {/* jd session */}
          <div className='col-span-8'>
            <CompanyCard />
            <JobDescription />
            <CompanyDescription />
          </div>

          {/* submit session */}
          <div className='col-span-4'>
            <JobSubmitModal />
            <UserSubmitButton name='Tạo CV để ứng tuyển' onClick={() => {}} />
            <ShortDetail />
          </div>

          {/* submit modal */}
        </div>
      </div>
    </div>
  );
};

export default JobPage;
