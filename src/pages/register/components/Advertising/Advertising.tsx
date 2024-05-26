import TopdevInfo from './TopdevInfo';
import TopdevCustomers from './TopdevCustomer';
import TopdevMore from './TopdevMore';

const Advertising = () => {
  return (
    <div className='flex flex-col gap-2 bg-white-900'>
      <TopdevInfo />
      <TopdevCustomers />
      <TopdevMore />
    </div>
  );
};

export default Advertising;
