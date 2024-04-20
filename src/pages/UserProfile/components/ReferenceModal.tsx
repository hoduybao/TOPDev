import React from 'react';
import { Reference } from './ReferencesSession';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal } from 'antd';

type ModalProps = {
  initValue?: Reference;
  isEdit?: boolean;
  handleChange: (value: Reference) => void;
};

interface FormFields extends Reference {}

const RefForm = ({ initValue, onCancel }: { initValue?: Reference; onCancel: () => void }) => {
  const [refForm] = Form.useForm();

  return (
    <Form
      name='ref-form'
      form={refForm}
      onFinish={() => {}}
      className='overflow-y-scroll max-h-[60vh]'
    >
      <Form.Item<FormFields>
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name='name'
        label={<div className='text-gray-400 text-base font-semibold'>Reference name</div>}
        initialValue={initValue?.name}
      >
        <Input />
      </Form.Item>

      <Form.Item<FormFields>
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name='company'
        label={<div className='text-gray-400 text-base font-semibold'>Position - Company</div>}
        initialValue={initValue?.company}
      >
        <Input />
      </Form.Item>

      <div className='grid grid-cols-2 gap-4'>
        <Form.Item<FormFields>
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          name='email'
          label={<div className='text-gray-400 text-base font-semibold'>Email</div>}
          initialValue={initValue?.email}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormFields>
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          name='phone'
          label={<div className='text-gray-400 text-base font-semibold'>Phone</div>}
          initialValue={initValue?.phone}
        >
          <Input />
        </Form.Item>
      </div>

      <div className='w-full h-full flex justify-end gap-2'>
        <Button
          type='primary'
          className='bg-white border-none text-black-900 shadow-none mt-5 p-6 flex items-center font-bold'
          onClick={() => {
            refForm.resetFields();
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
            console.log(refForm.getFieldsValue());
          }}
        >
          Save Position
        </Button>
      </div>
    </Form>
  );
};

const ReferenceModal = (props: ModalProps) => {
  const { initValue, isEdit, handleChange } = props;
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
            Add reference
          </Button>
        </div>
      )}

      <Modal
        title={
          <div className='py-4'>
            <h3 className='text-xl text-black-900'>Reference</h3>
          </div>
        }
        width={'50%'}
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <RefForm
          initValue={initValue}
          onCancel={() => {
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </>
  );
};

export default ReferenceModal;
