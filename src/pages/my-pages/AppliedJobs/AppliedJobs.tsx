import { LinkOutlined } from '@ant-design/icons';
import { Collapse, Steps } from 'antd';
import Table, { ColumnGroupType, ColumnType } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import styles from './headerTable.module.scss';

interface ApplicationStatus {
  name: string;
  createdAt: string;
}

interface DataType {
  key: string;
  id: string;
  jobTitle: string;
  jobLink: string;
  companyName: string;
  appliedAt: string;
  latestStatus: ApplicationStatus[];
}

export const Columns = (): (ColumnGroupType<DataType> | ColumnType<DataType>)[] => {
  const { t } = useTranslation();
  return [
    {
      title: t('id'),
      dataIndex: 'id',
      key: 'id',
      width: 114,
      render: (text) => <span className='text-base font-semibold'>{text}</span>,
    },
    {
      title: t('jobTitle'),
      dataIndex: 'jobTitle',
      key: 'jobTitle',
      className: 'text-left',
      render: (jobTitle, record) => (
        <div className='flex flex-col gap-1'>
          <div className='text-base font-bold text-primary-red'>{jobTitle}</div>
          <LinkOutlined
            onClick={() => window.open(record.jobLink)}
            style={{
              color: '#6dd400',
              cursor: 'pointer',
            }}
          />
        </div>
      ),
    },
    {
      title: t('company'),
      dataIndex: 'companyName',
      key: 'companyName',
      className: 'text-left',
      render: (companyName) => (
        <div className='text-base font-bold text-[#000000D9]'>{companyName}</div>
      ),
    },
    {
      title: t('appliedAt'),
      dataIndex: 'appliedAt',
      key: 'appliedAt',
    },
    {
      title: t('latestStatus'),
      key: 'latestStatus',
      dataIndex: 'latestStatus',
      width: 315,
      render: (latestStatus: ApplicationStatus[]) => (
        <Collapse
          ghost
          items={[
            {
              key: '1',
              label: latestStatus[latestStatus.length - 1]?.name,
              children: (
                <Steps
                  className='!text-red-200'
                  direction='vertical'
                  size='small'
                  current={3}
                  items={
                    latestStatus.map((status) => ({
                      title: status.name,
                      description: status.createdAt,
                    })) || []
                  }
                />
              ),
            },
          ]}
          expandIconPosition='end'
        />
      ),
    },
  ];
};

const data: DataType[] = [
  {
    key: '1',
    id: '1',
    jobTitle: 'John Brown',
    companyName: 'One Mount Group',
    appliedAt: '20-04-2024 21:21:10',
    jobLink:
      'https://topdev.vn/detail-jobs/fresh-software-engineer-fresh-geeks-2024-one-mount-group-2033060',
    latestStatus: [
      {
        name: 'Applied',
        createdAt: '20-04-2024 21:21:10',
      },
      {
        name: 'Shortlisted',
        createdAt: '20-04-2024 21:21:10',
      },
      {
        name: 'Interview',
        createdAt: '20-04-2024 21:21:10',
      },
    ],
  },
  {
    key: '2',
    id: '2',
    jobTitle: 'John Brown',
    companyName: 'One Mount Group',
    appliedAt: '20-04-2024 21:21:10',
    jobLink:
      'https://topdev.vn/detail-jobs/fresh-software-engineer-fresh-geeks-2024-one-mount-group-2033060',
    latestStatus: [
      {
        name: 'Applied',
        createdAt: '20-04-2024 21:21:10',
      },
      {
        name: 'Shortlisted',
        createdAt: '20-04-2024 21:21:10',
      },
      {
        name: 'Interview',
        createdAt: '20-04-2024 21:21:10',
      },
    ],
  },
];

export const AppliedJobs = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className=' mb-[2rem] text-lg font-bold text-[#D34127]'>{t('appliedJobs')}</div>
      <Table className={styles.headerTable} columns={Columns()} dataSource={data} />
    </>
  );
};
