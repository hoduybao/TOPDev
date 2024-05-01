import { v4 as uuidv4 } from 'uuid';
import ActivitiesModal from './ActivitiesModal';

export type Activity = {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  isWorking: boolean;
};

const data: Activity[] = [
  {
    name: 'Activity 1',
    startDate: '2021-10-10',
    endDate: '2021-10-11',
    description: 'Activity description',
    isWorking: true,
  },
  {
    name: 'Activity 2',
    startDate: '2021-10-10',
    endDate: '2021-10-11',
    description: 'Activity description',
    isWorking: true,
  },
];

const ActivityItem = ({ activity }: { activity: Activity }) => {
  const { name, description, endDate, startDate } = activity;
  return (
    <div className='flex gap-4'>
      <div className='w-[20%]'>
        {startDate} - {endDate}
      </div>
      <div className='flex-1'>
        <div className='font-bold'>{name}</div>
        <p className='text-gray-400'>{description}</p>
      </div>
    </div>
  );
};

const ActivitiesSession = () => {
  return (
    <div className='rounded bg-white-900 mb-4'>
      <div className='flex-1'>
        <div className='p-4 flex gap-4 justify-between'>
          <div>
            <h3 className='text-2xl font-bold text-black-900'>Activities</h3>
          </div>
          <ActivitiesModal />
        </div>
        <div className='border-[1px] border-gray-200 mt-4'></div>
        <div className='p-4 flex gap-4 flex-col'>
          {data.map((activity: Activity) => {
            return <ActivityItem key={uuidv4()} activity={activity} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSession;
