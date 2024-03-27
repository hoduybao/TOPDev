import { useTranslation } from 'react-i18next';
import { Dropdown, Menu } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

const HeaderLanguages = () => {
  const [language, setLanguage] = useState<string>('en'); // Initialize language state with the correct type

  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
  }, []); // Empty dependency array to run the effect only once

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).then(() => {
      setLanguage(lng);
    });
    localStorage.setItem('language', lng);
  };

  const menu = (
    <Menu>
      <Menu.Item key='en' onClick={() => changeLanguage('en')}>
        English
      </Menu.Item>
      <Menu.Item key='vi' onClick={() => changeLanguage('vi')}>
        Tiếng Việt
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} trigger={['click']}>
        <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
          <GlobalOutlined style={{ marginRight: '5px' }} />
          {language === 'en' ? 'English' : 'Tiếng Việt'}
        </a>
      </Dropdown>
    </div>
  );
};

export default HeaderLanguages;
