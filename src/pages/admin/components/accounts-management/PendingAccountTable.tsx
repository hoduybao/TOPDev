import { HRAccount } from '@/+core/utilities/types/admin.type';
import { CheckOutlined, CloseOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Image, Input, Space, Table, TableProps, Tag, Tooltip } from 'antd';
import { SearchProps } from 'antd/es/input';
import { useState } from 'react';

interface PendingAccountTableProps {
  data: HRAccount[];
  approveAccounts?: (accounts: HRAccount[]) => void;
  rejectAccounts?: (accounts: HRAccount[]) => void;
  status: number;
}

const AccountTable = (props: PendingAccountTableProps) => {
  const { data, status } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedRows, setSelectedRows] = useState<HRAccount[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    // setSelectedRowKeys(newSelectedRowKeys);
    // const DataWithKeys = addKeyToData(data);
    // const newSelectedRows = DataWithKeys.filter((item) => newSelectedRowKeys.includes(item.key));
    // setSelectedRows(newSelectedRows);
  };

  function formatedData(data: HRAccount[]) {
    return data
      .map((item, index) => {
        return { ...item, key: index.toString() };
      })
      .filter((item) => {
        return item.status === props.status;
      });
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  function getColumns(): TableProps<HRAccount>['columns'] {
    const columns: TableProps<HRAccount>['columns'] = [
      {
        title: 'Company',
        dataIndex: 'name',
        key: 'name',
        render: (value, record) => {
          return (
            <div className='flex items-center gap-2'>
              {record.logo ? (
                <Image className='object-contain' src={record.logo} width={50} height={50} />
              ) : (
                <HomeOutlined className='w-[50px] h-[50px]' />
              )}
              {value}
            </div>
          );
        },
      },
      {
        title: 'Nationality',
        dataIndex: 'nationality',
        key: 'nationality',
        render: (value) => {
          return value.join(', ');
        },
      },
      {
        title: 'Industry',
        dataIndex: 'industry',
        key: 'industry',
        render: (value) => {
          return value.join(', ');
        },
      },
      {
        title: 'Address',
        dataIndex: 'addresses',
        key: 'addresses',
        render: (value) => {
          return (
            <div>
              {value.map((address: any) => {
                return (
                  <div>
                    {address.addressDetail} , {address.city}
                  </div>
                );
              })}
            </div>
          );
        },
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: () => {
          return <Tag color='gray'>Pending</Tag>;
        },
      },
    ];

    if (status == 0) {
      columns.push({
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
      });
    }
    return columns;
  }

  const onSearch: SearchProps['onSearch'] = (value, _e) => {
    // const newData = props.data.filter(
    //   (item) =>
    //     item.companyName.toLowerCase().includes(value.toLowerCase()) ||
    //     item.taxCode.toString().toLowerCase().includes(value) ||
    //     item.displayName.toLowerCase().includes(value.toLowerCase()) ||
    //     item.fields.some((field) => field.toLowerCase().includes(value.toLowerCase())) ||
    //     item.address.toLowerCase().includes(value.toLowerCase()),
    // );
    // setData(newData);
  };

  const handleApproveSelections = () => {
    // props.approveAccounts(selectedRows);
    // setSelectedRowKeys([]);
  };

  const handleRejectSelections = () => {
    // props.rejectAccounts(selectedRows);
    // setSelectedRowKeys([]);
  };

  const handleApproveAction = (record: any) => {
    const { key, ...account } = record;
    // props.approveAccounts([account]);
    // setSelectedRowKeys(selectedRowKeys.filter((selectedKey) => selectedKey !== key));
  };

  const handleRejectAction = (record: any) => {
    const { key, ...account } = record;
    // props.rejectAccounts([account]);
    // setSelectedRowKeys(selectedRowKeys.filter((selectedKey) => selectedKey !== key));
  };

  return (
    <>
      <div className={`flex ${status == 0 ? 'justify-between' : 'justify-end'} `}>
        {status == 0 && (
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
        )}

        <Input.Search placeholder='Input search text' onSearch={onSearch} style={{ width: 200 }} />
      </div>
      <Table
        className='mt-2'
        rowSelection={rowSelection}
        columns={getColumns()}
        dataSource={formatedData(data)}
        pagination={false}
      />
    </>
  );
};

export default AccountTable;
