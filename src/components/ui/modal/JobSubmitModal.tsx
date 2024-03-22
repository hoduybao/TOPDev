import React from 'react';
import { Form, Modal, notification, Spin } from 'antd';
// import companyData from '../../../draft/company.json';
// import jobData from '../../../draft/job.json';
// import formData from '../../../draft/application.json';
import UserSubmitButton from '../button/UserSubmitButton';
import { useParams } from 'react-router-dom';
import { useGetJobByIdQuery } from '../../../+core/redux/apis/common/job/job.api';
import { useGetCompanyByIdQuery } from '../../../+core/redux/apis/common/company/company.api';
import { CustomTextInput } from '../form/CustomTextInput';
import firebaseApp from '../../../config/firebase';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useCreateApplicationMutation } from '../../..//+core/redux/apis/common/application/application.api';

const JobSubmitModal = () => {
  const { jobId, companyId } = useParams<{ jobId: string; companyId: string }>();
  const { data: jobResponse, isLoading } = useGetJobByIdQuery(jobId);
  const { data: companyResponse, isLoading: isLoadingCompany } = useGetCompanyByIdQuery(companyId);
  const [addNewApplication] = useCreateApplicationMutation();

  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    let value = form.getFieldsValue();
    value.jobId = jobId;
    value.userId = 'user1'; // TODO: get user id from redux
    const resp = await addNewApplication(value).unwrap();
    notification.success({
      message: 'Success!',
      description: resp && resp.message,
    });
    setIsModalOpen(false);
    form.resetFields();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

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
            <Form form={form} name='applicationForm'>
              <CustomTextInput label='Họ và tên' name='name' />
              <CustomTextInput label='Email' name='email' />
              <CustomTextInput label='Số điện thoại' name='phone' />
              <CustomTextInput label='Đoạn giới thiêụ bản thân' name='note' />
              <input
                name='cv'
                onChange={async (e) => {
                  if (!e.target.files || !e.target.files[0]) {
                    return;
                  }
                  const file = e.target.files && e.target.files[0];
                  const handleImageUpload = async () => {
                    try {
                      const fileName = new Date().getTime() + '-' + file.name;

                      const storage = getStorage(firebaseApp);
                      const storageRef = ref(storage, `company/${companyId}/cv/${fileName}`);
                      const uploadTask = uploadBytesResumable(storageRef, file);

                      await new Promise<void>((resolve, reject) => {
                        uploadTask.on(
                          'state_changed',
                          (snapshot) => {
                            const progress =
                              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log('Upload is ' + progress + '% done');
                            switch (snapshot.state) {
                              case 'paused':
                                console.log('Upload is paused');
                                break;
                              case 'running':
                                console.log('Upload is running');
                                break;
                            }
                          },
                          (err) => {
                            console.log('err>>>', err);
                            reject(err);
                          },
                          () => {
                            getDownloadURL(uploadTask.snapshot.ref)
                              .then((downloadURL) => {
                                form.setFieldValue('cvUrl', downloadURL);
                                resolve();
                              })
                              .catch((err) => {
                                console.log('err>>>', err);
                                reject(err);
                              });
                          },
                        );
                      });
                    } catch (error) {
                      // setIsLoading(false);
                    }
                  };
                  await handleImageUpload();
                }}
                type='file'
              />
              <CustomTextInput label='CV Url' name='cvUrl' />
            </Form>
          </Modal>
        </div>
      )}
    </Spin>
  );
};

export default JobSubmitModal;
