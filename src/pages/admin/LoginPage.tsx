import { Form, Grid, Input, theme, Typography } from 'antd';

import { LockOutlined, MailOutlined } from '@ant-design/icons';
import colors from '@/+core/themes/colors';

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title } = Typography;

export default function App() {
  const { token } = useToken();
  const screens = useBreakpoint();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const styles = {
    container: {
      padding: screens.md ? `${token.paddingXL}px` : `${token.sizeXXL}px ${token.padding}px`,
      width: '380px',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
    },
  };

  return (
    <div
      className='h-[100vh] flex items-center justify-center bg-black-500'
      style={{
        backgroundImage:
          'radial-gradient(281.67% 158.44% at 105.89% -50.76%, rgb(3, 182, 252) 0%, rgb(255, 232, 216) 100%)',
      }}
    >
      <div style={styles.container} className='flex flex-col'>
        <div className='mb-3 flex flex-col items-center'>
          <img className='w-[160px]' src='https://accounts.topdev.vn/asset/images/logo.png' />

          <Title>
            <span className='text-orange-500 mr-1'>Admin </span> Login
          </Title>
          <Text className='text-center'>
            Welcome back to TevDop Admin! Please enter your details below to log in.
          </Text>
        </div>
        <Form
          name='normal_login'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout='vertical'
          requiredMark='optional'
        >
          <Form.Item
            name='email'
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Please input your Email!',
              },
            ]}
            className='mb-2'
          >
            <Input prefix={<MailOutlined />} placeholder='Email' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
            className='mb-3'
          >
            <Input.Password prefix={<LockOutlined />} type='password' placeholder='Password' />
          </Form.Item>
          <Form.Item>
            <button
              className='p-2 mb-3 rounded w-full text-center font-bold hover:shadow-lg hover:shadow-slate-500/20'
              style={{
                background: colors.orange[500],
                color: 'white',
              }}
              type='submit'
            >
              Login
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
