import { useTranslation } from 'react-i18next';
import { Form, Input, Select, Button, Modal } from 'antd';
import { type FormProps } from 'antd';

import { cities, districts, wards } from '@/+core/constants/company.profile';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface PropType {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  addresses: string[];
  setAddresses: Dispatch<SetStateAction<string[]>>;
  editValue?: { value: string; index: number | null };
  setEditValue: any;
}

type FieldType = {
  city?: string;
  district?: string;
  ward?: string;
  street?: string;
};

const AddAddressModal = (props: PropType) => {
  const { isModalOpen, handleOk, handleCancel, addresses, setAddresses, editValue, setEditValue } =
    props;

  const { t } = useTranslation();

  const [CompanyAddressForm] = Form.useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('Success:', values);

    const address = `${values?.street}, ${values?.ward}, ${values?.district}, ${values?.city}`;

    if (editValue?.value === '') {
      setAddresses([...addresses, address]);
    } else {
      if (editValue?.value !== '' && editValue?.index !== null) {
        const newAddresses = [];
        for (let i = 0; i < addresses?.length; ++i) {
          if (i === editValue?.index) newAddresses.push(address);
          else newAddresses.push(addresses[i]);
        }

        setAddresses(newAddresses);
      }
    }

    setEditValue({
      value: '',
      index: null,
    });

    CompanyAddressForm.resetFields();
    handleOk();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (editValue?.value) {
      const addr = editValue?.value?.split(', ');
      const street = addr[0];
      const ward = addr[1];
      const district = addr[2];
      const city = addr[3];

      if (street && ward && district && city) {
        CompanyAddressForm.setFieldsValue({
          ['city']: city,
          ['district']: district,
          ['ward']: ward,
          ['street']: street,
        });
      }
    }
  }, [editValue]);

  return (
    <Modal title='Addresses' open={isModalOpen} onCancel={handleCancel} footer={null}>
      <Form
        className='flex flex-col gap-3'
        name='company-address'
        form={CompanyAddressForm}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item<FieldType>
          label={<p className='text-[15px] font-semibold'>{t('city')}</p>}
          name='city'
          rules={[{ required: true, message: 'Please input company city!' }]}
        >
          <Select size='large' options={cities} />
        </Form.Item>

        <Form.Item<FieldType>
          label={<p className='text-[15px] font-semibold'>{t('district')}</p>}
          name='district'
          rules={[{ required: true, message: 'Please input company district!' }]}
        >
          <Select size='large' options={districts} />
        </Form.Item>

        <Form.Item<FieldType>
          label={<p className='text-[15px] font-semibold'>{t('ward')}</p>}
          name='ward'
          rules={[{ required: true, message: 'Please input company wards!' }]}
        >
          <Select size='large' options={wards} />
        </Form.Item>

        <Form.Item<FieldType>
          label={<p className='text-[15px] font-semibold'>{t('street')}</p>}
          name='street'
          rules={[{ required: true, message: 'Please input company street!' }]}
        >
          <Input size='large' placeholder='Street' />
        </Form.Item>

        <section className='mt-10 flex flex-wrap gap-4 items-center justify-end'>
          <div className='flex items-center gap-3'>
            <Button
              htmlType='button'
              danger
              onClick={() => {
                handleCancel();
              }}
            >
              {t('cancelCompanyProfile')}
            </Button>
            <Button type='primary' htmlType='submit' danger>
              Done
            </Button>
          </div>
        </section>
      </Form>
    </Modal>
  );
};

export default AddAddressModal;
