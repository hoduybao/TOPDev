import { Button, Table } from 'antd';
import moment from 'moment';

import type { TableColumnsType } from 'antd';
import {
  EyeOutlined,
  FieldTimeOutlined,
  MailOutlined,
  PhoneOutlined,
  RightSquareOutlined,
} from '@ant-design/icons';
import { Application } from '@/+core/redux/apis/common/application/application.response';
import { useNavigate, useParams } from 'react-router-dom';

const CVList = ({ data }: { data: Application[] }) => {
  const navigate = useNavigate();
  const { jobId } = useParams<{ jobId: string }>();

  const dataSource = data?.map((item) => ({
    ...item,
    key: item.id,
  }));

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
      title: 'Tin Tuyển Dụng',
      render(value: Application) {
        console.log(value);

        return (
          <div>
            <div>
              <div className='text-base font-semibold'>{value?.jobDetail?.title}</div>
              <div>
                {value?.jobDetail?.jobType} - {value?.jobDetail?.level}
              </div>
            </div>
          </div>
        );
      },
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
      title: 'Ngày Ứng Tuyển',
      render(value) {
        return (
          <div>
            <div>
              <FieldTimeOutlined className='m-2 text-green-400' />{' '}
              <span>{moment(value?.createdAt).format('MMMM D YYYY')}</span>
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
      render(record) {
        return (
          <Button
            onClick={() => {
              navigate(`/recruitment/${jobId}/application/${record.id}`);
              console.log('click');
            }}
            className='font-bold flex justify-center items-center'
          >
            <EyeOutlined />
          </Button>
        );
      },
    },
  ];
  return (
    <div className='mt-8'>
      <Table columns={columns} dataSource={dataSource} />;
    </div>
  );
};

export default CVList;
