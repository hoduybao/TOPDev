import {
  CloudDownloadOutlined,
  CloudUploadOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import { Button, Modal, Spin, Table, notification } from 'antd';
import { ColumnGroupType, ColumnType } from 'antd/es/table';
import { PiWarningCircleLight } from 'react-icons/pi';

import {
  useGetCandidateInforQuery,
  useUploadCVMutation,
} from '@/+core/redux/apis/common/cv/cv.api';
import { MyCv } from '@/+core/redux/apis/common/cv/cv.response';
import firebaseApp from '@/config/firebase';
import dayjs from 'dayjs';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { ChangeEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './headerTable.module.scss';

interface JobType {
  jobName: string;
  companyName: string;
  createdAt: string;
}

export const Columns = (): (ColumnGroupType<MyCv> | ColumnType<MyCv>)[] => {
  const { t } = useTranslation();
  return [
    {
      title: t('cvName'),
      dataIndex: 'name',
      key: 'name',
      width: 280,
      align: 'center',
      render: (text) => <span className='text-base font-semibold'>{text}</span>,
    },
    {
      title: t('completeStatus'),
      dataIndex: 'listJobApplied',
      key: 'listJobApplied',
      className: 'text-left',
      render: () => (
        <div className='flex items-center gap-3'>
          <PiWarningCircleLight size={18} />
          <span className={`text-base text-[#393e46] italic`}>{t('notYetAppliedForAnyJob')}</span>
        </div>
      ),
      // appliedJos && appliedJos?.length < 1 ? (
      //   <div className='flex items-center gap-3'>
      //     <PiWarningCircleLight size={18} />
      //     <span className={`text-base text-[#393e46] italic`}>{t('notYetAppliedForAnyJob')}</span>
      //   </div>
      // ) : (
      //   <div className='flex flex-col gap-4'>
      //     {appliedJos.map((job, index) => (
      //       <div className='flex items-center gap-3' key={index}>
      //         <CheckCircleFilled
      //           style={{
      //             color: '#0BC763',
      //           }}
      //         />
      //         <span className={`text-base text-[#000000d9] italic`}>
      //           {t('haveAppliedForJob', {
      //             jobName: job.jobName,
      //             companyName: job.companyName,
      //             createdAt: job.createdAt,
      //           })}
      //         </span>
      //       </div>
      //     ))}
      //   </div>
      // ),
    },
    {
      title: t('lastEditedAt'),
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      align: 'center',
      width: 220,
      render: (text) => <span>{dayjs(text).format('DD-MM-YYYY HH:mm:ss')}</span>,
    },
    {
      title: t('action'),
      key: 'action',
      dataIndex: 'action',
      width: 200,
      align: 'center',
      render: (_, record) => (
        <div className='flex gap-3 justify-center'>
          <a href={record.link} target='_blank' rel='noreferrer'>
            <EyeOutlined style={{ fontSize: '24px' }} />
          </a>
          <EditOutlined style={{ fontSize: '24px' }} />
          <CloudDownloadOutlined style={{ fontSize: '24px' }} />
          <DeleteOutlined style={{ fontSize: '24px' }} />
        </div>
      ),
    },
  ];
};

export const CVManagement = () => {
  const [openModalUpload, setOpenModalUpload] = useState(false);
  const [cv, setCv] = useState<File | null>();
  const [loadingUploadFile, setLoadingUploadFile] = useState(false);

  const { t } = useTranslation();
  const inputFile = useRef(null);

  const { data, isFetching } = useGetCandidateInforQuery({});
  const [uploadCV, { isLoading }] = useUploadCVMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCv(e.target.files != null ? e.target.files[0] : null);
  };
  const handleImageUpload = async () => {
    setLoadingUploadFile(true);
    try {
      const fileName = new Date().getTime() + '-' + cv?.name;
      const storage = getStorage(firebaseApp);
      const storageRef = ref(storage, `company/cv/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, cv as File);

      await new Promise<void>((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
            setLoadingUploadFile(false);
            reject(err);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                console.log('File available at', downloadURL);
                setLoadingUploadFile(false);
                uploadCV({ link: downloadURL, name: cv?.name || '' })
                  .unwrap()
                  .then(() => {
                    setOpenModalUpload(false);
                    notification.success({
                      message: 'Success!',
                      description: 'Tải CV lênthành công',
                      duration: 3,
                    });
                  });
                resolve();
              })
              .catch((err) => {
                console.log('err>>>', err);
                setLoadingUploadFile(false);
                reject(err);
              });
          },
        );
      });
    } catch (error) {
      setLoadingUploadFile(false);
      console.error('error>>>', error);
    }
  };
  const handleSaveCV = async () => {
    await handleImageUpload();
  };

  return (
    <Spin spinning={isFetching}>
      <div className='flex justify-end mb-4'>
        <Button
          onClick={() => {
            setOpenModalUpload(true);
          }}
          type='primary'
          className='!bg-[#393E46] hover:!opacity-80 !h-[48px] !text-base !font-bold !text-white flex justify-between items-center !px-3'
        >
          <span>{t('uploadYourCV')}</span>
          <CloudUploadOutlined className='!text-[26px]' />
        </Button>
      </div>
      <Table
        className={styles.headerTable}
        columns={Columns()}
        dataSource={data?.data?.myCVs || []}
      />
      <Modal
        centered
        open={openModalUpload}
        closable={false}
        footer={null}
        className='w-full md:!w-[650px]'
      >
        <div className='flex flex-col pb-8'>
          <div className='text-xl font-bold text-orange-800 self-center'>
            {t('uploadCVFromComputer')}
          </div>
          <div className='my-5 text-[#6D7278] text-base italic'>{t('supportFile')}</div>
          <span>
            <input
              type='file'
              accept='.pdf, .doc, .docx'
              className='hidden'
              ref={inputFile}
              onChange={handleChange}
            />
            <div
              className='flex'
              onClick={() => {
                if (inputFile != null && inputFile.current != null) {
                  (inputFile.current as HTMLInputElement).click();
                }
              }}
            >
              <input
                value={cv?.name || ''}
                placeholder='Select file'
                className='py-[10px] flex-1 px-[20px] border border-r-0 border-[#979797] rounded-l-[4px] text-base cursor-pointer outline-none'
              />
              <Button
                type='primary'
                className='!h-[45.6px] text-base font-medium !bg-primary-red rounded-l-[0px] rounded-r-[4px] !w-[160px]'
              >
                {t('browse')}
              </Button>
            </div>
          </span>

          <div className='flex justify-end gap-2 mt-6'>
            <Button
              onClick={() => {
                setOpenModalUpload(false);
              }}
              className='!px-[15px] !h-[34px] !bg-white-900 !border !border-solid !border-[#393E46] text-[#393E46] hover:!text-white-900 hover:!bg-[#393E46] text-lg rounded-[8px] !leading-[100%]'
            >
              {t('cancel')}
            </Button>
            <Button
              loading={loadingUploadFile || isLoading}
              disabled={cv == null}
              onClick={handleSaveCV}
              className='!px-[15px]  !h-[34px] !bg-white-900 !border !border-solid !border-[#D34127] disabled:!border-[#d9d9d9] disabled:!bg-[#f5f5f5] text-[#D34127] hover:!text-white-900 hover:!bg-[#D34127] text-lg rounded-[8px] !leading-[100%]'
            >
              {t('save')}
            </Button>
          </div>
        </div>
      </Modal>
    </Spin>
  );
};
