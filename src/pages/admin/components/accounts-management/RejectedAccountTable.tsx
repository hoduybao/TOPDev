import { ListCompanyRES } from '@/+core/redux/apis/admin/employer-management/employer-admin.response';
import { Button, Input, Space, Table, TableProps, Tag, Tooltip } from 'antd';

interface RejectedAccountTableProps {
  data: ListCompanyRES[];
  onSearch: (keyword: string) => void;
  viewCompany: (employer: ListCompanyRES) => void;
}

const PendingAccountTable = (props: RejectedAccountTableProps) => {
  const { data, onSearch, viewCompany } = props;
  const { Search } = Input;

  // const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  // const [selectedRows, setSelectedRows] = useState<ListCompanyRES[]>([]);

  // const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
  //   setSelectedRowKeys(newSelectedRowKeys);
  //   const DataWithKeys = addKeyToData(data);
  //   const newSelectedRows = DataWithKeys.filter((item) => newSelectedRowKeys.includes(item.key));
  //   setSelectedRows(newSelectedRows);
  // };

  function addKeyToData(data: ListCompanyRES[]) {
    return data.map((item, index) => {
      return { ...item, key: index.toString() };
    });
  }

  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: onSelectChange,
  // };

  const columns: TableProps<ListCompanyRES>['columns'] = [
    {
      title: 'Company Name',
      dataIndex: 'name',
      key: 'name',
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

  const handleViewEmployerDetails = (employer: ListCompanyRES) => {
    viewCompany(employer);
  };

  return (
    <>
      <div className='flex justify-end mb-3'>
        <Search placeholder='Input search text' onSearch={onSearch} style={{ width: 200 }} />
      </div>

      <Table
        className='mt-2'
        //rowSelection={rowSelection}
        columns={columns}
        dataSource={addKeyToData(data)}
        pagination={false}
      />
    </>
  );
};

export default PendingAccountTable;
