import JobDescription from '../../components/ui/description/JobDescription';
import CompanyCard from '../../components/ui/card/CompanyCard';
import ShortDetail from '../../components/ui/description/ShortDetail';
import CompanyDescription from '../../components/ui/description/CompanyDescription';
import JobSubmitModal from '../../components/ui/modal/JobSubmitModal';
import UserSubmitButton from '../../components/ui/button/UserSubmitButton';
import Container from '../../components/global/Container/Container';
import React from 'react';
import useSticky from '../../hooks/sticky';

const selectedClass = 'font-bold text-orange-600 border-b-4 border-orange-600';

const JobItem = ({
  alias,
  name,
  onClick = () => {},
  clicked = false,
}: {
  alias: string;
  name: string;
  onClick?: () => void;
  clicked?: boolean;
}) => {
  return (
    <div
      id={alias}
      onClick={onClick}
      className={`
      ${clicked && selectedClass}
      py-4 text-base col-span-6 text-center hover:cursor-pointer`}
    >
      {name}
    </div>
  );
};

const JobTags = ({
  jdClicked,
  changeClicked,
  companyRef,
  jdRef,
}: {
  jdClicked: boolean;
  changeClicked: (value: boolean) => void;
  jdRef: React.RefObject<HTMLDivElement>;
  companyRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    // sticky z-10 top-[170px]
    <div className='grid grid-cols-12 shadow-md bg-white-900'>
      <JobItem
        alias='jdTag'
        onClick={() => {
          jdRef.current?.scrollIntoView({ behavior: 'smooth' });
          changeClicked(true);
        }}
        name='Mô tả công việc'
        clicked={jdClicked}
      />
      <JobItem
        alias='companyTag'
        onClick={() => {
          companyRef.current?.scrollIntoView({ behavior: 'smooth' });
          changeClicked(false);
        }}
        name='Giới thiệu về công ty'
        clicked={!jdClicked}
      />
    </div>
  );
};

const JobPage = () => {
  // https://topdev.vn/viec-lam/software-developer-c-qt-framework-cong-ty-co-phan-showniq-2032799?source=ApplyNow
  const [jdClicked, setJdClicked] = React.useState(true);
  const changeClicked = (value: boolean) => {
    setJdClicked(value);
  };

  const jdRef = React.useRef<HTMLDivElement>(null);
  const companyRef = React.useRef<HTMLDivElement>(null);

  const { ref: stickyRef, isSticky } = useSticky();
  // let isSticky = false;
  // isSticky = true;

  return (
    <Container>
      <div className='w-full flex justify-center items-center'>
        <div className='max-w-[80rem] bg-mainBackground'>
          <div className='grid grid-cols-12 gap-6 mt-6'>
            {/* jd session */}
            <div className='col-span-12 lg:col-span-8 sm:col-span-12 '>
              <div className='sticky top-0 z-10' ref={stickyRef}>
                <CompanyCard isSticky={isSticky} />
                <JobTags
                  jdClicked={jdClicked}
                  changeClicked={changeClicked}
                  jdRef={jdRef}
                  companyRef={companyRef}
                />
              </div>

              <div ref={jdRef}>
                <JobDescription />
              </div>
              <div ref={companyRef}>
                <CompanyDescription />
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
