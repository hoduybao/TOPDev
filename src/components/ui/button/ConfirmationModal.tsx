import { Button, Modal } from 'antd';
import React from 'react';

export type ConfirmationModalProps = {
  visible: boolean;
  onConfirm?: () => void;
  onCancel: () => void;
  title?: string;
  content?: string;
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  onConfirm,
  onCancel,
  title = 'Confirm Action',
  content = 'Are you sure you want to proceed?',
}: ConfirmationModalProps) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onConfirm}
      onCancel={onCancel}
      footer={[
        <Button key='cancel' onClick={onCancel}>
          Cancel
        </Button>,
        <Button key='confirm' type='primary' onClick={onConfirm}>
          Confirm
        </Button>,
      ]}
    >
      <p>{content}</p>
    </Modal>
  );
};

export default ConfirmationModal;
