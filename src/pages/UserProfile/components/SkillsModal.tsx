import { EditOutlined } from '@ant-design/icons';
import { Button, Form, FormProps, Modal, Select, SelectProps } from 'antd';
import React from 'react';

type FieldType = {
  technicalSkills: string[];
  softSkills: string[];
};

const SkillsModal = () => {
  const [SkillsForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const techSkillsOptions: SelectProps['options'] = [
    { value: 'c++', label: 'C++' },
    { value: 'java', label: 'Java' },
    { value: 'python', label: 'Python' },
  ];

  const handleOk = () => {
    //setIsModalOpen(false);
    //SkillsForm.resetFields();
    const value = SkillsForm.getFieldsValue();
    console.log(value);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    SkillsForm.resetFields();
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
            <h3 className='text-xl text-black-900'>Skills</h3>
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
          form={SkillsForm}
          name='summary-form'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className='overflow-y-scroll max-h-[60vh]'
        >
          <div className='flex flex-col gap-4'>
            <Form.Item<FieldType>
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              name='technicalSkills'
              label={<div className='text-gray-400 text-base font-semibold'>Technical Skills</div>}
              rules={[{ required: true, message: 'Please input your full name' }]}
            >
              <Select
                placeholder='Select technical skills'
                mode='tags'
                style={{ width: '100%' }}
                onChange={(value: string) => {
                  console.log(`selected ${value}`);
                }}
                tokenSeparators={[',']}
                options={techSkillsOptions}
              />
            </Form.Item>
            <Form.Item<FieldType>
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              name='softSkills'
              label={<div className='text-gray-400 text-base font-semibold'>Soft Skills</div>}
              rules={[{ required: true, message: 'Please input your full name' }]}
            >
              <Select
                mode='tags'
                style={{ width: '100%' }}
                onChange={(value: string) => {
                  console.log(`selected ${value}`);
                }}
                placeholder='Select soft skills'
                tokenSeparators={[',']}
              />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default SkillsModal;
