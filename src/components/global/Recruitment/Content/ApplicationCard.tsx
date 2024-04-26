import { Button, Card, Dropdown, Rate } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import type { MenuProps } from 'antd';
import { MoreOutlined, MailOutlined } from '@ant-design/icons';

import { JobType } from '@/+core/utilities/types/recruitment.type';

interface PropType {
  job: JobType;
  newestAmount: number;
  recentAmount: number;
}

const ApplicationCard = (props: PropType) => {
  const { job, newestAmount, recentAmount } = props;

  const { t } = useTranslation();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Link to={`/recruitment/${job?.id}`}>{t('recruitmentViewDetailJob')}</Link>,
    },
    {
      key: '2',
      label: (
        <Link to={`/recruitment/${job?.id}/applications`}>{t('recruitmentViewApplicants')}</Link>
      ),
    },
  ];

  return (
    <Card>
      <div className='flex items-start'>
        <Rate count={1} defaultValue={1} />
        <div className='w-[100%] px-2'>
          <p className='font-semibold'>{job?.title}</p>
          <div className='flex items-center gap-2'>
            <MailOutlined />
            <p className='max-w-[150px] md:max-w-[200px] truncate'>{job?.companyId}</p>
          </div>
        </div>
        <Dropdown menu={{ items }} trigger={['click']} placement='bottomRight'>
          <div>
            <MoreOutlined className='text-[18px] font-bold hover:cursor-pointer' />
          </div>
        </Dropdown>
      </div>
      <div className='pt-5 pb-10 flex flex-wrap gap-3 justify-between items-center'>
        <Link to={`/recruitment/${job?.id}/applications`}>
          <Button type='primary' danger>
            {newestAmount} {t('recruitmentNewApplicant')}
          </Button>
        </Link>
        <div>
          <Link to={`/recruitment/${job?.id}/applications`}>
            <p className='text-red-500 font-bold hover:text-red-400 hover:cursor-pointer'>
              {recentAmount} {t('recruitmentFor')}
            </p>
          </Link>
          <p>
            {recentAmount} {t('recruitmentApplicant')}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ApplicationCard;
