import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, DatePicker, Form, Input, Modal } from 'antd';
import React from 'react';
import { Scholl } from './EducationModal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface FormFields extends Scholl {}

const SchollForm = ({ initValue, onCancel }: { initValue?: Scholl; onCancel: () => void }) => {
  const [SchollForm] = Form.useForm();
  const [value, setValue] = React.useState('');

  return (
    <Form
      name='scholl-form'
      form={SchollForm}
      onFinish={() => {}}
      className='overflow-y-scroll max-h-[60vh]'
    >
      <Form.Item<FormFields>
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name='name'
        label={<div className='text-gray-400 text-base font-semibold'>Scholl name</div>}
        initialValue={initValue?.name}
      >
        <Input />
      </Form.Item>
      <Form.Item<FormFields>
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name='major'
        label={<div className='text-gray-400 text-base font-semibold'>Major</div>}
        initialValue={initValue?.major}
      >
        <Input />
      </Form.Item>

      <Form.Item<FormFields>
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name='isStudying'
        valuePropName='checked'
        initialValue={initValue?.isStudying}
      >
        <Checkbox
          checked={initValue?.isStudying}
          onChange={(e) => {
            SchollForm.setFieldsValue({ isStudying: e.target.checked });
          }}
        >
          I am currently studying here
        </Checkbox>
      </Form.Item>

      <div className='grid grid-cols-2 gap-4'>
        <Form.Item<FormFields>
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          name='startDate'
          label={<div className='text-gray-400 text-base font-semibold'>Start date</div>}
          rules={[{ required: true, message: 'Please input your start date' }]}
          // initialValue={timeBegin}
        >
          <DatePicker className='w-full' format='YYYY/MM/DD' />
        </Form.Item>

        <Form.Item<FormFields>
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          name='endDate'
          label={<div className='text-gray-400 text-base font-semibold'>End date</div>}
          rules={[{ required: true, message: 'Please input your end date' }]}
          // initialValue={timeEnd}
        >
          <DatePicker className='w-full' format='YYYY/MM/DD' />
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
          onChange={(value) => {
            console.log(value);
            setValue(value);
          }}
        />
      </Form.Item>

      <div className='w-full h-full border-t border-gray-300 flex justify-end gap-2'>
        <Button
          type='primary'
          className='bg-white border-none text-black-900 shadow-none mt-5 p-6 flex items-center font-bold'
          onClick={() => {
            SchollForm.resetFields();
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
            console.log(SchollForm.getFieldsValue());
          }}
        >
          Save Position
        </Button>
      </div>
    </Form>
  );
};

type ModalProps = {
  initValue?: Scholl;
  isEdit?: boolean;
  handleChange: (value: Scholl) => void;
};
const SchollModal = (props: ModalProps) => {
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
            Add education
          </Button>
        </div>
      )}

      <Modal
        title={
          <div className='py-4'>
            <h3 className='text-xl text-black-900'>Education</h3>
          </div>
        }
        width={'50%'}
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <SchollForm
          initValue={initValue}
          onCancel={() => {
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </>
  );
};

export default SchollModal;
