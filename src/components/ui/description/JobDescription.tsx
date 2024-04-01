import companyData from '../../../draft/company-new.json';
import jobData from '../../../draft/jsob-new.json';

import DetailSession, { DetailHeader } from './Session';
import { Spin } from 'antd';
// import { useGetJobByIdQuery } from '../../../+core/redux/apis/common/job/job.api';
// import { useParams } from 'react-router-dom';
// import { useGetCompanyByIdQuery } from '../../../+core/redux/apis/common/company/company.api';

const JobItem = ({ name, isSelect = false }: { name: string; isSelect?: boolean }) => {
  return (
    <div
      className={`
    ${isSelect && 'font-bold text-orange-600 border-b-4 border-orange-600'}
    py-4 text-base col-span-6 text-center`}
    >
      {name}
    </div>
  );
};

const JobTags = () => {
  return (
    <div className='grid grid-cols-12'>
      <JobItem name='Mô tả công việc' isSelect />
      <JobItem name='Giới thiệu về công ty' />
    </div>
  );
};

const JobDescription = () => {
  // const { jobId, companyId } = useParams<{ jobId: string; companyId: string }>();
  // const { data: jobResponse, isLoading } = useGetJobByIdQuery(jobId);
  // const { data: companyResponse, isLoading: isLoadingCompany } = useGetCompanyByIdQuery(companyId);

  const isLoading = false;
  const isLoadingCompany = false;
  const jobResponse = { data: jobData };
  const companyResponse = { data: companyData };

  return (
    <Spin spinning={isLoading || isLoadingCompany}>
      {jobResponse && companyResponse && (
        <div className='mt-4 bg-white-900 rounded'>
          <JobTags />
          <DetailSession>
            <div dangerouslySetInnerHTML={{ __html: companyResponse.data.introduction }}></div>
          </DetailSession>
          <DetailSession>
            <DetailHeader title='Trách nhiệm công việc' />
            <div
              className='px-4'
              dangerouslySetInnerHTML={{ __html: jobResponse && jobResponse.data.responsibilities }}
            />
          </DetailSession>
          <DetailSession>
            <DetailHeader title='Kỹ năng chuyên môn' />
            <div
              className='px-4'
              dangerouslySetInnerHTML={{ __html: jobResponse && jobResponse.data.skills }}
            />
          </DetailSession>
          <DetailSession>
            <DetailHeader title='Nice to have' />
            <div
              className='px-4'
              dangerouslySetInnerHTML={{ __html: jobResponse && jobResponse.data.extends }}
            />
          </DetailSession>
          <DetailSession hideBottomLine>
            <DetailHeader title='Phúc lợi dành cho bạn' />
            <div
              className='px-4'
              dangerouslySetInnerHTML={{ __html: jobResponse && jobResponse.data.welfare }}
            />
          </DetailSession>
        </div>
      )}
    </Spin>
  );
};

export default JobDescription;
