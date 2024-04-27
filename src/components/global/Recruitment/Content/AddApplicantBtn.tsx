import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal, Form, Input, Select } from 'antd';
import { type FormProps } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const prefixSelector = (
  <Form.Item name='prefix' noStyle>
    <Select style={{ width: 70 }}>
      <Option value='84'>+84</Option>
      <Option value='85'>+85</Option>
      <Option value='86'>+86</Option>
    </Select>
  </Form.Item>
);

type FieldType = {
  id?: string;
  jobId?: string;
  name?: string;
  email?: string;
  phone?: string;
  cvUrl?: string;
  description?: string;
};

interface PropType {
  createNewDetailApplication: (
    name: string,
    phone: string,
    email: string,
    cvUrl: string,
    description: string,
  ) => void;
}

const AddApplicantBtn = (props: PropType) => {
  const { createNewDetailApplication } = props;

  const JOB_ID: string = '6tmFCHf';
  const MOCK_PDF_URL =
    'https://piwwbijgpwvzynpsplfn.supabase.co/storage/v1/object/public/uploads/files/CTDT%20K20%20KTPM.pdf';

  const { t } = useTranslation();

  const [NewRecruitmentForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    // console.log('Success:', values);

    if (values?.name && values?.phone && values?.email && values?.cvUrl && values?.description) {
      createNewDetailApplication(
        values?.name,
        values?.phone,
        values?.email,
        values?.cvUrl,
        values?.description,
      );
    }
    handleOk();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button type='primary' danger onClick={showModal}>
        {t('recruitmentAdd')}
      </Button>
      <Modal
        title={t('recruitmentCreateApplicant')}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={NewRecruitmentForm}
          name='create-new-job'
          className='mt-5 flex flex-col gap-5'
          labelCol={{ span: 24 }} // 10
          wrapperCol={{ span: 24 }} // 14
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            ['jobId']: JOB_ID,
            ['cvUrl']: MOCK_PDF_URL,
            prefix: '84',
          }}
        >
          <Form.Item<FieldType>
            label={`${t('recruitmentJobId')}`}
            name='jobId'
            rules={[{ required: true, message: 'Please input job id!' }]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item<FieldType>
            label={`${t('recruitmentApplicantName')}`}
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
            label={`${t('recruitmentPhone')}`}
            name='phone'
            rules={[{ required: true, message: 'Please input applicant phone number!' }]}
          >
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item<FieldType>
            label='CV URL'
            name='cvUrl'
            rules={[{ required: true, message: 'Please input cv url!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Description'
            name='description'
            rules={[{ required: true, message: 'Please input description!' }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <div className='w-full border-t border-gray-300 mt-5 pt-4 flex items-center gap-2'>
              <Button type='primary' htmlType='submit' danger>
                {t('recruitmentCreateJob')}
              </Button>
              <Button onClick={handleCancel}>{t('recruitmentCancelJob')}</Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddApplicantBtn;
