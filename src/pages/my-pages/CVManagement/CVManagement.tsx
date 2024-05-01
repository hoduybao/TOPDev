import {
  CheckCircleFilled,
  CloudDownloadOutlined,
  CloudUploadOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import { Button, Modal, Table } from 'antd';
import { ColumnGroupType, ColumnType } from 'antd/es/table';
import { PiWarningCircleLight } from 'react-icons/pi';

import { ChangeEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './headerTable.module.scss';

interface JobType {
  jobName: string;
  companyName: string;
  createdAt: string;
}

interface DataType {
  key: string;
  name: string;
  appliedJos: JobType[];
  updatedAt: string;
  link: string;
}

export const Columns = (): (ColumnGroupType<DataType> | ColumnType<DataType>)[] => {
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
      dataIndex: 'appliedJos',
      key: 'appliedJos',
      className: 'text-left',
      render: (appliedJos: JobType[]) =>
        appliedJos.length < 1 ? (
          <div className='flex items-center gap-3'>
            <PiWarningCircleLight size={18} />
            <span className={`text-base text-[#393e46] italic`}>{t('notYetAppliedForAnyJob')}</span>
          </div>
        ) : (
          <div className='flex flex-col gap-4'>
            {appliedJos.map((job, index) => (
              <div className='flex items-center gap-3' key={index}>
                <CheckCircleFilled
                  style={{
                    color: '#0BC763',
                  }}
                />
                <span className={`text-base text-[#000000d9] italic`}>
                  {t('haveAppliedForJob', {
                    jobName: job.jobName,
                    companyName: job.companyName,
                    createdAt: job.createdAt,
                  })}
                </span>
              </div>
            ))}
          </div>
        ),
    },
    {
      title: t('lastEditedAt'),
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      align: 'center',
      width: 220,
    },
    {
      title: t('action'),
      key: 'action',
      dataIndex: 'action',
      width: 200,
      align: 'center',
      render: () => (
        <div className='flex gap-2 justify-center'>
          <EyeOutlined style={{ fontSize: '24px' }} />
          <EditOutlined style={{ fontSize: '24px' }} />
          <CloudDownloadOutlined style={{ fontSize: '24px' }} />
          <DeleteOutlined style={{ fontSize: '24px' }} />
        </div>
      ),
    },
  ];
};

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    updatedAt: '19-04-2024 22:21:53',
    appliedJos: [],
    link: 'https://www.topdev.vn',
  },
  {
    key: '2',
    name: 'John Brown',
    updatedAt: '19-04-2024 22:21:53',
    appliedJos: [
      {
        jobName: 'Software Engineer',
        companyName: 'One Mount Group',
        createdAt: '20-04-2024',
      },
      {
        jobName: 'Software Engineer',
        companyName: 'One Mount Group',
        createdAt: '20-04-2024',
      },
    ],
    link: 'https://www.topdev.vn',
  },
];
export const CVManagement = () => {
  const [openModalUpload, setOpenModalUpload] = useState(false);
  const [cv, setCv] = useState<File | null>();

  const { t } = useTranslation();
  const inputFile = useRef(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCv(e.target.files != null ? e.target.files[0] : null);
  };

  return (
    <>
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
      <Table className={styles.headerTable} columns={Columns()} dataSource={data} />
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
                className='!h-[45.6px] text-base font-medium !bg-[#0957d5] rounded-l-[0px] rounded-r-[4px] !w-[160px]'
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
              loading={false}
              disabled={cv == null}
              onClick={() => {
                setOpenModalUpload(false);
              }}
              className='!px-[15px]  !h-[34px] !bg-white-900 !border !border-solid !border-[#D34127] disabled:!border-[#d9d9d9] disabled:!bg-[#f5f5f5] text-[#D34127] hover:!text-white-900 hover:!bg-[#D34127] text-lg rounded-[8px] !leading-[100%]'
            >
              {t('save')}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
