import { Image } from 'antd';
import React from 'react';

type SolutionItemProps = {
  title: string;
  description: string;
  imgSrc: string;
};

const SolutionItem = ({ title, description, imgSrc }: SolutionItemProps) => {
  return (
    <div className=' bg-gray-100 flex flex-col px-2 py-1'>
      <Image src={imgSrc} />
      <div className='mt-4'>
        <h3 className='font-semibold text-base min-h-12'>{title}</h3>
        <p className='text-gray-400'>{description}</p>
      </div>
    </div>
  );
};

const TopdevInfo = () => {
  const items: SolutionItemProps[] = [
    {
      title: 'Tư vấn về Thị Trường tuyển dụng IT',
      description:
        'Công ty sẽ nhận được tư vấn thông tin thị trường về vị trí đang tuyển dụng (tình hình ứng viên, mức lương trung bình..)',
      imgSrc: 'https://topdev.vn/v4/assets/images/recruit/recruit_benefit_1.webp',
    },
    {
      title: 'Hỗ trợ tư vấn Mô tả công việc',
      description: 'Công ty sẽ nhận tư vấn mô tả công việc để tối ưu việc tiếp cận ứng viên',
      imgSrc: 'https://topdev.vn/v4/assets/images/recruit/recruit_benefit_2.webp',
    },
    {
      title: 'Nhận ngay Ưu đãi',
      description:
        'Nhận ưu đãi đặc biệt chỉ khi liên hệ tư vấn, giúp tối ưu chi phí tối đa hỗ trợ.',
      imgSrc: 'https://topdev.vn/v4/assets/images/recruit/recruit_benefit_3.webp',
    },
  ];
  return (
    <div className='p-4'>
      <div className='text-center mb-8'>
        <Image src='https://accounts.topdev.vn/asset/images/logo.png' />
        <h3 className='font-bold text-xl'>
          Tuyển Dụng IT cùng TopDev: Tối Ưu Chi Phí, Tối Đa Hỗ Trợ
        </h3>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {items.map((item, index) => (
          <SolutionItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const TopdevCustomers = () => {
  return (
    <div className='p-4'>
      <h3 className='font-bold text-orange-500 text-center text-2xl mb-4'>
        Hơn 3,500 khách hàng tin dùng
      </h3>
      <p className='text-gray-400 text-center'>
        Cả các công ty Việt Nam, FDI và đa quốc gia, trải rộng tất cả các ngành từ ngân hàng,
        fintech đến gia công phần mềm (outsource), thương mại điện tử, truyền thông, quảng cáo, v.v.
      </p>
    </div>
  );
};

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

const Advertising = () => {
  return (
    <div className='flex flex-col gap-2'>
      <TopdevInfo />
      <TopdevCustomers />
      <TopdevMore />
    </div>
  );
};

export default Advertising;
