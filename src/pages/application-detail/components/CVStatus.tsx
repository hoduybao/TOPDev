import { useUpdateStatusMutation } from '@/+core/redux/apis/common/application/application.api';
import ConfirmModal from '@/components/global/ConfirmModal';
import { Button, Form, notification } from 'antd';
import { Select } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

type StatusFormField = {
  status: string;
};

const CVStatus = ({ status, cvUrl, appId }: { status: string; cvUrl: string; appId: string }) => {
  const [statusForm] = Form.useForm();
  const [openModal, setOpenModal] = React.useState(false);
  const [updateStatus, { isLoading }] = useUpdateStatusMutation();
  const { t } = useTranslation();
  const handleOK = () => {
    updateStatus({ id: appId, status: statusForm.getFieldValue('status') })
      .unwrap()
      .then((rs) => {
        console.log(rs);
        notification.success({
          message: 'Thành công',
          description: 'Thay đổi trạng thái CV thành công',
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setOpenModal(false);
      });
  };

  return (
    <Form initialValues={{ status }} onFinish={() => setOpenModal(true)} form={statusForm}>
      <h3 className='font-bold text-base'>{t('status')}</h3>

      <div className='flex mt-2'>
        <div className='w-[50%] text-sm text-gray-400 font-semibold border border-r-1 border-gray-200 p-2'>
          {t('status')}
        </div>
        <div className='flex-1 text-sm text-blue-400 font-semibold border border-r-1 border-gray-200 p-2'>
          <Form.Item<StatusFormField> name='status'>
            <Select
              className='w-full'
              defaultValue={status}
              // onChange={(value) => {
              //   console.log(`selected ${value}`);
              // }}
              loading={isLoading}
              options={[
                { value: 'PENDING', label: t('pendingCV') },
                { value: 'VIEWING', label: t('viewingCV') },
                { value: 'APPROVED', label: t('approvedCV') },
                { value: 'REJECTED', label: t('rejectedCV') },
              ]}
            />
          </Form.Item>
        </div>
      </div>

      <div className='flex'>
        <div className='w-[50%] text-sm text-gray-400 font-semibold border border-r-[1px] border-gray-200 p-2'>
          {t('origin')}
        </div>
        <div className='flex-1 text-sm text-gray-400 font-semibold border border-r-1 border-gray-200 p-2'>
          Topdev
        </div>
      </div>
      <div>
        <Button
          loading={isLoading}
          htmlType='submit'
          className='mt-4 w-full bg-gray-200 text-black-800 font-semibold rounded'
        >
          {t('changeCVStatus')}
        </Button>
      </div>
      <div className='grid grid-cols-2 gap-2 mt-4'>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(cvUrl);
            notification.success({
              message: 'Đã sao chép',
              description: 'Đã sao chép link CV',
            });
          }}
          className='col-span-1 w-full bg-gray-200 text-black-800 font-semibold rounded'
        >
          {t('shareCV')}
        </Button>
        <Button className='col-span-1 w-full bg-gray-200 text-black-800 font-semibold rounded'>
          <a href={cvUrl} target='_blank' rel='noopener noreferrer'>
            {t('downloadCV')}
          </a>
        </Button>
      </div>
      <div className='w-full border border-b-[1px] border-black-100 mt-4 mb-3'></div>
      <ConfirmModal
        open={openModal}
        setOpen={setOpenModal}
        handleOk={handleOK}
        isLoadingBtn={isLoading}
        // isLoadingBtn={isLoadingCreate || isLoadingUpdate}
      >
        {t('confirmCVChange')}
      </ConfirmModal>
    </Form>
  );
};

export default CVStatus;
