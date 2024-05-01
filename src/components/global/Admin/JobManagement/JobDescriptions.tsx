import { Job } from '@/+core/utilities/types/admin.type';
import { Descriptions, DescriptionsProps, Tag } from 'antd';
import dayjs from 'dayjs';

interface JobDescriptionsProps {
  data: Job;
}

const JobDescriptions = ({ data }: JobDescriptionsProps) => {
  const items: DescriptionsProps['items'] = [
    {
      key: 'companyName',
      label: 'Company',
      children: <p>{data.company?.name}</p>,
      span: 3,
    },
    {
      key: 'title',
      label: 'Title',
      children: <p>{data.title}</p>,
      span: 3,
    },
    {
      key: 'level',
      label: 'Level',
      children: <p>{data.level}</p>,
    },
    {
      key: 'salary',
      label: 'Salary',
      children: <p>{data.salary}</p>,
      span: 2,
    },
    {
      key: 'techs',
      label: 'Technicals',
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
      label: 'Experience (year)',
      children: (
        <p>
          <span>{data.minExperience}</span> - <span>{data.maxExperience}</span>
        </p>
      ),
      span: 3,
    },
    {
      key: 'contractType',
      label: 'Contract Type',
      children: <p>{data.contractType}</p>,
    },
    {
      key: 'type',
      label: 'Working Place',
      children: <p>{data.workingPlace}</p>,
      span: 2,
    },
    {
      key: 'description',
      label: 'Job Description',
      children: (
        <div
          className='prose'
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
    {
      key: 'createdAt',
      label: 'Submitted Date',
      children: <p>{dayjs(data.createdAt).format('DD/MM/YYYY')}</p>,
    },
  ];

  return <Descriptions items={items} />;
};

export default JobDescriptions;
