import { Button, Modal } from 'antd';
import { PropsWithChildren } from 'react';

type ConfirmModalProps = PropsWithChildren<{
  open: boolean;
  setOpen?: (open: boolean) => void;
  handleOk?: () => void;
  handleCancel?: () => void;
  btnOkText?: string;
  btnCancelText?: string;
  isLoadingBtn?: boolean;
}>;

export default function ConfirmModal({
  open,
  setOpen,
  handleOk,
  handleCancel,
  isLoadingBtn,
  children,
}: ConfirmModalProps) {
  return (
    <Modal centered open={open} closable={false} footer={null} className='w-full md:!w-[494px]'>
      <div className='flex flex-col gap-8 md:gap-[45px] px-4 md:px-6  py-6'>
        <div className='text-base font-normal font-pretendard text-grey-13 self-center'>
          {children}
        </div>

        <div className='self-center flex flex-row gap-4'>
          <Button
            onClick={() => {
              if (handleCancel) {
                handleCancel();
              } else {
                setOpen && setOpen(false);
              }
            }}
            className='!w-[150px] !py-2.5 !h-[46px] !bg-gray-100 !text-black-900 text-base !border-[#E7E5E4] shadow-md hover:!text-black-900 !font-semibold'
          >
            Hủy
          </Button>

          <Button
            loading={isLoadingBtn}
            type='primary'
            onClick={() => {
              if (handleOk) {
                handleOk();
              } else {
                setOpen && setOpen(false);
              }
            }}
            className='!px-[48px] !w-[150px] !py-2.5 !h-[46px] !bg-primary-red !font-semibold'
          >
            Xác nhận
          </Button>
        </div>
      </div>
    </Modal>
  );
}
