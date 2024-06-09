import { Button, Pagination, Table } from 'antd';
import moment from 'moment';

import type { TableColumnsType } from 'antd';
import { EyeOutlined, FieldTimeOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Application } from '@/+core/redux/apis/common/application/application.response';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CVList = ({
  data,
  changePage,
  total,
  limit,
  currentPage,
  showState,
}: {
  data: Application[];
  changePage: (page: string) => void;
  total: string;
  limit: string;
  currentPage: string;
  showState: boolean;
}) => {
  const navigate = useNavigate();
  const { jobId } = useParams<{ jobId: string }>();
  const { t } = useTranslation();

  const dataSource = data
    ?.filter((item) => {
      if (showState) {
        return item;
      }
      return item.status === 'PENDING';
    })
    ?.map((item) => ({
      ...item,
      key: item.id,
    }));
  console.log('total', total);

  const columns: TableColumnsType<Application> = [
    {
      title: t('applicationCode'),
      dataIndex: 'id',
    },
    {
      title: <span className='capitalize'>{t('candidate')}</span>,
      dataIndex: 'fullName',
    },
    {
      title: t('job'),
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
      title: t('contactInfo'),
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
      title: t('submitedDate'),
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
      title: <span className='capitalize'>{t('status')}</span>,
      dataIndex: 'status',
      render(value) {
        switch (value) {
          case 'PENDING': {
            return (
              <div className='text-yellow-700 rounded-full p-[0.1rem] text-center font-semibold bg-yellow-400'>
                {t('pendingCV')}
              </div>
            );
          }
          case 'VIEWING': {
            return (
              <div className='text-blue-700 rounded-full p-[0.1rem] text-center font-semibold bg-blue-400'>
                {t('viewingCV')}
              </div>
            );
          }
          case 'APPROVED': {
            return (
              <div className='text-green-700 rounded-full p-[0.1rem] text-center font-semibold bg-green-400'>
                {t('approvedCV')}
              </div>
            );
          }
          case 'REJECTED': {
            return (
              <div className='text-red-700 rounded-full p-[0.1rem] text-center font-semibold bg-red-400'>
                {t('rejectedCV')}
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
      {total && (
        <Table
          pagination={{
            current: Number(currentPage),
            total: Number(total),
            pageSize: Number(limit),
            onChange: (page) => {
              changePage(page.toString());
            },
          }}
          columns={columns}
          dataSource={dataSource}
        />
      )}
    </div>
  );
};

export default CVList;
