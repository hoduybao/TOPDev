import { EditOutlined } from '@ant-design/icons';
import { Button, Form, FormProps, Modal } from 'antd';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type FieldType = {
  summary: string;
};

const SummaryModal = () => {
  const [SummaryForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState('');

  const handleOk = () => {
    //setIsModalOpen(false);
    //SummaryForm.resetFields();
    const value = SummaryForm.getFieldsValue();
    console.log(value);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    SummaryForm.resetFields();
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    //handleOk();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <EditOutlined className='font-base' onClick={() => setIsModalOpen(true)} />
      <Modal
        title={
          <div className='py-4'>
            <h3 className='text-xl text-black-900'>Summary</h3>
            <p className='text-gray-400 text-base'>
              Provide detail information helps us find easily the jobs that fit for you.
            </p>
          </div>
        }
        width={'50%'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <div className='w-full h-full border-t border-gray-300 flex justify-end gap-2'>
            <Button
              type='primary'
              className='mt-5 p-6 flex items-center font-bold'
              danger
              onClick={handleOk}
            >
              Save
            </Button>
          </div>
        }
      >
        <Form
          form={SummaryForm}
          name='summary-form'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className='overflow-y-scroll max-h-[60vh]'
        >
          <Form.Item<FieldType>
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            name='summary'
            rules={[{ required: true, message: 'Please input your full name' }]}
          >
            <ReactQuill
              theme='snow'
              value={value}
              style={{ height: '150px' }}
              onChange={(value) => {
                console.log(value);
                setValue(value);
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default SummaryModal;
