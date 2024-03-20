import { useState } from 'react';
import { Button, Modal, Form, Input, Select, notification } from 'antd';
import { type FormProps } from 'antd';
import { useCreateJobMutation } from '../../../../+core/redux/apis/common/job/job.api';

type FieldType = {
  title?: string;
  email?: string;
  salary?: number;
  responsibilities?: string[];
  skills?: string[];
  extends?: string[];
  welfare?: string[];
  experienceYearsMin?: number;
  experienceYearsMax?: number;
  level?: string;
  type?: string;
  typeContract?: string;
  techs?: string[];
  interviewProcess?: string[];
  companyId?: string;
};

const AddRecruitmentBtn = () => {
  const [NewRecruitmentForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [createNewJob] = useCreateJobMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    NewRecruitmentForm.resetFields();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    NewRecruitmentForm.resetFields();
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('Success:', values);
    const resp = await createNewJob(values).unwrap();

    notification.success({
      message: 'Success!',
      description: resp && resp.message,
    });

    handleOk();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button type='primary' danger onClick={showModal}>
        Mới
      </Button>
      <Modal
        title='Tạo một Vị trí Công việc'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={'50%'}
      >
        <Form
          form={NewRecruitmentForm}
          name='create-new-job'
          className='mt-5 flex flex-col gap-5'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            ['email']: 'company1@gmail.com',
          }}
        >
          <Form.Item<FieldType> label='Công ty' name='companyId' initialValue={'company1'}>
            <span>CÔNG TY CỔ PHẦN SHOWNIQ</span>
          </Form.Item>

          <Form.Item<FieldType>
            label='Chức vụ'
            name='title'
            rules={[{ required: true, message: 'Please input job title!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Mức lương'
            name='salary'
            rules={[{ required: true, message: 'Please input job salary!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Trách nhiệm công việc'
            name='responsibilities'
            rules={[{ required: true, message: 'Please input job responsibilities!' }]}
          >
            <Select
              mode='tags'
              style={{ width: '100%' }}
              placeholder='Enter job responsibilities'
              tokenSeparators={[',']}
            ></Select>
          </Form.Item>

          <Form.Item<FieldType>
            label='Kỹ năng'
            name='skills'
            rules={[{ required: true, message: 'Please input job skills!' }]}
          >
            <Select
              mode='tags'
              style={{ width: '100%' }}
              placeholder='Enter job skills'
              tokenSeparators={[',']}
            ></Select>
          </Form.Item>

          <Form.Item<FieldType>
            label='Nice to have'
            name='extends'
            rules={[{ required: true, message: 'Please input nice to have!' }]}
          >
            <Select
              mode='tags'
              style={{ width: '100%' }}
              placeholder='Enter nice to have'
              tokenSeparators={[',']}
            ></Select>
          </Form.Item>

          <Form.Item<FieldType>
            label='Phúc lợi'
            name='welfare'
            rules={[{ required: true, message: 'Please input welfare!' }]}
          >
            <Select
              mode='tags'
              style={{ width: '100%' }}
              placeholder='Enter welfare'
              tokenSeparators={[',']}
            ></Select>
          </Form.Item>

          <Form.Item<FieldType>
            label='Số năm kinh nghiệm tối thiểu'
            name='experienceYearsMin'
            rules={[{ required: true, message: 'Please input min YoE!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Số năm kinh nghiệm tối đa'
            name='experienceYearsMax'
            rules={[{ required: true, message: 'Please input max YoE!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Level'
            name='level'
            rules={[{ required: true, message: 'Please input level!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Địa điểm làm việc'
            name='type'
            // placeholder={['Remote, Onsite, ...']}
            rules={[{ required: true, message: 'Please input type!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Loại hợp đồng'
            name='typeContract'
            rules={[{ required: true, message: 'Please input type contract!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Công nghệ sử dụng'
            name='techs'
            rules={[{ required: true, message: 'Please input techs!' }]}
          >
            <Select
              mode='tags'
              style={{ width: '100%' }}
              placeholder='Enter techs'
              tokenSeparators={[',']}
            ></Select>
          </Form.Item>

          <Form.Item<FieldType>
            label='Quy trình phỏng vấn'
            name='interviewProcess'
            rules={[{ required: true, message: 'Please input interview process!' }]}
          >
            <Select
              mode='tags'
              style={{ width: '100%' }}
              placeholder='Enter interview process'
              tokenSeparators={[',']}
            ></Select>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <div className='w-full border-t border-gray-300 mt-5 pt-4 flex items-center gap-2'>
              <Button type='primary' htmlType='submit' danger>
                Tạo
              </Button>
              <Button onClick={handleCancel}>Hủy bỏ</Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddRecruitmentBtn;
