import { Button, Typography } from 'antd';
import { useContext } from 'react';
import MyContext, { MyContextType } from './MyContext';

const { Title } = Typography;

const GrandChild1 = () => {
  const contextValue = useContext(MyContext);
  const { count, setCount } = contextValue as MyContextType;

  return (
    <div className='m-10 p-5 h-200' style={{ background: '#98FB98' }}>
      <Title level={4} className='text-blue-400 font-bold'>
        Grand Child 1
      </Title>

      <Button style={{ backgroundColor: '#fff' }} onClick={() => setCount(count + 1)}>
        Increase Count
      </Button>
    </div>
  );
};

export default GrandChild1;
