import { Descriptions, DescriptionsProps, Tag } from 'antd';
import '../../../../styles/admin/job-descriptions.module.scss';
import {
  JobDetailResponse,
  ListJobsRES,
} from '@/+core/redux/apis/admin/job-management/job-admin.response';
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
          children: <p>{data.level?.join(', ')}</p>,
        },
        {
          key: 'salary',
          label: <p>Salary</p>,
          children: <p>{`${data.minSalary} - ${data.maxSalary} ${data.salaryType}`}</p>,
        },
        {
          key: 'experience',
          label: <p>Experience (year)</p>,
          children: <p>{data.experience}</p>,
        },
        {
          key: 'contractType',
          label: <p>Contract Type</p>,
          children: <p>{data.contractType}</p>,
        },
        {
          key: 'place',
          label: <p>Location</p>,
          children: <p>{`${data.addressDetails}, ${data.district}, ${data.city}`}</p>,
        },
        {
          key: 'technicals',
          label: <p>Technicals</p>,
          children: (
            <div>
              {data.technicals?.map((tech) => {
                return (
                  <Tag color={'blue'} key={tech}>
                    {tech.toUpperCase()}
                  </Tag>
                );
              })}
            </div>
          ),
          span: 3,
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
          children: <p>{data.level?.join(', ')}</p>,
        },
        {
          key: 'salary',
          label: <p>Salary</p>,
          children: <p>{`${data.minSalary} - ${data.maxSalary} ${data.salaryType}`}</p>,
        },
        // {
        //   key: 'techs',
        //   label: <p>Technicals</p>,
        //   children: (
        //     <div className='break-words'>
        //       {data.technicals.map((tech) => {
        //         return (
        //           <Tag color={'geekblue'} key={tech}>
        //             {tech.toUpperCase()}
        //           </Tag>
        //         );
        //       })}
        //     </div>
        //   ),
        //   span: 3,
        // },
        {
          key: 'experience',
          label: <p>Experience (year)</p>,
          children: <p>{data.experience}</p>,
        },
        {
          key: 'contractType',
          label: <p>Contract Type</p>,
          children: <p>{data.contractType}</p>,
        },
        {
          key: 'place',
          label: <p>Location</p>,
          children: <p>{`${data.addressDetails}, ${data.district}, ${data.city}`}</p>,
        },
        {
          key: 'technicals',
          label: <p>Technicals</p>,
          children: (
            <div>
              {data.technicals?.map((tech) => {
                return (
                  <Tag color={'blue'} key={tech}>
                    {tech.toUpperCase()}
                  </Tag>
                );
              })}
            </div>
          ),
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
      ];

  return <Descriptions items={items} layout='vertical' />;
};

export default JobDescriptions;
