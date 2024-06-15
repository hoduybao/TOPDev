import { Button, Table } from 'antd';
import dayjs from 'dayjs';

import { JobTypeEnum, JobTypeTranslation } from '@/+core/enums/job.enum';
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
      render: (text: string) => <span>{text.toUpperCase()}</span>,
      width: 150,
    },
    {
      title: <span className='capitalize'>{t('candidate')}</span>,
      dataIndex: 'fullName',
      width: 150,
    },
    {
      title: t('job'),
      width: 350,
      render(value: Application) {
        console.log(value);

        return (
          <div>
            <div>
              <div className='text-base font-semibold'>{value?.jobDetail?.title}</div>
              <div>{JobTypeTranslation[value?.jobDetail?.jobType as JobTypeEnum]}</div>
            </div>
          </div>
        );
      },
    },
    {
      title: t('contactInfo'),
      width: 250,
      ellipsis: true,
      render(record) {
        console.log(record);

        return (
          <div>
            <div className=''>
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
      width: 150,
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
      width: 150,
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
      title: <span>{t('status')}</span>,
      width: 100,
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
          scroll={{ x: 900 }}
          columns={columns}
          dataSource={dataSource}
        />
      </Container>
    </div>
  );
};

export default CVList;
