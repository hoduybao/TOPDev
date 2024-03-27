/* eslint-disable prettier/prettier */
import ChildComponent from '@/components/components-communication/ChildComponent1';
import ChildComponent2 from '@/components/components-communication/ChildComponent2';
import { Typography } from 'antd';
import { useState } from 'react';

const { Title } = Typography;

const ProfilePage = () => {
  const [parentInput, setParentInput] = useState('');
  const [textFromChild1, setTextFromChild1] = useState('');
  const [textFromChild2, setTextFromChild2] = useState('');

  return (
    <>
      <Title level={1} className='text-center text-blue-500 font-bold'>
        Communication between Components
      </Title>

      <div className='m-10 p-3 h-500 text-center' style={{ backgroundColor: '#B2DFDB' }}>
        <Title level={2} className='text-blue-400 font-bold'>
          Parent Component
        </Title>

        <div className='flex justify-center items-center mt-3'>
          <h3 className='mr-2'> Input from Parent: </h3>
          <input
            onChange={(e) => {
              setParentInput(e.target.value);
            }}
            className='px-2 py-1 border border-gray-400 rounded-md'
          />
        </div>

        <h1 style={{ fontSize: '20px' }} className='text-pink-500 text-lg'>
          {' '}
          Text from Child 1: {textFromChild1}
        </h1>

        <h1 style={{ fontSize: '20px' }} className='text-yellow-500 text-lg'>
          {' '}
          Text from Child 2: {textFromChild2}
        </h1>

        <ChildComponent
          textFromParent={parentInput}
          setParentText={setTextFromChild1}
          textFromOtherChild={textFromChild2}
        />

        <ChildComponent2 setParentText={setTextFromChild2} />
      </div>
    </>
  );
};

export default ProfilePage;
