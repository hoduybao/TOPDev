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
  const cardRef = React.useRef<HTMLDivElement>(null);
  const stickyRef = React.useRef<HTMLDivElement>(null);

  const [isSticky, setIsSticky] = React.useState(false);
  console.log('isSticky', isSticky);

  React.useEffect(() => {
    const handleScroll = () => {
      const top = stickyRef.current?.getBoundingClientRect().top;
      console.log(top);

      if (top === 0) {
        console.log('set true');
        setIsSticky(true);
      } else {
        console.log('set false');
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <div className='w-full flex justify-center items-center'>
        <div className='w-[80rem] bg-mainBackground h-[1000px]'>
          <div className='grid grid-cols-12 gap-6 mt-6'>
            {/* jd session */}
            <div className='lg:col-span-8 bg-gray-500 h-[500px]'>
              <div className='sticky top-0 z-20' ref={stickyRef}>
                <h1 className='h-[100px]'>Home Page</h1>
                <h1 className={`h-[100px] ${isSticky && 'hidden'}`}>Home Page description</h1>
                {/* <CompanyCard
                  cardRef={cardRef}
                  isSticky={isSticky}
                  jdClicked={jdClicked}
                  changeClicked={changeClicked}
                  jdRef={jdRef}
                  companyRef={companyRef}
                /> */}
              </div>

              <div className='mt-4 h-[400px] bg-blue-400'>
                {/* <JobTags
                  jdClicked={jdClicked}
                  changeClicked={changeClicked}
                  jdRef={jdRef}
                  companyRef={companyRef}
                /> */}
                {/* <div ref={jdRef}>
                  <JobDescription />
                </div>
                <div ref={companyRef}>
                  <CompanyDescription />
                </div> */}
              </div>
            </div>

            {/* submit session */}
            <div className='lg:col-span-4 bg-gray-500'>
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
