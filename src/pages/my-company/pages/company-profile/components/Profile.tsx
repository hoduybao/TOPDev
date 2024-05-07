import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input, Button, Select } from 'antd';
import { type FormProps } from 'antd';

import UploadFileInput from './UploadFileInput';
import TextContentEditor from '../../../../../components/global/Recruitment/Content/TextContentEditor';

const { Option } = Select;

type FieldType = {
  logoUrl?: string;
  companyName?: string;
  companyTagline?: string;
  nationality?: string;
  companySize?: string;
  introduction?: string;
  industry?: string;
  techStack?: string;
};

const Profile = () => {
  const { t } = useTranslation();

  const [CompanyProfileForm] = Form.useForm();

  const [introduction, setIntroduction] = useState<string>('');

  const onEditFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('Success:', values);
  };

  const onEditFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name='company-profile'
      form={CompanyProfileForm}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      onFinish={onEditFinish}
      onFinishFailed={onEditFinishFailed}
    >
      <section>
        <h1 className='text-xl font-bold'>{t('companyInformation')}</h1>
        <div className='mt-5 grid xl:grid-cols-4 gap-x-[50px] gap-y-4'>
          <div>
            <UploadFileInput
              label={'Logo'}
              form={CompanyProfileForm}
              name='logoUrl'
              description='Types: png, jpg, jpeg. <5MB'
              rules={[{ required: true, message: 'Please upload company logo!' }]}
            />
          </div>
          <div className='xl:col-span-2 flex flex-col gap-4'>
            <Form.Item<FieldType>
              label={<p className='text-[15px] font-semibold'>{t('companyName')}</p>}
              name='companyName'
              rules={[{ required: true, message: 'Please input company name!' }]}
            >
              <Input
                className='h-[40px]'
                placeholder='Enter a shortened & recognizable name (Eg. TopDev)'
              />
            </Form.Item>

            <Form.Item<FieldType>
              label={<p className='text-[15px] font-semibold'>{t('companyTagline')}</p>}
              name='companyTagline'
              rules={[{ required: true, message: 'Please input company tagline!' }]}
            >
              <Input
                className='h-[40px]'
                placeholder='Enter your company Tagline (Eg. Top IT Jobs For Developers in Vietnam)'
              />
            </Form.Item>
          </div>
          <div className='flex flex-col gap-4'>
            <Form.Item<FieldType>
              label={<p className='text-[15px] font-semibold'>{t('nationality')}</p>}
              name='nationality'
              rules={[{ required: true, message: 'Please input company nationality!' }]}
            >
              <Select
                className='h-[40px]'
                options={[{ value: 'United States', label: 'United States' }]}
              />
            </Form.Item>

            <Form.Item<FieldType>
              label={<p className='text-[15px] font-semibold'>{t('companySize')}</p>}
              name='companySize'
              rules={[{ required: true, message: 'Please input company size!' }]}
            >
              <Select
                className='h-[40px]'
                options={[
                  { value: 'Less than 10', label: 'Less than 10' },
                  { value: '10-24', label: '10-24' },
                  { value: '25-99', label: '25-99' },
                  { value: '100-499', label: '100-499' },
                  { value: '500-999', label: '500-999' },
                  { value: 'Over 1000', label: 'Over 1000' },
                  { value: '5.000-9.999', label: '5.000-9.999' },
                  { value: '10.000-19.999', label: '10.000-19.999' },
                  { value: 'Over 20.000', label: 'Over 20.000' },
                ]}
              />
            </Form.Item>
          </div>
        </div>
      </section>

      <section className='mt-10 grid xl:grid-cols-2 gap-x-[50px] gap-y-4'>
        <Form.Item<FieldType>
          label={<p className='text-[15px] font-semibold'>{t('introduction')}</p>}
          name='introduction'
        >
          <div>
            <p className='mb-3'>
              Tell job seekers about your company. Your description will appear in the About company
              tab
            </p>
            <TextContentEditor content={introduction} setContent={setIntroduction} />
          </div>
        </Form.Item>

        <div className='flex flex-col gap-4'>
          <Form.Item<FieldType>
            label={<p className='text-[15px] font-semibold'>{t('industry')}</p>}
            name='industry'
            rules={[{ required: true, message: 'Please input company industry!' }]}
          >
            <Select
              className='h-[40px]'
              options={[
                { value: 'Thiết kế chế tạo', label: 'Thiết kế chế tạo' },
                { value: 'Thương mại dịch vụ', label: 'Thương mại dịch vụ' },
                { value: 'Công nghệ thông tin', label: 'Công nghệ thông tin' },
                { value: 'Giải trí/ Game', label: 'Giải trí/ Game' },
                { value: 'Giáo dục', label: 'Giáo dục' },
              ]}
            />
          </Form.Item>

          <Form.Item
            label={<p className='text-[15px] font-semibold'>{t('techStack')}</p>}
            name='techStack'
            rules={[
              {
                required: true,
                message: 'Please select company tech stack!',
                type: 'array',
              },
            ]}
          >
            <Select className='h-[40px]' mode='multiple'>
              <Option value='C++'>C++</Option>
              <Option value='ReactJS'>ReactJS</Option>
              <Option value='ExpressJS'>ExpressJS</Option>
              <Option value='Docker'>Docker</Option>
              <Option value='Unity 3d'>Unity 3d</Option>
            </Select>
          </Form.Item>
        </div>
      </section>

      <section className='mt-10 flex flex-wrap gap-4 items-center justify-between'>
        <div className='text-[15px] flex items-center gap-1'>
          <p className='font-bold'>Note:</p>
          <p>You must fill in the required fields</p>
          <p className='font-bold text-red-500'>(∗)</p>
          <p>to save</p>
        </div>
        <div className='flex items-center gap-3'>
          <Button htmlType='button' danger>
            {t('cancelCompanyProfile')}
          </Button>
          <Button type='primary' htmlType='submit' danger>
            {t('saveCompanyProfile')}
          </Button>
        </div>
      </section>
    </Form>
  );
};

export default Profile;
