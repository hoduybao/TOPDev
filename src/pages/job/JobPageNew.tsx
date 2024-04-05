import useSticky from '../../hooks/sticky';
import Container from '../../components/global/Container/Container';
import CompanyCard from '../../components/ui/card/CompanyCard';
import JobSubmitModal from '../../components/ui/modal/JobSubmitModal';
import UserSubmitButton from '../../components/ui/button/UserSubmitButton';
import ShortDetail from '../../components/ui/description/ShortDetail';
import JobTags from '../../components/ui/tag/JobTags';
import React from 'react';
import JobDescription from '../../components/ui/description/JobDescription';
import CompanyDescription from '../../components/ui/description/CompanyDescription';

const JobPage = () => {
  const jdRef = React.useRef<HTMLDivElement>(null);
  const companyRef = React.useRef<HTMLDivElement>(null);
  const [jdClicked, setJdClicked] = React.useState(true);
  const changeClicked = (value: boolean) => {
    setJdClicked(value);
  };

  return (
    <Container>
      <div className='flex flex-col lg:flex-row items-start w-full gap-2'>
        <section className='w-full lg:w-[70%] flex flex-col gap-4 relative'>
          <section
            className={`flex items-start bg-white-900 rounded shadow-md p-4
            sticky top-0 z-10
            `}
          >
            <CompanyCard isSticky={false} />
          </section>
          <section>
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
          </section>
        </section>

        <section className='w-full lg:w-[30%] sticky top-0 z-10'>
          <JobSubmitModal />
          <UserSubmitButton name='Tạo CV để ứng tuyển' onClick={() => {}} />
          <ShortDetail />
        </section>
      </div>
    </Container>
  );
};

export default JobPage;
