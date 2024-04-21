import { Job } from '@/+core/utilities/types/admin.type';
import { Button, Input, Modal, Space, Table, TableProps, Tag, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import moment from 'moment';
import JobDescriptions from './JobDescriptions';
import { SearchProps } from 'antd/es/input';

interface ComingJobsTabProps {
  data: Job[];
}

function addKeyToData(data: Job[]) {
  return data.map((item, index) => {
    return { ...item, key: index.toString() };
  });
}

const ComingJobsTab = (props: ComingJobsTabProps) => {
  const [data, setData] = useState<Job[]>(props.data);
  const { Search } = Input;
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedRows, setSelectedRows] = useState<Job[]>([]);

  const [isJobDetailOpen, setIsJobDetailOpen] = useState<boolean>(false);
  const [viewedJob, setViewedJob] = useState<Job>();

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    const DataWithKeys = addKeyToData(data);
    const newSelectedRows = DataWithKeys.filter((item) => newSelectedRowKeys.includes(item.key));
    setSelectedRows(newSelectedRows);
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
      dataIndex: 'companyName',
      key: 'name',
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
      showSorterTooltip: false,
      // render: (text) => <a>{text}</a>,
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
      key: 'techs',
      dataIndex: 'techs',
      render: (_, { techs }) => (
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
      title: 'Job Type',
      dataIndex: 'typeContract',
      key: 'typeContract',
      sorter: (a, b) => a.typeContract.localeCompare(b.typeContract),
      showSorterTooltip: false,
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (date) => <p>{moment(date).format('DD/MM/YYYY')}</p>,
      sorter: (a, b) => moment(a.startDate).unix() - moment(b.startDate).unix(),
      showSorterTooltip: false,
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (date) => <p>{moment(date).format('DD/MM/YYYY')}</p>,
      sorter: (a, b) => moment(a.endDate).unix() - moment(b.endDate).unix(),
      showSorterTooltip: false,
    },
    {
      title: 'Submitted Date',
      dataIndex: 'submittedDate',
      key: 'submittedDate',
      render: (date) => <p>{moment(date).format('DD/MM/YYYY')}</p>,
      sorter: (a, b) => moment(a.submittedDate).unix() - moment(b.submittedDate).unix(),
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
              {' '}
              View Details
            </Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    const newData = props.data.filter(
      (item) =>
        item.companyName.toLowerCase().includes(value.toLowerCase()) ||
        item.title.toString().toLowerCase().includes(value) ||
        item.typeContract.toLowerCase().includes(value.toLowerCase()) ||
        item.techs.some((field) => field.toLowerCase().includes(value.toLowerCase())) ||
        item.type.toLowerCase().includes(value.toLowerCase()) ||
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

export default ComingJobsTab;
