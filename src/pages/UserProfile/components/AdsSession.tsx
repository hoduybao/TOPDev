import { Image } from 'antd';
import { Link } from 'react-router-dom';
import QuickTips from './QuickTips';

const ReadySession = () => {
  return (
    <Link className='text-center' to='/job-management'>
      <div className='rounded border-[1px] border-orange-500'>
        <h3 className='font-bold text-lg my-4'>Ready for new opportunities?</h3>
        <div className='mb-4'>
          <Image src='/assets/icons/bannerCV.svg' alt='Ready for new opportunities' />
        </div>
        <p className='text-base text-gray-400 mb-4 px-6'>
          Allow employers to search and view your TopDev CV
        </p>
        <h3 className='font-bold rounded-b py-4 text-lg text-orange-500 bg-profileBackground'>
          Open to work now
        </h3>
      </div>
    </Link>
  );
};

const AdsSession = () => {
  return (
    <div>
      <ReadySession />
      <QuickTips />
    </div>
  );
};

export default AdsSession;
