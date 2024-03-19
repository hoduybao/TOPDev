import { useNavigate, useParams } from 'react-router-dom';
import companyData from '../../../draft/company.json';
// import jobData from '../../../draft/job.json';
import { useGetJobByIdQuery } from '../../../+core/redux/apis/common/job/job.api';
import Loading from '../loading/Loading';

const CompanyCard = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const { data: jobResponse, error, isLoading } = useGetJobByIdQuery(jobId);
  const navigate = useNavigate();

  if (isLoading) return <Loading />;
  if (!jobResponse || error) navigate('/not-found');

  const { data: jobData } = jobResponse;
  return (
    <div className='bg-white-900 p-4 rounded'>
      <div className='grid grid-cols-12 p-2 gap-8'>
        {/* image */}
        <div className='col-span-2'>
          <img
            className='min-w-[70px]'
            src={
              'https://salt.topdev.vn/gyOxnd9RZhh1hvvbO1wIEYrAUo0QdX1vZR91B4bECwk/fit/384/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzA0LzE3L1RvcERldi1Hc1pIOEhQMmpRMVBDR2FGLTE2ODE3MDEyMjcuanBn'
            }
            alt=''
          />
        </div>
        {/* info */}
        <div className='col-span-10'>
          <div className='font-bold text-2xl'>{jobData.title}</div>
          <div className='uppercase opacity-70 font-bold text-lg'>{companyData.name}</div>
          <div className='mt-2 text-base opacity-70'>{companyData.address}</div>
          <div className='mt-2 text-base text-orange-600 font-semibold'>Thương lượng</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
