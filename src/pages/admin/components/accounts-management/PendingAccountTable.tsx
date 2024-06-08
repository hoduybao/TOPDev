import { HRAccount } from '@/+core/utilities/types/admin.type';
import ConfirmModal from '@/components/global/ConfirmModal';
import { CheckOutlined, CloseOutlined, HomeOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Image,
  Input,
  notification,
  Space,
  Table,
  TableProps,
  Tag,
  Tooltip,
} from 'antd';
import { SearchProps } from 'antd/es/input';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactQuill from 'react-quill';

interface PendingAccountTableProps {
  data: HRAccount[];
  approveAccounts?: (hrIds: string[]) => Promise<void>;
  rejectAccounts?: (hrIds: string[]) => Promise<void>;
  handleRejectReason?: (hrId: string, reason: string) => Promise<void>;
  status: number;
}

const AccountTable = (props: PendingAccountTableProps) => {
  const {
    data,
    status,
    approveAccounts = () => {},
    rejectAccounts = () => {},
    handleRejectReason = () => {},
  } = props;
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [openRejectModal, setOpenRejectModal] = useState(false);
  const [type, setType] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const [rejectID, setRejectID] = useState<string>('');
  const { t } = useTranslation();

  function formatedData(data: HRAccount[]) {
    return data
      .map((item) => {
        return { ...item, key: item.hrId };
      })
      .filter((item) => {
        return item.status === props.status;
      });
  }

  const rowSelection = {
    selectedRowKeys: selectedRows,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRows(newSelectedRowKeys.map((item) => item.toString()));
    },
  };

  function getColumns(): TableProps<HRAccount>['columns'] {
    const columns: TableProps<HRAccount>['columns'] = [
      {
        title: t('company'),
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
        title: t('nationality'),
        dataIndex: 'nationality',
        key: 'nationality',
        render: (value) => {
          return value.join(', ');
        },
      },
      {
        title: t('industry'),
        dataIndex: 'industry',
        key: 'industry',
        render: (value) => {
          return value.join(', ');
        },
      },
      {
        title: t('addresses'),
        dataIndex: 'addresses',
        key: 'addresses',
        render: (value) => {
          return (
            <div>
              {value.map((address: any) => {
                return (
                  <div key={address}>
                    {address.addressDetail} , {address.city}
                  </div>
                );
              })}
            </div>
          );
        },
      },
      {
        title: t('status'),
        dataIndex: 'status',
        key: 'status',
        render: () => {
          switch (status) {
            case 0:
              return <Tag color='gray'>{t('pending')}</Tag>;
            case 1:
              return <Tag color='green'>{t('approve')}</Tag>;
            case -1:
              return <Tag color='red'>{t('reject')}</Tag>;
          }
        },
      },
    ];

    if (status == 0) {
      columns.push({
        title: t('action'),
        key: 'action',
        render: (_, record) => (
          <Space size='middle'>
            <Tooltip placement='top' title={'Approve'}>
              <Button
                onClick={async () => {
                  setSelectedRows([record.hrId]);
                  setOpenModal(true);
                  setType(1);
                }}
                icon={<CheckOutlined />}
              ></Button>
            </Tooltip>
            <Tooltip placement='top' title={'Reject'}>
              <Button
                onClick={() => {
                  setOpenRejectModal(true);
                  setRejectID(record.hrId);
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

  const handleOKReject = async () => {
    setIsLoading(true);
    if (rejectID && value) {
      await handleRejectReason(rejectID, value);
    }
    setIsLoading(false);
    setOpenRejectModal(false);
    setValue('');
  };

  const handleOK = async () => {
    setIsLoading(true);
    if (type === 1) {
      await approveAccounts(selectedRows || []);
    }
    if (type === -1) {
      await rejectAccounts(selectedRows || []);
    }
    setIsLoading(false);
    setOpenModal(false);
  };

  return (
    <>
      <div className={`flex ${status == 0 ? 'justify-between' : 'justify-end'} `}>
        {status == 0 && (
          <div>
            <Button
              onClick={() => {
                if (selectedRows.length === 0) {
                  notification.error({
                    message: 'Error',
                    description: 'Hãy chọn ít nhất 1 tài khoản để thực hiện thao tác!',
                  });
                } else {
                  setOpenModal(true);
                  setType(1);
                }
              }}
              className='mr-2'
              style={{ color: '#4096ff', borderColor: '#4096ff' }}
              icon={<CheckOutlined />}
            >
              Approve
            </Button>
            <Button
              danger
              onClick={() => {
                if (selectedRows.length === 0) {
                  notification.error({
                    message: 'Error',
                    description: 'Hãy chọn ít nhất 1 tài khoản để thực hiện thao tác!',
                  });
                } else {
                  setOpenModal(true);
                  setType(-1);
                }
              }}
              icon={<CloseOutlined />}
            >
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
      <ConfirmModal
        open={openModal}
        setOpen={setOpenModal}
        handleOk={handleOK}
        isLoadingBtn={isLoading}
      >
        {type === 1
          ? 'Bạn có chắc chắn muốn duyệt các tài khoản này?'
          : 'Bạn có chắc chắn muốn từ chối các tài khoản này?'}
      </ConfirmModal>

      {/* modal reject 1 HR */}
      <ConfirmModal
        open={openRejectModal}
        setOpen={setOpenRejectModal}
        handleOk={handleOKReject}
        // isLoadingBtn={isLoading}
      >
        <div>
          <h3 className='text-2xl font-semibold mb-4'>Input reason</h3>
          <ReactQuill
            className='mb-4'
            theme='snow'
            value={value}
            style={{ height: '150px' }}
            onChange={(value) => {
              setValue(value);
            }}
          />
        </div>
      </ConfirmModal>
    </>
  );
};

export default AccountTable;
