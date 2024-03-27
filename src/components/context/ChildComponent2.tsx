import { Typography } from 'antd';
import GrandChild2 from './GrandChild2';

const { Title } = Typography;

const ChildComponent2 = () => {
  return (
    <div className='m-10 p-5 h-200 text-center' style={{ background: '#FF69B4' }}>
      <Title level={4} className='text-blue-400 font-bold'>
        Child Component 2
      </Title>

      <GrandChild2 />
    </div>
  );
};

export default ChildComponent2;
