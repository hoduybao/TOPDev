import { CompanyInfo, Job } from '@/+core/utilities/types/admin.type';
import { Button, Input, Modal, Space, Table, TableProps, Tag, Tooltip } from 'antd';
import { SearchProps } from 'antd/es/input';
import { useState } from 'react';
import JobDescriptions from './JobDescriptions';
interface ActiveJobsTabProps {
  data: Job[];
  onSearch: (keyword: string) => void;
}

function addKeyToData(data: Job[]) {
  return data.map((item, index) => {
    return { ...item, key: index.toString() };
  });
}

const ActiveJobsTab = (props: ActiveJobsTabProps) => {
  const { data, onSearch } = props;
  const { Search } = Input;
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  // const [selectedRows, setSelectedRows] = useState<Job[]>([]);

  const [isJobDetailOpen, setIsJobDetailOpen] = useState<boolean>(false);
  const [viewedJob, setViewedJob] = useState<Job>();

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

  const columns: TableProps<Job>['columns'] = [
    {
      title: 'Company Name',
      dataIndex: 'company',
      key: 'company',
      // sorter: (a, b) => a.company.name.localeCompare(b.company.name),
      showSorterTooltip: false,
      render: (text: CompanyInfo) => <p>{text?.name}</p>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      // sorter: (a, b) => a.title.localeCompare(b.title),
      showSorterTooltip: false,
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level',
      // sorter: (a, b) => a.level.localeCompare(b.level),
      showSorterTooltip: false,
    },
    {
      title: 'Technology',
      key: 'technicals',
      dataIndex: 'technicals',
      render: (_, { technicals: techs }) => (
        <div className='max-w-64'>
          {techs?.map((tech) => {
            return (
              <Tag color={'geekblue'} key={tech}>
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
      // sorter: (a, b) => a.contractType.localeCompare(b.contractType),
      showSorterTooltip: false,
    },
    {
      title: 'Place',
      dataIndex: 'workingPlace',
      key: 'workingPlace',
      // sorter: (a, b) => a.workingPlace.localeCompare(b.workingPlace),
      showSorterTooltip: false,
    },
    {
      title: 'Submitted Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      // render: (date) => <p>{dayjs(date).format('DD/MM/YYYY')}</p>,
      showSorterTooltip: false,
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

  const handleViewJobDetails = (job: Job) => {
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
        pagination={false}
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

export default ActiveJobsTab;
