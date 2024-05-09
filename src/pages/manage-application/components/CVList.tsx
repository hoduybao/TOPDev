import Container from '@/components/global/Container/Container';
import { Button, Table } from 'antd';
import React from 'react';

import type { TableColumnsType } from 'antd';
import {
  DownSquareOutlined,
  FieldTimeOutlined,
  MailOutlined,
  PhoneOutlined,
  RightSquareOutlined,
} from '@ant-design/icons';

interface ApplicationType {
  key: React.Key;
  name: string;
  campaign: string;
  insights: {
    title: string;
    date: string;
    position: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  status: string;
}

const columns: TableColumnsType<ApplicationType> = [
  {
    title: 'Ứng viên',
    dataIndex: 'name',
  },
  {
    title: 'Chiến dịch',
    dataIndex: 'campaign',
  },
  {
    title: 'Thông tin liên hệ',
    dataIndex: 'contact',
    render(value) {
      return (
        <div>
          <div>
            <MailOutlined className='m-2 text-green-400' />
            <span>{value.email}</span>
          </div>

          <div>
            <PhoneOutlined className='m-2 text-green-400' />
            <span>{value.phone}</span>
          </div>
        </div>
      );
    },
  },
  {
    title: 'Insights',
    dataIndex: 'insights',
    render(value) {
      return (
        <div>
          <div>
            <RightSquareOutlined className='m-2 text-green-400' />
            <span>{value?.title}</span>
          </div>
          <div>
            <FieldTimeOutlined className='m-2 text-green-400' /> <span>{value?.date}</span>
          </div>
          <div>
            <DownSquareOutlined className='m-2 text-green-400' />
            <span>{value?.position}</span>
          </div>
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
        <Button className='font-bold rounded-full bg-gray-200 w-8 h-8 flex justify-center'>
          ...
        </Button>
      );
    },
  },
];

const data: ApplicationType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    campaign: 'Campaign 1',
    insights: {
      title: 'Title',
      date: '2022-02-02',
      position: 'Position',
    },
    contact: {
      email: '123@gmail.com',
      phone: '0123456789',
    },
    status: ['PENDING', 'VIEWING', 'APPROVED', 'REJECTED'][Math.floor(Math.random() * 4)],
  });
}

const CVList = () => {
  return (
    <div className='mt-8'>
      <Table columns={columns} dataSource={data} />;
    </div>
  );
};

export default CVList;
