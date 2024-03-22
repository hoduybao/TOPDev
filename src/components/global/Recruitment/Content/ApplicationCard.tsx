import { Button, Card, Dropdown, Rate } from 'antd';
import { Link } from 'react-router-dom';

import type { MenuProps } from 'antd';
import { MoreOutlined, MailOutlined } from '@ant-design/icons';

import { JobType } from '@/+core/utilities/types/recruitment.type';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

interface PropType {
  job: JobType;
  newestAmount: number;
  recentAmount: number;
}

const ApplicationCard = (props: PropType) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, []);
  const { job, newestAmount, recentAmount } = props;

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <div>{t('recruitment.card.dropdown.view')}</div>,
    },
    {
      key: '2',
      label: <div>{t('recruitment.card.dropdown.forRe')}</div>,
    },
    {
      key: '3',
      label: <div>{t('recruitment.card.dropdown.candidate')}</div>,
    },
  ];

  return (
    <Card className='w-[100%] sm:w-[500px]'>
      <div className='w-[100%] flex items-start'>
        <Rate count={1} defaultValue={1} />
        <div className='w-[100%] px-2'>
          <p className='font-semibold'>{job?.title}</p>
          <div className='flex items-center gap-2'>
            <MailOutlined />
            <p>{job?.companyId}</p>
          </div>
        </div>
        <Dropdown menu={{ items }} trigger={['click']} placement='bottomRight'>
          <div>
            <MoreOutlined className='text-[18px] font-bold hover:cursor-pointer' />
          </div>
        </Dropdown>
      </div>
      <div className='pt-5 pb-10 flex justify-between items-center'>
        <Link to='/recruitment/process'>
          <Button type='primary' danger>
            {newestAmount} {t('recruitment.card.in.newCandidate')}
          </Button>
        </Link>
        <div>
          <Link to='/recruitment/process'>
            <p className='text-red-500 font-bold hover:text-red-400 hover:cursor-pointer'>
              {recentAmount} {t('recruitment.card.in.forRe')}
            </p>
          </Link>
          <p>
            {recentAmount} {t('recruitment.card.in.candidate')}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ApplicationCard;
