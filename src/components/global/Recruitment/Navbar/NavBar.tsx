import Sider from 'antd/es/layout/Sider';
import { UploadOutlined, ProfileOutlined, VideoCameraOutlined } from '@ant-design/icons';
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
            key: MY_ROUTE.RECRUITMENT_PROFILE,
            icon: <ProfileOutlined />,
            label: 'Company Profile',
          },
          {
            key: MY_ROUTE.RECRUITMENT_JOBS,
            icon: <VideoCameraOutlined />,
            label: 'Manage Jobs',
          },
          {
            key: MY_ROUTE.RECRUITMENT_CANDIDATES,
            icon: <UploadOutlined />,
            label: 'Manage Candidates',
          },
        ]}
      />
    </Sider>
  );
};

export default NavBar;
