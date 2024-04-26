import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { ExtendItem } from '../MyCV';

const CustomButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: (value: ExtendItem) => void;
}) => {
  return (
    <Button
      onClick={() => onClick({ name: title, status: true })}
      className='text-orange-500 font-bold p-6 flex items-center justify-center border-[1px] border-orange-500 rounded'
    >
      <PlusOutlined className='text-base' />
      {title}
    </Button>
  );
};

const AddMoreSession = ({
  list,
  onClick,
}: {
  list: ExtendItem[];
  onClick: (value: ExtendItem) => void;
}) => {
  return (
    <div className='rounded bg-white-900 mb-4'>
      <div className='flex-1'>
        <div className='p-4 flex gap-4 justify-between'>
          <div>
            <h3 className='text-2xl font-bold text-black-900'>Add more section</h3>
          </div>
        </div>
        <div className='border-[1px] border-gray-200 mt-4'></div>
        <div className='p-4 flex gap-4 w-full flex-wrap'>
          {list
            .filter((item) => !item.status)
            .map((item: ExtendItem) => {
              return <CustomButton key={uuidv4()} title={item.name} onClick={onClick} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default AddMoreSession;
