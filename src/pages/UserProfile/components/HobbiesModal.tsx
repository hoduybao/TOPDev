import { EditOutlined } from '@ant-design/icons';
import { Button, Form, Modal } from 'antd';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type FormFields = {
  hobbies: string;
};

const HobbiesForm = ({ initValue, onCancel }: { initValue?: FormFields; onCancel: () => void }) => {
  const [langForm] = Form.useForm();
  // const [value, setValue] = React.useState('');

  return (
    <Form name='hobbies-form' form={langForm} onFinish={() => {}}>
      <Form.Item<FormFields>
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name='hobbies'
        label={<div className='text-gray-400 text-base font-semibold'>Description</div>}
        rules={[{ required: true, message: 'Please input your end date' }]}
        initialValue={initValue?.hobbies}
      >
        <ReactQuill
          theme='snow'
          style={{ width: '100%', height: '100px', maxHeight: '100px', marginBottom: '50px' }}
          value={initValue?.hobbies}
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

const HobbiesModal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <>
      <EditOutlined className='font-base' onClick={() => setIsModalOpen(true)} />
      <Modal
        title={
          <div className='py-4'>
            <h3 className='text-xl text-black-900'>Languages</h3>
          </div>
        }
        width={'50%'}
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <HobbiesForm onCancel={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default HobbiesModal;
