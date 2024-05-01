import { CameraOutlined, EditOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  FormProps,
  Input,
  Modal,
  Radio,
  RadioChangeEvent,
  Select,
  SelectProps,
} from 'antd';
import { useState } from 'react';

// interface PropType {
//   createNewDetailApplication: (title: string, name: string, phone: string, email: string) => void;
// }

type FieldType = {
  fullname: string;
  dob: string;
  gender: string;
  role: string;
  yoe: number;
  email: string;
  phone: string;
  address: string;
  province: string;
  socialLink: string;
  githubLink: string;
  skills: string[];
};
// const UserProfileModal = (props: PropType) => {

const UserProfileModal = () => {
  const [ProfileForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    //setIsModalOpen(false);
    //ProfileForm.resetFields();
    const value = ProfileForm.getFieldsValue();
    console.log(value);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    ProfileForm.resetFields();
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    // if (values?.title && values?.name && values?.phone && values?.email) {
    //   createNewDetailApplication(values?.title, values?.name, values?.phone, values?.email);
    // }
    //handleOk();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
  };

  const skillsOptions: SelectProps['options'] = [
    { value: 'c++', label: 'C++' },
    { value: 'java', label: 'Java' },
    { value: 'python', label: 'Python' },
  ];

  return (
    <>
      <EditOutlined className='font-base' onClick={showModal} />
      <Modal
        classNames={{ header: 'bg-gray-200' }}
        title={
          <div className='py-4'>
            <h3 className='text-xl text-black-900'>Basic Information</h3>
            <p className='text-gray-400 text-base'>
              Fill all the fields helps you reach to employers in the easy way
            </p>
          </div>
        }
        width={'50%'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <div className='w-full h-full border-t border-gray-300 flex justify-end gap-2'>
            <Button
              type='primary'
              className='mt-5 p-6 flex items-center font-bold'
              danger
              onClick={handleOk}
            >
              Save
            </Button>
          </div>
        }
      >
        <Form
          form={ProfileForm}
          name='profile-form'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className='overflow-y-scroll max-h-[60vh]'
        >
          <div className='mb-4'>
            <h3 className='uppercase text-gray-400 font-semibold mb-4'>PERSONAL INFORMATION</h3>
            <div className='flex gap-4'>
              <div className='w-[20%] relative rounded-full overflow-hidden'>
                <img src='/assets/icons/empty_avatar.svg' alt='avatar' className='' />
                <div className='w-full absolute bottom-0 flex justify-center py-1 hover:cursor-pointer backdrop-blur-[8px]'>
                  <CameraOutlined className='text-3xl text-white-900' />
                </div>
              </div>

              <div className='flex-1'>
                <div>
                  <Form.Item<FieldType>
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    label={<div className='text-gray-400 text-base font-semibold'>Full name</div>}
                    name='fullname'
                    rules={[{ required: true, message: 'Please input your full name' }]}
                  >
                    <Input />
                  </Form.Item>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <Form.Item<FieldType>
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    label={
                      <div className='text-gray-400 text-base font-semibold'>Date of birth</div>
                    }
                    name='dob'
                    rules={[{ required: true, message: 'Please input your date of birth' }]}
                  >
                    <DatePicker className='w-full' format='YYYY/MM/DD' />
                  </Form.Item>

                  <Form.Item<FieldType>
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    label={<div className='text-gray-400 text-base font-semibold'>Gender</div>}
                    name='gender'
                    rules={[{ required: true, message: 'Please input your date of birth' }]}
                  >
                    <Radio.Group onChange={onChange} defaultValue='male'>
                      <Radio.Button className='text-lg' value='male'>
                        Male
                      </Radio.Button>
                      <Radio.Button className='text-lg' value='female'>
                        Female
                      </Radio.Button>
                      <Radio.Button className='text-lg' value='none'>
                        N/A
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className='uppercase text-gray-400 font-semibold mb-4'>PROFESSIONAL INFORMATION</h3>
            <div className='grid grid-cols-2 gap-4'>
              <Form.Item<FieldType>
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label={
                  <div className='text-gray-400 text-base font-semibold'>Your job position</div>
                }
                name='role'
                rules={[{ required: true, message: 'Please input your job position' }]}
              >
                <Input className='h-10' />
              </Form.Item>

              <Form.Item<FieldType>
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label={
                  <div className='text-gray-400 text-base font-semibold'>Years of experience</div>
                }
                name='yoe'
                rules={[{ required: true, message: 'Please input your job position' }]}
              >
                <Input className='h-10' />
              </Form.Item>
              <Form.Item<FieldType>
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label={<div className='text-gray-400 text-base font-semibold'>Email</div>}
                name='email'
                rules={[{ required: true, message: 'Please input your job position' }]}
              >
                <Input className='h-10' />
              </Form.Item>
              <Form.Item<FieldType>
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label={<div className='text-gray-400 text-base font-semibold'>Phone</div>}
                name='phone'
                rules={[{ required: true, message: 'Please input your job position' }]}
              >
                <Input className='h-10' />
              </Form.Item>
              <Form.Item<FieldType>
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label={<div className='text-gray-400 text-base font-semibold'>Address</div>}
                name='address'
                rules={[{ required: true, message: 'Please input your job position' }]}
              >
                <Input className='h-10' />
              </Form.Item>
              <Form.Item<FieldType>
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label={<div className='text-gray-400 text-base font-semibold'>City/Province</div>}
                name='province'
                rules={[{ required: true, message: 'Please input your job position' }]}
              >
                <Select
                  defaultValue='hcm'
                  className='w-full'
                  onChange={(value: string) => {
                    console.log(`selected ${value}`);
                  }}
                  options={[
                    { value: 'hcm', label: 'Ho Chi Minh' },
                    { value: 'hanoi', label: 'ha Noi' },
                  ]}
                />
              </Form.Item>
              <Form.Item<FieldType>
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label={<div className='text-gray-400 text-base font-semibold'>Social links</div>}
                name='socialLink'
                rules={[{ required: true, message: 'Please input your job position' }]}
              >
                <Input className='h-10' />
              </Form.Item>
              <Form.Item<FieldType>
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label={<div className='text-gray-400 text-base font-semibold'>Github</div>}
                name='githubLink'
                rules={[{ required: true, message: 'Please input your job position' }]}
              >
                <Input className='h-10' />
              </Form.Item>
            </div>
            <div>
              <Form.Item<FieldType>
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                label={
                  <div className='text-gray-400 text-base font-semibold'>Technical Skilss</div>
                }
                name='skills'
                rules={[{ required: true, message: 'Please input your job position' }]}
              >
                <Select
                  mode='tags'
                  style={{ width: '100%' }}
                  onChange={(value: string) => {
                    console.log(`selected ${value}`);
                  }}
                  tokenSeparators={[',']}
                  options={skillsOptions}
                />
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default UserProfileModal;
