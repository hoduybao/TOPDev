import { EditOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  CheckboxProps,
  DatePicker,
  Form,
  FormInstance,
  FormProps,
  Input,
  Modal,
  Select,
} from 'antd';
import React from 'react';
import { YOEProps } from './ExpSession';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AddProjectForm from './AddProjectForm';

interface FormFields extends YOEProps {
  projects: { name: string; timeline: string; description: string }[];
}

const JobForm = ({
  initData,
  instance,
  onFinish,
}: {
  initData: YOEProps;
  instance: FormInstance<any>;
  onFinish: (value: any) => void;
}) => {
  const [value, setValue] = React.useState('');
  const { appliedSkills, companyName, position, timeBegin, timeEnd, description, isDoing } =
    initData;

  return (
    <div>
      <Form
        form={instance}
        name='job-form'
        onFinish={onFinish}
        className='overflow-y-scroll max-h-[60vh]'
      >
        <div className='flex flex-col gap-4'>
          <Form.Item<FormFields>
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            name='position'
            label={<div className='text-gray-400 text-base font-semibold'>Job position</div>}
            rules={[{ required: true, message: 'Please input your Job position' }]}
            initialValue={position}
          >
            <Input />
          </Form.Item>

          <Form.Item<FormFields>
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            name='companyName'
            label={<div className='text-gray-400 text-base font-semibold'>Company</div>}
            rules={[{ required: true, message: 'Please input your company' }]}
            initialValue={companyName}
          >
            <Input />
          </Form.Item>

          <Form.Item<FormFields>
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            name='isDoing'
            label={<div className='text-gray-400 text-base font-semibold'>Company</div>}
            rules={[{ required: true, message: 'Please input your company' }]}
            initialValue={isDoing}
          >
            <Checkbox>I am currenlty working in this role</Checkbox>;
          </Form.Item>

          <div className='grid grid-cols-2 gap-4'>
            <Form.Item<FormFields>
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              name='timeBegin'
              label={<div className='text-gray-400 text-base font-semibold'>Start date</div>}
              rules={[{ required: true, message: 'Please input your start date' }]}
              // initialValue={timeBegin}
            >
              <DatePicker className='w-full' format='YYYY/MM/DD' />
            </Form.Item>

            <Form.Item<FormFields>
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              name='timeEnd'
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
            // initialValue={timeEnd}
          >
            <ReactQuill
              theme='snow'
              style={{ width: '100%', height: '100px', maxHeight: '100px', marginBottom: '50px' }}
              value={value}
              onChange={(value) => {
                console.log(value);
                setValue(value);
              }}
            />
          </Form.Item>

          <Form.Item<FormFields>
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            name='appliedSkills'
            label={<div className='text-gray-400 text-base font-semibold'>Technical Skills</div>}
            rules={[{ required: true, message: 'Please input your end date' }]}
            // initialValue={timeEnd}
          >
            <Select
              placeholder='Select technical skills'
              mode='tags'
              style={{ width: '100%' }}
              onChange={(value: string) => {
                console.log(`selected ${value}`);
              }}
              tokenSeparators={[',']}
            />
          </Form.Item>

          <Form.Item<FormFields>
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            name='projects'
            label={<div className='text-gray-400 text-base font-semibold'>Technical Skills</div>}
            rules={[{ required: true, message: 'Please input your end date' }]}
            // initialValue={timeEnd}
          >
            <AddProjectForm
              setProjectValue={(value: any) => {
                // setProjects([...projects, value]);
              }}
            />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

const ManageJobModal = ({ data }: { data: YOEProps }) => {
  const { companyName, position } = data;
  // modal manage
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // form manage
  const [JobFormInstance] = Form.useForm();
  const [projects, setProjects] = React.useState<FormFields['projects']>([]);

  const handleOk = () => {
    console.log('handle ok', JobFormInstance.getFieldsValue());
    //setIsModalOpen(false);
  };

  return (
    <>
      <EditOutlined className='font-base' onClick={() => setIsModalOpen(true)} />
      <Modal
        title={
          <div className='py-4'>
            <span className='text-orange-500 text-lg font-bold'>{position}</span> at{' '}
            <span className='uppercase text-lg text-gray-400 font-bold'>{companyName}</span>
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
              Save Position
            </Button>
          </div>
        }
      >
        <JobForm initData={data} instance={JobFormInstance} onFinish={() => {}} />
      </Modal>
    </>
  );
};

export default ManageJobModal;
