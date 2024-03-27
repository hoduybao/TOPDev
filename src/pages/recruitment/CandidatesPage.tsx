/* eslint-disable prettier/prettier */

import ChildComponent1 from '@/components/context/ChildComponent1';
import ChildComponent2 from '@/components/context/ChildComponent2';
import { Provider } from '@/components/context/MyContext';
import { Typography } from 'antd';

const { Title } = Typography;

const CandidatesPage = () => {
  return (
    <>
      <Title level={1} className='text-center text-blue-500 font-bold'>
        Communication between Components
      </Title>

      <Provider>
        <div
          className='m-10 p-3 h-500 flex flex-col justify-center items-center'
          style={{ backgroundColor: '#B2DFDB' }}
        >
          <Title level={2} className='text-blue-400 font-bold'>
            Parent Component
          </Title>

          <div className='flex'>
            <ChildComponent1 />
            <ChildComponent2 />
          </div>
        </div>
      </Provider>
    </>
  );
};

export default CandidatesPage;
