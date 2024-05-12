import { faBars, faBook, faBriefcase, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout as LayoutAntDesign } from 'antd';
import { Outlet } from 'react-router-dom';
import colors from '../../../+core/themes/colors';

const { Content } = LayoutAntDesign;

export default function LoginLayout() {
  return (
    <LayoutAntDesign className='bg-white font-roboto'>
      {/* Header */}
      <div className='h-[88px] justify-center hidden xl:flex'>
        <div className='w-[1140px] px-[15px] flex justify-between items-center'>
          <div className='flex'>
            <img className='w-[160px]' src='https://accounts.topdev.vn/asset/images/logo.png' />
            <p className='inline-flex items-end text-2xl text-black-600'>
              <span className='text-orange-500 mr-2'>Việc Làm IT </span>
              Hàng Đầu
            </p>
          </div>
          <div className='flex'>
            <a
              href='/'
              className='px-3 text-black-400 hover:text-orange-500'
              style={{ borderRight: `1px solid ${colors.black[400]}` }}
            >
              <FontAwesomeIcon className='mr-1.5' icon={faPhone} />
              028.6723.3946
            </a>
            <a
              href='/'
              className='px-3 text-black-400 hover:text-orange-500'
              style={{ borderRight: `1px solid ${colors.black[400]}` }}
            >
              <FontAwesomeIcon className='mr-1.5' icon={faBriefcase} />
              Đăng tuyển
            </a>
            <a
              href='/'
              className='px-3 text-black-400 hover:text-orange-500'
              style={{ borderRight: `1px solid ${colors.black[400]}` }}
            >
              <FontAwesomeIcon className='mr-1.5' icon={faBook} />
              Liên hệ
            </a>
            <img
              className='w-[32px] ml-3 cursor-pointer'
              src='https://assets.topdev.vn/images/flags/United-Kingdom.png'
              alt='en'
            ></img>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className='bg-black-600 w-full xl:h-[73px] h-[46px] px-2 py-1 flex justify-center'>
        <div className='w-[1140px] px-[15px] flex justify-between items-center'>
          <div className='flex'>
            <button className='pr-4'>
              <FontAwesomeIcon className='text-white-900 text-lg' icon={faBars} />
            </button>
            <ul className='text-white-900 flex-row items-center hidden xl:flex xl:flex-row'>
              <li className='p-2'>
                <a href='/' className='hover:text-orange-500'>
                  Việc làm IT
                </a>
              </li>
              <li className='p-2'>
                <a href='/' className='hover:text-orange-500'>
                  Tạo CV
                </a>
              </li>
              <li className='p-2'>
                <a href='/' className='hover:text-orange-500'>
                  Công ty IT
                </a>
              </li>
              <li className='p-2'>
                <a href='/' className='hover:text-orange-500'>
                  Trắc nghiệm tính cách
                </a>
              </li>
              <li className='p-2'>
                <a href='/' className='hover:text-orange-500'>
                  Blog IT
                </a>
              </li>
            </ul>
          </div>
          <div className='flex lg:hidden'>
            <img
              src='https://accounts.topdev.vn/asset/images/logo-td-white.png'
              alt=''
              className='img-fluid logo-white w-20 sm:w-32'
            />
            <p className='text-2xl text-white-900 hidden sm:block'>
              <span className='text-orange-500'>Việc Làm IT </span>
              Hàng Đầu
            </p>
          </div>

          <div className='hidden lg:block'>
            <button
              className='w-[142px] h-[38px] rounded text-sm hover:bg-orange-800 bg-orange-500'
              style={{
                color: 'white',
              }}
            >
              Đăng tuyển
            </button>
          </div>
        </div>
      </nav>

      <LayoutAntDesign className={`bg-primary-white duration-500 ease-in-out`}>
        <Content className='transition w-full'>
          <Outlet />
        </Content>
      </LayoutAntDesign>

      {/* Footer */}
      <div className='bg-gray-100 flex justify-center pt-5 pb-12 text-black-400 text-base'>
        <div className=' xl:w-[71.25rem] lg:w-[60rem] lg:flex lg:flex-row'>
          <div className='flex-grow w-3/5 px-3.5'>
            <div>
              <a href='/'>
                <img
                  className='w-40'
                  src='https://accounts.topdev.vn/asset/images/logo.png'
                  alt='TopDev'
                />
              </a>
            </div>
            <div>
              <p>
                Tầng 12A, Toà nhà AP Tower, 518B Điện Biên Phủ, Phường 21, Quận Bình Thạnh, Thành
                phố Hồ Chí Minh
              </p>
              <p style={{ color: '#999999' }}>Copyright © CÔNG TY CỔ PHẦN APPLANCER</p>
              <p style={{ color: '#999999' }}>
                Liên Hệ: <a href='tel:02862733496'>028 6273 3496</a> -{' '}
                <a href='mailto:contact@topdev.vn'>contact@tevdop.vn</a>
              </p>
            </div>
          </div>
          <div className='flex-grow w-3/5 px-3.5'>
            <p className='font-bold'>Về TevDop</p>
            <ul className='flex-column'>
              <li>
                <a href='/'>Về chúng tôi</a>
              </li>
              <li>
                <a href='/'>Liên hệ</a>
              </li>
              <li>
                <a href='/'>Thoả thuận sử dụng</a>
              </li>
              <li>
                <a href='/'>Cơ hội việc làm</a>
              </li>
              <li>
                <a href='/'>Quy định bảo mật</a>
              </li>
              <li>
                <a href='/'>Quy chế hoạt động của sán giao dịch thương mại điện tử TEVDOP</a>
              </li>
              <li>
                <a href='/'>Giải quyết khiếu nại</a>
              </li>
            </ul>
          </div>
          <div className='flex-grow w-3/5 px-3.5'>
            <p className='font-bold'>Dành Cho Người Tìm Việc</p>
            <ul className='flex-column'>
              <li>
                <a href='/'>Tính lương Gross - Net</a>
              </li>
              <li>
                <a href='/'>Tạo CV</a>
              </li>
              <li>
                <a href='/'>Tìm kiếm công việc IT</a>
              </li>
              <li>
                <a href='/'>Trắc nghiệm tính cách</a>
              </li>
            </ul>
          </div>
          <div className='flex-grow w-3/5 px-3.5'>
            <p className='font-bold'>Dành Cho Các Nhà Tuyển Dụng</p>
            <ul className='flex-column'>
              <li>
                <a href='/'>Đăng việc làm IT</a>
              </li>
              <li>
                <a href='/'>Tìm kiếm nhân tài</a>
              </li>
            </ul>
          </div>
          <div className='flex-grow w-3/5 px-3.5'>
            <p className='mb-2.5 font-bold'>Theo dõi chúng tôi tại</p>
            <ul className='flex gap-3'>
              <li>
                <a href='/'>
                  <i className='fa fa-3x fa-facebook-square' aria-hidden='true'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fa fa-3x fa-linkedin-square' aria-hidden='true'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fa fa-3x fa-youtube-square' aria-hidden='true'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </LayoutAntDesign>
  );
}
