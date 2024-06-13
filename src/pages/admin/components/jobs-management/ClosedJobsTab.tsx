import { CompanyInfo } from '@/+core/utilities/types/admin.type';
import { Button, Input, Modal, Space, Table, TableProps, Tag, Tooltip } from 'antd';
import { SearchProps } from 'antd/es/input';
import { useState } from 'react';
import JobDescriptions from './JobDescriptions';
import dayjs from 'dayjs';
import { ListJobsRES } from '@/+core/redux/apis/admin/job-management/job-admin.response';

interface ClosedJobsTabProps {
  data: ListJobsRES[];
  onSearch: (keyword: string) => void;
}

function addKeyToData(data: ListJobsRES[]) {
  return data.map((item, index) => {
    return { ...item, key: index.toString() };
  });
}

const ExpiredJobsTab = (props: ClosedJobsTabProps) => {
  const { data, onSearch } = props;
  const { Search } = Input;
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  // const [selectedRows, setSelectedRows] = useState<Job[]>([]);

  const [isJobDetailOpen, setIsJobDetailOpen] = useState<boolean>(false);
  const [viewedJob, setViewedJob] = useState<ListJobsRES>();

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    // const DataWithKeys = addKeyToData(data);
    // const newSelectedRows = DataWithKeys.filter((item) => newSelectedRowKeys.includes(item.key));
    // setSelectedRows(newSelectedRows);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns: TableProps<ListJobsRES>['columns'] = [
    {
      title: 'Company Name',
      dataIndex: 'company',
      key: 'company',
      sorter: (a, b) => a.company.name.localeCompare(b.company.name),
      showSorterTooltip: false,
      render: (text: CompanyInfo) => <p>{text?.name}</p>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
      showSorterTooltip: false,
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level',
      render: (levels) => levels.join(', '),
    },
    {
      title: 'Technology',
      key: 'technicals',
      dataIndex: 'technicals',
      render: (_, { technicals: techs }) => (
        <div className='max-w-64'>
          {techs?.map((tech) => {
            return (
              <Tag color={'blue'} key={tech}>
                {tech.toUpperCase()}
              </Tag>
            );
          })}
        </div>
      ),
    },
    {
      title: 'Contract Type',
      dataIndex: 'contractType',
      key: 'contractType',
    },
    {
      title: 'Place',
      dataIndex: 'workingPlace',
      key: 'workingPlace',
      render: (_text, record) => {
        const { district, city } = record;
        return `${district}, ${city}`;
      },
    },
    {
      title: 'Submitted Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => <p>{dayjs(date).format('DD/MM/YYYY')}</p>,
      showSorterTooltip: false,
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (date) => <p>{dayjs(date).format('DD/MM/YYYY')}</p>,
    },

    {
      title: <div className='font-semi-bold pl-5'>Action</div>,
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Tooltip placement='top' title={'View Detail'}>
            <Button
              onClick={() => handleViewJobDetails(record)}
              className='text-blue-500 border border-white-900'
            >
              View Details
            </Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const handleSearch: SearchProps['onSearch'] = (value, _e) => {
    onSearch(value);
  };

  const handleViewJobDetails = (job: ListJobsRES) => {
    setViewedJob(job);
    setIsJobDetailOpen(true);
  };

  const handleCancel = () => {
    setIsJobDetailOpen(false);
  };

  return (
    <>
      <div className='flex justify-end'>
        <Search placeholder='Input search text' onSearch={handleSearch} style={{ width: 200 }} />
      </div>
      <Table
        className='mt-2'
        rowSelection={rowSelection}
        columns={columns}
        dataSource={addKeyToData(data)}
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title='Job Details'
        className='max-w-[60vw] min-w-[40vw]'
        open={isJobDetailOpen}
        onCancel={handleCancel}
        footer={<></>}
      >
        <div className='max-h-[65vh] overflow-y-auto'>
          {viewedJob && <JobDescriptions data={viewedJob} />}
        </div>
      </Modal>
    </>
  );
};

export default ExpiredJobsTab;
