import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal } from 'antd';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Project } from './ProjectsSession';

type ModalProps = {
  initValue?: Project;
  isEdit?: boolean;
  handleChange: (value: Project) => void;
};

interface FormFields extends Project {}

const ProjectForm = ({ initValue, onCancel }: { initValue?: Project; onCancel: () => void }) => {
  const [projectForm] = Form.useForm();
  // const [value, setValue] = React.useState('');

  return (
    <Form
      name='project-form'
      form={projectForm}
      onFinish={() => {}}
      className='overflow-y-scroll max-h-[60vh]'
    >
      <Form.Item<FormFields>
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name='name'
        label={<div className='text-gray-400 text-base font-semibold'>Project name</div>}
        initialValue={initValue?.name}
      >
        <Input />
      </Form.Item>

      <div className='grid grid-cols-2 gap-4'>
        <Form.Item<FormFields>
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          name='position'
          label={<div className='text-gray-400 text-base font-semibold'>Position</div>}
          initialValue={initValue?.position}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormFields>
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          name='timeline'
          label={<div className='text-gray-400 text-base font-semibold'>Timeline</div>}
          initialValue={initValue?.timeline}
        >
          <Input />
        </Form.Item>
      </div>

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
          //   console.log(value);
          //   setValue(value);
          // }}
        />
      </Form.Item>

      <div className='w-full h-full border-t border-gray-300 flex justify-end gap-2'>
        <Button
          type='primary'
          className='bg-white border-none text-black-900 shadow-none mt-5 p-6 flex items-center font-bold'
          onClick={() => {
            projectForm.resetFields();
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
            console.log(projectForm.getFieldsValue());
          }}
        >
          Save Position
        </Button>
      </div>
    </Form>
  );
};

const ProjectModal = (props: ModalProps) => {
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
            Add project
          </Button>
        </div>
      )}

      <Modal
        title={
          <div className='py-4'>
            <h3 className='text-xl text-black-900'>Project</h3>
          </div>
        }
        width={'50%'}
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <ProjectForm
          initValue={initValue}
          onCancel={() => {
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </>
  );
};

export default ProjectModal;
