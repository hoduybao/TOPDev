import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../components/global/Container/Container';
import CompanyCard from '../../components/ui/card/CompanyCard';
import JobSubmitModal from './components/JobSubmitModal';
import UserSubmitButton from '../../components/ui/button/UserSubmitButton';
import CompanyDescription from '../../components/ui/description/CompanyDescription';
import { useTranslation } from 'react-i18next';
import SelectionTags from '../../components/ui/tag/SelectionTags';
import { useParams } from 'react-router-dom';
import { useGetJobByIdQuery } from '@/+core/redux/apis/common/job/job.api';
import JobDescription from '../../components/ui/description/JobDescription';
import ShortDetail from '../../components/ui/description/ShortDetail';
import JobSubmitModal from '../../components/ui/modal/JobSubmitModal';
import SelectionTags, { TAG_TYPES } from '../../components/ui/tag/SelectionTags';

const JobPage = () => {
  const jdRef = React.useRef<HTMLDivElement>(null);
  const companyRef = React.useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const { jobId } = useParams<{ jobId: string }>();
  const { data, isLoading } = useGetJobByIdQuery(jobId);

  return (
    <Container>
      <div className='flex flex-col lg:flex-row items-start w-full gap-4 mt-4'>
        <section className='w-full lg:w-[70%] flex flex-col gap-4 relative'>
          <section
            className={`flex items-start bg-white-900 rounded shadow-md p-4
            sticky top-0 z-10
            `}
          >
            <CompanyCard isSticky={false} data={data} />
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
              <JobDescription data={data} isLoading={isLoading} />
            </div>
            <div ref={companyRef}>
              <CompanyDescription data={data} isLoading={isLoading} />
            </div>
          </section>
        </section>

        <section className='w-full lg:w-[30%] sticky top-0 z-10'>
          <JobSubmitModal data={data} isLoading={isLoading} />
          <UserSubmitButton name='Tạo CV để ứng tuyển' onClick={() => {}} />
          <ShortDetail data={data} isLoading={isLoading} />
        </section>
      </div>
    </Container>
  );
};

export default JobPage;
