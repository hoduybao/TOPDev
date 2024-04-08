import { useState } from 'react';
import colors from '../../+core/themes/colors';

import { MY_ROUTE } from '../../routes/route.constant';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState<string>('');
  const handleSubmitEmail = () => {
    console.log('email: ', email);
  };
  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-col mb-8 font-roboto'>
        <div
          className='w-[1110px] h-[332px] flex flex-col justify-center items-center py-10 px-[275px]'
          style={{ border: `1px solid ${colors.gray[800]}`, color: '#555555' }}
        >
          <h1 className='text-[28px] font-bold'>Đặt Lại Mật Khẩu!</h1>

          <p className='my-8 text-center text-lg'>
            Hãy nhập thông tin vào bên dưới và đảm bảo rằng bạn nhập đúng email mà bạn cần thay đổi
            mật khẩu. Chúng tôi sẽ gửi thông tin để bạn thay đổi mật khẩu vào email.
          </p>
          <input
            type='text'
            placeholder='Email'
            style={{
              border: '1px solid #ced4da',
            }}
            className='w-full p-2.5 rounded outline-none'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className='w-full py-1.5 px-2 mt-5 rounded text-sm hover:bg-blue-900 bg-blue-500'
            style={{
              color: 'white',
            }}
            onClick={handleSubmitEmail}
          >
            Gửi Link Để Tạo Mật Khẩu
          </button>
        </div>
        <a href={MY_ROUTE.LOGIN} className='mt-2'>
          <i className='fa fa-angle-double-left mr-1.5'></i>
          Trở về trang chủ
        </a>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
