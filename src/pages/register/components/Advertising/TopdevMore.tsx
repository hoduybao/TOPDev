import { Image } from 'antd';

const TopdevMore = () => {
  return (
    <div className='p-4 bg-gray-100 mb-2 flex flex-col gap-2 rounded-lg'>
      <h3 className='font-bold text-base'>Tìm hiểu thêm về dịch vụ mới của TopDev năm 2024:</h3>
      <div className='flex items-center text-gray-400 text-base'>
        <Image src='https://topdev.vn/v4/assets/images/online-payment/icon-check-list.png' />
        <p className='ml-2'>Thanh toán trực tuyến (Thẻ ATM nội địa, thẻ Visa/Mastercard/JCB)</p>
      </div>
      <div className='flex items-center text-gray-400 text-base'>
        <Image src='https://topdev.vn/v4/assets/images/online-payment/icon-check-list.png' />
        <p className='ml-2'>Tìm kiếm Hồ sơ ứng viên</p>
      </div>
      <div className='text-gray-400 text-base'>
        Liên hệ hotline <span className='underline text-orange-500 font-bold'>028.6273.3496</span>{' '}
        để được hỗ trợ nhanh nhất.
      </div>
    </div>
  );
};

export default TopdevMore;
