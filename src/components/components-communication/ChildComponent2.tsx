import { Typography } from 'antd';

type childProps = {
  setParentText: (text: string) => void;
};

const { Title } = Typography;

const ChildComponent2 = ({ setParentText }: childProps) => {
  return (
    <div className='m-10 p-5 h-200 text-center' style={{ background: '#FFF8E1' }}>
      <Title level={4} className='text-blue-400 font-bold'>
        Child Component 2
      </Title>

      <div className='flex justify-center items-center mt-3'>
        <h3 className='mr-2'> Input from child 2: </h3>
        <input
          type='text'
          onChange={(e) => {
            setParentText(e.target.value);
          }}
          className='px-2 py-1 border border-gray-400 rounded-md'
        />
      </div>
    </div>
  );
};

export default ChildComponent2;
