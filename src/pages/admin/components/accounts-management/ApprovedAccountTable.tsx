import { useGetEmployerDetailQuery } from '@/+core/redux/apis/admin/employer-management/employer-admin.api';
import {
  EmployerDetailResponse,
  ListEmployersRES,
} from '@/+core/redux/apis/admin/employer-management/employer-admin.response';
import { Button, Input, Modal, Space, Spin, Table, TableProps, Tooltip } from 'antd';
import { SearchProps } from 'antd/es/input';
import { useState } from 'react';

interface ApprovedAccountTableProps {
  data: ListEmployersRES[];
  onSearch: (keyword: string) => void;
}

const PendingAccountTable = (props: ApprovedAccountTableProps) => {
  const { data, onSearch } = props;
  const { Search } = Input;
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedRows, setSelectedRows] = useState<ListEmployersRES[]>([]);

  const [isEmployerDetailOpen, setIsEmployerDetailOpen] = useState<boolean>(false);
  const [viewedEmployer, setViewedEmployer] = useState<EmployerDetailResponse>();
  const [viewedEmployerId, setViewedEmployerId] = useState<string>('');

  const { data: employerDetailData, isFetching: isFetchingEmployerDetail } =
    useGetEmployerDetailQuery(viewedEmployerId);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    const DataWithKeys = addKeyToData(data);
    const newSelectedRows = DataWithKeys.filter((item) => newSelectedRowKeys.includes(item.key));
    setSelectedRows(newSelectedRows);
  };

  function addKeyToData(data: ListEmployersRES[]) {
    return data.map((item, index) => {
      return { ...item, key: index.toString() };
    });
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns: TableProps<ListEmployersRES>['columns'] = [
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'name',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'Tax Code',
      dataIndex: 'taxCode',
      key: 'taxCode',
    },
    {
      title: 'Display Name',
      dataIndex: 'displayName',
      key: 'displayName',
    },
    // {
    //   title: 'Fields',
    //   key: 'fields',
    //   dataIndex: 'fields',
    //   render: (_, { fields }) => (
    //     <>
    //       {fields.map((field) => {
    //         return (
    //           <Tag color={'geekblue'} key={field}>
    //             {field.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
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

  const handleSearch: SearchProps['onSearch'] = (value, _e) => {
    onSearch(value);
  };

  const handleViewEmployerDetails = (employer: ListEmployersRES) => {
    setViewedEmployerId(employer.id);
    setIsEmployerDetailOpen(true);
  };

  const handleCancel = () => {
    setIsEmployerDetailOpen(false);
  };

  return (
    <>
      <div className='flex justify-end mb-3'>
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
        title='Employer Details'
        className='max-w-[60vw] min-w-[40vw]'
        open={isEmployerDetailOpen}
        onCancel={handleCancel}
        footer={<></>}
      >
        <div className='max-h-[65vh] overflow-y-auto'>
          <Spin spinning={isFetchingEmployerDetail}>Employer Details</Spin>
        </div>
      </Modal>
    </>
  );
};

export default PendingAccountTable;
