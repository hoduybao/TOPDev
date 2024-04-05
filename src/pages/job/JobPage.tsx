import JobDescription from '../../components/ui/description/JobDescription';
import CompanyCard from '../../components/ui/card/CompanyCard';
import ShortDetail from '../../components/ui/description/ShortDetail';
import CompanyDescription from '../../components/ui/description/CompanyDescription';
import JobSubmitModal from '../../components/ui/modal/JobSubmitModal';
import UserSubmitButton from '../../components/ui/button/UserSubmitButton';
import Container from '../../components/global/Container/Container';
import React from 'react';
import useSticky from '../../hooks/sticky';
import JobTags from '../../components/ui/tag/JobTags';

const JobPage = () => {
  // https://topdev.vn/viec-lam/software-developer-c-qt-framework-cong-ty-co-phan-showniq-2032799?source=ApplyNow
  const [jdClicked, setJdClicked] = React.useState(true);
  const changeClicked = (value: boolean) => {
    setJdClicked(value);
  };

  const jdRef = React.useRef<HTMLDivElement>(null);
  const companyRef = React.useRef<HTMLDivElement>(null);

  const { ref: stickyRef, isSticky } = useSticky();

  return (
    <Container>
      <div className='w-full flex justify-center items-center'>
        <div className='max-w-[80rem] bg-mainBackground'>
          <div className='grid grid-cols-12 gap-6 mt-6'>
            {/* jd session */}
            <div className='col-span-12 lg:col-span-8'>
              <div className='sticky top-0 z-20 ' ref={stickyRef}>
                <CompanyCard
                  isSticky={false}
                  jdClicked={jdClicked}
                  changeClicked={changeClicked}
                  jdRef={jdRef}
                  companyRef={companyRef}
                />
              </div>

              <div className='mt-4 '>
                <JobTags
                  jdClicked={jdClicked}
                  changeClicked={changeClicked}
                  jdRef={jdRef}
                  companyRef={companyRef}
                />
                <div ref={jdRef}>
                  <JobDescription />
                </div>
                <div ref={companyRef}>
                  <CompanyDescription />
                </div>
              </div>
            </div>

            {/* submit session */}
            <div className='col-span-12 lg:col-span-4 sm:col-span-12 '>
              <div className='sticky top-0 z-10'>
                <JobSubmitModal />
                <UserSubmitButton name='Tạo CV để ứng tuyển' onClick={() => {}} />
                <ShortDetail />
              </div>
            </div>

            {/* submit modal */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default JobPage;
