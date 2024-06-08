import { ListCompanyRES } from '@/+core/redux/apis/admin/employer-management/employer-admin.response';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, TableProps, Tag, Tooltip } from 'antd';
import { useState } from 'react';

interface PendingAccountTableProps {
  data: ListCompanyRES[];
  approveEmployers: (accounts: ListCompanyRES[]) => void;
  rejectEmployers: (accounts: ListCompanyRES[]) => void;
  onSearch: (keyword: string) => void;
  viewEmployer: (employer: ListCompanyRES) => void;
}

const PendingAccountTable = (props: PendingAccountTableProps) => {
  const { data, approveEmployers, rejectEmployers, onSearch, viewEmployer } = props;
  const { Search } = Input;
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedRows, setSelectedRows] = useState<ListCompanyRES[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    const DataWithKeys = addKeyToData(data);
    const newSelectedRows = DataWithKeys.filter((item) => newSelectedRowKeys.includes(item.key));
    setSelectedRows(newSelectedRows);
  };

  function addKeyToData(data: ListCompanyRES[]) {
    return data.map((item, index) => {
      return { ...item, key: index.toString() };
    });
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns: TableProps<ListCompanyRES>['columns'] = [
    {
      title: 'Company Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <a className='text-blue-500 hover:underline' href={`/admin/company/${record.id}`}>
          {text}
        </a>
      ),
    },
    {
      title: 'Nation',
      dataIndex: 'nationality',
      key: 'nationality',
      render: (_, { nationality: nations }) => nations?.join(', '),
    },
    {
      title: 'Company size',
      dataIndex: 'companySize',
      key: 'companySize',
    },
    {
      title: 'Industry',
      key: 'industry',
      dataIndex: 'industry',
      render: (_, { industry: industries }) => (
        <div className='max-w-64'>
          {industries?.map((industry) => {
            return (
              <Tag color={'geekblue'} key={industry}>
                {industry}
              </Tag>
            );
          })}
        </div>
      ),
    },
    {
      title: 'Address',
      dataIndex: 'addresses',
      key: 'addresses',
      render: (_, { addresses: addresses }) =>
        addresses?.map((address) => address.addressDetail).join('\n '),
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: <div className='font-semi-bold pl-5'>Action</div>,
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Tooltip placement='top' title={'View Detail'}>
            <Button
              onClick={() => handleViewEmployerDetails(record)}
              className='text-blue-500 border border-white-900'
            >
              View Details
            </Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const handleApproveSelections = () => {
    approveEmployers(selectedRows);
    setSelectedRowKeys([]);
  };

  const handleRejectSelections = () => {
    rejectEmployers(selectedRows);
    setSelectedRowKeys([]);
  };

  const handleViewEmployerDetails = (employer: ListCompanyRES) => {
    viewEmployer(employer);
  };

  return (
    <>
      <div className='flex justify-between items-center'>
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

        <Search
          placeholder='Input search text'
          onSearch={onSearch}
          style={{ width: 200, marginLeft: 'auto' }}
        />
      </div>
      <Table
        className='mt-2'
        rowSelection={rowSelection}
        columns={columns}
        dataSource={addKeyToData(data)}
        pagination={false}
      />
    </>
  );
};

export default PendingAccountTable;
