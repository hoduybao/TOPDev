import {
  useGetJobsByCompanyIdQuery,
  useUpdateJobStatusMutation,
} from '@/+core/redux/apis/common/job-service/job-service.api';
import { FilterPostCompanyTypeREQ } from '@/+core/redux/apis/common/job-service/job-service.request';
import ConfirmModal from '@/components/global/ConfirmModal';
import { useFilter } from '@/hooks/useFilter';
import { Spin, Table, notification } from 'antd';
import { useEffect, useState } from 'react';
import { Columns } from './components/Columns';
import { FilterPost } from './components/FilterPost';

export const ManageJobs = () => {
  const [openModal, setOpenModal] = useState<{
    id: string;
    status: string;
  } | null>(null);

  const [status, setStatus] = useState<string>('ALL');
  const { filter, handleFilterChange } = useFilter<FilterPostCompanyTypeREQ>({
    initialFilter: {
      page: 1,
      limit: 10,
    },
  });

  const { data, isFetching } = useGetJobsByCompanyIdQuery(filter);
  const [updateJobStatus, { isLoading }] = useUpdateJobStatusMutation();

  const handleOK = () => {
    updateJobStatus({
      id: openModal?.id as string,
      status: openModal?.status as string,
    })
      .unwrap()
      .then(() => {
        notification.success({
          message: 'Success!',
          description:
            openModal?.status === 'HIDE' ? 'Đã ẩn tin tuyển dụng' : 'Đã hiển thị tin tuyển dụng',
          duration: 3,
        });
        setOpenModal(null);
      });
  };

  useEffect(() => {
    if (filter) {
      setStatus(filter.status || 'ALL');
    }
  }, [filter]);

  return (
    <div className='w-full flex justify-center mt-4'>
      <div className='w-[90%]'>
        <Spin spinning={isFetching}>
          <div className='flex flex-col gap-4'>
            <FilterPost
              setStatus={setStatus}
              status={status}
              handleFilterChange={handleFilterChange}
              filter={filter}
            />
            <Table
              className='post-company-table !w-full'
              columns={Columns(setOpenModal)}
              dataSource={data?.data}
              bordered
            />
          </div>
        </Spin>
      </div>
      <ConfirmModal
        open={openModal !== null}
        handleCancel={() => {
          setOpenModal(null);
        }}
        handleOk={handleOK}
        isLoadingBtn={isLoading}
      >
        {openModal?.status === 'HIDE'
          ? 'Bạn có chắc chắn muốn ẩn tin tuyển dụng này?'
          : 'Bạn có chắc chắn muốn hiển thị tin tuyển dụng này?'}
      </ConfirmModal>
    </div>
  );
};
