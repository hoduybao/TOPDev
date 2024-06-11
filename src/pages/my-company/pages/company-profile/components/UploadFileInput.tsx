import { Form, Upload, UploadProps } from 'antd';
import { PictureOutlined } from '@ant-design/icons';

import { FormInstance, Rule } from 'antd/es/form';

import firebaseApp from '../../../../../config/firebase';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

const { Dragger } = Upload;

// type CompanyProfileFields = {
//   logoUrl?: string;
//   coverPhotoUrl?: string;
//   galleriesUrl?: string;
// };

type CustomInputType = {
  name: string;
  label: string;
  rules?: Rule[];
  form?: FormInstance<any>;
  description: string;
};

const UploadFileInput = (props: CustomInputType) => {
  const { name, label, rules, form, description } = props;

  const uploadProps: UploadProps = {
    name: 'file',
    customRequest: async (options: any) => {
      const { onSuccess, onError, file, onProgress } = options;

      console.log('onChange called >>>');

      const handleImageUpload = async () => {
        try {
          const fileName = new Date().getTime() + '-' + file.name;
          const storage = getStorage(firebaseApp);
          const storageRef = ref(storage, `company/profile/${fileName}`);
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

                    if (name === 'logoUrl') form?.setFieldsValue({ logoUrl: downloadURL });
                    if (name === 'coverPhotoUrl')
                      form?.setFieldsValue({ coverPhotoUrl: downloadURL });
                    if (name === 'galleriesUrl')
                      form?.setFieldsValue({ galleriesUrl: downloadURL });
                    if (name === 'photoUrl') form?.setFieldsValue({ photoUrl: downloadURL });

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
    <Form.Item<any>
      label={<p className='text-[15px] font-semibold'>{label}</p>}
      name={name}
      rules={rules}
      initialValue={null}
    >
      <div>
        <p className='mb-2'>{description}</p>
        <Dragger {...uploadProps}>
          <PictureOutlined className='text-[50px]' />
          <p className='ant-upload-hint'>Browse images to upload</p>
        </Dragger>
      </div>
    </Form.Item>
  );
};

export default UploadFileInput;
