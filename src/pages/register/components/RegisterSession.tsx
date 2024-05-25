import { Form, FormProps, Input } from 'antd';
import colors from '@/+core/themes/colors';
import { MY_ROUTE } from '@/routes/route.constant';

type FieldType = {
  username?: string;
  password?: string;
  companyName?: string;
  phoneNumber?: string;
};

const RegisterForm = () => {
  const [RegisterForm] = Form.useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
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
          <p className='text-base text-black-300 font-bold mb-2'>ID tài khoản</p>
          <Form.Item<FieldType>
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
            className='mb-4'
          >
            <Input className='h-14 text-base' placeholder='Email | Username' />
          </Form.Item>

          <p className='text-base text-black-300 font-bold mb-2'>Mật khẩu</p>
          <Form.Item<FieldType>
            name='password'
            className='mb-4'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className='h-14 text-base' placeholder='Mật khẩu' />
          </Form.Item>

          <p className='text-base text-black-300 font-bold mb-2'>Tên công ty</p>
          <Form.Item<FieldType>
            name='companyName'
            className='mb-4'
            rules={[{ required: true, message: 'Please input your company name!' }]}
          >
            <Input className='h-14 text-base' placeholder='Ví dụ: Topdev' />
          </Form.Item>

          <p className='text-base text-black-300 font-bold mb-2'>Số điện thoại</p>
          <Form.Item<FieldType>
            className='mb-4'
            name='phoneNumber'
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input className='h-14 text-base' placeholder='Ví dụ: 0912345678' />
          </Form.Item>

          <Form.Item className='mt-5'>
            <button
              className='p-4 mb-3 rounded w-full text-center font-bold hover:shadow-lg hover:shadow-slate-500/20'
              style={{
                background: colors.orange[500],
                color: 'white',
              }}
              type='submit'
            >
              Đăng ký
            </button>
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
