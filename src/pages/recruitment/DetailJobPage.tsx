import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Button, Form, Input, InputNumber, Select, Card, Avatar } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import { type FormProps } from 'antd';

import SubHeader from '../../components/global/Recruitment/Header/SubHeader';
import TextContentEditor from '../../components/global/Recruitment/Content/TextContentEditor';

import { JobType } from '@/+core/utilities/types/recruitment.type';

import job from '../../draft/job.json';

const { Option } = Select;

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

const DetailJobPage = () => {
  const { t } = useTranslation();

  const params = useParams();

  const [jobs, setJobs] = useState<JobType[]>([]);
  const [NewRecruitmentForm] = Form.useForm();
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

  const handleInitInterviewProcess = () => {
    let processStr = '<ul>';

    job?.interviewProcess?.forEach((process: string) => {
      processStr += `<li>${process}</li>`;
    });

    processStr += '</ul>';

    setInterviewProcess(processStr);
  };

  const handleInitJobDescription = () => {
    let descriptionStr = '<h2>Responsibilities</h2><ul>';
    job?.responsibilities?.forEach((response: string) => {
      descriptionStr += `<li>${response}</li>`;
    });
    descriptionStr += '</ul><br>';

    descriptionStr += '<h2>Extends</h2><ul>';
    job?.extends?.forEach((extend: string) => {
      descriptionStr += `<li>${extend}</li>`;
    });
    descriptionStr += '</ul><br>';

    descriptionStr += '<h2>Welfare</h2><ul>';
    job?.welfare?.forEach((welfare: string) => {
      descriptionStr += `<li>${welfare}</li>`;
    });
    descriptionStr += '</ul><br>';

    setDescription(descriptionStr);
  };

  const onEditFinish: FormProps<FieldType>['onFinish'] = (values) => {
    const newJob: JobType = {
      id: uuidv4(),
      title: values?.title,
      companyId: uuidv4(),
      companyName: values?.companyName,
      level: values?.level,
      salary: values?.salary,
      techs: values?.techs,
      experienceYearsMin: values?.experienceYearsMin,
      experienceYearsMax: values?.experienceYearsMax,
      typeContract: values?.typeContract,
      type: values?.type,

      interviewProcess: interviewProcess,
      description: description,
    };

    console.log('Success:', newJob);
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

  useEffect(() => {
    handleInitInterviewProcess();
    handleInitJobDescription();
  }, []);

  return (
    <div className='flex flex-col'>
      <SubHeader jobs={jobs} setJobs={setJobs} />
      <div className='flex flex-wrap gap-3 px-4 py-2.5 rounded-md'>
        <Card
          title={`${t('recruitmentDetailJob')}: ${params?.jobId}`}
          className='w-[100%] 2xl:w-[70%] h-[calc(100vh-46px-90px)] overflow-y-auto'
        >
          <Form
            form={NewRecruitmentForm}
            name='edit-job'
            className='w-[100%] mt-5 pr-5 flex flex-col gap-5'
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 16 }}
            onFinish={onEditFinish}
            onFinishFailed={onEditFinishFailed}
            initialValues={{
              ['companyName']: 'DTS Software Viet Nam',
              ['title']: job?.title,
              ['level']: job?.level,
              ['salary']: job?.salary,
              ['techs']: job?.techs,
              ['typeContract']: job?.typeContract,
              ['experienceYearsMin']: Number(job?.experienceYearsMin),
              ['experienceYearsMax']: Number(job?.experienceYearsMax),
              ['type']: 'office',
            }}
          >
            <Form.Item<FieldType>
              label={`${t('recruitmentCompanyName')}`}
              name='companyName'
              rules={[{ required: true, message: 'Please input company name!' }]}
            >
              <Input />
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
              name='techs'
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
              label={`${t('recruitmentMinExp')}`}
              name='experienceYearsMin'
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
              name='experienceYearsMax'
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

            <Form.Item<FieldType> label={`${t('recruitmentContractType')}`} name='typeContract'>
              <Select
                style={{ width: 200 }}
                options={[
                  { value: 'fulltime', label: 'Full time' },
                  { value: 'parttime', label: 'Part time' },
                ]}
              />
            </Form.Item>

            <Form.Item<FieldType> label={`${t('recruitmentType')}`} name='type'>
              <Select
                style={{ width: 200 }}
                options={[
                  { value: 'office', label: 'Office' },
                  { value: 'remote', label: 'Remote' },
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
                <Button type='primary' htmlType='submit' danger>
                  {t('recruitmentEditJob')}
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Card>
        <Card
          title={`Note`}
          className='w-[100%] 2xl:w-[28%] h-[calc(100vh-46px-90px)] overflow-y-auto'
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
    </div>
  );
};

export default DetailJobPage;
