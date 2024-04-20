import { Button, Form, Input } from 'antd';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type AddProjectFormField = {
  name: string;
  timeline: string;
  description: string;
};

const AddProjectForm = ({
  setProjectValue,
}: {
  setProjectValue: (value: AddProjectFormField) => void;
}) => {
  const [isAddingProjects, setIsAddingProjects] = React.useState(false);
  const [AddProjectForm] = Form.useForm();
  const [value, setValue] = React.useState('');

  const handleOk = () => {
    console.log('handle ok', AddProjectForm.getFieldsValue());
    setProjectValue(AddProjectForm.getFieldsValue());
  };

  return (
    <div>
      <Button type='primary' disabled={isAddingProjects} onClick={() => setIsAddingProjects(true)}>
        Add Project
      </Button>
      {isAddingProjects ? (
        <Form
          form={AddProjectForm}
          name='add-project-form'
          onFinish={() => {}}
          onFinishFailed={() => {}}
        >
          <Form.Item<AddProjectFormField>
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            name='name'
            label={<div className='text-gray-400 text-base font-semibold'>Project name</div>}
          >
            <Input />
          </Form.Item>
          <Form.Item<AddProjectFormField>
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            name='timeline'
            label={<div className='text-gray-400 text-base font-semibold'>Timeline</div>}
          >
            <Input />
          </Form.Item>
          <Form.Item<AddProjectFormField>
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            name='description'
            label={<div className='text-gray-400 text-base font-semibold'>Description</div>}
            rules={[{ required: true, message: 'Please input your end date' }]}
            // initialValue={timeEnd}
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
                console.log(value);
                setValue(value);
              }}
            />
          </Form.Item>

          <Form.Item<AddProjectFormField> labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
            <div className='w-full h-full border-t border-gray-300 flex justify-end gap-2'>
              <Button
                type='primary'
                className='bg-white border-none text-black-900 shadow-none mt-5 p-6 flex items-center font-bold'
                onClick={handleOk}
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
