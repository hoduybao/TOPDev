import { Typography } from 'antd';
import { useContext } from 'react';
import MyContext, { MyContextType } from './MyContext';

const { Title } = Typography;

const GrandChild2 = () => {
  const contextValue = useContext(MyContext);
  const { count, setCount } = contextValue as MyContextType;
  return (
    <div className='m-10 p-5 h-200' style={{ background: '#FFC0CB' }}>
      <Title level={4} className='text-blue-400 font-bold'>
        Grand Child 2
      </Title>

      <Title level={3} className='text-red-400 font-bold'>
        {' '}
        {count}
      </Title>
    </div>
  );
};

export default GrandChild2;
