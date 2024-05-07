import { useParams } from 'react-router-dom';
import '../../styles/admin/company-profile.css';
import colors from '@/+core/themes/colors';
import { Divider, Tag } from 'antd';

const CompanyProfile = () => {
  const params = useParams();
  console.log(params?.companyId as string);
  return (
    <div className='px-5 py-4 max-w-[1200px] mx-auto text-black-400'>
      <section>
        <h2 className='text-xl text-black-800 font-semibold mb-2'>Company Information</h2>
        <div className='w-full flex'>
          <div className='w-full flex gap-8'>
            <div className='bg-white-900 rounded basis-2/3 flex p-4'>
              <div className='h-[176px] flex gap-6'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Logo-dai-hoc-khoa-hoc-tu-nhien.png/240px-Logo-dai-hoc-khoa-hoc-tu-nhien.png'
                  className='object-cover h-full'
                />
                <div>
                  <h1 className='text-2xl font-bold'>Game Developer</h1>
                  <p className='font-bold' style={{ color: '#5c5b5b' }}>
                    Archer Game Studio
                  </p>
                </div>
              </div>
            </div>
            <div className='basis-1/3 bg-white-900 rounded'>
              <div className='p-4'>
                <h2 className='text-[18px] font-bold'>General Information</h2>
              </div>
              <Divider className='m-0' />
              <div className='p-4 text-base'>
                <h3 className='font-bold'>Industry</h3>
                <p className='mt-2'>Giải trí/ Game</p>

                <h3 className='font-bold mt-4'>Company size</h3>
                <p className='mt-2'>25-99</p>

                <h3 className='font-bold mt-4'>Nationality</h3>
                <p className='mt-2'>Vietnam</p>

                <h3 className='font-bold mt-4'>Tech stack</h3>
                <Tag className='mt-2'>Vietnam</Tag>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyProfile;
