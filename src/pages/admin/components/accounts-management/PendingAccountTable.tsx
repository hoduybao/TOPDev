import { useGetEmployerDetailQuery } from '@/+core/redux/apis/admin/employer-management/employer-admin.api';
import {
  EmployerDetailResponse,
  ListEmployersRES,
} from '@/+core/redux/apis/admin/employer-management/employer-admin.response';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Space, Spin, Table, TableProps, Tooltip } from 'antd';
import { SearchProps } from 'antd/es/input';
import { useState } from 'react';

interface PendingAccountTableProps {
  data: ListEmployersRES[];
  approveEmployers: (accounts: ListEmployersRES[]) => void;
  rejectEmployers: (accounts: ListEmployersRES[]) => void;
  onSearch: (keyword: string) => void;
}

const PendingAccountTable = (props: PendingAccountTableProps) => {
  const { data, approveEmployers, rejectEmployers, onSearch } = props;
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

  const handleApproveSelections = () => {
    approveEmployers(selectedRows);
    setSelectedRowKeys([]);
  };

  const handleRejectSelections = () => {
    rejectEmployers(selectedRows);
    setSelectedRowKeys([]);
  };

  const handleViewEmployerDetails = (employer: ListEmployersRES) => {
    setViewedEmployerId(employer.id);
    setIsEmployerDetailOpen(true);
  };

  const handleCancel = () => {
    setIsEmployerDetailOpen(false);
  };

  const handleApproveModal = () => {
    if (viewedEmployer) {
      const foundEmployers = [data.find((item) => item.id === viewedEmployer.id)];
      if (foundEmployers && foundEmployers[0]) {
        approveEmployers([foundEmployers[0]]);
      }
    }
    handleCancel();
  };

  const handleRejectModal = () => {
    if (viewedEmployer) {
      const foundEmployers = [data.find((item) => item.id === viewedEmployer.id)];
      if (foundEmployers && foundEmployers[0]) {
        rejectEmployers([foundEmployers[0]]);
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
            style={{ color: '#4096ff', borderColor: '#4096ff' }}
            icon={<CheckOutlined />}
          >
            Approve
          </Button>
          <Button danger onClick={handleRejectSelections} icon={<CloseOutlined />}>
            Reject
          </Button>
        </div>

        <Search placeholder='Input search text' onSearch={onSearch} style={{ width: 200 }} />
      </div>
      <Table
        className='mt-2'
        rowSelection={rowSelection}
        columns={columns}
        dataSource={addKeyToData(data)}
        pagination={false}
      />

      <Modal
        title='Employer Details'
        className='max-w-[60vw] min-w-[40vw]'
        open={isEmployerDetailOpen}
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
          <Spin spinning={isFetchingEmployerDetail}>
            Employer Details
          </Spin>
        </div>
      </Modal>
    </>
  );
};

export default PendingAccountTable;
