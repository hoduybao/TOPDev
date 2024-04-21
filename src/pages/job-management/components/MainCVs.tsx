import { EyeOutlined } from '@ant-design/icons';
import { Radio, RadioChangeEvent, Space } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

type CVProps = {
  name: string;
  updated: string;
  isMain?: boolean;
  url: string;
};

const cvsData: CVProps[] = [
  {
    name: 'CV 1',
    updated: '17:59 2021-10-10',
    isMain: true,
    url: '/123',
  },
  {
    name: 'CV 2',
    updated: '17:59 2022-10-10',
    url: '/123',
  },
];

const ListCVs = ({ data }: { data: CVProps[] }) => {
  const [value, setValue] = React.useState(() => {
    const mainCV = data.find((cv) => cv.isMain);
    return mainCV?.name;
  });

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value} className='w-full'>
      <Space direction='vertical' className='w-full'>
        {data.map((cv) => {
          return (
            <Radio value={cv.name} className='rounded bg-gray-200 px-4 py-2 w-full flex'>
              <div className='flex justify-between'>
                <div>
                  <h3 className='text-base font-bold'>{cv.name}</h3>
                  <p>{cv.updated}</p>
                </div>
                <div className='hover:opacity-50 hover:cursor-pointer flex items-center ml-10'>
                  <EyeOutlined />
                </div>
              </div>
            </Radio>
          );
        })}
      </Space>
    </Radio.Group>
  );
};

const MainCVs = () => {
  const { t } = useTranslation();
  return (
    <div className='bg-white-900 rounded p-4 mt-4'>
      <div>
        <div className='font-bold text-2xl'>{t('main.cvs')}</div>
        <p className='text-gray-300 text-base'>{t('main.cvs.description')}</p>
      </div>
      <div className='mt-4'>
        <div className='font-bold text-lg border-b-[1px] border-gray-200 pb-2'>
          {t('current.cvs')}
        </div>
        <ListCVs data={cvsData} />
      </div>
    </div>
  );
};

export default MainCVs;
