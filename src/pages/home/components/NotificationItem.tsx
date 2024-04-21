import { NotificationType } from '@/+core/utilities/types/noti.type';

interface PropType {
  noti: NotificationType;
  handleSeenNotification: (noti: NotificationType) => void;
}

const NotificationItem = (props: PropType) => {
  const { noti, handleSeenNotification } = props;

  return (
    <li className='text-[#5c5b5b] hover:bg-gray-100 hover:cursor-pointer'>
      <div
        className='p-4 flex gap-3 justify-between'
        onClick={() => {
          handleSeenNotification(noti);
        }}
      >
        <div className='flex flex-col gap-1'>
          <h1 className='text-base font-bold'>{noti?.title}</h1>
          <p className='max-w-[360px] truncate'>{noti?.description}</p>
          <p>{noti?.timestamp}</p>
        </div>
        <div className='flex items-center'>
          {noti?.isSeen === false && (
            <div className='w-[13px] h-[13px] rounded-full bg-primary-red'></div>
          )}
        </div>
      </div>
    </li>
  );
};

export default NotificationItem;
