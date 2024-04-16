import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BellOutlined } from '@ant-design/icons';
import { NotificationType } from '@/+core/utilities/types/noti.type';

import NotificationItem from './NotificationItem';

import NotfiFakeData from '../../../draft/notifications.json';

const NotificationBox = () => {
  const { t } = useTranslation();

  const notiBoxRef = useRef<HTMLDivElement>(null);

  const [notifications, setNotifications] = useState<NotificationType[]>(NotfiFakeData);
  const [openNotiBox, setOpenNotiBox] = useState<boolean>(false);

  const handleSeenNotification = (noti: NotificationType) => {
    const newNotis = notifications?.map((n) => {
      if (n.id === noti?.id) {
        return {
          ...n,
          isSeen: true,
        };
      }
      return n;
    });

    if (newNotis) {
      setNotifications(newNotis);
      window.open(`${noti?.url}`, '_blank', 'noreferrer');
    }
  };

  const handleMarkAllRead = () => {
    const newNotis = notifications?.map((n) => {
      return {
        ...n,
        isSeen: true,
      };
    });

    if (newNotis) setNotifications(newNotis);
  };

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
        className={`h-5 w-5 rounded text-center transition-all hover:bg-gray-200 lg:mr-2 lg:h-11 lg:w-11 ${
          openNotiBox && 'bg-gray-200'
        }`}
        onClick={() => {
          setOpenNotiBox(!openNotiBox);
        }}
      >
        <BellOutlined className='text-xl' />
      </button>
      <div
        className={`absolute right-0 min-w-[450px] rounded bg-white-900 shadow-md transition-all duration-200 ease-out ${
          openNotiBox ? 'opacity-full visible top-full z-10' : 'invisible top-[110%] opacity-0'
        }`}
      >
        <div className='flex items-center justify-between border-b border-gray-200 p-4'>
          <h3 className='text-sm font-bold text-[#515151] lg:text-base'>{t('notification')}</h3>
          {notifications?.length !== 0 && (
            <button
              className='px-4 py-2 rounded-sm bg-gray-200 font-bold hover:bg-gray-300'
              onClick={() => {
                handleMarkAllRead();
              }}
            >
              {t('markAllRead')}
            </button>
          )}
        </div>
        <ul className='max-h-[400px] overflow-y-auto overscroll-contain'>
          {notifications?.length === 0 && (
            <li className='p-4 text-base font-bold text-[#5c5b5b]'>Không có thông báo !</li>
          )}
          {notifications?.length !== 0 &&
            notifications?.map((noti: NotificationType) => {
              return (
                <NotificationItem
                  key={noti?.id}
                  noti={noti}
                  handleSeenNotification={handleSeenNotification}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default NotificationBox;
