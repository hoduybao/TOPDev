import { Table, Space, Button, Input, Spin } from 'antd';
import type { TableColumnsType } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { v4 as uuidv4 } from 'uuid';

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

import { JobType } from '@/+core/utilities/types/recruitment.type';
// import JobMockData from '../../../../draft/job.json';
import { useGetJobsQuery } from '../../../../+core/redux/apis/common/job/job.api';

const { Search } = Input;

interface DataType extends JobType {
  key: React.Key;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    render: (text: string) => <p>{text}</p>,
  },
  {
    title: 'Company ID',
    dataIndex: 'companyId',
  },
  {
    title: 'Job type',
    dataIndex: 'type',
  },
  {
    title: 'Contact type',
    dataIndex: 'typeContract',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        {/* <Button icon={<CheckOutlined />}>Approve {record.id}</Button> */}
        <Button icon={<CheckOutlined />}>Approve</Button>
        <Button type='primary' icon={<CloseOutlined />} danger>
          Ignore
        </Button>
      </Space>
    ),
  },
];

const PendingTab = () => {
  const { data: response, isLoading } = useGetJobsQuery({ allType: true });
  // const data: DataType[] = [
  //   {
  //     key: uuidv4(),
  //     ...JobMockData,
  //   },
  // ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`Selected keys: ${selectedRowKeys}`);
      console.log('Selected rows: ', selectedRows);
    },
  };

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    console.log(info?.source, value);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='w-full py-4 flex gap-3 flex-wrap items-center justify-between'>
        <Space size='small'>
          <Button>Approve all</Button>
          <Button type='primary' danger>
            Reject all
          </Button>
        </Space>
        <div>
          <Search
            className='w-[300px] md:w-[400px]'
            placeholder='Search...'
            onSearch={onSearch}
            allowClear
          />
        </div>
      </div>
      <div className='w-full'>
        <Spin spinning={isLoading}>
          {response && (
            <Table
              rowSelection={{
                ...rowSelection,
              }}
              columns={columns}
              dataSource={response.data.map((item: any) => ({
                ...item,
                key: uuidv4(),
              }))}
            />
          )}
        </Spin>
      </div>
    </div>
  );
};

export default PendingTab;
