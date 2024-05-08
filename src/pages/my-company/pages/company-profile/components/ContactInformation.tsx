import { Form } from 'antd';
import { type FormProps } from 'antd';
import { useTranslation } from 'react-i18next';

type FieldType = {
  emailAddress?: string;
  phone?: string;
};

const ContactInformation = () => {
  const { t } = useTranslation();

  const [CompanyContactInformationForm] = Form.useForm();

  const onEditFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('Success:', values);
  };

  const onEditFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name='company-contact-information'
      form={CompanyContactInformationForm}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      onFinish={onEditFinish}
      onFinishFailed={onEditFinishFailed}
    >
      <section>
        <h1 className='text-xl font-bold flex items-center gap-1'>
          <p className='text-sm text-red-500'>*</p>
          {t('contactInformation')}
        </h1>
        <p className='mt-5'>
          This information should be updated as your key contact. We will contact you based on this
          information
        </p>
        <div></div>
      </section>
    </Form>
  );
};

export default ContactInformation;
