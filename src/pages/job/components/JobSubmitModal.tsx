import { JobResponse } from '@/+core/redux/apis/common/job/job.response';
import { CustomJobResponse } from '@/+core/redux/apis/common/job/job.types';
import { getEmail } from '@/+core/services/local.service';
import { Button, Form, Input, Modal, notification, Upload, UploadProps } from 'antd';
import { FormInstance, Rule } from 'antd/es/form';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import {
  ApplicationFields,
  useCreateApplicationMutation,
} from '../../../+core/redux/apis/common/application/application.api';
import UserSubmitButton from '../../../components/ui/button/UserSubmitButton';
import firebaseApp from '../../../config/firebase';
type CustomInputType = {
  label: string;
  name?: string;
  rules?: Rule[];
  form?: FormInstance<ApplicationFields>;
};

const CustomInputFile = (props: CustomInputType) => {
  const { label, rules, form } = props;

  const uploadProps: UploadProps = {
    name: 'file',
    customRequest: async (options: any) => {
      const { onSuccess, onError, file, onProgress } = options;

      console.log('onChange called >>>');

      const handleImageUpload = async () => {
        try {
          const fileName = new Date().getTime() + '-' + file.name;
          const storage = getStorage(firebaseApp);
          const storageRef = ref(storage, `company/cv/${fileName}`);
          const uploadTask = uploadBytesResumable(storageRef, file);

          await new Promise<void>((resolve, reject) => {
            uploadTask.on(
              'state_changed',
              (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                onProgress({ percent: progress });
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
                    onSuccess('Ok');
                    console.log('File available at', downloadURL);
                    form?.setFieldsValue({ cvUrl: downloadURL });
                    resolve();
                  })
                  .catch((err) => {
                    console.log('err>>>', err);
                    onError(err);
                    reject(err);
                  });
              },
            );
          });
        } catch (error) {
          // setIsLoading(false);
          console.error('error>>>', error);
        }
      };
      await handleImageUpload();
    },
  };

  return (
    <Form.Item<ApplicationFields>
      label={label}
      name='cvUrl'
      rules={rules}
      labelCol={{ span: 4 }}
      labelAlign='left'
      className='my-4'
      initialValue={null}
    >
      <Upload {...uploadProps}>
        <Button>Click to Upload</Button>
      </Upload>
    </Form.Item>
  );
};

const CustomInputTextArea = (props: CustomInputType) => {
  const { label, rules } = props;
  const [value, setValue] = React.useState('');
  return (
    <Form.Item<ApplicationFields>
      label={label && <label className='whitespace-normal w-full'>{label}</label>}
      name='description'
      rules={rules}
      labelCol={{ span: 4 }}
      labelAlign='left'
      className='mb-[50px]'
    >
      <ReactQuill
        theme='snow'
        value={value}
        style={{ height: '150px' }}
        onChange={(value) => {
          setValue(value);
        }}
      />
    </Form.Item>
  );
};

const ApplicationForm = ({ closeModal }: { closeModal: () => void }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { jobId } = useParams<{ jobId: string }>();
  const [addNewApplication, { isLoading }] = useCreateApplicationMutation();

  const email = getEmail();
  console.log(email);

  // logic handlers
  const onFinish = async () => {
    console.log('handle onFinish');

    const value = form.getFieldsValue();
    value.jobId = jobId;

    value.description = value?.description || '';

    try {
      const resp = await addNewApplication(value).unwrap();
      console.log('resp>>', resp);
      if (resp.statusCode === 200) {
        notification.success({
          message: 'Success!',
          description: resp && resp.message, // An error occurred.
        });
        closeModal();
      } else {
        throw new Error('An error occurred.');
      }
    } catch (error) {
      console.log('error>>>', error);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    closeModal();
  };

  useEffect(() => {
    if (email) {
      form.setFieldValue('email', email);
    }
  }, [email]);

  return (
    <Form
      form={form}
      name='applicationForm'
      onFinish={onFinish}
      onFinishFailed={(error) => {
        console.log('error>>>', error);
      }}
      colon={false}
    >
      <Form.Item<ApplicationFields>
        label={t('form.fullName')}
        name='fullName'
        rules={[{ required: true, message: 'Please input your username!' }]}
        labelCol={{ span: 4 }}
        labelAlign='left'
        className='my-4 '
      >
        <Input className='h-[40px]' />
      </Form.Item>

      <Form.Item<ApplicationFields>
        label={t('form.email')}
        name='email'
        rules={[{ required: true, message: 'Please input your email!' }]}
        labelCol={{ span: 4 }}
        labelAlign='left'
        className='my-4 '
      >
        <Input className='h-[40px]' disabled={email != null && email != '' && email != undefined} />
      </Form.Item>

      <Form.Item<ApplicationFields>
        label={t('form.phone')}
        name='phone'
        rules={[{ required: true, message: 'Please input your phone!' }]}
        labelCol={{ span: 4 }}
        labelAlign='left'
        className='my-4 '
      >
        <Input className='h-[40px]' />
      </Form.Item>

      <CustomInputFile
        label={t('form.cv')}
        form={form}
        name='cv'
        rules={[{ required: true, message: 'Please input your cv!' }]}
      />

      <CustomInputTextArea label={t('form.description')} />

      <div className='flex justify-end gap-2 '>
        <UserSubmitButton
          customClass='p-1 border-none text-gray-900'
          isFullWidth={false}
          name={t('form.cancel')}
          onClick={handleCancel}
        />
        <UserSubmitButton
          customClass='px-6'
          isFullWidth={false}
          name={t('form.submitcv')}
          htmlType='submit'
          onClick={() => {
            form.submit();
          }}
          isFilled
          isLoad={isLoading}
        />
      </div>
    </Form>
  );
};

const JobSubmitModal = ({ data }: { data: CustomJobResponse<JobResponse> | undefined }) => {
  const { t } = useTranslation();

  // modal handlers ui
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className='mb-2'>
      <UserSubmitButton name={t('applyJob')} onClick={() => setIsModalOpen(true)} isFilled />
      <Modal
        width={'100%'}
        style={{ maxWidth: '800px' }}
        title={
          <div className='text-xl'>
            {t('youApply')}
            <span className='text-orange-600'> {data?.data?.title} </span>
            {t('at')} {data?.data?.company?.name}
          </div>
        }
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <ApplicationForm closeModal={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default JobSubmitModal;
