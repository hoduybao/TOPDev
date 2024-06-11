import { ApplicationStatusEnum } from '@/+core/enums/applicationStatus.enum';
import { useGetMyApplicationsQuery } from '@/+core/redux/apis/common/application/application.api';
import {
  JobDetail,
  MyApplicationRES,
} from '@/+core/redux/apis/common/application/application.response';
import { PagingREQ, initialPagingState } from '@/+core/redux/paging.type';
import { useFilter } from '@/hooks/useFilter';
import { LinkOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import Table, { ColumnGroupType, ColumnType } from 'antd/es/table';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import ApplicationStatus from './ApplicationStatus';
import styles from './headerTable.module.scss';

interface ApplicationStatus {
  name: string;
  createdAt: string;
}
export const Columns = (): (ColumnGroupType<MyApplicationRES> | ColumnType<MyApplicationRES>)[] => {
  const { t } = useTranslation();
  return [
    {
      title: t('id'),
      dataIndex: 'id',
      key: 'id',
      width: 150,
      render: (text: string) => (
        <span className='text-base font-semibold'>{text.toUpperCase()}</span>
      ),
    },
    {
      title: t('jobTitle'),
      dataIndex: 'jobDetail',
      key: 'jobDetail',
      className: 'text-left',
      render: (jobDetail: JobDetail, record) => (
        <div className='flex flex-col gap-1'>
          <div className='text-base font-bold text-primary-red'>{jobDetail?.title}</div>
          <LinkOutlined
            onClick={() => window.open(`${import.meta.env.VITE_ROUTE}/jobs/${record.jobId}`)}
            style={{
              color: '#6dd400',
              cursor: 'pointer',
            }}
          />
        </div>
      ),
    },
    {
      title: t('company'),
      dataIndex: 'jobDetail',
      key: 'jobDetail',
      className: 'text-left',
      render: (jobDetail: JobDetail) => (
        <div className='text-base font-bold text-[#000000D9]'>{jobDetail?.companyName}</div>
      ),
    },
    {
      title: t('appliedAt'),
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt: string) => <span>{dayjs(createdAt).format('DD-MM-YYYY HH:mm:ss')}</span>,
    },
    {
      title: t('latestStatus'),
      key: 'status',
      dataIndex: 'status',
      width: 315,
      render: (status: string) => <ApplicationStatus status={status as ApplicationStatusEnum} />,
    },
  ];
};

export const AppliedJobs = () => {
  const { t } = useTranslation();

  const { filter, handlePageChange } = useFilter<PagingREQ>({
    initialFilter: initialPagingState,
  });

  const { data, isFetching } = useGetMyApplicationsQuery(filter);

  const onChangePage = (page: number, limit: number) => {
    handlePageChange({ page, limit });
  };
  return (
    <Spin spinning={isFetching}>
      <div className=' mb-[2rem] text-lg font-bold text-[#D34127]'>{t('appliedJobs')}</div>
      <Table
        className={styles.headerTable}
        columns={Columns()}
        dataSource={data?.data || []}
        pagination={{
          current: Number(filter.page || initialPagingState.page),
          pageSize: Number(filter.limit) || initialPagingState.limit,
          total: data?.total || 0,
          onChange: onChangePage,
          showSizeChanger: false,
          showQuickJumper: false,
          responsive: true,
        }}
      />
    </Spin>
  );
};
