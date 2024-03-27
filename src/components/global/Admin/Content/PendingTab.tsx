import React, { useState, useEffect } from 'react';
import { Table, Space, Button, Input, Skeleton } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { JobType } from '@/+core/utilities/types/recruitment.type';
import JobMockData from '../../../../draft/job.json';

const { Search } = Input;

interface DataType extends JobType {
  key: React.Key;
}

const columns = [
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
    title: 'Action',
    key: 'action',
    render: (_: any, record: DataType) => (
      <Space size='middle'>
        <Button icon={<CheckOutlined />}>Approve {record.id}</Button>
        <Button type='primary' icon={<CloseOutlined />} danger>
          Ignore
        </Button>
      </Space>
    ),
  },
];

const PendingTab = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          key: uuidv4(),
          ...JobMockData,
        },
      ]);
      setLoading(false);
    }, 10000); // 10 seconds
  }, []);

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`Selected keys: ${selectedRowKeys}`);
      console.log('Selected rows: ', selectedRows);
    },
  };

  const onSearch = (value: string) => {
    console.log('Search value:', value);
  };

  const customSkeleton = (
    <Skeleton active paragraph={{ rows: 5 }}>
      <Skeleton.Input style={{ width: '10%', marginBottom: '10px' }} active />
      <Skeleton.Input style={{ width: '30%', marginBottom: '10px' }} active />
      <Skeleton.Input style={{ width: '10%', marginBottom: '10px' }} active />
      <Skeleton.Input style={{ width: '20%', marginBottom: '10px' }} active />
      <Skeleton.Input style={{ width: '20%', marginBottom: '10px' }} active />
      <Skeleton.Input style={{ width: '10%' }} active />
      <h1>Loading</h1>
    </Skeleton>
  );

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
        {loading ? (
          customSkeleton
        ) : (
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        )}
      </div>
    </div>
  );
};

export default PendingTab;
