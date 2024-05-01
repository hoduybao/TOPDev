import { Button, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { useUpdateApplicationProcessMutation } from '@/+core/redux/apis/common/recruitment/recruitment.api';
import { ApplicationDetailTypeRES } from '@/+core/redux/apis/common/recruitment/recruitment.response';
import { useEffect } from 'react';

const layout = {
  // labelCol: { lg: { span: 10 } },
  // wrapperCol: { lg: { span: 12 } },
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

type FieldType = {
  title?: string;
  name?: string;
  email?: string;
  phone?: string;
  rating?: number;
};

type DetailApplicationContainerProps = {
  data?: ApplicationDetailTypeRES;
};

const DetailApplicationContainer = ({ data }: DetailApplicationContainerProps) => {
  const [form] = Form.useForm();

  const { t } = useTranslation();

  const [updateApplicationProcess, { isLoading }] = useUpdateApplicationProcessMutation();

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        title: data?.jobDetail.title,
        name: data?.fullName,
        email: data?.email,
        phone: data?.phone,
      });
    }
  }, [data]);

  return (
    <div className='p-4 h-auto'>
      <div className='flex items-center gap-3'>
        {!data?.isApprove ? (
          <>
            <Button
              loading={isLoading}
              type='primary'
              danger
              onClick={() => {
                updateApplicationProcess(data?.id as string);
              }}
            >
              {t('recruitmentAccept')}
            </Button>
            <Button>{t('recruitmentReject')}</Button>
          </>
        ) : (
          <div className='text-lg font-semibold text-primary-red'>{t('approved')}</div>
        )}
      </div>
      <Form
        {...layout}
        form={form}
        name='create-new-job'
        className='bg-[#fff] p-4 rounded-md mt-5 flex flex-col gap-5'
      >
        <Form.Item<FieldType>
          label={`${t('recruitmentTitle')}`}
          name='title'
          rules={[{ required: true, message: 'Please input job title!' }]}
        >
          <Input readOnly />
        </Form.Item>

        <Form.Item<FieldType>
          label={`${t('recruitmentApplicantName')}`}
          name='name'
          rules={[{ required: true, message: 'Please input applicant name!' }]}
        >
          <Input readOnly />
        </Form.Item>

        <Form.Item<FieldType>
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Please input applicant email!' }]}
        >
          <Input readOnly />
        </Form.Item>

        <Form.Item
          label={`${t('recruitmentPhone')}`}
          name='phone'
          rules={[{ required: true, message: 'Please input applicant phone number!' }]}
        >
          <Input style={{ width: '100%' }} readOnly />
        </Form.Item>
      </Form>
    </div>
  );
};

export default DetailApplicationContainer;
