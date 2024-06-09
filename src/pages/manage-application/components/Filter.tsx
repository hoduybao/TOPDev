import { Form, Input, Select } from 'antd';
import mockdata from './mockdata';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

type FormFields = {
  keywork: string;
  campaign: string;
  cvStatus: string;
  originCV: string;
};

const FilterForm = () => {
  const [filterForm] = Form.useForm();
  const { t } = useTranslation();
  return (
    <Form name='ref-form' form={filterForm} onFinish={() => {}}>
      <div className='grid grid-cols-8 gap-2'>
        <div className='col-span-2'>
          <Form.Item<FormFields> labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} name='keywork'>
            <div className='flex justify-between items-center relative'>
              <Input placeholder={t('findPlaceholder')} />
              <SearchOutlined className='absolute right-0 p-4 text-md' />
            </div>
          </Form.Item>
        </div>
        <div className='col-span-2'>
          <Form.Item<FormFields> labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} name='campaign'>
            <Select placeholder={t('chooseJob')} options={mockdata.campaigns} />
          </Form.Item>
        </div>
        <div className='col'>
          <Form.Item<FormFields> labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} name='cvStatus'>
            <Select showSearch placeholder='Nhập trạng thái CV' options={mockdata.cvStatus} />
          </Form.Item>
        </div>

        <div className='col'>
          <Form.Item<FormFields> labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} name='originCV'>
            <Select showSearch placeholder='Nhập nguồn CV' options={mockdata.cvOrigins} disabled />
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

const Filter = () => {
  return (
    <div className='mt-8 mx-8'>
      <FilterForm />
    </div>
  );
};

export default Filter;
