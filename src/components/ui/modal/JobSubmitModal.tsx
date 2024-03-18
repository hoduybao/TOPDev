import React from 'react';
import { Modal } from 'antd';
import companyData from '../../../draft/company.json';
import jobData from '../../../draft/job.json';
// import formData from '../../../draft/application.json';
import UserSubmitButton from '../button/UserSubmitButton';

const JobSubmitModal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const FormRow = ({ children }: { children: React.ReactNode }) => {
    return <div className='grid grid-cols-12 text-base items-center my-4'>{children}</div>;
  };

  const labelCss = 'col-span-2 font-semibold';
  const inputCss = 'col-span-10 border rounded py-2 border-black-500';
  return (
    <div className='mb-2'>
      <UserSubmitButton name='Ứng tuyển ngay' onClick={showModal} isFilled />
      <Modal
        width='60%'
        title={
          <div className='text-xl'>
            Bạn đang ứng tuyển
            <span className='text-orange-600'> {jobData.title} </span>
            tại {companyData.name}
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className='flex justify-end gap-2 '>
            <UserSubmitButton isFullWidth={false} name='Hủy' onClick={handleCancel} />
            <UserSubmitButton isFullWidth={false} name='Nộp CV' onClick={() => {}} isFilled />
          </div>,
        ]}
      >
        <form action=''>
          <FormRow>
            <label className={labelCss} htmlFor='name'>
              Họ và tên
            </label>
            <input className={inputCss} type='text' id='name' />
          </FormRow>
          <FormRow>
            <label className={labelCss} htmlFor='email'>
              Email
            </label>
            <input className={inputCss} type='text' id='email' />
          </FormRow>
          <FormRow>
            <label className={labelCss} htmlFor='phone'>
              Số điện thoại
            </label>
            <input className={inputCss} type='text' id='phone' />
          </FormRow>
          <FormRow>
            <label className={labelCss} htmlFor='cv'>
              CV của bạn
            </label>
            <input className='col-span-10 ' type='file' id='cv' />
          </FormRow>
          <FormRow>
            <label className={labelCss} htmlFor='intro'>
              Đoạn giới thiêụ bản thân
            </label>
            <textarea id='intro' className='col-span-10 border rounded py-2 border-black-500' />
          </FormRow>
        </form>
      </Modal>
    </div>
  );
};

export default JobSubmitModal;
