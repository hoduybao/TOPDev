import { CompanyInfo } from '@/+core/utilities/types/admin.type';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Space, Spin, Table, TableProps, Tag, Tooltip } from 'antd';
import { SearchProps } from 'antd/es/input';
import { useEffect, useState } from 'react';
import JobDescriptions from './JobDescriptions';
import dayjs from 'dayjs';
import {
  JobDetailResponse,
  ListJobsRES,
} from '@/+core/redux/apis/admin/job-management/job-admin.response';
import { useGetJobDetailQuery } from '@/+core/redux/apis/admin/job-management/job-admin.api';

interface PendingJobTabProps {
  data: ListJobsRES[];
  approveJobs: (jobs: ListJobsRES[]) => void;
  rejectJobs: (jobs: ListJobsRES[]) => void;
  onSearch: (keyword: string) => void;
}

function addKeyToData(data: ListJobsRES[]) {
  return data.map((item, index) => {
    return { ...item, key: index.toString() };
  });
}

const PendingJobsTab = (props: PendingJobTabProps) => {
  const { data, approveJobs, rejectJobs, onSearch } = props;
  const { Search } = Input;
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedRows, setSelectedRows] = useState<ListJobsRES[]>([]);

  const [isJobDetailOpen, setIsJobDetailOpen] = useState<boolean>(false);
  const [viewedJob, setViewedJob] = useState<JobDetailResponse>();
  const [viewedJobId, setViewedJobId] = useState<string>('');
  //const { data: JobDetailData } = useGetJobByIdQuery(viewedJobId);

  const { data: JobDetailData, isFetching: isFetchingJobDetail } = useGetJobDetailQuery(
    viewedJobId,
    { skip: viewedJobId == '' },
  );

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
    console.log(JobDetailData);
    setViewedJob(JobDetailData?.data);
  }, [JobDetailData]);

  const columns: TableProps<ListJobsRES>['columns'] = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
      showSorterTooltip: false,
    },
    {
      title: 'Company Name',
      dataIndex: 'company',
      key: 'company',
      sorter: (a, b) => a.company.name.localeCompare(b.company.name),
      showSorterTooltip: false,
      render: (company: CompanyInfo) => (
        <a href={`/admin/company/${company.id}`}>{company?.name}</a>
      ),
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
        const { address } = record;
        return `${address}`;
      },
    },
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
      // sorter: (a, b) => moment(a.createdAt).unix() - moment(b.createdAt).unix(),
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

  const handleApproveSelections = () => {
    approveJobs(selectedRows);
    setSelectedRowKeys([]);
  };

  const handleRejectSelections = () => {
    rejectJobs(selectedRows);
    setSelectedRowKeys([]);
  };

  const handleViewJobDetails = (job: ListJobsRES) => {
    setViewedJobId(job.id);
    setIsJobDetailOpen(true);
  };

  const handleCancel = () => {
    setIsJobDetailOpen(false);
  };

  const handleApproveModal = () => {
    if (viewedJob) {
      const foundJobs = [data.find((item) => item.id === viewedJob.id)];
      if (foundJobs && foundJobs[0]) {
        approveJobs([foundJobs[0]]);
      }
    }
    handleCancel();
  };

  const handleRejectModal = () => {
    if (viewedJob) {
      const foundJobs = [data.find((item) => item.id === viewedJob.id)];
      if (foundJobs && foundJobs[0]) {
        rejectJobs([foundJobs[0]]);
      }
    }
    handleCancel();
  };

  return (
    <>
      <div className='flex justify-between'>
        <div>
          <Button
            onClick={handleApproveSelections}
            className='mr-2'
            style={{
              color: selectedRows.length > 0 ? '#4096ff' : '',
              borderColor: selectedRows.length > 0 ? '#4096ff' : 'transparent',
            }}
            icon={<CheckOutlined />}
            disabled={selectedRows.length > 0 ? false : true}
          >
            Approve
          </Button>
          <Button
            danger
            onClick={handleRejectSelections}
            icon={<CloseOutlined />}
            disabled={selectedRows.length > 0 ? false : true}
          >
            Reject
          </Button>
        </div>

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
        footer={
          <div>
            <Button onClick={handleRejectModal} className='mr-2' icon={<CloseOutlined />}>
              Reject
            </Button>
            <Button onClick={handleApproveModal} type='primary' danger icon={<CheckOutlined />}>
              Approve
            </Button>
          </div>
        }
      >
        <div className='max-h-[65vh] overflow-y-auto'>
          <Spin spinning={isFetchingJobDetail}>
            {viewedJob && <JobDescriptions data={viewedJob} />}
          </Spin>
        </div>
      </Modal>
    </>
  );
};

export default PendingJobsTab;
