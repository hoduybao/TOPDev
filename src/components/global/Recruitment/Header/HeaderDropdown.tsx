import { Link } from 'react-router-dom';
import { Dropdown } from 'antd';

import type { MenuProps } from 'antd';

interface HeaderMenuType {
  title: string;
  menu: { name: string; url: string }[];
}

interface PropType {
  menu: HeaderMenuType;
}

const HeaderDropdown = (props: PropType) => {
  const { menu } = props;

  const items: MenuProps['items'] = menu?.menu?.map((item) => {
    return {
      key: item?.name,
      label: <Link to={`${item?.url}`}>{item?.name}</Link>,
    };
  });

  return (
    <li>
      <Dropdown menu={{ items }} trigger={['click']}>
        <div className={`px-3 py-1 rounded-md hover:bg-gray-200 hover:cursor-pointer`}>
          <span>{menu?.title}</span>
        </div>
      </Dropdown>
    </li>
  );
};

export default HeaderDropdown;
