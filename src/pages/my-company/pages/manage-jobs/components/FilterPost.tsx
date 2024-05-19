import { FilterPostCompanyTypeREQ } from '@/+core/redux/apis/common/job-service/job-service.request';
import { SearchOutlined } from '@ant-design/icons';
import { Badge, Form, Input } from 'antd';
import { TFunction } from 'i18next';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
const items = (t: TFunction) => [
  {
    value: 'ALL',
    label: t('all'),
  },
  {
    value: 'PUBLIC',
    label: t('public'),
  },
  {
    value: 'PENDING',
    label: t('pending'),
  },
  {
    value: 'REJECTED',
    label: t('isRejected'),
  },
  {
    value: 'HIDE',
    label: t('hide'),
  },
  {
    value: 'EXPRIED',
    label: t('expried'),
  },
];
type FilterPostProps = {
  setStatus: (status: string) => void;
  status: string;
  filter: FilterPostCompanyTypeREQ;
  handleFilterChange: (filter: any) => void;
};

export const FilterPost = ({ setStatus, status, handleFilterChange, filter }: FilterPostProps) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const onFinish = (values: any) => {
    handleFilterChange({ keywords: values.keywords, status });
  };

  useEffect(() => {
    if (filter) {
      form.setFieldsValue({ keywords: filter.keywords });
    }
  }, [filter]);
  return (
    <>
      <div className='flex gap-2 items-center flex-wrap'>
        {items(t).map((item, index) => (
          <div
            onClick={() => {
              setStatus(item.value);
              handleFilterChange({ keyword: filter.keywords, status: item.value });
            }}
            className={`text-base flex items-center gap-2 hover:text-white-900 hover:bg-primary-red px-3.5 py-1.5 cursor-pointer  rounded-[20px] ${
              status === item.value
                ? 'text-white-900 bg-primary-red font-medium'
                : 'text-black-900 bg-gray-200'
            }`}
            key={index}
          >
            <span>{item.label}</span>
            <Badge
              count={20}
              showZero
              color={status === item.value ? '#ffffff' : '#dd3f24'}
              style={{
                color: status === item.value ? '#dd3f24' : '#ffffff',
                fontWeight: 500,
              }}
            />
          </div>
        ))}
      </div>
      <Form form={form} onFinish={onFinish} autoComplete='off' labelAlign='left'>
        <Form.Item name='keywords'>
          <Input
            className={`!w-[40%] !h-10 !border-none`}
            placeholder={t('placeHolderFindPost')}
            suffix={
              <SearchOutlined
                style={{
                  fontSize: '20px',
                  color: '#000000',
                }}
                onClick={() => {
                  form.submit();
                }}
              />
            }
          />
        </Form.Item>
      </Form>
    </>
  );
};
