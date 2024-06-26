import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Dropdown, Button } from 'antd';
import type { MenuProps } from 'antd';

import { UploadOutlined, SettingOutlined } from '@ant-design/icons';

const DetailSubHeader = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const actionsItems: MenuProps['items'] = [
    {
      key: 'import-data',
      label: (
        <Link to='/recruitment'>
          <div className='flex items-center gap-3'>
            <UploadOutlined />
            <p>Import dữ liệu</p>
          </div>
        </Link>
      ),
    },
  ];

  return (
    <div className='bg-[#fff] px-4 pt-2.5 pb-4 border-b border-gray-300 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-3'>
          <p className='text-[16px] font-semibold text-primary-red'>{t('recruitmentApplicant')}</p>
          <p className='text-[16px] '>{params?.id}</p>
        </div>
        <Dropdown menu={{ items: actionsItems }} trigger={['click']}>
          <div>
            <SettingOutlined />
          </div>
        </Dropdown>
      </div>
      <div></div>
      <div>
        <Button
          type='primary'
          danger
          onClick={() => {
            navigate(-1);
          }}
        >
          {t('back')}
        </Button>
      </div>
    </div>
  );
};

export default DetailSubHeader;
