import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../components/global/Container/Container';
import UserSubmitButton from '../../components/ui/button/UserSubmitButton';
import CompanyCard from '../../components/ui/card/CompanyCard';
import CompanyDescription from '../../components/ui/description/CompanyDescription';
import JobDescription from '../../components/ui/description/JobDescription';
import ShortDetail from '../../components/ui/description/ShortDetail';
import JobSubmitModal from '../../components/ui/modal/JobSubmitModal';
import SelectionTags, { TAG_TYPES } from '../../components/ui/tag/SelectionTags';

const JobPage = () => {
  const jdRef = React.useRef<HTMLDivElement>(null);
  const companyRef = React.useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

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
            <SelectionTags
              listTags={[
                {
                  type: TAG_TYPES.JD,
                  name: t('job.description'),
                  ref: jdRef,
                },
                {
                  type: TAG_TYPES.COMPANY,
                  name: t('company.about'),
                  ref: companyRef,
                },
              ]}
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
