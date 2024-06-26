import { logOut } from '@/+core/redux/auth/authSlice.tsx';
import { getName } from '@/+core/services/local.service.tsx';
import { IMAGES } from '@/config/images';
import { useLoginState } from '@/hooks/useLoginState.ts';
import NotificationBox from '@/pages/home/components/NotificationBox.tsx';
import {
  AppstoreOutlined,
  FileProtectOutlined,
  LogoutOutlined,
  ProfileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Image } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SlUserFollowing } from 'react-icons/sl';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArrowDownIcon from '../../../../public/assets/icons/down-arrow.tsx';
import PhoneIcon from '../../../../public/assets/icons/phone.tsx';
import ArrowRightIcon from '../../../../public/assets/icons/right-arrow.tsx';

type HeaderMenuItemProps = {
  children?: any[];
  grid?: boolean;
};

const HeaderMenuItem = ({ items }: { items: any }) => {
  const [children, setChildren] = useState<HeaderMenuItemProps | null>(null);

  return (
    <div className='h-full group cursor-pointer relative z-20'>
      <div className='flex justify-between items-center gap-3 px-8 h-full' onClick={items.onClick}>
        <div className='text-base font-bold group-hover:text-primary-red'>{items.title}</div>
        {items.children && (
          <ArrowDownIcon className='!hidden md:!block transform group-hover:rotate-180 transition-transform duration-500 stroke-black-900  group-hover:stroke-primary-red' />
        )}
      </div>
      {items.children && items.children.length > 0 && (
        <div className='absolute left-0 top-[84px] flex'>
          <div className='bg-white-900 w-[300px] group-hover:block hidden group-hover:animate-slide-top shadow-md'>
            {items.children.map((item: any, index: number) => (
              <div
                onClick={item.onClick}
                key={index}
                className='p-4 hover:bg-gray-100 flex justify-between items-center group/item relative'
                onMouseEnter={() => {
                  if (item.children) setChildren({ grid: item.grid, children: item.children });
                }}
                onMouseLeave={() => setChildren(null)}
              >
                <span className='text-base text-[##424242]'> {item.title} </span>
                {item.children && item.children.length > 0 && (
                  <ArrowRightIcon className='stroke-black' />
                )}
              </div>
            ))}
          </div>
          {children && (
            <div
              className={`bg-white-900 shadow w-[500px] group-hover:animate-slide-top ${
                children.grid === true && 'grid grid-cols-3 content-start'
              }`}
              onMouseEnter={() => setChildren(children)} // Keep hoveredItem when mouse enters children
              onMouseLeave={() => setChildren(null)}
            >
              {children?.children?.map((item: any, index: number) => (
                <div
                  key={index}
                  className='pl-4 py-3 hover:bg-gray-100 flex justify-between items-center group/item relative rounded-sm'
                >
                  <span className='text-base text-[##424242]'> {item.title} </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export const JobItems = (): any => {
  const navigate = useNavigate();
  return {
    title: 'Việc làm IT',
    onClick: () => {
      navigate('/it-jobs');
    },
    children: [
      {
        title: 'Theo câp bậc',
        children: [
          {
            title: 'Intern',
            onClick: () => {},
          },
          {
            title: 'Fresher',
            onClick: () => {},
          },
          {
            title: 'Junior',
            onClick: () => {},
          },
          {
            title: 'Middle',
            onClick: () => {},
          },
          {
            title: 'Senior',
            onClick: () => {},
          },
          {
            title: 'Trưởng nhóm',
            onClick: () => {},
          },
          {
            title: 'Trưởng phòng',
            onClick: () => {},
          },
          {
            title: 'All Levels',
            onClick: () => {},
          },
        ],
      },
      {
        title: 'Theo loại hình',
        children: [
          {
            title: 'In Office',
            onClick: () => {},
          },
          {
            title: 'Hybrid',
            onClick: () => {},
          },
          {
            title: 'Remote',
            onClick: () => {},
          },
          {
            title: 'Oversea',
            onClick: () => {},
          },
        ],
      },
      {
        title: 'Theo địa điểm',
        children: [
          {
            title: 'Hà Nội',
            onClick: () => {},
          },
          {
            title: 'Hồ Chí Minh',
            onClick: () => {},
          },
          {
            title: 'Đà Nẵng',
            onClick: () => {},
          },
          {
            title: 'Cần Thơ',
            onClick: () => {},
          },
          {
            title: 'Khác',
            onClick: () => {},
          },
        ],
      },
      {
        title: 'Theo kỹ năng',
        grid: true,
        children: [
          {
            title: 'Javascript',
            onClick: () => {},
          },
          {
            title: 'Flutter',
            onClick: () => {},
          },
          {
            title: 'Game',
            onClick: () => {},
          },
          {
            title: 'Java',
            onClick: () => {},
          },
          {
            title: 'React Native',
            onClick: () => {},
          },
          {
            title: 'Designer',
            onClick: () => {},
          },
          {
            title: '.NET',
            onClick: () => {},
          },
          {
            title: 'Tester',
            onClick: () => {},
          },
          {
            title: 'Golang',
            onClick: () => {},
          },
          {
            title: 'C#',
            onClick: () => {},
          },
          {
            title: 'Product Manager',
            onClick: () => {},
          },
          {
            title: 'AWS',
            onClick: () => {},
          },
          {
            title: 'PHP',
            onClick: () => {},
          },
          {
            title: 'Business Analyst',
            onClick: () => {},
          },
          {
            title: 'Azure',
            onClick: () => {},
          },
          {
            title: 'Python',
            onClick: () => {},
          },
          {
            title: 'Product Manager',
            onClick: () => {},
          },
          {
            title: 'Cloud',
            onClick: () => {},
          },
          {
            title: 'C++',
            onClick: () => {},
          },
          {
            title: 'System admin',
            onClick: () => {},
          },
          {
            title: 'UI/UX',
            onClick: () => {},
          },
          {
            title: 'iOS',
            onClick: () => {},
          },
          {
            title: 'DevOps',
            onClick: () => {},
          },
          {
            title: 'Android',
            onClick: () => {},
          },
          {
            title: 'System Engineer',
            onClick: () => {},
          },
          {
            title: 'Data Analyst',
            onClick: () => {},
          },
        ],
      },
      {
        title: 'Theo kỹ năng',
        grid: true,
        children: [
          {
            title: 'HTML',
            onClick: () => {},
          },

          {
            title: 'Front-End',
            onClick: () => {},
          },
          {
            title: 'AngularJS',
            onClick: () => {},
          },

          {
            title: 'Unity',
            onClick: () => {},
          },
          {
            title: 'Back-End',
            onClick: () => {},
          },
          {
            title: 'SAP',
            onClick: () => {},
          },
          {
            title: 'Kotlin',
            onClick: () => {},
          },
          {
            title: 'QA/QC',
            onClick: () => {},
          },
          {
            title: 'Magento Developer',
            onClick: () => {},
          },
          {
            title: 'IT Security',
            onClick: () => {},
          },
          {
            title: 'NodeJS',
            onClick: () => {},
          },
          {
            title: 'Wordpress',
            onClick: () => {},
          },
          {
            title: 'IT Support',
            onClick: () => {},
          },
          {
            title: 'ReactJS',
            onClick: () => {},
          },
          {
            title: 'Network',
            onClick: () => {},
          },
          {
            title: 'IT helpdesk',
            onClick: () => {},
          },
          {
            title: 'VueJS',
            onClick: () => {},
          },
          {
            title: 'Embedded',
            onClick: () => {},
          },
          {
            title: 'ERP',
            onClick: () => {},
          },
          {
            title: 'SQL',
            onClick: () => {},
          },
          {
            title: 'Solution Architect',
            onClick: () => {},
          },
          {
            title: 'Laravel',
            onClick: () => {},
          },
          {
            title: 'Database',
            onClick: () => {},
          },
          {
            title: 'ASP.NET',
            onClick: () => {},
          },
          {
            title: 'Xamarin',
            onClick: () => {},
          },
          {
            title: 'Angular',
            onClick: () => {},
          },
        ],
      },
      {
        title: 'TopDev',
        children: [
          {
            title: 'Đăng tin tuyển dụng',
            onClick: () => {},
          },
          {
            title: 'Thương hiệu tuyển dụng',
            onClick: () => {},
          },
          {
            title: 'IT Headhunt',
            onClick: () => {},
          },
          {
            title: 'Báo cáo thị trường IT',
            onClick: () => {},
          },
        ],
      },
    ],
  };
};

export const ItCompany = (): any => {
  const navigate = useNavigate();

  return {
    title: 'Công ty IT',
    onClick: () => {
      navigate('/companies');
    },
  };
};

const tools = {
  title: 'Công cụ',
  onClick: () => {},
  children: [
    {
      title: 'Tạo CV',
      leading: <ArrowDownIcon />,
      onClick: () => {},
    },
    {
      title: 'Chuẩn hóa CV',
      leading: <ArrowDownIcon />,
      onClick: () => {},
    },
    {
      title: 'Trắc nghiệm tính cách',
      leading: <ArrowDownIcon />,

      onClick: () => {},
    },
    {
      title: 'Câu hỏi phỏng vấn',
      leading: <ArrowDownIcon />,
      onClick: () => {},
    },
  ],
};
const itBlog = {
  title: 'Blog IT',
  onClick: () => {},
};

const languages = [
  {
    code: 'en',
    label: 'EN',
  },
  {
    code: 'vi',
    label: 'VI',
  },
];

const LanguageItem = ({
  name,
  isChosen = false,
  onClick,
  code,
}: {
  name: string;
  code: string;
  isChosen?: boolean;
  onClick: (code: string) => void;
}) => {
  return (
    <div
      className={`${
        !isChosen && 'opacity-50'
      } font-semibold text-lg md:text-base hover:text-primary-red cursor-pointer`}
      onClick={() => {
        onClick(code);
      }}
    >
      {name}
    </div>
  );
};

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const onChangeLanguage = (language: string) => {
    console.log(language);
    i18n.changeLanguage(language);
  };
  return (
    <div className='p-2 flex items-center gap-4 md:p-2 md:gap-2'>
      {languages.map((language) => (
        <LanguageItem
          code={language.code}
          key={language.code}
          name={language.label}
          onClick={onChangeLanguage}
          isChosen={language.code == i18n.language}
        />
      ))}
    </div>
  );
};

const Show = ({
  children,
  hideInMobile = false,
}: {
  children: React.ReactNode;
  hideInMobile?: boolean;
}) => {
  return (
    <div
      className={`
    ${hideInMobile && 'hidden sm:hidden md:block'}`}
    >
      {children}
    </div>
  );
};

const UserHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isLoggedIn] = useLoginState({});
  const name = getName();

  const dispatch = useDispatch();

  const userMenu = {
    title: (
      <div className='flex justify-between gap-4 items-center'>
        <UserOutlined
          style={{
            fontSize: '20px',
          }}
        />
        <span>{name || 'Unknown'}</span>
      </div>
    ),
    onClick: () => {},
    children: [
      {
        title: (
          <div className='flex justify-between gap-4 items-center'>
            <AppstoreOutlined
              style={{
                fontSize: '20px',
              }}
            />
            <span>TopDev CV</span>
          </div>
        ),
        leading: <ArrowDownIcon />,
        onClick: () => {
          navigate('/users');
        },
      },
      {
        title: (
          <div className='flex justify-between gap-4 items-center'>
            <ProfileOutlined
              style={{
                fontSize: '20px',
              }}
            />
            <span>Quản lý CV</span>
          </div>
        ),
        leading: <ArrowDownIcon />,
        onClick: () => {
          navigate('/users?tab=cv-management');
        },
      },
      {
        title: (
          <div className='flex justify-between gap-4 items-center'>
            <FileProtectOutlined
              style={{
                fontSize: '20px',
              }}
            />
            <span>Việc đã ứng tuyển</span>
          </div>
        ),

        leading: <ArrowDownIcon />,
        onClick: () => {
          navigate('/users?tab=jobs-applied');
        },
      },
      {
        title: (
          <div className='flex justify-between gap-4 items-center'>
            <SlUserFollowing className='!font-semibold' size={20} />
            <span>Việc đang theo dõi</span>
          </div>
        ),
        leading: <ArrowDownIcon />,
        onClick: () => {
          navigate('/users?tab=jobs-followed');
        },
      },
      {
        title: (
          <div className='flex justify-between gap-4 items-center'>
            <LogoutOutlined />
            <span>Đăng xuất</span>
          </div>
        ),
        leading: <ArrowDownIcon />,
        onClick: () => {
          dispatch(logOut());
        },
      },
    ],
  };
  return (
    <div className='w-full bg-white-900 shadow-md lg:px-3 flex justify-center h-[5.25rem] fixed z-50'>
      <div className='flex justify-between items-center w-full'>
        <div className='flex gap-1 items-center h-full'>
          <Image
            className='cursor-pointer'
            alt='logo'
            src={IMAGES.logoTopDev}
            preview={false}
            onClick={() => {
              navigate('/');
            }}
          />
          <HeaderMenuItem items={JobItems()} />
          <HeaderMenuItem items={ItCompany()} />
          <HeaderMenuItem items={tools} />
          <HeaderMenuItem items={itBlog} />
        </div>

        <div className='flex items-center h-full gap-4'>
          {isLoggedIn ? (
            <>
              <Show hideInMobile>
                <NotificationBox />
              </Show>
              <HeaderMenuItem items={userMenu} />
            </>
          ) : (
            <>
              <Show hideInMobile>
                <div className='flex gap-2 items-center justify-center group cursor-pointer'>
                  <PhoneIcon className='group-hover:fill-primary-red fill-black-900' />
                  <div className='text-base font-semibold group-hover:text-primary-red'>
                    028 6273 3496
                  </div>
                </div>
              </Show>

              <Show hideInMobile>
                <Button
                  onClick={() => {
                    navigate('/company');
                  }}
                  className=' !text-primary-red !font-bold hover:!border-primary-red border-primary-red !bg-white-900 hover:!bg-red-300 !text-base !px-6 !h-10 !leading-[100%] rounded-[4px]'
                >
                  {t('employer')}
                </Button>
              </Show>
              <Show hideInMobile>
                <Button
                  onClick={() => {
                    navigate('/login');
                  }}
                  className='!bg-primary-red !text-white-900 !font-bold border-none hover:!bg-secondary-red !text-base !px-6 !h-10 !leading-[100%] rounded-[4px]'
                >
                  Đăng nhập
                </Button>
              </Show>
            </>
          )}

          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
