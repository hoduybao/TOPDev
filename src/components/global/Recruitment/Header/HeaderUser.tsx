import { Link } from 'react-router-dom';
import { Dropdown, Avatar, Switch } from 'antd';
import type { MenuProps } from 'antd';

import { HeaderUserMenu } from '../../../../+core/constants/recruitment.constants';

const HeaderUser = () => {
  const items: MenuProps['items'] = HeaderUserMenu?.map((item) => {
    if (item?.description) {
      return {
        key: item?.name,
        label: (
          <Link to={`${item?.url}`}>
            <div className='flex items-center justify-between gap-5'>
              <p>{item?.name}</p>
              <p className='font-semibold'>{item?.description}</p>
            </div>
          </Link>
        ),
      };
    }

    if (item?.name === 'Dark mode') {
      return {
        key: item?.name,
        label: (
          <div
            className='flex items-center justify-between gap-5'
            onClick={(e) => e?.stopPropagation()}
          >
            <p>{item?.name}</p>
            <Switch size='small' />
          </div>
        ),
      };
    }

    return {
      key: item?.name,
      label: <Link to={`${item?.url}`}>{item?.name}</Link>,
    };
  });

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <div className='hidden p-2 md:flex items-center justify-center hover:cursor-pointer'>
        <Avatar className='bg-primary-red' shape='square' size={28}>
          T
        </Avatar>
      </div>
    </Dropdown>
  );
};

export default HeaderUser;
