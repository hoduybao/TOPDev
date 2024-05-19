import { Job } from '@/+core/utilities/types/admin.type';
import { Descriptions, DescriptionsProps, Tag } from 'antd';
import '../../../../styles/admin/job-descriptions.css';
interface JobDescriptionsProps {
  data: Job;
}

const JobDescriptions = ({ data }: JobDescriptionsProps) => {
  const items: DescriptionsProps['items'] = [
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
      children: <p>{data.level}</p>,
    },
    {
      key: 'salary',
      label: <p>Salary</p>,
      children: <p>{data.salary}</p>,
    },
    {
      key: 'techs',
      label: <p>Technicals</p>,
      children: (
        <div className='break-words'>
          {data.technicals.map((tech) => {
            return (
              <Tag color={'geekblue'} key={tech}>
                {tech.toUpperCase()}
              </Tag>
            );
          })}
        </div>
      ),
      span: 3,
    },
    {
      key: 'experience',
      label: <p>Experience (year)</p>,
      children: (
        <p>
          <span>{data.minExperience}</span> - <span>{data.maxExperience}</span>
        </p>
      ),
    },
    {
      key: 'contractType',
      label: <p>Contract Type</p>,
      children: <p>{data.contractType}</p>,
    },
    {
      key: 'place',
      label: <p>Location</p>,
      children: <p>{data.workingPlace}</p>,
    },
    {
      key: 'description',
      label: <p>Job Description</p>,
      children: (
        <div
          className='prose p-3 mr-1 border-solid border border-gray-800 rounded'
          dangerouslySetInnerHTML={{
            __html: data.jobDescription,
          }}
        ></div>
      ),
      span: 3,
    },
    // {
    //   key: 'startDate',
    //   label: 'Start Date',
    //   children: <p>{moment(data.startDate).format('DD/MM/YYYY')}</p>,
    // },
    // {
    //   key: 'endDate',
    //   label: 'End Date',
    //   children: <p>{moment(data.endDate).format('DD/MM/YYYY')}</p>,
    // },

    // {
    //   key: 'createdAt',
    //   label: 'Submitted Date',
    //   children: <p>{dayjs(data.createdAt).format('DD/MM/YYYY')}</p>,
    // },
  ];

  return <Descriptions items={items} layout='vertical' />;
};

export default JobDescriptions;
