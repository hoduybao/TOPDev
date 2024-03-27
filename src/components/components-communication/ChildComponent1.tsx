import { Typography } from 'antd';

type childProps = {
  textFromParent: string;
  textFromOtherChild: string;
  setParentText: (text: string) => void;
};

const { Title } = Typography;

const ChildComponent1 = ({ textFromParent, setParentText, textFromOtherChild }: childProps) => {
  return (
    <div className='m-10 p-5 h-200 bg-pink-200 text-center'>
      <Title level={4} className='text-blue-400 font-bold'>
        Child Component 1
      </Title>
      <h1 className='text-green-500 text-lg'> Text from Parent: {textFromParent}</h1>

      <div className='flex justify-center items-center mt-3'>
        <h3 className='mr-2'> Input from child 1: </h3>
        <input
          type='text'
          onChange={(e) => {
            setParentText(e.target.value);
          }}
          className='px-2 py-1 border border-gray-400 rounded-md'
        />
      </div>

      <h1 className='text-yellow-500 text-lg'> Text from other child: {textFromOtherChild}</h1>
    </div>
  );
};

export default ChildComponent1;
