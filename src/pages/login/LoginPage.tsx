import { useState } from 'react';
import colors from '../../+core/themes/colors';
import { Button, Form, FormProps, Input } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
};

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState<string>('1');
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <div className='font-roboto'>
        <nav className='bg-black-600 w-full h-100 px-2 py-1 flex justify-between items-center'>
          <div>
            <button className='px-4 py-2'>
              <i className='fa fa-bars text-white-900'></i>
            </button>
          </div>
          <div className='flex lg:hidden'>
            <img
              src='https://accounts.topdev.vn/asset/images/logo-td-white.png'
              alt=''
              className='img-fluid logo-white w-20 sm:w-32'
            />
            <p className='inline text-2xl text-white-900 hidden sm:block'>
              <span className='text-orange-500'>Việc Làm IT </span>
              Hàng Đầu
            </p>
          </div>

          <div className='hidden lg:block'>
            <button>hello </button>
          </div>
        </nav>

        <div className='xl:flex transition duration-1000'>
          <div
            className='flex flex-col items-center py-11 px-3.5 xl:flex-1 xl:pt-40 xl:pb-0'
            style={{
              backgroundImage:
                'radial-gradient(281.67% 158.44% at 105.89% -50.76%, rgb(255, 199, 189) 0%, rgb(255, 232, 216) 100%)',
            }}
          >
            <h1 className='font-bold text-black-600 text-xl xl:text-4xl'>Đăng ký/ Đăng nhập</h1>
            <p className='text-sm text-black-400 xl:text-lg'>
              Liên kết tài khoản của bạn để tiếp tục sử dụng dịch vụ
            </p>
            <div className='rounded bg-white-900 mt-8 w-full sm:w-[37.5rem]'>
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
                    className='h-full w-full py-3 xl:text-lg'
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
                    className='h-full w-full py-3 xl:text-lg'
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
              {activeTab == '2' && (
                <div className='p-9'>
                  <h2 className='pb-3.5 text-sm text-black-600'>
                    Vui lòng <strong>Đăng nhập</strong> để tiếp tục sử dụng dịch vụ của TevDop
                  </h2>

                  <Form
                    name='basic'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                  >
                    <p className='text-sm text-black-400 font-bold mb-2'>ID tài khoản</p>
                    <Form.Item<FieldType>
                      name='username'
                      rules={[{ required: true, message: 'Please input your username!' }]}
                      className='mb-4'
                    >
                      <Input className='h-14' placeholder='Email | Username' />
                    </Form.Item>

                    <p className='text-sm text-black-400 font-bold mb-2'>Mật khẩu</p>
                    <Form.Item<FieldType>
                      name='password'
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password className='h-14' placeholder='Mật khẩu' />
                    </Form.Item>

                    <p className='mt-4'>
                      Bằng việc đăng nhập, bạn đồng ý với{' '}
                      <strong className='cursor-pointer hover:text-orange-500'>
                        Điều Khoản Sử Dụng
                      </strong>
                      và{' '}
                      <strong className='cursor-pointer hover:text-orange-500'>
                        Chính Sách Bảo Mật
                      </strong>
                      .
                    </p>

                    <Form.Item className='mt-5'>
                      {/* <Button type='primary' htmlType='submit'>
                        Submit
                      </Button> */}
                      <button
                        className='p-4 mb-3 rounded w-full text-center font-bold hover:shadow-lg hover:shadow-slate-500/20'
                        style={{
                          background: colors.orange[500],
                          color: 'white',
                        }}
                        type='submit'
                      >
                        Đăng nhập
                      </button>
                      <div className='text-right'>
                        <a
                          href='/recruitment'
                          className='font-bold underline underline-offset-[4px] hover:text-orange-500 hover:underline'
                        >
                          Quên mật khẩu?
                        </a>
                      </div>
                    </Form.Item>
                  </Form>
                </div>
              )}
            </div>
          </div>

          <div className='py-20 px-1 flex justify-center xl:flex-1'>
            <div className='w-[37.5rem] xl:mx-11'>
              <p className='text-lg text-black-400 mb-3.5'>Chào mừng bạn đến với</p>
              <img src='https://accounts.topdev.vn/asset/images/topdev-banner.svg'></img>
              <div className='px-2 py-1 flex justify-center'>
                <div
                  className='px-3.5 py-4 flex flex-col items-center rounded w-full'
                  style={{
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
                      Đăng nhập ngay để tận dụng tối đa các công cụ của TopDev và gia tăng cơ hội
                      tiếp cận công việc IT hot nhất
                    </h2>
                    <ul className='list-disc mb-3.5 ml-7 text-black-400'>
                      <li>Tạo CV chuẩn Developer</li>
                      <li>Ứng tuyển nhanh chóng hơn với hồ sơ đã được lưu</li>
                      <li>Quản lý hồ sơ ứng tuyển và theo dõi cập nhật trạng thái ứng tuyển</li>
                      <li>Xem được mức lương cho mỗi vị trí</li>
                      <li>Lưu lại công việc yêu thích để ứng tuyển sau</li>
                      <li>Thực hiện bài trắc nghiệm đánh giá tính cách làm việc</li>
                    </ul>
                    <p className='text-xs mb-3.5 text-black-400'>
                      Nếu bạn gặp khó khăn trong việc đăng nhập / tạo tài khoản, vui lòng liên hệ
                      với TopDev qua email contact@tevdop.vn
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-100 flex justify-center pt-5 pb-12 text-black-400 text-base'>
          <div className='flex md:flex-col xl:w-[71.25rem] lg:w-[60rem] lg:flex-row'>
            <div className='flex-grow w-3/5 px-3.5'>
              <div>
                <a href='/'>
                  <img
                    className='w-40'
                    src='https://accounts.topdev.vn/asset/images/logo.png'
                    alt='TopDev'
                  />
                </a>
              </div>
              <div>
                <p>
                  Tầng 12A, Toà nhà AP Tower, 518B Điện Biên Phủ, Phường 21, Quận Bình Thạnh, Thành
                  phố Hồ Chí Minh
                </p>
                <p>Copyright © CÔNG TY CỔ PHẦN APPLANCER</p>
                <p>
                  Liên Hệ: <a href='tel:02862733496'>028 6273 3496</a> -{' '}
                  <a href='mailto:contact@topdev.vn'>contact@topdev.vn</a>
                </p>
                <p>ĐKKD : 031 303 2338 - Cấp ngày : 27/11/2014</p>
              </div>
            </div>
            <div className='flex-grow w-3/5 px-3.5'>
              <p className='font-bold'>Về TevDop</p>
              <ul className='flex-column'>
                <li>
                  <a href='/'>Về chúng tôi</a>
                </li>
                <li>
                  <a href='/'>Liên hệ</a>
                </li>
                <li>
                  <a href='/'>Thoả thuận sử dụng</a>
                </li>
                <li>
                  <a href='/'>Cơ hội việc làm</a>
                </li>
                <li>
                  <a href='/'>Quy định bảo mật</a>
                </li>
                <li>
                  <a href='/'>Quy chế hoạt động của sán giao dịch thương mại điện tử TEVDOP</a>
                </li>
                <li>
                  <a href='/'>Giải quyết khiếu nại</a>
                </li>
              </ul>
            </div>
            <div className='flex-grow w-3/5 px-3.5'>
              <p className='font-bold'>Dành Cho Người Tìm Việc</p>
              <ul className='flex-column'>
                <li>
                  <a href='/'>Tính lương Gross - Net</a>
                </li>
                <li>
                  <a href='/'>Tạo CV</a>
                </li>
                <li>
                  <a href='/'>Tìm kiếm công việc IT</a>
                </li>
                <li>
                  <a href='/'>Trắc nghiệm tính cách</a>
                </li>
              </ul>
            </div>
            <div className='flex-grow w-3/5 px-3.5'>
              <p className='font-bold'>Dành Cho Các Nhà Tuyển Dụng</p>
              <ul className='flex-column'>
                <li>
                  <a href='/'>Đăng việc làm IT</a>
                </li>
                <li>
                  <a href='/'>Tìm kiếm nhân tài</a>
                </li>
              </ul>
            </div>
            <div className='flex-grow w-3/5 px-3.5'>
              <p className='mb-2.5 font-bold'>Theo dõi chúng tôi tại</p>
              <ul className='flex gap-3'>
                <li>
                  <a href='/'>
                    <i className='fa fa-3x fa-facebook-square' aria-hidden='true'></i>
                  </a>
                </li>
                <li>
                  <a href='/'>
                    <i className='fa fa-3x fa-linkedin-square' aria-hidden='true'></i>
                  </a>
                </li>
                <li>
                  <a href='/'>
                    <i className='fa fa-3x fa-youtube-square' aria-hidden='true'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
