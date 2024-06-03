import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space, type FormProps } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type FieldType = {
  emailAddress?: string;
  phone?: string;
};

const ContactInformation = () => {
  const { t } = useTranslation();

  const [CompanyContactInformationForm] = Form.useForm();
  const [editEmailAddress, setEditEmailAddress] = useState<boolean>(true);
  const [editPhone, setEditPhone] = useState<boolean>(true);

  const onEditFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    if (values?.emailAddress) {
      console.log('Success:', values?.emailAddress);
    }

    if (values?.phone) {
      console.log('Success:', values?.phone);
    }

    if (values?.emailAddress && values?.phone) {
      console.log('Success:', values);
    }
  };

  const onEditFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name='company-contact-information !w-full'
      form={CompanyContactInformationForm}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      onFinish={onEditFinish}
      onFinishFailed={onEditFinishFailed}
    >
      <section className='w-full'>
        <h1 className='text-xl font-bold flex items-center gap-1'>
          <p className='text-sm text-red-500'>*</p>
          {t('contactInformation')}
        </h1>
        <p className='mt-5'>
          This information should be updated as your key contact. We will contact you based on this
          information
        </p>
        <div className='mt-5 flex flex-col gap-5'>
          <Form.Item<FieldType>
            label={<p className='text-[15px] font-semibold'>{t('emailAddress')}</p>}
            name='emailAddress'
            // rules={[{ required: true, message: 'Please input company email address!' }]}
          >
            <Space.Compact style={{ width: '100%' }}>
              <Input
                size='large'
                prefix={<MailOutlined />}
                placeholder='Add company email'
                disabled={editEmailAddress}
              />
              <Button
                size='large'
                danger
                onClick={() => {
                  setEditEmailAddress(!editEmailAddress);

                  if (!editEmailAddress) {
                    CompanyContactInformationForm.submit();
                  }
                }}
              >
                {editEmailAddress ? 'EDIT' : 'SAVE CHANGE'}
              </Button>
            </Space.Compact>
          </Form.Item>

          <Form.Item<FieldType>
            label={<p className='text-[15px] font-semibold'>{t('phone')}</p>}
            name='phone'
            // rules={[{ required: true, message: 'Please input company phone number!' }]}
          >
            <Space.Compact style={{ width: '100%' }}>
              <Input
                size='large'
                prefix={<PhoneOutlined />}
                placeholder='Add company phone number'
                disabled={editPhone}
              />
              <Button
                size='large'
                danger
                onClick={() => {
                  setEditPhone(!editPhone);

                  if (!editPhone) {
                    CompanyContactInformationForm.submit();
                  }
                }}
              >
                {editPhone ? 'EDIT' : 'SAVE CHANGE'}
              </Button>
            </Space.Compact>
          </Form.Item>
        </div>
      </section>
    </Form>
  );
};

export default ContactInformation;
