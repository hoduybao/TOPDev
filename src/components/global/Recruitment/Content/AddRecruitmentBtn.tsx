import { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { type FormProps } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import JobDescription from '../../Recruitment/Content/JobDescriptionEditor';
import { JobType } from '@/+core/utilities/types/recruitment.type';

interface PropType {
  jobs: JobType[];
  setJobs: React.Dispatch<React.SetStateAction<JobType[]>>;
}

type FieldType = {
  jobTitle?: string;
  jobEmail?: string;
  jobDescription?: any;
};

const AddRecruitmentBtn = (props: PropType) => {
  const { jobs, setJobs } = props;

  const [NewRecruitmentForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');

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

  // const handleChangeJobEmail = (value: string) => {
  //   console.log(`selected ${value}`);
  // };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    if (values && description) {
      const newJob: JobType = {
        id: uuidv4(),
        title: values?.jobTitle,
        companyId: uuidv4(),
        description: description,
      };

      console.log('Success:', newJob);
      setJobs([...jobs, newJob]);
    }

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
        width={'90vw'}
        title='Tạo một Vị trí Công việc'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
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
            ['jobEmail']: 'company1@gmail.com',
          }}
        >
          <Form.Item<FieldType>
            label='Chức vụ'
            name='jobTitle'
            rules={[{ required: true, message: 'Please input job title!' }]}
          >
            <Input />
          </Form.Item>

          <div className='w-[100%] flex justify-center'>
            <JobDescription description={description} setDescription={setDescription} />
          </div>

          {/* <Form.Item<FieldType> label='Email đơn ứng tuyển' name='jobEmail'>
            <Select
              style={{ width: 120 }}
              onChange={handleChangeJobEmail}
              options={[
                { value: 'abc@gmail.com', label: 'abc@gmail.com' },
                { value: 'xyz@gmail.com', label: 'xyz@gmail.com' },
                { value: 'company1@gmail.com', label: 'company1@gmail.com' },
              ]}
            />
          </Form.Item>

          <Form.Item<FieldType> label='Ghi chú'>
            <span>
              Ứng viên có thể gửi hồ sơ đến địa chỉ email này, nó sẽ tạo một đơn ứng tuyển một cách
              tự động
            </span>
          </Form.Item> */}

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
