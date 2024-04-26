import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { Language } from './LanguagesSession';
import { Button, Form, Modal, Select } from 'antd';

interface FormFields extends Language {}

const LangForm = ({ initValue, onCancel }: { initValue?: Language; onCancel: () => void }) => {
  const [langForm] = Form.useForm();
  const [value, setValue] = React.useState('');

  return (
    <Form name='project-form' form={langForm} onFinish={() => {}}>
      <div className='grid grid-cols-2 gap-4'>
        <Form.Item<FormFields>
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          name='name'
          label={<div className='text-gray-400 text-base font-semibold'>Language</div>}
          initialValue={initValue?.name}
        >
          <Select />
        </Form.Item>

        <Form.Item<FormFields>
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          name='level'
          label={<div className='text-gray-400 text-base font-semibold'>Level</div>}
          initialValue={initValue?.level}
        >
          <Select />
        </Form.Item>
      </div>

      <div className='w-full h-full flex justify-end gap-2'>
        <Button
          type='primary'
          className='bg-white border-none text-black-900 shadow-none mt-5 p-6 flex items-center font-bold'
          onClick={() => {
            langForm.resetFields();
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
            console.log(langForm.getFieldsValue());
          }}
        >
          Save
        </Button>
      </div>
    </Form>
  );
};

type ModalProps = {
  initValue?: Language;
  isEdit?: boolean;
  handleChange: (value: Language) => void;
};
const LanguageModal = (props: ModalProps) => {
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
            Add language
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
        <LangForm
          initValue={initValue}
          onCancel={() => {
            setIsModalOpen(false);
          }}
        />
        {/* <ProjectForm
          initValue={initValue}
          onCancel={() => {
            setIsModalOpen(false);
          }}
        /> */}
      </Modal>
    </>
  );
};

export default LanguageModal;
