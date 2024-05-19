import { PostStatusEnum } from '@/+core/enums/postStatus.enum';
import { ListJobsRES } from '@/+core/redux/apis/common/job-service/job-service.response';
import { ArrowUpOutlined, EditOutlined, PauseOutlined, SettingOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { ColumnGroupType, ColumnType } from 'antd/es/table';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PostStatus from './PostStatus';

export const Columns = (): (ColumnGroupType<ListJobsRES> | ColumnType<ListJobsRES>)[] => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return [
    {
      title: t('jobPosting'),
      dataIndex: 'id',
      align: 'left',
      render: (_, record) => (
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <PostStatus status={record.status as PostStatusEnum} />
            <span className='text-base font-semibold'>{record.title}</span>
          </div>
          <span className='!px-3 py-1 bg-primary-100 text-primary-red w-fit rounded-sm cursor-pointer hover:bg-primary-red hover:text-white-900'>
            Xem CV ứng tuyển
          </span>
        </div>
      ),
    },
    {
      title: (
        <SettingOutlined
          style={{
            fontSize: '20px',
            color: '#000000',
          }}
        />
      ),
      dataIndex: 'status',
      align: 'center',
      width: 50,
      render: (_, record) => (
        <div className='flex flex-col items-center gap-6'>
          <Tooltip placement='right' title={t('edit')}>
            <EditOutlined
              className='cursor-pointer'
              style={{
                fontSize: '20px',
                color: '#000000',
              }}
              onClick={() => {
                navigate(`/company/manage-jobs/${record.id}`);
              }}
            />
          </Tooltip>
          <Tooltip placement='right' title={t('stopShowing')}>
            <PauseOutlined
              className='cursor-pointer'
              style={{
                fontSize: '20px',
                color: '#000000',
              }}
            />
          </Tooltip>
          <Tooltip placement='right' title={t('show')}>
            <ArrowUpOutlined
              className='cursor-pointer'
              style={{
                fontSize: '20px',
                color: '#000000',
              }}
            />
          </Tooltip>
        </div>
      ),
    },
    {
      title: t('numberOfCandidates'),
      dataIndex: 'appliedCount',
      align: 'center',
    },
    {
      title: t('createdAt'),
      dataIndex: 'createdAt',
      align: 'center',
      render: (text) => <span>{dayjs(text).format('DD-MM-YYYY') || '-'}</span>,
    },
    {
      title: t('expirationDate'),
      dataIndex: 'endDate',
      align: 'center',
    },
  ];
};
