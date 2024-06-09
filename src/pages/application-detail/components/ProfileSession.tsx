import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';

type Props = {
  name: string;
  email: string;
  phone: string;
};

const ProfileSession = (props: Props) => {
  const { name, email, phone } = props;
  return (
    <div className='w-full'>
      <div className='flex gap-2'>
        <div className='w-[50px] h-[50px] bg-gray-200 rounded-full flex items-center justify-center'>
          <UserOutlined className='text-3xl' />
        </div>
        <div className='flex-1 flex flex-col justify-between'>
          <h4 className='font-semibold text-base'>{name}</h4>
          <span className='text-sm'>
            {email} | {phone}
          </span>
        </div>
      </div>
      <div className='flex gap-2 mt-2'>
        <div className='w-[50px]'></div>
        <div className='flex-1 flex gap-2'>
          <PhoneOutlined className='text-green-500 p-1 rounded-full bg-gray-200' />
          <MailOutlined className='text-green-500 p-1 rounded-full bg-gray-200' />
        </div>
      </div>
      <div className='w-full border border-b-[1px] border-black-100 my-3'></div>
    </div>
  );
};

export default ProfileSession;
