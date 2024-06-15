import { CompanyDetail } from '@/+core/redux/apis/common/company/company.api';
import { ICONS } from '@/config/icons';
import { Button } from 'antd';
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
        isOutlined
          ? 'text-white-900 bg-orange-500 hover:!text-white-900'
          : 'text-orange-500 border-orange-500'
      } rounded h-full w-full py-2`}
    >
      {children}
    </Button>
  );
};

const CompanyCardContent = ({
  isStickyCustom = false,
  data,
}: {
  isStickyCustom?: boolean;
  data: CompanyDetail;
}) => {
  const { t } = useTranslation();

  return (
    <div className={`flex-1 ${isStickyCustom ? 'flex' : ''}`}>
      <div className={`${isStickyCustom ? 'flex-1' : ''}`}>
        <h1 className='font-bold text-lg'>{data?.name}</h1>
        <div className='mt-4' dangerouslySetInnerHTML={{ __html: data?.tagline || '' }}></div>
      </div>
      <div className='flex gap-4 mt-4 justify-start'>
        <div className='flex-1'>
          <CustomButton isOutlined>
            <div className='flex justify-center'>
              <svg
                stroke='currentColor'
                fill='none'
                strokeWidth='1.5'
                viewBox='0 0 24 24'
                aria-hidden='true'
                height='1.5em'
                width='1.5em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
                ></path>
              </svg>
              {isStickyCustom ? (
                ''
              ) : (
                <span className='mx-2 font-bold text-base'>{t('button.follow')}</span>
              )}
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
  );
};

const CompanyCard = ({ data }: { data: CompanyDetail }) => {
  return (
    <div className='w-full relative'>
      <img
        src={data?.coverPhoto}
        alt='company logo'
        className='w-full h-[250px] rounded object-cover'
      />
      <div className='absolute top-[50%] w-full p-4'>
        <div className='bg-white-900 w-full rounded flex gap-4 p-4 '>
          <img
            src={data?.logo}
            alt='company logo'
            className='w-40 h-28 p-2 rounded object-contain'
          />
          <CompanyCardContent data={data} />
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
export { CompanyCardContent };
