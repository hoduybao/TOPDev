import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

const CandateCode = () => {
  const { t } = useTranslation();
  return (
    <div className='mt-3'>
      <div className='mt-4'>
        <Button
          className='col-span-1 w-full bg-gray-200 text-black-800 font-semibold rounded'
          disabled
        >
          {t('reportCV')}
        </Button>
      </div>
    </div>
  );
};

export default CandateCode;
