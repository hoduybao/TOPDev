import { LegacyRef } from 'react';
import companyData from '../../../draft/company-new.json';
import jobData from '../../../draft/jsob-new.json';

import DetailSession, { DetailHeader } from './Session';
import { Spin } from 'antd';
// import { useGetJobByIdQuery } from '../../../+core/redux/apis/common/job/job.api';
// import { useParams } from 'react-router-dom';
// import { useGetCompanyByIdQuery } from '../../../+core/redux/apis/common/company/company.api';

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
        <div className=' bg-white-900 rounded rounded-t-none' id='jobDescription'>
          <DetailSession>
            <div
              className='text-md text-justify'
              dangerouslySetInnerHTML={{ __html: companyResponse.data.introduction }}
            ></div>
          </DetailSession>
          <DetailSession>
            <DetailHeader title='Trách nhiệm công việc' />
            <div
              className='px-4 text-md text-justify'
              dangerouslySetInnerHTML={{ __html: jobResponse && jobResponse.data.responsibilities }}
            />
          </DetailSession>
          <DetailSession>
            <DetailHeader title='Kỹ năng chuyên môn' />
            <div
              className='px-4 text-md text-justify'
              dangerouslySetInnerHTML={{ __html: jobResponse && jobResponse.data.skills }}
            />
          </DetailSession>
          <DetailSession>
            <DetailHeader title='Nice to have' />
            <div
              className='px-4 text-md text-justify'
              dangerouslySetInnerHTML={{ __html: jobResponse && jobResponse.data.extends }}
            />
          </DetailSession>
          <DetailSession hideBottomLine>
            <DetailHeader title='Phúc lợi dành cho bạn' />
            <div
              className='px-4 text-md'
              dangerouslySetInnerHTML={{ __html: jobResponse && jobResponse.data.welfare }}
            />
          </DetailSession>
        </div>
      )}
    </Spin>
  );
};

export default JobDescription;
