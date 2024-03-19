import React from 'react';
import { Form, Modal, Spin } from 'antd';
// import companyData from '../../../draft/company.json';
// import jobData from '../../../draft/job.json';
// import formData from '../../../draft/application.json';
import UserSubmitButton from '../button/UserSubmitButton';
import { useParams } from 'react-router-dom';
import { useGetJobByIdQuery } from '../../../+core/redux/apis/common/job/job.api';
import { useGetCompanyByIdQuery } from '../../../+core/redux/apis/common/company/company.api';
import { CustomTextInput } from '../form/CustomTextInput';

const JobSubmitModal = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    console.log(form.getFieldsValue());
    // setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmitForm = (values: any) => {
    console.log(values);
  };

  const { jobId, companyId } = useParams<{ jobId: string; companyId: string }>();
  const { data: jobResponse, isLoading } = useGetJobByIdQuery(jobId);
  const { data: companyResponse, isLoading: isLoadingCompany } = useGetCompanyByIdQuery(companyId);

  return (
    <Spin spinning={isLoading || isLoadingCompany}>
      {jobResponse && companyResponse && (
        <div className='mb-2'>
          <UserSubmitButton name='Ứng tuyển ngay' onClick={showModal} isFilled />
          <Modal
            width='60%'
            title={
              <div className='text-xl'>
                Bạn đang ứng tuyển
                <span className='text-orange-600'> {jobResponse.data.title} </span>
                tại {companyResponse.data.name}
              </div>
            }
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <div className='flex justify-end gap-2 '>
                <UserSubmitButton isFullWidth={false} name='Hủy' onClick={handleCancel} />
                <UserSubmitButton isFullWidth={false} name='Nộp CV' onClick={handleOk} isFilled />
              </div>,
            ]}
          >
            <Form form={form} name='applicationForm' onFinish={onSubmitForm}>
              <CustomTextInput label='Họ và tên' name='name' />
              <CustomTextInput label='Email' name='email' />
              <CustomTextInput label='Số điện thoại' name='phone' />
              <CustomTextInput label='Đoạn giới thiêụ bản thân' name='intro' />
              <CustomTextInput type='file' label='CV của bạn' name='cv' />
            </Form>
          </Modal>
        </div>
      )}
    </Spin>
  );
};

export default JobSubmitModal;
