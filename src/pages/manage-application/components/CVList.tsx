import { Button, Table } from 'antd';
import dayjs from 'dayjs';

import { Application } from '@/+core/redux/apis/common/application/application.response';
import Container from '@/components/global/Container/Container';
import { EyeOutlined, FieldTimeOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

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
              <MailOutlined className='m-2 text-orange-500' />
              <span>{record.email}</span>
            </div>

            <div>
              <PhoneOutlined className='m-2 text-orange-500' />
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
              <FieldTimeOutlined className='m-2 text-orange-500' />{' '}
              <span>{dayjs(value?.createdAt).format('DD/MM/YYYY')}</span>
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
              <div className='text-white-900 rounded-full p-[0.1rem] text-center font-semibold bg-yellow-500'>
                {t('pendingCV')}
              </div>
            );
          }
          case 'VIEWING': {
            return (
              <div className='text-white-900 rounded-full p-[0.1rem] text-center font-semibold bg-blue-500'>
                {t('viewingCV')}
              </div>
            );
          }
          case 'APPROVED': {
            return (
              <div className='text-white-900 rounded-full p-[0.1rem] text-center font-semibold bg-green-400'>
                {t('approvedCV')}
              </div>
            );
          }
          case 'REJECTED': {
            return (
              <div className='text-white-900 rounded-full p-[0.1rem] text-center font-semibold bg-red-500'>
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
              navigate(`/company/manage-jobs/${jobId}/application/${record.id}`);
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
      <Container>
        <Table
          pagination={{
            current: Number(currentPage) || 1,
            total: Number(total) || 0,
            pageSize: Number(limit),
            onChange: (page) => {
              changePage(page.toString());
            },
          }}
          columns={columns}
          dataSource={dataSource}
        />
      </Container>
    </div>
  );
};

export default CVList;
