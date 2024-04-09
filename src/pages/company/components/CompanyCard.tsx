import { Button } from 'antd';
import companyData from '../../../draft/company-new.json';
import { ICONS } from '@/config/icons';
import { useTranslation } from 'react-i18next';

const CustomButton = ({
  isOutlined,
  children,
}: {
  isOutlined?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Button
      className={`${
        isOutlined ? 'text-white-900 bg-orange-500' : 'text-orange-500 border-orange-500'
      } rounded h-full w-full py-2`}
    >
      {children}
    </Button>
  );
};

const CompanyCard = () => {
  const { t } = useTranslation();
  return (
    <div className='w-full relative'>
      <img src={companyData.background} alt='company logo' className='w-full h-[250px] rounded' />
      <div className='absolute top-[50%] w-full p-4'>
        <div className='bg-white-900 w-full rounded flex gap-4 p-4'>
          <img
            src={companyData.avatar}
            alt='company logo'
            className='w-40 h-28 p-2 rounded object-contain'
          />
          <div className='flex-1'>
            <h1 className='font-bold text-lg'>{companyData.name}</h1>
            <div className='mt-4' dangerouslySetInnerHTML={{ __html: companyData.about }}></div>
            <div className='flex gap-4 mt-4 justify-start'>
              <div className='flex-1'>
                <CustomButton isOutlined>
                  <div className='flex justify-center'>
                    <img className='w-[20px] text-white-900' src={ICONS.bookmark} alt='bookmark' />
                    <span className='mx-2 font-bold text-base'>{t('button.follow')}</span>
                  </div>
                </CustomButton>
              </div>
              <div>
                <CustomButton>
                  <img className='w-[20px] text-orange-500' src={ICONS.share} alt='share' />
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
