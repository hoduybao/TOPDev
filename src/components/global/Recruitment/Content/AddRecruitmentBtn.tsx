import { useState } from 'react';
import { Button, Modal, Form, Input, InputNumber, Select, Space } from 'antd';
import { type FormProps } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import JobDescription from '../../Recruitment/Content/JobDescriptionEditor';
import { JobType } from '@/+core/utilities/types/recruitment.type';

const { Option } = Select;

interface PropType {
  jobs: JobType[];
  setJobs: React.Dispatch<React.SetStateAction<JobType[]>>;
}

type FieldType = {
  companyName?: string;
  title?: string;
  level?: string;
  salary?: string;
  techs?: string[];
  experienceYearsMin?: string;
  experienceYearsMax?: string;
  typeContract?: string;
  type?: string;
  jobDescription?: any;
  interviewProcess?: string[];
};

const AddRecruitmentBtn = (props: PropType) => {
  const { jobs, setJobs } = props;

  const [NewRecruitmentForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    NewRecruitmentForm.resetFields();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    NewRecruitmentForm.resetFields();
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    const newJob: JobType = {
      id: uuidv4(),
      title: values?.title,
      companyId: uuidv4(),
      level: values?.level,
      salary: values?.salary,
      techs: values?.techs,
      experienceYearsMin: values?.experienceYearsMin,
      experienceYearsMax: values?.experienceYearsMax,
      typeContract: values?.typeContract,
      type: values?.type,
      interviewProcess: values?.interviewProcess?.map((p: any) => {
        return p?.title;
      }),
      description: description,
    };

    console.log('Success:', newJob);
    setJobs([...jobs, newJob]);

    setDescription('');
    handleOk();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button type='primary' danger onClick={showModal}>
        Mới
      </Button>
      <Modal
        width={'90vw'}
        title='Tạo một Vị trí Công việc'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={NewRecruitmentForm}
          name='create-new-job'
          className='mt-5 pr-5 flex flex-col gap-5 h-[70vh] overflow-x-auto'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            ['companyName']: 'DTS Software Viet Nam',
            ['level']: 'all',
            ['typeContract']: 'fulltime',
            ['type']: 'office',
          }}
        >
          <Form.Item<FieldType>
            label='Tên công ty'
            name='companyName'
            rules={[{ required: true, message: 'Please input company name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Chức vụ'
            name='title'
            rules={[{ required: true, message: 'Please input job title!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Cấp bậc'
            name='level'
            rules={[{ required: true, message: 'Please input job level!' }]}
          >
            <Select
              style={{ width: 200 }}
              options={[
                { value: 'all', label: 'All' },
                { value: 'intern', label: 'Intern' },
                { value: 'fresher', label: 'Fresher' },
                { value: 'junior', label: 'Junior' },
                { value: 'Middle', label: 'Middle' },
                { value: 'Senior', label: 'Senior' },
                { value: 'leader', label: 'Leader' },
                { value: 'project-manager', label: 'Project manager' },
              ]}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label='Mức lương'
            name='salary'
            rules={[{ required: true, message: 'Please input job salary!' }]}
          >
            <InputNumber
              style={{ width: 200 }}
              addonAfter={
                <Select defaultValue='USD' style={{ width: 70 }}>
                  <Option value='USD'>$</Option>
                  <Option value='VND'>VND</Option>
                </Select>
              }
            />
          </Form.Item>

          <Form.Item
            name='techs'
            label='Công nghệ sử dụng'
            rules={[
              { required: true, message: 'Please select your favourite colors!', type: 'array' },
            ]}
          >
            <Select mode='multiple' placeholder='Please select techs'>
              <Option value='c-plus-plus'>C++</Option>
              <Option value='react-js'>ReactJS</Option>
              <Option value='express-js'>ExpressJS</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name='experienceYearsMin'
            label='Số năm kinh nghiệm tối thiểu'
            rules={[
              {
                required: true,
                type: 'number',
                min: 0,
                message: 'Please input job experience years min!',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name='experienceYearsMax'
            label='Số năm kinh nghiệm tối đa'
            rules={[
              {
                required: true,
                type: 'number',
                min: 0,
                message: 'Please input job experience years max!',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item<FieldType> label='Loại hợp đồng' name='typeContract'>
            <Select
              style={{ width: 200 }}
              options={[
                { value: 'fulltime', label: 'Full time' },
                { value: 'parttime', label: 'Part time' },
              ]}
            />
          </Form.Item>

          <Form.Item<FieldType> label='Địa điểm làm việc' name='type'>
            <Select
              style={{ width: 200 }}
              options={[
                { value: 'office', label: 'Office' },
                { value: 'remote', label: 'Remote' },
              ]}
            />
          </Form.Item>

          <Form.Item<FieldType> label='Quy trình phỏng vấn' name='interviewProcess'>
            <Form.List name='interviewProcess'>
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align='baseline'>
                      <Form.Item
                        className='w-[300px] lg:w-[600px]'
                        {...restField}
                        name={[name, 'title']}
                        rules={[{ required: true, message: 'Missing process title' }]}
                      >
                        <Input placeholder='Nội dung quy trình' />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button type='dashed' onClick={() => add()} block icon={<PlusOutlined />}>
                      Thêm quy trình
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form.Item>

          <Form.Item<FieldType> label='Mô tả công việc' name='jobDescription'>
            <JobDescription description={description} setDescription={setDescription} />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <div className='w-full border-t border-gray-300 mt-5 pt-4 flex items-center gap-2'>
              <Button type='primary' htmlType='submit' danger>
                Tạo
              </Button>
              <Button onClick={handleCancel}>Hủy bỏ</Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddRecruitmentBtn;
