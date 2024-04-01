import React from 'react';
import companyData from '../../../draft/company-new.json';
import jobData from '../../../draft/job.json';
// import { useParams } from 'react-router-dom';
// import { useGetJobByIdQuery } from '../../../+core/redux/apis/common/job/job.api';
// import { useGetCompanyByIdQuery } from '../../../+core/redux/apis/common/company/company.api';
import { Spin } from 'antd';

const CompanyCard = () => {
  // apply API call
  // const { jobId, companyId } = useParams<{ jobId: string; companyId: string }>();
  // const { data: jobResponse, isLoading } = useGetJobByIdQuery(jobId);
  // const { data: companyResponse, isLoading: isLoadingCompany } = useGetCompanyByIdQuery(companyId);

  const isLoading = false;
  const isLoadingCompany = false;
  const jobResponse = { data: jobData };
  const companyResponse = { data: companyData };

  const targetRef = React.useRef(null);
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the target element is intersecting the root (viewport)
        if (entry.isIntersecting) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      },
      { threshold: 0.5 }, // You can adjust this threshold as needed
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div className='bg-white-900 p-4 rounded sticky top-0 z-10' ref={targetRef}>
      <Spin spinning={isLoadingCompany || isLoading}>
        <div className='grid grid-cols-12 p-2 gap-8'>
          {/* image */}
          {/* <div className={`col-span-2 ${isSticky ? 'hidden' : ''}`}> */}
          <div className={`col-span-2 ${isSticky ? '' : ''}`}>
            <img
              className='min-w-[70px]'
              src={companyResponse && companyResponse.data.avatar}
              alt=''
            />
          </div>
          {/* info */}
          <div className='col-span-10'>
            <div className='font-bold text-2xl'>{jobResponse && jobResponse.data.title}</div>
            <div className='uppercase opacity-70 font-bold text-lg'>
              {companyResponse && companyResponse.data.name}
            </div>
            <div className='mt-2 text-base opacity-70'>
              {companyResponse && companyResponse.data.address}
            </div>
            <div className='mt-2 text-base text-orange-600 font-semibold'>Thương lượng</div>
          </div>
        </div>
      </Spin>
    </div>
  );
};

export default CompanyCard;
