import { useTranslation } from 'react-i18next';
import { Form, Input, Button, Modal } from 'antd';
import { type FormProps } from 'antd';

import { Dispatch, SetStateAction, useEffect } from 'react';
import UploadFileInput from './UploadFileInput';

const { TextArea } = Input;

interface PropType {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  products: any;
  setProducts: Dispatch<SetStateAction<any>>;
  editValue?: {
    name: string;
    link: string;
    photoUrl: string;
    description: string;
    index: number | null;
  };
  setEditValue: any;
}

type FieldType = {
  name?: string;
  link?: string;
  description?: string;
  photoUrl?: string;
};

const AddProductModal = (props: PropType) => {
  const { isModalOpen, handleOk, handleCancel, products, setProducts, editValue, setEditValue } =
    props;

  const { t } = useTranslation();

  const [CompanyProductForm] = Form.useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('Success:', values);

    const product = {
      name: values?.name,
      link: values?.link,
      photo: values?.photoUrl ? values?.photoUrl : editValue?.photoUrl,
      description: values?.description,
    };

    if (editValue?.name === '') {
      setProducts([...products, product]);
    } else {
      if (editValue?.name !== '' && editValue?.index !== null) {
        const newProducts = [];

        for (let i = 0; i < products?.length; ++i) {
          if (i === editValue?.index) newProducts.push(product);
          else newProducts.push(products[i]);
        }

        setProducts(newProducts);
      }
    }

    setEditValue({
      name: '',
      link: '',
      photoUrl: '',
      description: '',
      index: null,
    });

    CompanyProductForm.resetFields();
    handleOk();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (editValue?.name) {
      CompanyProductForm.setFieldsValue({
        ['name']: editValue?.name,
        ['link']: editValue?.link,
        ['description']: editValue?.description,
      });
    }
  }, [editValue]);

  return (
    <Modal title='Company Product' open={isModalOpen} onCancel={handleCancel} footer={null}>
      <Form
        className='flex flex-col gap-3'
        name='company-product'
        form={CompanyProductForm}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item<FieldType>
          label={<p className='text-[15px] font-semibold'>{t('productName')}</p>}
          name='name'
          rules={[{ required: true, message: 'Please input product name!' }]}
        >
          <Input size='large' />
        </Form.Item>

        <Form.Item<FieldType>
          label={<p className='text-[15px] font-semibold'>{t('productLink')}</p>}
          name='link'
        >
          <Input size='large' />
        </Form.Item>

        <UploadFileInput
          label={'Photo'}
          form={CompanyProductForm}
          name='photoUrl'
          description='Types: png, jpg, jpeg. <5MB'
          rules={[{ required: false }]}
        />

        <Form.Item<FieldType>
          label={<p className='text-[15px] font-semibold'>{t('productDescription')}</p>}
          name='description'
          rules={[{ required: true, message: 'Please input product description!' }]}
        >
          <TextArea rows={4} />
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

export default AddProductModal;
