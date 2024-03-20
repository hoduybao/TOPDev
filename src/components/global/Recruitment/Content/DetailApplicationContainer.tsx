import { Button, Form, Input, Select, Rate } from 'antd';
import { type FormProps } from 'antd';

import MockApplicationData from '../../../../draft/application.json';

const { Option } = Select;

const layout = {
  labelCol: { lg: { span: 10 } },
  wrapperCol: { lg: { span: 12 } },
};

type FieldType = {
  title?: string;
  name?: string;
  email?: string;
  phone?: string;
  rating?: number;
};

const DetailApplicationContainer = () => {
  const [NewRecruitmentForm] = Form.useForm();

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select style={{ width: 70 }} disabled>
        <Option value='84'>+84</Option>
      </Select>
    </Form.Item>
  );

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    if (values?.title && values?.name && values?.phone && values?.email) {
      //
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='p-4 h-auto'>
      <Button type='primary' danger>
        Từ chối
      </Button>
      <Form
        {...layout}
        form={NewRecruitmentForm}
        name='create-new-job'
        className='bg-white p-4 rounded-md mt-5 flex flex-col gap-5'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          ['title']: MockApplicationData?.id,
          ['name']: MockApplicationData?.name,
          ['email']: MockApplicationData?.email,
          ['phone']: MockApplicationData?.phone,
          ['rating']: MockApplicationData?.rating,
          prefix: '84',
        }}
      >
        <Form.Item<FieldType>
          label='Tiêu đề / Hồ sơ ứng tuyển'
          name='title'
          rules={[{ required: true, message: 'Please input job title!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label='Tên ứng viên'
          name='name'
          rules={[{ required: true, message: 'Please input applicant name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Please input applicant email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='phone'
          label='Điện thoại'
          rules={[{ required: true, message: 'Please input applicant phone number!' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item<FieldType>
          label='Đánh giá'
          name='rating'
          rules={[{ required: true, message: 'Please input applicant rating!' }]}
        >
          <Rate />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <div className='w-full border-t border-gray-300 mt-5 pt-4 flex items-center gap-2'>
            <Button type='primary' htmlType='submit' danger>
              Gửi tin
            </Button>
            <Button htmlType='button'>Ghi chú</Button>
            <Button htmlType='button'>Hoạt động</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DetailApplicationContainer;
