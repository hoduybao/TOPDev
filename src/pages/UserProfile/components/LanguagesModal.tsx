import React from 'react';
import { Language } from './LanguagesSession';
import { v4 as uuidv4 } from 'uuid';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import LanguageModal from './LanguageModal';

const data: Language[] = [
  {
    name: 'English',
    level: 'Native',
  },
  {
    name: 'Vietnamese',
    level: 'Native',
  },
];

const LangItem = ({ lang }: { lang: Language }) => {
  const { name, level } = lang;
  return (
    <div className='flex justify-between bg-gray-100 p-4 rounded'>
      <div>
        <h3 className='text-base font-semibold'>{name}</h3>
        <h4 className='text-base text-orange-500'>{level}</h4>
      </div>

      <div className='flex gap-4'>
        <LanguageModal isEdit initValue={lang} handleChange={() => {}} />
        <DeleteOutlined className='text-base' />
      </div>
    </div>
  );
};

const LanguagesModal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <>
      <EditOutlined className='font-base' onClick={() => setIsModalOpen(true)} />
      <Modal
        title={
          <div className='py-4'>
            <h3 className='text-xl text-black-900'>Languages</h3>
          </div>
        }
        width={'50%'}
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className='flex flex-col gap-2'>
          {data.map((lang) => {
            return <LangItem key={uuidv4()} lang={lang} />;
          })}
        </div>
        <LanguageModal handleChange={() => {}} />
      </Modal>
    </>
  );
};

export default LanguagesModal;
