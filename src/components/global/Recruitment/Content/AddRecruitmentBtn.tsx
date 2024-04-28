import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useSize from '@/hooks/useSize';
import { Button, Modal, Form, Input, InputNumber, Select, notification } from 'antd';
import { useCreateJobMutation } from '@/+core/redux/apis/common/recruitment/recruitment.api';

import { type FormProps } from 'antd';

// import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

import TextContentEditor from '../../Recruitment/Content/TextContentEditor';
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
  technicals?: string[];
  minExperience?: string;
  maxExperience?: string;
  contractType?: string;
  workingPlace?: string;
  jobDescription?: any;
  interviewProcess?: string[] | any;
};

const AddRecruitmentBtn = (props: PropType) => {
  const { jobs, setJobs } = props;

  const { t } = useTranslation();
  const windowsize = useSize();

  const [api, contextHolder] = notification.useNotification();
  const [createNewJob, { isLoading: createJobLoading }] = useCreateJobMutation();

  const [NewRecruitmentForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [interviewProcess, setInterviewProcess] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [createJobModalWidth, setJobModalWidth] = useState<string>('');

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

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    if (interviewProcess === '' || description === '') {
      api.open({
        message: 'Notification',
        icon: <CloseCircleOutlined style={{ color: 'red' }} />,
        description: 'Create new job failed',
        duration: 5,
        placement: 'bottomLeft',
      });

      return;
    }

    const newJob: JobType = {
      title: values?.title,
      level: values?.level,
      salary: values?.salary,
      technicals: values?.technicals,
      minExperience: values?.minExperience,
      maxExperience: values?.maxExperience,
      contractType: values?.contractType,
      workingPlace: values?.workingPlace,
      interviewProcess: interviewProcess,
      jobDescription: description,
    };

    // console.log('Success:', newJob);

    const res = await createNewJob(newJob).unwrap();
    console.log('Create job res:', res);

    if (res?.statusCode === 200 && res?.data) {
      const jobResData: JobType = res?.data;
      setJobs([...jobs, jobResData]);

      api.open({
        message: 'Notification',
        icon: <CheckCircleOutlined style={{ color: 'green' }} />,
        description: 'Create new job successfully',
        duration: 5,
        placement: 'bottomLeft',
      });
    } else {
      api.open({
        message: 'Notification',
        icon: <CloseCircleOutlined style={{ color: 'red' }} />,
        description: 'Create new job failed',
        duration: 5,
        placement: 'bottomLeft',
      });
    }

    setInterviewProcess('');
    setDescription('');
    handleOk();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);

    api.open({
      message: 'Notification',
      icon: <CloseCircleOutlined style={{ color: 'red' }} />,
      description: 'Create new job failed',
      duration: 5,
      placement: 'bottomLeft',
    });
  };

  useEffect(() => {
    if (windowsize[0] <= 1280) setJobModalWidth('90vw');
    if (windowsize[0] > 1280) setJobModalWidth('60vw');
  }, [windowsize]);

  return (
    <>
      {contextHolder}
      <Button type='primary' danger onClick={showModal}>
        {t('recruitmentAdd')}
      </Button>
      <Modal
        width={createJobModalWidth}
        title={t('recruitmentCreateJobPosition')}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={NewRecruitmentForm}
          name='create-new-job'
          className='mt-5 pr-5 flex flex-col gap-5 h-[70vh] overflow-x-auto'
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            ['companyName']: 'DTS Software Viet Nam',
            ['level']: 'All',
            ['contractType']: 'Full time',
            ['workingPlace']: 'Hồ Chí Minh',
          }}
        >
          <Form.Item<FieldType>
            label={`${t('recruitmentCompanyName')}`}
            name='companyName'
            rules={[{ required: true, message: 'Please input company name!' }]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item<FieldType>
            label={`${t('recruitmentJobTitle')}`}
            name='title'
            rules={[{ required: true, message: 'Please input job title!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label={`${t('recruitmentLevel')}`}
            name='level'
            rules={[{ required: true, message: 'Please input job level!' }]}
          >
            <Select
              style={{ width: 200 }}
              options={[
                { value: 'All', label: 'All' },
                { value: 'Intern', label: 'Intern' },
                { value: 'Fresher', label: 'Fresher' },
                { value: 'Junior', label: 'Junior' },
                { value: 'Middle', label: 'Middle' },
                { value: 'Senior', label: 'Senior' },
                { value: 'Leader', label: 'Leader' },
                { value: 'Project manager', label: 'Project manager' },
              ]}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label={`${t('recruitmentSalary')}`}
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
            label={`${t('recruitmentTechs')}`}
            name='technicals'
            rules={[{ required: true, message: 'Please select your technicals!', type: 'array' }]}
          >
            <Select mode='multiple' placeholder='Please select technicals'>
              <Option value='C++'>C++</Option>
              <Option value='ReactJS'>ReactJS</Option>
              <Option value='ExpressJS'>ExpressJS</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label={`${t('recruitmentMinExp')}`}
            name='minExperience'
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
            label={`${t('recruitmentMaxExp')}`}
            name='maxExperience'
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

          <Form.Item<FieldType> label={`${t('recruitmentContractType')}`} name='contractType'>
            <Select
              style={{ width: 200 }}
              options={[
                { value: 'Full time', label: 'Full time' },
                { value: 'Part time', label: 'Part time' },
                { value: 'Permanent', label: 'Permanent' },
              ]}
            />
          </Form.Item>

          <Form.Item<FieldType> label={`${t('recruitmentWorkingPlace')}`} name='workingPlace'>
            <Select
              style={{ width: 200 }}
              options={[
                { value: 'Hồ Chí Minh', label: 'Hồ Chí Minh' },
                { value: 'Hà Nội', label: 'Hà Nội' },
                { value: 'Đà Nẵng', label: 'Đà Nẵng' },
              ]}
            />
          </Form.Item>

          <Form.Item<FieldType> label={`${t('recruitmentInterview')}`} name='interviewProcess'>
            <TextContentEditor content={interviewProcess} setContent={setInterviewProcess} />
          </Form.Item>

          <Form.Item<FieldType> label={`${t('recruitmentDesctiption')}`} name='jobDescription'>
            <TextContentEditor content={description} setContent={setDescription} />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <div className='w-full border-t border-gray-300 mt-5 pt-4 flex items-center gap-2'>
              <Button
                type='primary'
                htmlType='submit'
                danger
                disabled={createJobLoading ? true : false}
              >
                {t('recruitmentCreateJob')}
              </Button>
              <Button onClick={handleCancel}>{t('recruitmentCancelJob')}</Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddRecruitmentBtn;
