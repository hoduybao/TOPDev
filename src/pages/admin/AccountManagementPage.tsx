import AccountTable from '@/pages/admin/components/accounts-management/PendingAccountTable';
import { CheckOutlined, ClockCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { notification, Pagination, Spin, Tabs, TabsProps } from 'antd';
import { useState } from 'react';
import '../../styles/admin/management-page.module.scss';
import { RootState, selectIsLogin } from '@/+core/redux/auth/authSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  useUpdateHRAccountsMutation,
  useGetHRAccountsQuery,
  useUpdateHRMutation,
} from '@/+core/redux/apis/admin/account-management/admin-service.api';
import { useTranslation } from 'react-i18next';

const AccountManagementPage = () => {
  const state = useSelector((state: RootState) => state);
  const isLogin = selectIsLogin(state);
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const { data, isLoading, isFetching } = useGetHRAccountsQuery(pagination);
  const [updateHRStatus, { isLoading: isActivatingHRAccounts }] = useUpdateHRAccountsMutation();
  const [rejectHR, { isLoading: isRejectingHR }] = useUpdateHRMutation();
  const { t } = useTranslation();

  console.log('isLogin', isLogin);

  if (!isLogin) {
    navigate('/admin/login');
  }

  const [tabKey, setTabKey] = useState<string>('1');

  const handleApprove = async (hrIds: string[]) => {
    try {
      const message = await updateHRStatus({ hrIds, status: 1 }).unwrap();
      notification.success({
        message: t('success'),
        description: message,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (hrIds: string[]) => {
    try {
      const message = await updateHRStatus({ hrIds, status: -1 }).unwrap();

      notification.success({
        message: t('success'),
        description: message,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleRejectReason = async (hrId: string, reason: string) => {
    try {
      const message = await rejectHR({ hrId, reason }).unwrap();
      notification.success({
        message: t('success'),
        description: message,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <div className='flex items-center'>
          <ClockCircleOutlined />
          <p>{t('pending')}</p>
        </div>
      ),
      children: (
        <AccountTable
          data={data?.accounts || []}
          status={0}
          approveAccounts={handleApprove}
          rejectAccounts={handleReject}
          handleRejectReason={handleRejectReason}
        />
      ),
    },
    {
      key: '2',
      label: (
        <div className='flex items-center'>
          <CheckOutlined />
          <p>{t('approve')}</p>
        </div>
      ),
      children: <AccountTable data={data?.accounts || []} status={1} />,
    },
    {
      key: '3',
      label: (
        <div className='flex items-center'>
          <CloseOutlined />
          <p>{t('reject')}</p>
        </div>
      ),
      children: <AccountTable data={data?.accounts || []} status={-1} />,
    },
  ];

  const handleChangePage = async (page: number, pageSize: number) => {
    console.log(page, pageSize);

    // setPagination({ page, limit: pageSize });
    // await refetch();
  };

  return (
    <>
      <Spin spinning={isLoading || isActivatingHRAccounts || isRejectingHR || isFetching}>
        <div className='w-full h-screen font-roboto px-4'>
          {/* <div className='py-2'>
        <span className='font-bold text-xl text-black-400'>Account Manager</span>
      </div>

      <Divider
        className='font-bold bg-orange-500 my-2'
        style={{ borderBlockStart: '3px solid rgba(5, 5, 5, 0.06)' }}
      /> */}
          <div className='mt-2 mb-4 w-full flex gap-2'>
            {/* <div className='w-[250px] flex items-center justify-center border-solid border-[1.5px] border-gray-500 rounded '>
          <h1>Filter</h1>
        </div> */}
            {/* Content */}
            <div className='w-full p-2 border-solid border-[1.5px] rounded bg-white-700'>
              <Tabs
                size='large'
                defaultActiveKey='1'
                items={items}
                onChange={(key) => setTabKey(key)}
              />
              <div className='flex justify-end'>
                {/* Thêm class "justify-end" để căn phải */}
                <Pagination
                  className='mt-5'
                  defaultCurrent={pagination.page}
                  total={data?.total || 0}
                  pageSize={pagination.limit}
                  onChange={handleChangePage}
                />
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </>
  );
};

export default AccountManagementPage;
