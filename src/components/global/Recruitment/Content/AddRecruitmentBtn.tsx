import { useEffect, useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';
import { type FormProps } from 'antd';
import { useTranslation } from 'react-i18next';

type FieldType = {
  jobTitle?: string;
  jobEmail?: string;
};

const AddRecruitmentBtn = () => {
  const [NewRecruitmentForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, []);

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

  const handleChangeJobEmail = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    handleOk();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button type='primary' danger onClick={showModal}>
        {t('newJob.content')}
      </Button>
      <Modal
        title={t('newJob.title')}
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
            label={t('newJob.position')}
            name='jobTitle'
            rules={[{ required: true, message: 'Please input job title!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType> label={t('newJob.email')} name='jobEmail'>
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

          <Form.Item<FieldType> label={t('newJob.noteTitle')}>
            <span>{t('newJob.noteContent')}</span>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <div className='w-full border-t border-gray-300 mt-5 pt-4 flex items-center gap-2'>
              <Button type='primary' htmlType='submit' danger>
                {t('newJob.create')}
              </Button>
              <Button onClick={handleCancel}>{t('newJob.cancel')}</Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddRecruitmentBtn;
