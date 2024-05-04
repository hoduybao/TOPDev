import { HRAccount } from '@/+core/utilities/types/admin.type';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, TableProps, Tag, Tooltip } from 'antd';
import { SearchProps } from 'antd/es/input';
import { useEffect, useState } from 'react';

interface PendingAccountTableProps {
  data: HRAccount[];
  approveAccounts: (accounts: HRAccount[]) => void;
  rejectAccounts: (accounts: HRAccount[]) => void;
}

const PendingAccountTable = (props: PendingAccountTableProps) => {
  const [data, setData] = useState<HRAccount[]>(props.data);
  const { Search } = Input;
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedRows, setSelectedRows] = useState<HRAccount[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    const DataWithKeys = addKeyToData(data);
    const newSelectedRows = DataWithKeys.filter((item) => newSelectedRowKeys.includes(item.key));
    setSelectedRows(newSelectedRows);
  };

  useEffect(() => {
    setData(props.data);
  }, [props]);

  function addKeyToData(data: HRAccount[]) {
    return data.map((item, index) => {
      return { ...item, key: index.toString() };
    });
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const columns: TableProps<HRAccount>['columns'] = [
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
    {
      title: 'Fields',
      key: 'fields',
      dataIndex: 'fields',
      render: (_, { fields }) => (
        <>
          {fields.map((field) => {
            return (
              <Tag color={'geekblue'} key={field}>
                {field.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
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
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Tooltip placement='top' title={'Approve'}>
            <Button
              onClick={() => {
                handleApproveAction(record);
              }}
              icon={<CheckOutlined />}
            ></Button>
          </Tooltip>
          <Tooltip placement='top' title={'Reject'}>
            <Button
              onClick={() => {
                handleRejectAction(record);
              }}
              danger
              icon={<CloseOutlined />}
            ></Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const onSearch: SearchProps['onSearch'] = (value, _e) => {
    const newData = props.data.filter(
      (item) =>
        item.companyName.toLowerCase().includes(value.toLowerCase()) ||
        item.taxCode.toString().toLowerCase().includes(value) ||
        item.displayName.toLowerCase().includes(value.toLowerCase()) ||
        item.fields.some((field) => field.toLowerCase().includes(value.toLowerCase())) ||
        item.address.toLowerCase().includes(value.toLowerCase()),
    );

    setData(newData);
  };

  const handleApproveSelections = () => {
    props.approveAccounts(selectedRows);
    setSelectedRowKeys([]);
  };

  const handleRejectSelections = () => {
    props.rejectAccounts(selectedRows);
    setSelectedRowKeys([]);
  };

  const handleApproveAction = (record: any) => {
    const { key, ...account } = record;
    props.approveAccounts([account]);
    setSelectedRowKeys(selectedRowKeys.filter((selectedKey) => selectedKey !== key));
  };

  const handleRejectAction = (record: any) => {
    const { key, ...account } = record;
    props.rejectAccounts([account]);
    setSelectedRowKeys(selectedRowKeys.filter((selectedKey) => selectedKey !== key));
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
    </>
  );
};

export default PendingAccountTable;
