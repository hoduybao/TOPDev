import JobDescription from '../../components/ui/description/JobDescription';
import CompanyCard from '../../components/ui/card/CompanyCard';
import ShortDetail from '../../components/ui/description/ShortDetail';
import CompanyDescription from '../../components/ui/description/CompanyDescription';
import JobSubmitModal from '../../components/ui/modal/JobSubmitModal';
import UserSubmitButton from '../../components/ui/button/UserSubmitButton';
import Container from '../../components/global/Container/Container';

const JobPage = () => {
  // https://topdev.vn/viec-lam/software-developer-c-qt-framework-cong-ty-co-phan-showniq-2032799?source=ApplyNow
  return (
    <Container>
      <div className='w-full flex justify-center items-center'>
        <div className='max-w-[80rem] bg-mainBackground'>
          <div className='grid grid-cols-12 gap-6 mt-6'>
            {/* jd session */}
            <div className='col-span-12 lg:col-span-8 sm:col-span-12'>
              <CompanyCard />
              <JobDescription />
              <CompanyDescription />
            </div>

            {/* submit session */}
            <div className='col-span-12 lg:col-span-4 sm:col-span-12'>
              <JobSubmitModal />
              <UserSubmitButton name='Tạo CV để ứng tuyển' onClick={() => {}} />
              <ShortDetail />
            </div>

            {/* submit modal */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default JobPage;
