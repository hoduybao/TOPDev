import { useTranslation } from 'react-i18next';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import './style.scss';

import Profile from './components/Profile';
import ContactInformation from './components/ContactInformation';

export const CompanyProfile = () => {
  const { t } = useTranslation();

  const items: TabsProps['items'] = [
    {
      key: 'company-profile',
      label: `${t('companyProfile')}`,
      children: <Profile />,
    },
    {
      key: 'contact-information',
      label: `${t('contactInformation')}`,
      children: <ContactInformation />,
    },
  ];

  const onProfileTabChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className='p-6'>
      <Tabs
        defaultActiveKey='company-profile'
        items={items}
        onChange={onProfileTabChange}
        tabBarStyle={{ color: 'red' }}
      />
    </div>
  );
};
