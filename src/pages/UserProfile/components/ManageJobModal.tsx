import { EditOutlined } from '@ant-design/icons';
import { Button, Checkbox, DatePicker, Form, FormInstance, Input, Modal, Select } from 'antd';
import React from 'react';
import { YOEProps } from './ExpSession';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AddProjectForm, { AddProjectFormField } from './AddProjectForm';
import { v4 as uuidv4 } from 'uuid';

interface FormFields extends YOEProps {}

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
  const {
    appliedSkills,
    companyName,
    position,
    timeBegin,
    timeEnd,
    description,
    isDoing = false,
    projects,
  } = initData;

  const [currentProjects, setCurrentProjects] = React.useState<AddProjectFormField[]>(
    projects || [],
  );

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
            valuePropName='checked'
            label={<div className='text-gray-400 text-base font-semibold'>Company</div>}
          >
            <Checkbox
              onChange={(e) => {
                instance.setFieldsValue({ isDoing: e.target.checked });
              }}
            >
              I am currenlty working in this role
            </Checkbox>
            ;
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
            initialValue={description}
          >
            <ReactQuill
              theme='snow'
              style={{ width: '100%', height: '100px', maxHeight: '100px', marginBottom: '50px' }}
              value={description}
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
            initialValue={appliedSkills}
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

          {/* render list projects */}
          <div className='flex flex-col gap-4'>
            {currentProjects?.map((project: AddProjectFormField) => {
              return (
                <div key={uuidv4()}>
                  <AddProjectForm
                    isEdit
                    initValue={project}
                    setProjectValue={(value: AddProjectFormField) => {
                      console.log('value', value);

                      const newProjects = currentProjects.map((item: AddProjectFormField) => {
                        if (item.name === value.name) {
                          return value;
                        }
                        return item;
                      });
                      console.log('newProjects', newProjects);

                      setCurrentProjects(newProjects);
                      instance.setFieldsValue({ projects: newProjects });
                    }}
                  />
                </div>
              );
            })}
          </div>

          <Form.Item<FormFields>
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            name='projects'
            label={
              <div>
                <div className='text-gray-400 text-base font-semibold'>Project in this role</div>
                <p className='text-gray-400'>
                  Rest assured, if left blank, this section will not appear on your profile.
                </p>
              </div>
            }
            rules={[{ required: true, message: 'Please input your end date' }]}
            initialValue={projects}
          >
            <AddProjectForm
              setProjectValue={(value: any) => {
                const newProjects = [...currentProjects, value];
                setCurrentProjects(newProjects);
                instance.setFieldsValue({ projects: newProjects });
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
              onClick={handleCancel}
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
