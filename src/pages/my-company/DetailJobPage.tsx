import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Button, Form, Input, InputNumber, Select, Card, Avatar, Spin, notification } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import {
  useGetDetailJobByIdQuery,
  useUpdateJobMutation,
} from '@/+core/redux/apis/common/recruitment/recruitment.api';

import { type FormProps } from 'antd';

import DetailJobSubHeader from '@/components/global/Recruitment/Header/DetailJobSubHeader';
import TextContentEditor from '../../components/global/Recruitment/Content/TextContentEditor';

import { JobType } from '@/+core/utilities/types/recruitment.type';

// import job from '../../draft/job.json';

const { Option } = Select;

type FieldType = {
  companyName?: string;
  jobId?: string;
  title?: string;
  level?: string;
  salary?: string;
  technicals?: string[];
  minExperience?: string;
  maxExperience?: string;
  contractType?: string;
  workingPlace?: string;
  type?: string;
  appliedCount?: string | number;
  followedCount?: string | number;
  createdAt?: string | number;
  updatedAt?: string | number;
  jobDescription?: any;
  interviewProcess?: string[] | any;
};

type NoteFieldType = {
  jobNote?: string;
};

const getCurrentDay = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();

  return date + '/' + month + '/' + year;
};

export const formatDateStr = (date: string) => {
  const d = date.split('T')[0];
  const t = date.split('T')[1].split('Z')[0];
  return d + ' ' + t;
};

