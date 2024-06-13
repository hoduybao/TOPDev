import { Button, Form, Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import Container from '@/components/global/Container/Container';

type FormFields = {
  // keywork: string;
  // campaign: string;
  cvStatus: string;
  // originCV: string;
};

const FilterForm = ({
  setCvState,
  cvState,
  isFetching,
}: {
  setCvState: (value: string) => void;
  cvState: string;
  isFetching: boolean;
}) => {
  const [filterForm] = Form.useForm();
  const { t } = useTranslation();
  return (
    <Form
      initialValues={{ cvStatus: cvState }}
      name='ref-form'
      form={filterForm}
      onFinish={(value) => {
        setCvState(value.cvStatus);
      }}
    >
      <div className='grid grid-cols-8 gap-2 w-full'>
        <div className='col-span-2'>
          <Form.Item<FormFields> labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
            <div className='flex justify-between items-center relative'>
              <Input placeholder={t('findPlaceholder')} />
              <SearchOutlined className='absolute right-0 p-4 text-md' />
            </div>
          </Form.Item>
        </div>
        <div className='col-span-1'>
          <Form.Item<FormFields> labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} name='cvStatus'>
            {cvState && (
              <Select
                showSearch
                // onChange={(value) => {
                //   console.log(value);
                // }}
                defaultValue={cvState}
                options={[
                  {
                    value: 'ALL',
                    label: t('all'),
                  },
                  {
                    value: 'PENDING',
                    label: t('pendingCV'),
                  },
                  {
                    value: 'VIEWING',
                    label: t('viewingCV'),
                  },
                  {
                    value: 'APPROVED',
                    label: t('approvedCV'),
                  },
                  {
                    value: 'REJECTED',
                    label: t('rejectedCV'),
                  },
                ]}
              />
            )}
          </Form.Item>
        </div>

        {/* <div className='col-span-1'>
          <Form.Item<FormFields> labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} name='originCV'>
            <Select showSearch placeholder='Nhập nguồn CV' options={mockdata.cvOrigins} disabled />
          </Form.Item>
        </div> */}

        <div className='col-span-5 w-full flex justify-end'>
          <Button
            loading={isFetching}
            className='bg-orange-500 text-white-900 w-[150px]'
            type='primary'
            htmlType='submit'
          >
            {t('recruitmentSearch')}
          </Button>
        </div>
      </div>
    </Form>
  );
};

const Filter = ({
  setCvState,
  cvState,
  isFetching,
}: {
  setCvState: (value: string) => void;
  cvState: string;
  isFetching: boolean;
}) => {
  return (
    <div className='mt-8'>
      <Container>
        <FilterForm setCvState={setCvState} cvState={cvState} isFetching={isFetching} />
      </Container>
    </div>
  );
};

export default Filter;
