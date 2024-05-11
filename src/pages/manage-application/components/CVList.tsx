import Container from '@/components/global/Container/Container';
import { Button, Table } from 'antd';
import React from 'react';
import moment from 'moment';

import type { TableColumnsType } from 'antd';
import {
  DownSquareOutlined,
  EyeOutlined,
  FieldTimeOutlined,
  MailOutlined,
  PhoneOutlined,
  RightSquareOutlined,
} from '@ant-design/icons';
import { Application } from '@/+core/redux/apis/common/application/application.response';
import { useNavigate, useParams } from 'react-router-dom';

const columns: TableColumnsType<Application> = [
  {
    title: 'Mã hồ sơ',
    dataIndex: 'id',
  },
  {
    title: 'Ứng viên',
    dataIndex: 'fullName',
  },
  {
    title: 'Chiến dịch',
    dataIndex: 'campaign',
  },
  {
    title: 'Thông tin liên hệ',
    render(record) {
      console.log(record);

      return (
        <div>
          <div>
            <MailOutlined className='m-2 text-green-400' />
            <span>{record.email}</span>
          </div>

          <div>
            <PhoneOutlined className='m-2 text-green-400' />
            <span>{record.phone}</span>
          </div>
        </div>
      );
    },
  },
  {
    title: 'Insights',
    render(value) {
      return (
        <div>
          {/* <div>
            <RightSquareOutlined className='m-2 text-green-400' />
            <span>{value?.title}</span>
          </div> */}
          <div>
            <FieldTimeOutlined className='m-2 text-green-400' />{' '}
            <span>{moment(value?.createdAt).format('MMMM D YYYY')}</span>
          </div>
          {/* <div>
            <DownSquareOutlined className='m-2 text-green-400' />
            <span>{value?.position}</span>
          </div> */}
        </div>
      );
    },
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    render(value) {
      switch (value) {
        case 'PENDING': {
          return (
            <div className='text-yellow-700 rounded-full p-[0.1rem] text-center font-semibold bg-yellow-400'>
              Đang chờ
            </div>
          );
        }
        case 'VIEWING': {
          return (
            <div className='text-blue-700 rounded-full p-[0.1rem] text-center font-semibold bg-blue-400'>
              Đang xem
            </div>
          );
        }
        case 'APPROVED': {
          return (
            <div className='text-green-700 rounded-full p-[0.1rem] text-center font-semibold bg-green-400'>
              Đã duyệt
            </div>
          );
        }
        case 'REJECTED': {
          return (
            <div className='text-red-700 rounded-full p-[0.1rem] text-center font-semibold bg-red-400'>
              Đã từ chối
            </div>
          );
        }
      }
    },
  },
  {
    title: '',
    render() {
      return (
        <Button
          onClick={() => {}}
          className='font-bold rounded-full bg-gray-200 w-8 h-8 flex justify-center'
        >
          <EyeOutlined />
        </Button>
      );
    },
  },
];

const CVList = ({ data }: { data: Application[] }) => {
  const navigate = useNavigate();
  const { jobId } = useParams<{ jobId: string }>();

  const dataSource = data?.map((item) => ({
    ...item,
    key: item.id,
  }));
  return (
    <div className='mt-8'>
      <Table
        columns={columns}
        dataSource={dataSource}
        onRow={(record) => {
          return {
            onClick: () => {
              console.log(record);
              navigate(`/recruitment/${jobId}/application/${record.id}`);
              console.log('click');
            },
          };
        }}
      />
      ;
    </div>
  );
};

export default CVList;
