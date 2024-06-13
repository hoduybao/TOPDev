import {
  FileAddOutlined,
  FilePptOutlined,
  FileSearchOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import StatCard from './components/StatCard';
import StatChart from './components/StatChart';

const CompanyDashboard = () => {
  return (
    <div className='flex justify-center w-full bg-white-900'>
      <div className=' w-[90%] mt-10'>
        <h1 className='text-[20px] font-semibold'>Recruitment Efficiency</h1>
        <section className='my-10 grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <StatCard
            bgColor={'#ebf3fe'}
            textColor={'#5c85d4'}
            title={'Campaign is opened'}
            value={150}
            icon={<NotificationOutlined />}
          />
          <StatCard
            bgColor={'#f4fff9'}
            textColor={'#44ba73'}
            title={'Reception cv'}
            value={500}
            icon={<FilePptOutlined />}
          />
          <StatCard
            bgColor={'#fffaea'}
            textColor={'#f3bf4b'}
            title={'Job postings are displayed'}
            value={3}
            icon={<FileSearchOutlined />}
          />
          <StatCard
            bgColor={'#fef3f1'}
            textColor={'#da4f58'}
            title={'New application cv'}
            value={50}
            icon={<FileAddOutlined />}
          />
        </section>
        <section>
          <StatChart />
        </section>
      </div>
    </div>
  );
};

export default CompanyDashboard;
