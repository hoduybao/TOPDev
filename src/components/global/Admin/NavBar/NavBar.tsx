import Sider from 'antd/es/layout/Sider';
import { ProfileOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { MY_ROUTE } from '@/routes/route.constant';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavBarProps {
  isCollapsed: boolean;
}

const NavBar = ({ isCollapsed }: NavBarProps) => {
  const route = useLocation().pathname;
  const navigate = useNavigate();

  const handleSelect = (route: string) => {
    navigate(route);
  };
  return (
    <Sider trigger={null} collapsible collapsed={isCollapsed} style={{ background: 'white' }}>
      <Menu
        theme='light'
        mode='inline'
        defaultSelectedKeys={[route]}
        onClick={(e) => handleSelect(e.key)}
        items={[
          {
            key: MY_ROUTE.ADMIN_ACCOUNT_MANAGEMENT,
            icon: <ProfileOutlined />,
            label: 'Manage HR Accounts',
          },
          {
            key: MY_ROUTE.ADMIN_JOB_MANAGEMENT,
            icon: <VideoCameraOutlined />,
            label: 'Manage Jobs',
          },
        ]}
      />
    </Sider>
  );
};

export default NavBar;
