import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
export default function SearchJob() {
  return (
    <>
      <div className='flex justify-start gap-2 items-center'>
        <div className='text-2xl font-bold text-[#292929]'>Tìm kiếm</div>
        <div className='p-2 bg-primary-red text-2xl text-white-900 font-bold rounded-sm'>
          Javascript
        </div>
      </div>
      <div className='relative'>
        <Input
          className='!px-7 !py-6 !shadow-sm !outline-none !border-none !rounded-[4px] text-base'
          placeholder='Tìm kiếm theo các Kỹ năng, Vị trí, Công ty'
        />
        <Button
          type='primary'
          className='absolute right-2 top-1/2 -translate-y-1/2 !bg-primary-red !text-white !font-bold border-none hover:!bg-secondary-red !text-base !px-6 !h-[56px] !leading-[100%] rounded-[4px] flex items-center'
          icon={<SearchOutlined className='!text-[22px]' />}
        >
          Tìm kiếm
        </Button>
      </div>
    </>
  );
}
