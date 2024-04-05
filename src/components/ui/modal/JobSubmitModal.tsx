import React from 'react';
import { Button, Form, Input, Modal, notification, Spin, Upload } from 'antd';
import companyData from '../../../draft/company-new.json';
import jobData from '../../../draft/jsob-new.json';
// import formData from '../../../draft/application.json';
import UserSubmitButton from '../button/UserSubmitButton';
import { useParams } from 'react-router-dom';
// import { useGetJobByIdQuery } from '../../../+core/redux/apis/common/job/job.api';
// import { useGetCompanyByIdQuery } from '../../../+core/redux/apis/common/company/company.api';
import firebaseApp from '../../../config/firebase';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useCreateApplicationMutation } from '../../..//+core/redux/apis/common/application/application.api';
import { Rule } from 'antd/es/form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './react-quill.css';
type CustomInputType = {
  label: string;
  name: string;
  rules: Rule[];
};

const CustomInputText = (props: CustomInputType) => {
  const { label, name, rules } = props;
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      labelCol={{ span: 6 }}
      labelAlign='left'
      className='my-4 '
    >
      <Input className='h-[40px]' />
    </Form.Item>
  );
};

const CustomInputFile = (props: CustomInputType) => {
  const { label, name, rules } = props;
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      labelCol={{ span: 6 }}
      labelAlign='left'
      className='my-4 '
    >
      <Upload>
        <Button>Click to Upload</Button>
      </Upload>
    </Form.Item>
  );
};

const CustomInputTextArea = (props: CustomInputType) => {
  const { label, name, rules } = props;
  const [value, setValue] = React.useState('');
  return (
    <Form.Item
      label={label && <label className='whitespace-normal w-full'>{label}</label>}
      name={name}
      rules={rules}
      labelCol={{ span: 6 }}
      labelAlign='left'
      className='my-4'
    >
      <ReactQuill
        theme='snow'
        value={value}
        // className='max-h-[100px] overflow-y-scroll'
        onChange={(value) => {
          console.log(value);
          setValue(value);
        }}
      />
    </Form.Item>
  );
};

const JobSubmitModal = () => {
  const { jobId, companyId } = useParams<{ jobId: string; companyId: string }>();
  // const { data: jobResponse, isLoading } = useGetJobByIdQuery(jobId);
  // const { data: companyResponse, isLoading: isLoadingCompany } = useGetCompanyByIdQuery(companyId);

  const isLoading = false;
  const isLoadingCompany = false;
  const jobResponse = { data: jobData };
  const companyResponse = { data: companyData };

  const [addNewApplication] = useCreateApplicationMutation();

  const [form] = Form.useForm();

  console.log(firebaseApp);

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    let value = form.getFieldsValue();
    console.log(value);

    value.jobId = jobId;
    value.userId = 'user1'; // TODO: get user id from redux
    const resp = await addNewApplication(value).unwrap();
    notification.success({
      message: 'Success!',
      description: resp && resp.message, // An error occurred.
    });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Spin spinning={isLoading || isLoadingCompany}>
      {jobResponse && companyResponse && (
        <div className='mb-2'>
          <UserSubmitButton name='Ứng tuyển ngay' onClick={showModal} isFilled />
          <Modal
            width={'100%'}
            style={{ maxWidth: '800px' }}
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
                <UserSubmitButton
                  customClass='p-1 border-none text-gray-900'
                  isFullWidth={false}
                  name='Hủy'
                  onClick={handleCancel}
                />
                <UserSubmitButton
                  customClass='px-6'
                  isFullWidth={false}
                  name='Nộp CV'
                  onClick={handleOk}
                  isFilled
                />
              </div>,
            ]}
          >
            <Form form={form} name='applicationForm'>
              <CustomInputText
                label='Họ và tên'
                name='name'
                rules={[{ required: true, message: 'Please input your username!' }]}
              />
              <CustomInputText
                label='Email'
                name='email'
                rules={[{ required: true, message: 'Please input your email!' }]}
              />
              <CustomInputText
                label='Số điện thoại'
                name='phone'
                rules={[{ required: true, message: 'Please input your phone!' }]}
              />
              <CustomInputFile
                label='CV'
                name='cv'
                rules={[{ required: true, message: 'Please input your cv!' }]}
              />
              <CustomInputTextArea
                label='Đoạn giới thiệu bản thân'
                name='note'
                rules={[{ required: true, message: 'Please input your note!' }]}
              />

              {/* <CustomTextInput label='Đoạn giới thiêụ bản thân' name='note' />
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
              <CustomTextInput label='CV Url' name='cvUrl' /> */}
            </Form>
          </Modal>
        </div>
      )}
    </Spin>
  );
};

export default JobSubmitModal;