const DetailJobPage = () => {
  const { t } = useTranslation();

  const params = useParams();
  const [api, contextHolder] = notification.useNotification();

  const { data, isLoading } = useGetDetailJobByIdQuery(params?.jobId);
  const [updateJob, { isLoading: editJobLoading }] = useUpdateJobMutation();

  const [NewRecruitmentForm] = Form.useForm();
  const [job, setJob] = useState<JobType | null>(null);
  const [interviewProcess, setInterviewProcess] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [jobNoteForm] = Form.useForm();
  const [notes, setNotes] = useState<
    { id: string; hrId: string; timestamp: string; jobNote: string }[]
  >([
    {
      id: '1',
      hrId: 'recruitment-1',
      timestamp: getCurrentDay(),
      jobNote: 'This job has released',
    },
  ]);

  const handleInitInterviewProcess = (job: JobType) => {
    if (job?.interviewProcess) {
      setInterviewProcess(job?.interviewProcess);
    }
  };

  const handleInitJobDescription = (job: JobType) => {
    if (job?.jobDescription) {
      setDescription(job?.jobDescription);
    }
  };

  const onEditFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const job: JobType = {
      id: values?.jobId,
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

    // console.log('Success:', job);

    // eslint-disable-next-line unused-imports/no-unused-vars
    const { id, ...otherProperties } = job;
    const jobNoneId = { ...otherProperties };

    const res = await updateJob({ id: job?.id, job: jobNoneId }).unwrap();

    console.log(res);

    if (res?.statusCode === 200) {
      handleGetDetailJobById();

      api.open({
        message: 'Notification',
        icon: <CheckCircleOutlined style={{ color: 'green' }} />,
        description: 'Update job successfully',
        duration: 5,
        placement: 'bottomLeft',
      });
    } else {
      api.open({
        message: 'Notification',
        icon: <CloseCircleOutlined style={{ color: 'red' }} />,
        description: 'Update job failed',
        duration: 5,
        placement: 'bottomLeft',
      });
    }
  };

  const onEditFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onNoteFinish: FormProps<NoteFieldType>['onFinish'] = (values) => {
    console.log('Success:', values);

    if (values?.jobNote) {
      const newNote = {
        id: uuidv4(),
        hrId: 'recruitment-1',
        jobNote: values?.jobNote,
        timestamp: getCurrentDay(),
      };

      setNotes([...notes, newNote]);
    }

    jobNoteForm.resetFields();
  };

  const onNoteFinishFailed: FormProps<NoteFieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleGetDetailJobById = async () => {
    const job: JobType = data?.data;
    setJob(job);

    console.log('GET DETAIL JOB BY ID SUCCESSFULLY', job);

    NewRecruitmentForm.setFieldsValue({
      ['companyName']: job?.company?.name ? job?.company?.name : 'null',
      ['jobId']: job?.id ? job?.id : 'null',
      ['title']: job?.title ? job?.title : 'null',
      ['level']: job?.level ? job?.level : 'null',
      ['salary']: job?.salary ? job?.salary : 'null',
      ['technicals']: job?.technicals ? job?.technicals : 'null',
      ['minExperience']: Number(job?.minExperience ? job?.minExperience : 0),
      ['maxExperience']: Number(job?.maxExperience ? job?.maxExperience : 0),
      ['contractType']: job?.contractType ? job?.contractType : 'null',
      ['workingPlace']: job?.workingPlace ? job?.workingPlace : 'null',
      ['appliedCount']: job?.appliedCount ? job?.appliedCount : 0,
      ['followedCount']: job?.followedCount ? job?.followedCount : 0,
      ['createdAt']: job?.createdAt ? formatDateStr(job?.createdAt) : 'null',
      ['updatedAt']: job?.updatedAt ? formatDateStr(job?.updatedAt) : 'null',
    });

    handleInitInterviewProcess(job);
    handleInitJobDescription(job);
  };

  useEffect(() => {
    if (!isLoading && data?.statusCode === 200) {
      handleGetDetailJobById();
    }
  }, [isLoading]);

  return (
    <div className='flex flex-col'>
      {contextHolder}
      <DetailJobSubHeader />
      {isLoading ? (
        <div className='flex justify-center mt-20'>
          <Spin size='large' />
        </div>
      ) : (
        <div className='flex flex-wrap gap-3 px-4 py-2.5 rounded-md'>
          <Card
            title={`${job?.title}`}
            className='w-[100%] xl:w-[70%] h-[calc(100vh-46px-90px)] overflow-y-auto'
          >
            <Form
              form={NewRecruitmentForm}
              name='edit-job'
              className='w-[100%] mt-5 pr-5 flex flex-col gap-5'
              labelCol={{ span: 24 }} // 5
              wrapperCol={{ span: 24 }} // 16
              onFinish={onEditFinish}
              onFinishFailed={onEditFinishFailed}
              // initialValues={{
              //   ['companyName']: 'DTS Software Viet Nam',
              //   ['title']: job?.title,
              // }}
            >
              <Form.Item<FieldType>
                label={`${t('recruitmentCompanyName')}`}
                name='companyName'
                rules={[{ required: true, message: 'Please input company name!' }]}
              >
                <Input disabled />
              </Form.Item>

              <Form.Item<FieldType>
                label={`${t('recruitmentJobId')}`}
                name='jobId'
                rules={[{ required: true, message: 'Please input job id!' }]}
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
                rules={[
                  {
                    required: true,
                    message: 'Please select your technilcals!',
                    type: 'array',
                  },
                ]}
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

              <Form.Item
                label={`${t('recruitmentAppliedCount')}`}
                name='appliedCount'
                rules={[
                  {
                    required: true,
                    type: 'number',
                    min: 0,
                    message: 'Please input job applied count!',
                  },
                ]}
              >
                <InputNumber disabled />
              </Form.Item>

              <Form.Item
                label={`${t('recruitmentFollowedCount')}`}
                name='followedCount'
                rules={[
                  {
                    required: true,
                    type: 'number',
                    min: 0,
                    message: 'Please input job followed count!',
                  },
                ]}
              >
                <InputNumber disabled />
              </Form.Item>

              <Form.Item<FieldType>
                label={`${t('recruitmentJobCreatedAt')}`}
                name='createdAt'
                rules={[{ required: true, message: 'Please input job created at!' }]}
              >
                <Input disabled />
              </Form.Item>

              <Form.Item<FieldType>
                label={`${t('recruitmentJobUpdateAt')}`}
                name='updatedAt'
                rules={[{ required: true, message: 'Please input job update at!' }]}
              >
                <Input disabled />
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
                    disabled={editJobLoading ? true : false}
                  >
                    {t('recruitmentEditJob')}
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Card>
          <Card
            title={`Note`}
            className='w-[100%] xl:w-[28%] h-[calc(100vh-46px-90px)] overflow-y-auto'
          >
            <Form
              form={jobNoteForm}
              name='create-job-note'
              className='w-[100%] mt-5 pr-5 flex flex-col gap-5'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              onFinish={onNoteFinish}
              onFinishFailed={onNoteFinishFailed}
            >
              <Form.Item<NoteFieldType>
                label={`${t('recruitmentJobNote')}`}
                name='jobNote'
                rules={[{ required: true, message: 'Please input job note!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }}>
                <div className='w-full border-t border-gray-300 mt-5 pt-4 flex items-center gap-2'>
                  <Button type='primary' htmlType='submit' danger>
                    {t('recruitmentCreateJob')}
                  </Button>
                </div>
              </Form.Item>
            </Form>
            <div className='my-5 w-[100%] h-[1px]'></div>
            <div className='flex flex-col gap-8'>
              {notes?.map((note) => {
                return (
                  <div key={note?.id} className='flex items-center gap-3'>
                    <Avatar
                      className='bg-primary-red'
                      style={{ verticalAlign: 'middle' }}
                      size='large'
                      gap={3}
                    >
                      A
                    </Avatar>
                    <div className='w-[90%]'>
                      <div className='flex items-center justify-between'>
                        <p className='font-bold'>{note?.hrId}</p>
                        <p className='text-gray-400'>{note?.timestamp}</p>
                      </div>
                      <p>{note?.jobNote}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DetailJobPage;



