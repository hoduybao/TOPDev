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
                <button
                  className='p-4 mb-3 rounded w-full flex justify-center font-bold hover:shadow-lg hover:shadow-slate-500/20'
                  style={{
                    border: `solid 1px ${colors.black[300]}`,
                    color: `solid 1px ${colors.black[300]}`,
                  }}
                >
                  <img
                    src='https://accounts.topdev.vn/asset/images/google.svg'
                    alt='Google'
                    className='h-6 mr-3'
                  />
                  Tiếp tục với Google
                  {/* <span className='ml-3 font-bold'></span> */}
                </button>

                <button
                  className='p-4 mb-3 rounded w-full flex justify-center font-bold hover:shadow-lg hover:shadow-slate-500/20'
                  style={{
                    background: colors.black[300],
                    color: 'white',
                  }}
                >
                  <img
                    src='https://accounts.topdev.vn/asset/images/github.svg'
                    alt='Github'
                    className='h-6 mr-3'
                  />
                  Tiếp tục với Github
                </button>

                <p className='text-xs text-black-400'>
                  Bằng việc tiếp tục, bạn đồng ý với{' '}
                  <span className='font-bold'>Điều Khoản Sử Dụng</span>
                  và <span className='font-bold'>Chính Sách Bảo Mật.</span>
                </p>
              </div>
            )}
            {activeTab == '2' && <div className='p-8'>Hello2</div>}
          </div>
        </div>

        <div className=' flex flex-col justify-center py-20 px-1'>
          <p className='text-lg text-black-400 mb-3.5'>Chào mừng bạn đến với</p>
          <img src='https://accounts.topdev.vn/asset/images/topdev-banner.svg'></img>
          <div className='px-2 py-1 flex justify-center'>
            <div
              className='px-3.5 py-4 flex flex-col items-center rounded'
              style={{
                maxWidth: '600px',
                boxShadow: '0px 0px 4px 0px rgba(134, 134, 134, 0.2509803922)',
              }}
            >
              <img
                src='https://accounts.topdev.vn/asset/images/img-person.svg'
                alt='Topdev person'
                width='291'
                height='243'
              />
              <div>
                <h2 className='text-sm text-black-600 font-semibold mt-2.5 mb-2'>
                  Đăng nhập ngay để tận dụng tối đa các công cụ của TopDev và gia tăng cơ hội tiếp
                  cận công việc IT hot nhất
                </h2>
                <ul className='list-disc mb-3.5 ml-7'>
                  <li>Tạo CV chuẩn Developer</li>
                  <li>Ứng tuyển nhanh chóng hơn với hồ sơ đã được lưu</li>
                  <li>Quản lý hồ sơ ứng tuyển và theo dõi cập nhật trạng thái ứng tuyển</li>
                  <li>Xem được mức lương cho mỗi vị trí</li>
                  <li>Lưu lại công việc yêu thích để ứng tuyển sau</li>
                  <li>Thực hiện bài trắc nghiệm đánh giá tính cách làm việc</li>
                </ul>
                <p className='text-xs mb-3.5 text-black-400'>
                  Nếu bạn gặp khó khăn trong việc đăng nhập / tạo tài khoản, vui lòng liên hệ với
                  TopDev qua email contact@topdev.vn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
