import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

type CompanyFormField = {
  name?: string;
};

type WebsiteFormField = {
  url?: string;
};

const HideByCompanyName = () => {
  const { t } = useTranslation();
  const [HideForm] = Form.useForm();
  return (
    <div className='bg-gray-100 rounded p-4 mt-4'>
      <div className='font-bold text-base'>{t('hide.company.name.header')}</div>
      <Form form={HideForm} name='hide-cv-by-company-name'>
        <Form.Item<CompanyFormField>
          name='name'
          rules={[{ required: true, message: 'Please input company name!' }]}
        >
          <Input className='h-12 mt-2' placeholder={t('hide.company.name.placeHolder')} />
        </Form.Item>
      </Form>
    </div>
  );
};

const HideByCompanyWebsite = () => {
  const { t } = useTranslation();
  const [HideForm] = Form.useForm();
  return (
    <div className=' rounded p-4 mt-4'>
      <div className='font-bold text-base'>{t('hide.company.website.header')}</div>
      <Form form={HideForm} name='hide-cv-by-website'>
        <Form.Item<WebsiteFormField>
          name='url'
          rules={[{ required: true, message: 'Please input company website!' }]}
        >
          <Input className='h-12 mt-2' placeholder={t('hide.company.website.placeHolder')} />
        </Form.Item>
      </Form>
    </div>
  );
};

const HideCVs = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-white-900 rounded p-4 mt-4'>
      <div>
        <div className='font-bold text-2xl'>{t('hidden.cvs')}</div>
        <HideByCompanyName />
        <HideByCompanyWebsite />
      </div>
    </div>
  );
};

export default HideCVs;
