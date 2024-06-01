import React, { useState } from 'react';
import colors from '../../+core/themes/colors';
import { Button, Form, FormProps, Input } from 'antd';
import { MY_ROUTE } from '@/routes/route.constant';
import {
  AuthenticationFields,
  useCandidateLoginMutation,
  useEmployerLoginMutation,
} from '@/+core/redux/apis/common/authentication/authentication.api';
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/+core/redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';

type LoginFormFields = AuthenticationFields;

const LoginPage = () => {
  const [employerLogin, { isLoading }] = useEmployerLoginMutation();
  const [candidateLogin, { isLoading: isLoadingCandidate }] = useCandidateLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('1');
  const isCalledLoginWithGithub = React.useRef(false);

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    const loginWithGithub = async (code: string) => {
      isCalledLoginWithGithub.current = true;
      const resp = await candidateLogin({
        type: 'github',
        token: code || '',
      }).unwrap();

      if (resp) {
        dispatch(setCredentials(resp));
        navigate('/');
      }
    };
    // prevent double call api
    if (code && !isCalledLoginWithGithub.current) {
      loginWithGithub(code);
    }
  }, []);

  const onFinish: FormProps<LoginFormFields>['onFinish'] = async (values) => {
    const resp = await employerLogin(values).unwrap();

    if (resp) {
      dispatch(setCredentials(resp));
      navigate('/company');
    }
  };

  const onFinishFailed: FormProps<LoginFormFields>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleCandidateLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      console.log('Login Success:', codeResponse);

      const resp = await candidateLogin({
        type: 'google',
        token: codeResponse?.access_token || '',
      }).unwrap();

      if (resp) {
        dispatch(setCredentials(resp));
        navigate('/');
      }
    },
    onError: (error) => console.log('Login Failed:', error),
  });

  const handleGithubLogin = () => {
    window.location.assign(
      'https://github.com/login/oauth/authorize?client_id=' + import.meta.env.VITE_GITHUB_CLIENT_ID,
    );
  };

  return (
    <>
      <div className='font-roboto'>
        {/* Content */}
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
                  <Button
                    loading={isLoadingCandidate}
                    onClick={() => handleCandidateLogin()}
                    className='h-full p-4 mb-3 rounded w-full flex justify-center font-bold hover:shadow-lg hover:shadow-slate-500/20'
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
                  </Button>

                  <Button
                    onClick={() => handleGithubLogin()}
                    className='h-full p-4 mb-3 rounded w-full flex justify-center font-bold hover:shadow-lg hover:shadow-slate-500/20'
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
                  </Button>

                  {/* <button
                    onClick={() => {
                      dispatch(logOut());
                    }}
                    className='p-4 mb-3 rounded w-full flex justify-center font-bold hover:shadow-lg hover:shadow-slate-500/20'
                    style={{
                      background: colors.black[300],
                      color: 'white',
                    }}
                  >
                    Log out
                  </button>

                  <button
                    onClick={async () => {
                      console.log('before>>', data);
                      await refetch();
                      console.log('after>>', data);
                    }}
                    className='p-4 mb-3 rounded w-full flex justify-center font-bold hover:shadow-lg hover:shadow-slate-500/20'
                    style={{
                      background: colors.black[300],
                      color: 'white',
                    }}
                  >
                    Test authorization api
                  </button> */}

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
                    <Form.Item<LoginFormFields>
                      name='username'
                      rules={[{ required: true, message: 'Please input your username!' }]}
                      className='mb-4'
                    >
                      <Input className='h-14' placeholder='Email | Username' />
                    </Form.Item>

                    <p className='text-sm text-black-400 font-bold mb-2'>Mật khẩu</p>
                    <Form.Item<LoginFormFields>
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
                      <Button
                        loading={isLoading}
                        className='p-4 mb-3 rounded w-full text-center font-bold hover:shadow-lg hover:shadow-slate-500/20'
                        style={{
                          background: colors.orange[500],
                          color: 'white',
                        }}
                        htmlType='submit'
                      >
                        Đăng nhập
                      </Button>

                      <div className='text-right'>
                        <a
                          href={MY_ROUTE.RESET_PASSWORD}
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
      </div>
    </>
  );
};

export default LoginPage;
