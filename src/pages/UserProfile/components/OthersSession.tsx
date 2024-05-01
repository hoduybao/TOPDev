import { v4 as uuidv4 } from 'uuid';
import OthersModal from './OthersModal';

export type Other = {
  name: string;
  description: string;
};

const data: Other[] = [
  {
    name: 'Other 1',
    description: 'Other description',
  },
  {
    name: 'Other 2',
    description: 'Other description',
  },
];

const OtherItem = ({ other }: { other: Other }) => {
  const { name, description } = other;
  return (
    <div className='flex flex-col gap-4'>
      <div className='font-bold'>{name}</div>
      <p className='text-gray-400'>{description}</p>
    </div>
  );
};

const OthersSession = () => {
  return (
    <div className='rounded bg-white-900 mb-4'>
      <div className='flex-1'>
        <div className='p-4 flex gap-4 justify-between'>
          <div>
            <h3 className='text-2xl font-bold text-black-900'>Others</h3>
          </div>
          <OthersModal />
        </div>
        <div className='border-[1px] border-gray-200 mt-4'></div>
        <div className='p-4 flex gap-4 flex-col'>
          {data.map((other: Other) => {
            return <OtherItem key={uuidv4()} other={other} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default OthersSession;
