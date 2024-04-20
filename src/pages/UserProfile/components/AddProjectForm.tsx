import { EditOutlined, FileTextOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export type AddProjectFormField = {
  name: string;
  timeline: string;
  description: string;
};

const AddProjectForm = ({
  setProjectValue,
  initValue,
  isEdit = false,
}: {
  isEdit?: boolean;
  initValue?: AddProjectFormField;
  setProjectValue: (value: AddProjectFormField) => void;
}) => {
  const [isAddingProjects, setIsAddingProjects] = React.useState(false);
  const [AddProjectForm] = Form.useForm();
  const [value, setValue] = React.useState('');

  const handleOk = () => {
    setProjectValue(AddProjectForm.getFieldsValue());
  };

  return (
    <div className='mt-4'>
      <div className='w-full flex justify-center'>
        {isEdit ? (
          <div className='w-full flex justify-between px-4'>
            <div>
              <div className='flex'>
                <FileTextOutlined className='font-base mr-4' />
                <h3 className='font-bold text-base'>{initValue?.name}</h3>
              </div>
              <div>{initValue?.timeline}</div>
            </div>
            <EditOutlined className='font-base' onClick={() => setIsAddingProjects(true)} />
          </div>
        ) : (
          <Button
            className='text-orange-500 border-[1px] border-orange-500 p-6 font-bold rounded flex items-center justify-center'
            disabled={isAddingProjects}
            onClick={() => setIsAddingProjects(true)}
          >
            <PlusCircleOutlined className='mx-2' />
            Add More Project
          </Button>
        )}
      </div>

      {isAddingProjects ? (
        <Form form={AddProjectForm} name='add-project-form'>
          <Form.Item<AddProjectFormField>
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            name='name'
            label={<div className='text-gray-400 text-base font-semibold'>Project name</div>}
            initialValue={initValue?.name}
          >
            <Input />
          </Form.Item>
          <Form.Item<AddProjectFormField>
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            name='timeline'
            label={<div className='text-gray-400 text-base font-semibold'>Timeline</div>}
            initialValue={initValue?.timeline}
          >
            <Input />
          </Form.Item>
          <Form.Item<AddProjectFormField>
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            name='description'
            label={<div className='text-gray-400 text-base font-semibold'>Description</div>}
            rules={[{ required: true, message: 'Please input your end date' }]}
            initialValue={initValue?.description}
          >
            <ReactQuill
              theme='snow'
              style={{
                width: '100%',
                height: '100px',
                maxHeight: '100px',
                marginBottom: '50px',
              }}
              value={value}
              onChange={(value) => {
                setValue(value);
              }}
            />
          </Form.Item>

          <Form.Item<AddProjectFormField> labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
            <div className='w-full h-full border-t border-gray-300 flex justify-end gap-2'>
              <Button
                type='primary'
                className='bg-white border-none text-black-900 shadow-none mt-5 p-6 flex items-center font-bold'
                onClick={() => {
                  AddProjectForm.resetFields();
                  setIsAddingProjects(false);
                }}
              >
                Cancel
              </Button>
              <Button
                type='primary'
                className='mt-5 p-6 flex items-center font-bold'
                danger
                onClick={handleOk}
              >
                Save Project
              </Button>
            </div>
          </Form.Item>
        </Form>
      ) : null}
    </div>
  );
};

export default AddProjectForm;
