import { useState } from 'react';
import { Drawer } from 'antd';

import { MenuOutlined } from '@ant-design/icons';

const HeaderUserMobile = () => {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className='md:hidden'>
      <div className='hover:cursor-pointer' onClick={showDrawer}>
        <MenuOutlined className='text-[20px]' />
      </div>
      <Drawer title='Username' onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default HeaderUserMobile;
