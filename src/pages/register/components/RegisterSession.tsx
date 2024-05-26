import { Button, Form, FormProps, Input, notification } from 'antd';
import colors from '@/+core/themes/colors';
import {
  EmployerRegister,
  useEmployerRegisterMutation,
} from '@/+core/redux/apis/common/authentication/authentication.api';
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/+core/redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';

type FieldType = EmployerRegister;
type RegisterResponse = {
  statusCode: number;
  data: {
    access_token: string;
    refresh_token: string;
    id: string;
  };
};

const RegisterForm = () => {
  const [RegisterForm] = Form.useForm();
  const [register, { isLoading }] = useEmployerRegisterMutation();
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('Success:', values);
    if (values.password !== values.retypedPassword) {
      notification.error({
        message: 'Mật khẩu không khớp',
        description: 'Mật khẩu nhập lại không khớp với mật khẩu đã nhập',
      });
      return;
    }
    const resp = await register(values).unwrap();
    if (resp.statusCode == 200) {
      notification.success({
        message: 'Đăng ký thành công',
        description: 'Chuyển hướng đến trang đăng nhập',
      });
      navigate('/login');
    } else {
      notification.error({
        message: 'Đăng ký thất bại',
        description: 'Vui lòng thử lại sau',
      });
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='rounded-lg'>
      <div className='bg-gray-100 p-4 rounded-lg rounded-b-none'>
        <h2 className='text-2xl font-bold'>Yêu cầu tư vấn</h2>
        <p className='text-xl text-gray-400'>
          Điền thông tin sau để nhận tư vấn trực tiếp từ TopDev
        </p>
      </div>

      <div className='bg-white-900 p-4 pt-8'>
        <Form
          name='basic'
          form={RegisterForm}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <p className='text-base text-black-300 font-bold mb-2'>Tên đăng nhập</p>
          <Form.Item<FieldType>
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
            className='mb-4'
          >
            <Input className='h-14 text-base' placeholder='employer1' />
          </Form.Item>

          <p className='text-base text-black-300 font-bold mb-2'>Mật khẩu</p>
          <Form.Item<FieldType>
            name='password'
            className='mb-4'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className='h-14 text-base' placeholder='Mật khẩu' />
          </Form.Item>

          <p className='text-base text-black-300 font-bold mb-2'>Nhập lại mật khẩu</p>
          <Form.Item<FieldType>
            name='retypedPassword'
            className='mb-4'
            rules={[{ required: true, message: 'Please retype your password!' }]}
          >
            <Input.Password className='h-14 text-base' placeholder='Nhập lại mật khẩu' />
          </Form.Item>

          <p className='text-base text-black-300 font-bold mb-2'>Tên công ty</p>
          <Form.Item<FieldType>
            name='companyName'
            className='mb-4'
            rules={[{ required: true, message: 'Please input your company name!' }]}
          >
            <Input className='h-14 text-base' placeholder='Ví dụ: Topdev' />
          </Form.Item>

          <p className='text-base text-black-300 font-bold mb-2'>Địa chỉ email</p>
          <Form.Item<FieldType>
            name='email'
            className='mb-4'
            rules={[{ required: true, message: 'Please input your company name!' }]}
          >
            <Input className='h-14 text-base' placeholder='Ví dụ: Topdev@gmail.com' />
          </Form.Item>

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <p className='text-base text-black-300 font-bold mb-2'>Họ và tên đệm</p>
              <Form.Item<FieldType>
                name='lastName'
                className='mb-4'
                rules={[{ required: true, message: 'Please input your last name!' }]}
              >
                <Input className='h-14 text-base' placeholder='Ví dụ: Nguyễn Văn' />
              </Form.Item>
            </div>

            <div>
              <p className='text-base text-black-300 font-bold mb-2'>Tên</p>
              <Form.Item<FieldType>
                name='firstName'
                className='mb-4'
                rules={[{ required: true, message: 'Please input your first name!' }]}
              >
                <Input className='h-14 text-base' placeholder='Ví dụ: A' />
              </Form.Item>
            </div>
          </div>

          <p className='text-base text-black-300 font-bold mb-2'>Số điện thoại</p>
          <Form.Item<FieldType>
            className='mb-4'
            name='phoneNumber'
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input className='h-14 text-base' placeholder='Ví dụ: 0912345678' />
          </Form.Item>

          <Form.Item className='mt-5'>
            <Button
              loading={isLoading}
              className='p-4 mb-3 rounded w-full text-center font-bold hover:shadow-lg hover:shadow-slate-500/20'
              style={{
                background: colors.orange[500],
                color: 'white',
              }}
              htmlType='submit'
            >
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
const RegisterSession = () => {
  return (
    <div>
      <div
        className='p-8 rounded-lg'
        style={{ background: 'linear-gradient(to right, #FFD8BB, #FFC8BD)' }}
      >
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterSession;
