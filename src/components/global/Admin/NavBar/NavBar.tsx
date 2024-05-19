import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../../../../styles/admin/nav-bar.module.scss';

interface NavBarProps {
  isCollapsed: boolean;
  items: { key: string; icon: JSX.Element; label: string }[];
  route: string;
  setTextHeader: (text: string) => void;
}

const NavBar = ({ isCollapsed, items, route, setTextHeader }: NavBarProps) => {
  const navigate = useNavigate();

  const handleSelect = (route: string) => {
    navigate(route);
  };
  return (
    <div className='bg-white-900 h-full fixed'>
      <Menu
        style={{ width: isCollapsed ? '104px' : '265px', fontSize: '16px' }}
        theme='light'
        mode='inline'
        inlineCollapsed={isCollapsed}
        defaultSelectedKeys={[items.find((item) => route.includes(item.key))?.key || items[0].key]}
        onClick={(e) => {
          setTextHeader(items.find((item) => item.key === e.key)?.label || '');
          handleSelect(e.key);
        }}
        items={items}
      />
    </div>
  );
};

export default NavBar;
