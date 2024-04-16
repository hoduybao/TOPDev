import { useEffect, useRef, useState } from 'react';
import { Badge, Tabs } from 'antd';
import type { TabsProps } from 'antd';

import { WechatOutlined } from '@ant-design/icons';

const HeaderMessage = () => {
  const items: TabsProps['items'] = [
    {
      key: 'all',
      label: 'Tất cả',
      children: <div>All data</div>,
    },
    {
      key: 'chat',
      label: 'Chat',
      children: <div>Chat data</div>,
    },
    {
      key: 'channel',
      label: 'Kênh',
      children: <div>Channel data</div>,
    },
  ];

  const notiBoxRef = useRef<HTMLDivElement>(null);

  const [openNotiBox, setOpenNotiBox] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (notiBoxRef.current && !notiBoxRef.current.contains(event.target)) {
        // alert('You clicked outside of me!');
        setOpenNotiBox(false);
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [notiBoxRef]);

  return (
    <div ref={notiBoxRef} className='relative py-4 lg:py-5'>
      <button
        className={`h-10 w-14 rounded text-center transition-all hover:bg-gray-200 lg:mr-2${
          openNotiBox && 'bg-gray-200'
        }`}
        onClick={() => {
          setOpenNotiBox(!openNotiBox);
        }}
      >
        <Badge count={2} overflowCount={10} offset={[0, 4]}>
          <WechatOutlined className='text-[23px] pr-1' />
        </Badge>
      </button>
      <div
        className={`absolute right-0 min-w-[450px] rounded bg-white-900 shadow-md transition-all duration-200 ease-out ${
          openNotiBox ? 'opacity-full visible top-full z-10' : 'invisible top-[110%] opacity-0'
        }`}
      >
        <button
          className='z-10 absolute right-3 top-3 text-primary-red font-bold'
          onClick={() => {
            console.log('New notification');
          }}
        >
          Thông điệp mới
        </button>
        <div className='px-4 pb-4 max-h-[400px] overflow-y-auto overscroll-contain'>
          <Tabs defaultActiveKey='1' items={items} />
        </div>
      </div>
    </div>
  );
};

export default HeaderMessage;
