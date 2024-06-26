import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Modal } from 'antd';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Certificate } from './CertificatesSession';

type ModalProps = {
  initValue?: Certificate;
  isEdit?: boolean;
  handleChange: (value: Certificate) => void;
};

interface FormFields extends Certificate {}

const CertForm = ({ initValue, onCancel }: { initValue?: Certificate; onCancel: () => void }) => {
  const [certForm] = Form.useForm();
  // const [value, setValue] = React.useState('');

  return (
    <Form
      name='cert-form'
      form={certForm}
      onFinish={() => {}}
      className='overflow-y-scroll max-h-[60vh]'
    >
      <Form.Item<FormFields>
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name='name'
        label={<div className='text-gray-400 text-base font-semibold'>Certificate name</div>}
        initialValue={initValue?.name}
      >
        <Input />
      </Form.Item>

      <Form.Item<FormFields>
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name='time'
        label={<div className='text-gray-400 text-base font-semibold'>Position - Company</div>}
        // initialValue={initValue?.company}
      >
        <DatePicker className='w-full' format='YYYY/MM/DD' />
      </Form.Item>

      <Form.Item<FormFields>
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name='description'
        label={<div className='text-gray-400 text-base font-semibold'>Description</div>}
        rules={[{ required: true, message: 'Please input your end date' }]}
        initialValue={initValue?.description}
      >
        <ReactQuill
          theme='snow'
          style={{ width: '100%', height: '100px', maxHeight: '100px', marginBottom: '50px' }}
          value={initValue?.description}
          // onChange={(value) => {
          //   // console.log(value);
          //   // setValue(value);
          // }}
        />
      </Form.Item>

      <div className='w-full h-full flex justify-end gap-2'>
        <Button
          type='primary'
          className='bg-white border-none text-black-900 shadow-none mt-5 p-6 flex items-center font-bold'
          onClick={() => {
            certForm.resetFields();
            onCancel();
          }}
        >
          Cancel
        </Button>
        <Button
          type='primary'
          className='mt-5 p-6 flex items-center font-bold'
          danger
          onClick={() => {
            console.log('handle delete scholl infomation');
            console.log(certForm.getFieldsValue());
          }}
        >
          Save Position
        </Button>
      </div>
    </Form>
  );
};

const CertModal = (props: ModalProps) => {
  const { initValue, isEdit } = props;
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <>
      {isEdit ? (
        <EditOutlined className='font-base' onClick={() => setIsModalOpen(true)} />
      ) : (
        <div className='w-full flex justify-center my-4'>
          <Button
            type='primary'
            className='flex items-center justify-center p-6 text-orange-500 border-[1px] border-orange-500 font-semibold'
            onClick={() => setIsModalOpen(true)}
          >
            <PlusOutlined className='text-base' />
            Add certificate
          </Button>
        </div>
      )}

      <Modal
        title={
          <div className='py-4'>
            <h3 className='text-xl text-black-900'>Certificate</h3>
          </div>
        }
        width={'50%'}
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <CertForm
          initValue={initValue}
          onCancel={() => {
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </>
  );
};

export default CertModal;
