import { CompanyInfo, Job } from '@/+core/utilities/types/admin.type';
import { Button, Input, Modal, Space, Table, TableProps, Tag, Tooltip } from 'antd';
import { SearchProps } from 'antd/es/input';
import { useEffect, useState } from 'react';
import JobDescriptions from './JobDescriptions';
import dayjs from 'dayjs';

interface ActiveJobsTabProps {
  data: Job[];
}

function addKeyToData(data: Job[]) {
  return data.map((item, index) => {
    return { ...item, key: index.toString() };
  });
}

const ActiveJobsTab = (props: ActiveJobsTabProps) => {
  const [data, setData] = useState<Job[]>(props.data);
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

  useEffect(() => {
    setData(props.data);
  }, [props]);

  const columns: TableProps<Job>['columns'] = [
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
      sorter: (a, b) => a.level.localeCompare(b.level),
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
      sorter: (a, b) => a.contractType.localeCompare(b.contractType),
      showSorterTooltip: false,
    },
    {
      title: 'Place',
      dataIndex: 'workingPlace',
      key: 'workingPlace',
      sorter: (a, b) => a.workingPlace.localeCompare(b.workingPlace),
      showSorterTooltip: false,
    },
    // {
    //   title: 'Start Date',
    //   dataIndex: 'startDate',
    //   key: 'startDate',
    //   render: (date) => <p>{moment(date).format('DD/MM/YYYY')}</p>,
    //   sorter: (a, b) => moment(a.startDate).unix() - moment(b.startDate).unix(),
    //   showSorterTooltip: false,
    // },
    // {
    //   title: 'End Date',
    //   dataIndex: 'endDate',
    //   key: 'endDate',
    //   render: (date) => <p>{moment(date).format('DD/MM/YYYY')}</p>,
    //   sorter: (a, b) => moment(a.endDate).unix() - moment(b.endDate).unix(),
    //   showSorterTooltip: false,
    // },
    {
      title: 'Submitted Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => <p>{dayjs(date).format('DD/MM/YYYY')}</p>,
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
          {/* <Tooltip placement='top' title={'Reject'}>
            <Button icon={<CloseOutlined />}></Button>
          </Tooltip> */}
        </Space>
      ),
    },
  ];

  const onSearch: SearchProps['onSearch'] = (value, _e) => {
    const newData = props.data.filter(
      (item) =>
        item.company.name.toLowerCase().includes(value.toLowerCase()) ||
        item.title.toString().toLowerCase().includes(value) ||
        item.contractType.toLowerCase().includes(value.toLowerCase()) ||
        item.technicals.some((field) => field.toLowerCase().includes(value.toLowerCase())) ||
        item.workingPlace.toLowerCase().includes(value.toLowerCase()) ||
        item.level.toLowerCase().includes(value.toLowerCase()),
    );

    setData(newData);
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
        {/* <div>
          <Button
            onClick={handleApproveSelections}
            type='primary'
            danger
            className='mr-2'
            icon={<CheckOutlined />}
          >
            Approve
          </Button>
          <Button onClick={handleRejectSelections} icon={<CloseOutlined />}>
            Reject
          </Button>
        </div> */}

        <Search placeholder='Input search text' onSearch={onSearch} style={{ width: 200 }} />
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

export default ActiveJobsTab;
