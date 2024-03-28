// import companyData from '../../../draft/company.json';
// import jobData from '../../../draft/job.json';
import DetailSession, { DetailHeader } from './Session';
import { useGetJobByIdQuery } from '../../../+core/redux/apis/common/job/job.api';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { useGetCompanyByIdQuery } from '../../../+core/redux/apis/common/company/company.api';

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
  const { jobId, companyId } = useParams<{ jobId: string; companyId: string }>();
  const { data: jobResponse, isLoading } = useGetJobByIdQuery(jobId);
  const { data: companyResponse, isLoading: isLoadingCompany } = useGetCompanyByIdQuery(companyId);

  return (
    <Spin spinning={isLoading || isLoadingCompany}>
      {jobResponse && companyResponse && (
        <div className='mt-4 bg-white-900 rounded'>
          <JobTags />
          <DetailSession>
            <div>{companyResponse.data.introduction}</div>
          </DetailSession>
          <DetailSession>
            <DetailHeader title='Trách nhiệm công việc' />
            <ul className='px-4'>
              {jobResponse.data.responsibilities.map((item: any) => (
                <li className='list-disc'>{item}</li>
              ))}
            </ul>
          </DetailSession>
          <DetailSession>
            <DetailHeader title='Kỹ năng chuyên môn' />
            <ul className='px-4'>
              {jobResponse.data.skills.map((item: any) => (
                <li className='list-disc'>{item}</li>
              ))}
            </ul>
          </DetailSession>
          <DetailSession>
            <DetailHeader title='Nice to have' />
            <ul className='px-4'>
              {jobResponse.data.extends.map((item: any) => (
                <li className='list-disc'>{item}</li>
              ))}
            </ul>
          </DetailSession>
          <DetailSession hideBottomLine>
            <DetailHeader title='Phúc lợi dành cho bạn' />
            <div className='px-4'>
              {jobResponse.data.welfare.map((item: any) => (
                <div className='list-disc'>{item}</div>
              ))}
            </div>
          </DetailSession>
        </div>
      )}
    </Spin>
  );
};

export default JobDescription;
