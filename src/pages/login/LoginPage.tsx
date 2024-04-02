import { useState } from 'react';
import colors from '../../+core/themes/colors';
import { Button } from 'antd';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState<string>('1');
  return (
    <>
      <div className='font-roboto'>
        <nav className='bg-black-600 w-full h-100 px-2 py-1 flex justify-between items-center'>
          <div>
            <button className='px-4 py-2'>
              <i className='fa fa-bars text-white-900'></i>
            </button>
          </div>
          <div>
            <img
              src='https://accounts.topdev.vn/asset/images/logo-td-white.png'
              alt=''
              className='img-fluid logo-white w-20'
            />
          </div>
        </nav>

        <div
          className='flex flex-col items-center py-11'
          style={{
            backgroundImage:
              'radial-gradient(281.67% 158.44% at 105.89% -50.76%, rgb(255, 199, 189) 0%, rgb(255, 232, 216) 100%)',
          }}
        >
          <h1 className='font-bold text-xl'>Đăng ký/ Đăng nhập</h1>
          <p className='text-sm text-black-400'>
            Liên kết tài khoản của bạn để tiếp tục sử dụng dịch vụ
          </p>
          <div className='rounded bg-white-900 mt-8' style={{ width: '600px' }}>
            <ul className='flex flex-row px-5'>
              <li
                className='flex-1 text-center text-sm cursor-pointer'
                style={{
                  borderBottom:
                    activeTab == '1'
                      ? `5px solid ${colors.orange[500]}`
                      : `1px solid ${colors.gray[300]}`,
                  fontWeight: activeTab == '1' ? 'bold' : 'normal',
                }}
              >
                <button
                  className='h-full w-full py-3'
                  onClick={() => setActiveTab('1')}
                  style={{ background: 'none', border: 'none' }}
                >
                  Ứng viên
                </button>
              </li>
              <li
                className='flex-1 text-center text-sm cursor-pointer'
                style={{
                  borderBottom:
                    activeTab == '2'
                      ? `5px solid ${colors.orange[500]}`
                      : `1px solid ${colors.gray[300]}`,
                  fontWeight: activeTab == '2' ? 'bold' : 'normal',
                }}
              >
                <button
                  className='h-full w-full py-3'
                  onClick={() => setActiveTab('2')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Nhà tuyển dụng
                </button>
              </li>
            </ul>
            {activeTab == '1' && (
              <div className='p-8'>
                <button className='p-4 rounded border-solid border-1 border-black'> hello</button>
              </div>
            )}
            {activeTab == '2' && <div className='p-8'>Hello2</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
