import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Activity } from './ActivitiesSession';

type ModalProps = {
  initValue?: Activity;
  isEdit?: boolean;
  handleChange: (value: Activity) => void;
};

interface FormFields extends Activity {}

const ActivityForm = ({ initValue, onCancel }: { initValue?: Activity; onCancel: () => void }) => {
  const [actForm] = Form.useForm();
  // const [value, setValue] = React.useState('');

  return (
    <Form
      name='activity-form'
      form={actForm}
      onFinish={() => {}}
      className='overflow-y-scroll max-h-[60vh]'
    >
      <Form.Item<FormFields>
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name='name'
        label={<div className='text-gray-400 text-base font-semibold'>Activity name</div>}
        initialValue={initValue?.name}
      >
        <Input />
      </Form.Item>

      <Form.Item<FormFields>
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name='isWorking'
        valuePropName='checked'
        initialValue={initValue?.isWorking}
      >
        <Checkbox
          checked={initValue?.isWorking}
          onChange={(e) => {
            actForm.setFieldsValue({ isWorking: e.target.checked });
          }}
        >
          I am currently studying here
        </Checkbox>
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
            actForm.resetFields();
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
            console.log(actForm.getFieldsValue());
          }}
        >
          Save Position
        </Button>
      </div>
    </Form>
  );
};

const ActivityModal = (props: ModalProps) => {
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
            Add Activity
          </Button>
        </div>
      )}

      <Modal
        title={
          <div className='py-4'>
            <h3 className='text-xl text-black-900'>Activity</h3>
          </div>
        }
        width={'50%'}
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <ActivityForm
          initValue={initValue}
          onCancel={() => {
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </>
  );
};

export default ActivityModal;
