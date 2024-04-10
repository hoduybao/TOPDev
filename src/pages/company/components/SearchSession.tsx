import { CustomTextInput } from '@/components/ui/form/CustomTextInput';
import { Button, Form, Select } from 'antd';
import { useTranslation } from 'react-i18next';
type FormValue = {
  keyword: string;
  location: string;
};

const SearchSession = () => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const onFinish = (values: FormValue) => {
    console.log('Success:', values);
  };

  return (
    <div className='my-4 border-[1px] border-orange-500 p-1'>
      <Form
        form={form}
        layout='vertical'
        name='searchForm'
        className='grid grid-cols-12 gap-1 h-full'
        onFinish={onFinish}
      >
        <div className='col-span-8'>
          <CustomTextInput
            classNameInput='py-3 capitalize rounded-none h-[3rem]'
            name='keyword'
            placeholder={t('search.keywords')}
            rules={[{ required: true, message: 'Please input keyword!' }]}
          />
        </div>
        <div className='col-span-4 md:col-span-2'>
          <Form.Item name='location'>
            <Select className='capitalize rounded-none h-[3rem]' placeholder={t('search.location')}>
              <Select.Option value='ho chi minh'>
                <span className='capitalize'>{t('search.location.hcm')}</span>
              </Select.Option>
              <Select.Option value='ha noi'>
                <span className='capitalize'>{t('search.location.hn')}</span>
              </Select.Option>
              <Select.Option value='da nang'>
                <span className='capitalize'>{t('search.location.dn')}</span>
              </Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div className='col-span-4 col-start-5 md:col-span-2'>
          <Button
            className='py-3 w-full h-full bg-orange-500 text-white-900 rounded-none'
            htmlType='submit'
          >
            Search
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SearchSession;
