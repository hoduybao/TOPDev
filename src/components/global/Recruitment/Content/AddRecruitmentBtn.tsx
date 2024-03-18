import { useState } from 'react';
import { Button, Modal } from 'antd';

const AddRecruitmentBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type='primary' danger onClick={showModal}>
        Mới
      </Button>
      <Modal
        title='Tạo một Vị trí Công việc'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key='add' type='primary' danger>
            Tạo
          </Button>,
          <Button key='cancel' onClick={handleCancel}>
            Hủy bỏ
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default AddRecruitmentBtn;
