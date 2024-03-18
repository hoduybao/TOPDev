import JobDescription from '../../components/ui/description/JobDescription';
import CompanyCard from '../../components/ui/card/CompanyCard';
import ShortDetail from '../../components/ui/description/ShortDetail';
import CompanyDescription from '../../components/ui/description/CompanyDescription';

const SubmitButton = ({ name, isFilled = false }: { name: string; isFilled?: boolean }) => {
  return (
    <div className='w-full mb-2'>
      <button
        className={`
        ${isFilled ? 'bg-orange-600 text-white-900' : 'text-orange-600 border border-orange-600'}
        w-full text-base font-bold p-4 rounded`}
      >
        {name}
      </button>
    </div>
  );
};

const JobPage = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='max-w-[80rem] bg-mainBackground '>
        <div className='grid grid-cols-12 gap-6 mt-6'>
          {/* jd session */}
          <div className='col-span-8'>
            <CompanyCard />
            <JobDescription />
            <CompanyDescription />
          </div>

          {/* submit session */}
          <div className='col-span-4'>
            <SubmitButton name='Ứng tuyển ngay' isFilled />
            <SubmitButton name='Tạo CV để ứng tuyển' />
            <ShortDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
