import { Descriptions, DescriptionsProps, Tag } from 'antd';
import '../../../../styles/admin/job-descriptions.module.scss';
import {
  JobDetailResponse,
  ListJobsRES,
} from '@/+core/redux/apis/admin/job-management/job-admin.response';
import {
  ContractTypeEnum,
  ContractTypeTranslation,
  CurrencyEnum,
  CurrencyTranslation,
  ExperienceEnum,
  ExperienceTranslation,
  JobTypeEnum,
  JobTypeTranslation,
  LevelEnum,
  LevelTranslation,
  SalaryTypeEnum,
  SalaryTypeTranslation,
  TechnicalsEnum,
  TechnicalsEnumTranslation,
} from '@/+core/enums/job.enum';
interface JobDescriptionsProps {
  data: JobDetailResponse | ListJobsRES;
}

const JobDescriptions = ({ data }: JobDescriptionsProps) => {
  const items: DescriptionsProps['items'] = data.reason
    ? [
        {
          key: 'title',
          label: <p>Title</p>,
          children: <p>{data.title}</p>,
          span: 3,
        },
        {
          key: 'companyName',
          label: <p>Company</p>,
          children: <p>{data.company?.name}</p>,
        },
        {
          key: 'level',
          label: <p>Level</p>,
          children: (
            <p>{data.level?.map((item) => LevelTranslation[item as LevelEnum]).join(', ')}</p>
          ),
        },
        {
          key: 'salary',
          label: <p>Salary</p>,
          children: (
            <>
              <p>{SalaryTypeTranslation[data.salaryType as SalaryTypeEnum]}</p>
              &nbsp;
              {data.salaryType == SalaryTypeEnum.FROM && <p>{data.minSalary} </p>}
              {data.salaryType == SalaryTypeEnum.TO && <p>{data.maxSalary} </p>}
              {data.salaryType == SalaryTypeEnum.RANGE && (
                <p>
                  {data.minSalary} - {data.maxSalary}{' '}
                </p>
              )}
              &nbsp;
              {data.salaryType != SalaryTypeEnum.NEGOTIATE && (
                <p>{CurrencyTranslation[data.currency as CurrencyEnum]}</p>
              )}
            </>
          ),
        },
        {
          key: 'experience',
          label: <p>Experience (year)</p>,
          children: (
            <p>
              <p>{ExperienceTranslation[data.experience as ExperienceEnum]}</p>
            </p>
          ),
        },
        {
          key: 'contractType',
          label: <p>Contract Type</p>,
          children: <p>{ContractTypeTranslation[data.contractType as ContractTypeEnum]}</p>,
        },
        {
          key: 'place',
          label: <p>Location</p>,
          children: <p>{data.address}</p>,
        },
        {
          key: 'jobType',
          label: <p>Job Type</p>,
          children: <p>{JobTypeTranslation[data.jobType as JobTypeEnum]}</p>,
          span: 1,
        },
        {
          key: 'technicals',
          label: <p>Technicals</p>,
          children: (
            <div>
              {data.technicals?.map((tech) => {
                return (
                  <Tag color={'blue'} key={tech}>
                    {TechnicalsEnumTranslation[tech as TechnicalsEnum]}
                  </Tag>
                );
              })}
            </div>
          ),
          span: 2,
        },
        {
          key: 'reason',
          label: <p>Refusal Reason</p>,
          children: <div className='text-orange-500'>{data.reason}</div>,
          span: 3,
        },
        {
          key: 'requiredSkills',
          label: <p>Required Skills</p>,
          children: (
            <div
              className='prose w-full p-3 mr-1 border-solid border border-gray-800 rounded'
              dangerouslySetInnerHTML={{
                __html: data.skillRequirements ?? '',
              }}
            ></div>
          ),
          span: 3,
        },
        {
          key: 'benefits',
          label: <p>Benefits</p>,
          children: (
            <div
              className='prose w-full p-3 mr-1 border-solid border border-gray-800 rounded'
              dangerouslySetInnerHTML={{
                __html: data.benefit ?? '',
              }}
            ></div>
          ),
          span: 3,
        },

        {
          key: 'interview',
          label: <p>Interview Process</p>,
          children: (
            <div
              className='prose w-full p-3 mr-1 border-solid border border-gray-800 rounded'
              dangerouslySetInnerHTML={{
                __html: data.interviewProcess ?? '',
              }}
            ></div>
          ),
          span: 3,
        },
      ]
    : [
        {
          key: 'title',
          label: <p>Title</p>,
          children: <p>{data.title}</p>,
          span: 3,
        },
        {
          key: 'companyName',
          label: <p>Company</p>,
          children: <p>{data.company?.name}</p>,
        },
        {
          key: 'level',
          label: <p>Level</p>,
          children: (
            <p>{data.level?.map((item) => LevelTranslation[item as LevelEnum]).join(', ')}</p>
          ),
        },
        {
          key: 'salary',
          label: <p>Salary</p>,
          children: (
            <>
              <p>{SalaryTypeTranslation[data.salaryType as SalaryTypeEnum]}</p>
              &nbsp;
              {data.salaryType == SalaryTypeEnum.FROM && <p>{data.minSalary} </p>}
              {data.salaryType == SalaryTypeEnum.TO && <p>{data.maxSalary} </p>}
              {data.salaryType == SalaryTypeEnum.RANGE && (
                <p>
                  {data.minSalary} - {data.maxSalary}{' '}
                </p>
              )}
              &nbsp;
              {data.salaryType != SalaryTypeEnum.NEGOTIATE && (
                <p>{CurrencyTranslation[data.currency as CurrencyEnum]}</p>
              )}
            </>
          ),
        },
        {
          key: 'experience',
          label: <p>Experience (year)</p>,
          children: (
            <p>
              <p>{ExperienceTranslation[data.experience as ExperienceEnum]}</p>
            </p>
          ),
        },
        {
          key: 'contractType',
          label: <p>Contract Type</p>,
          children: <p>{ContractTypeTranslation[data.contractType as ContractTypeEnum]}</p>,
        },
        {
          key: 'place',
          label: <p>Location</p>,
          children: <p>{data.address}</p>,
        },
        {
          key: 'jobType',
          label: <p>Job Type</p>,
          children: <p>{JobTypeTranslation[data.jobType as JobTypeEnum]}</p>,
          span: 1,
        },
        {
          key: 'technicals',
          label: <p>Technicals</p>,
          children: (
            <div>
              {data.technicals?.map((tech) => {
                return (
                  <Tag color={'blue'} key={tech}>
                    {TechnicalsEnumTranslation[tech as TechnicalsEnum]}
                  </Tag>
                );
              })}
            </div>
          ),
          span: 2,
        },
        {
          key: 'requiredSkills',
          label: <p>Required Skills</p>,
          children: (
            <div
              className='prose w-full p-3 mr-1 border-solid border border-gray-800 rounded'
              dangerouslySetInnerHTML={{
                __html: data.skillRequirements ?? '',
              }}
            ></div>
          ),
          span: 3,
        },
        {
          key: 'benefits',
          label: <p>Benefits</p>,
          children: (
            <div
              className='prose w-full p-3 mr-1 border-solid border border-gray-800 rounded'
              dangerouslySetInnerHTML={{
                __html: data.benefit ?? '',
              }}
            ></div>
          ),
          span: 3,
        },

        {
          key: 'interview',
          label: <p>Interview Process</p>,
          children: (
            <div
              className='prose w-full p-3 mr-1 border-solid border border-gray-800 rounded'
              dangerouslySetInnerHTML={{
                __html: data.interviewProcess ?? '',
              }}
            ></div>
          ),
          span: 3,
        },
      ];

  return <Descriptions items={items} layout='vertical' />;
};

export default JobDescriptions;
