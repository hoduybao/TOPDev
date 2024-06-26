import { Image } from 'antd';

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

export default TopdevInfo;
