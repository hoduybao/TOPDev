import { StarOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';

const SubSession = () => {
  const { t } = useTranslation();
  return (
    <div className='bg-white-900 rounded-lg p-4'>
      <div className='flex gap-4'>
        <div className='h-16 w-16 rounded-full'>
          <img className='' src='/assets/icons/empty_avatar.svg' alt='avatar' />
        </div>

        <div className='flex flex-col justify-between'>
          <p>{t('greeting')}</p>
          <div>
            <h3 className='font-bold text-base'>Your name</h3>
            <div className='flex rounded-full bg-yellow-300 px-2 text-white-900'>
              <StarOutlined color='#ffffff' />
              <p className='font-bold text-xs ml-1'>New Star</p>
            </div>
          </div>
        </div>
      </div>

      <div className='rounded-lg p-4 bg-selectCVPage mt-4'>
        <div className='flex justify-between mb-4'>
          <span className='text-base font-bold'>{t('job.finding')}</span>
          <Switch className='bg-gray-200' />
        </div>
        <div>
          <span>{t('job.finding.description.part1')}</span>
          <span className='text-red-900'> 75% </span>
          <span>{t('job.finding.description.part2')}</span>
        </div>
      </div>
    </div>
  );
};

export default SubSession;
