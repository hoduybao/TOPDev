import { Job } from '@/+core/utilities/types/admin.type';
import { Descriptions, DescriptionsProps, Tag } from 'antd';
import moment from 'moment';

interface JobDescriptionsProps {
  data: Job;
}

// companyName: string;
//   title: string;
//   level: string;
//   salary: string;
//   techs: string[];
//   experienceYearsMin?: string;
//   experienceYearsMax?: string;
//   typeContract: string;
//   type: string;
//   jobDescription?: any;
//   interviewProcess?: string[] | any;
//   submittedDate: Date;
//   startDate: Date;
//   endDate: Date;
//   status: jobStatus;
const JobDescriptions = ({ data }: JobDescriptionsProps) => {
  const items: DescriptionsProps['items'] = [
    {
      key: 'companyName',
      label: 'Company',
      children: <p>{data.companyName}</p>,
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
        <>
          {data.techs.map((tech) => {
            return (
              <Tag color={'geekblue'} key={tech}>
                {tech.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
      span: 3,
    },
    {
      key: 'experience',
      label: 'Experience (year)',
      children: (
        <p>
          <span>{data.experienceYearsMin}</span> - <span>{data.experienceYearsMax}</span>
        </p>
      ),
      span: 3,
    },
    {
      key: 'contractType',
      label: 'Contract Type',
      children: <p>{data.typeContract}</p>,
    },
    {
      key: 'type',
      label: 'Working Place',
      children: <p>{data.type}</p>,
      span: 2,
    },
    {
      key: 'description',
      label: 'Job Description',
      children: <p>{data.jobDescription}</p>,
      span: 3,
    },
    {
      key: 'startDate',
      label: 'Start Date',
      children: <p>{moment(data.startDate).format('DD/MM/YYYY')}</p>,
    },
    {
      key: 'endDate',
      label: 'End Date',
      children: <p>{moment(data.endDate).format('DD/MM/YYYY')}</p>,
    },
  ];

  return <Descriptions items={items} />;
};

export default JobDescriptions;
