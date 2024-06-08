import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import './style.scss';

import ContactInformation from './components/ContactInformation';
import Profile from './components/Profile';

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
    <div className='p-6 bg-white-900 w-full'>
      <Tabs
        defaultActiveKey='company-profile'
        items={items}
        onChange={onProfileTabChange}
        tabBarStyle={{ color: 'red' }}
      />
    </div>
  );
};
