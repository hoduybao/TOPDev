import { HRAccount } from '@/+core/utilities/types/admin.type';
import { ReloadOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, TableProps, Tag, Tooltip } from 'antd';
import { SearchProps } from 'antd/es/input';
import { useEffect, useState } from 'react';

interface PendingAccountTableProps {
  data: HRAccount[];
  reviewAccounts: (accounts: HRAccount[]) => void;
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
          <Tooltip placement='top' title={'Review'}>
            <Button
              onClick={() => {
                handleReviewAction(record);
              }}
              icon={<ReloadOutlined />}
            ></Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
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

  const handleReviewSelections = () => {
    props.reviewAccounts(selectedRows);
    setSelectedRowKeys([]);
  };

  const handleReviewAction = (record: any) => {
    const { key, ...account } = record;
    props.reviewAccounts([account]);
    setSelectedRowKeys(selectedRowKeys.filter((selectedKey) => selectedKey !== key));
  };

  return (
    <>
      <div className='flex justify-between'>
        <div>
          <Button
            onClick={handleReviewSelections}
            className='mr-2'
            style={{ color: '#4096ff', borderColor: '#4096ff' }}
            icon={<ReloadOutlined />}
          >
            Review
          </Button>
        </div>

        <Search placeholder='Input search text' onSearch={onSearch} style={{ width: 200 }} />
      </div>
      <Table
        className='mt-2'
        rowSelection={rowSelection}
        columns={columns}
        dataSource={addKeyToData(data)}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
};

export default PendingAccountTable;
