import { Button, Modal } from 'antd';
import { useEffect, useState } from 'react';

type ModalConfirmProps = {
  message: string;
  loadingMessage?: string;
  isOpen: boolean;
  setIsOpen: (data?: any) => void;
  onConfirm: () => void;
  className?: string;
};

const ModalConfirm = ({
  message,
  loadingMessage,
  isOpen,
  setIsOpen,
  onConfirm,
  className,
}: ModalConfirmProps) => {
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    setIsClick(false);
  }, [isOpen]);

  const clickConfirm = () => {
    setIsClick(true);
    onConfirm();
  };

  return (
    <Modal
      open={isOpen}
      centered
      okButtonProps={{ style: { display: 'none' } }}
      cancelButtonProps={{ style: { display: 'none' } }}
      onCancel={() => setIsOpen(false)}
      closable={false}
      width={368}
      className={className}
    >
      <p className='text-center text-lg font-semibold'>
        {isClick ? <>{loadingMessage ? loadingMessage : 'In progress...'}</> : <>{message}</>}
      </p>

      <div className='mt-6 flex justify-center gap-4'>
        <Button
          onClick={() => setIsOpen(false)}
          className='bg-primary-900 w-[138px] h-[54px] text-base text-white'
        >
          Không
        </Button>
        <Button
          onClick={clickConfirm}
          className='bg-primary-900 w-[138px] h-[54px] text-base text-white'
          loading={isClick}
        >
          Có
        </Button>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
