import { Typography } from 'antd';
import GrandChild1 from './GrandChild1';

const { Title } = Typography;

const ChildComponent1 = () => {
  return (
    <div className='m-10 p-5 h-200 text-center' style={{ background: '#008000' }}>
      <Title level={4} className='text-blue-400 font-bold'>
        Child Component 1
      </Title>
      <GrandChild1 />
    </div>
  );
};

export default ChildComponent1;
