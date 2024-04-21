import { IMAGES } from '@/config/images';
import { Button, Image } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowDownIcon from '../../../../public/assets/icons/down-arrow.tsx';
import PhoneIcon from '../../../../public/assets/icons/phone.tsx';
import ArrowRightIcon from '../../../../public/assets/icons/right-arrow.tsx';
import NotificationBox from '../../../pages/home/components/NotificationBox.tsx';

type HeaderMenuItemProps = {
  children?: any[];
  grid?: boolean;
};

const HeaderMenuItem = ({ items }: { items: any }) => {
  const [children, setChildren] = useState<HeaderMenuItemProps | null>(null);
  console.log(children);

  return (
    <div className='h-full group cursor-pointer relative z-10'>
      <div className='flex justify-between items-center gap-3 p-8'>
        <div className='text-base font-bold group-hover:text-primary-red'>{items.title}</div>
        {items.children && (
          <ArrowDownIcon className='transform group-hover:rotate-180 transition-transform duration-500 stroke-black-900  group-hover:stroke-primary-red' />
        )}
      </div>
      {items.children && items.children.length > 0 && (
        <div className='absolute left-0 top-[84px] flex'>
          <div className='bg-white-900 w-[300px] group-hover:block hidden group-hover:animate-slide-top shadow-md'>
            {items.children.map((item: any, index: number) => (
              <div
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

const jobItems = {
  title: 'Việc làm IT',
  onClick: () => {},
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
          title: 'Magento',
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

const itCompany = {
  title: 'Công ty IT',
  onClick: () => {},
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
  return (
    <div className='w-full bg-white-900 shadow-md lg:px-3 flex justify-center h-[5.25rem]'>
      <div className='flex justify-between items-center w-full'>
        <div className='flex gap-2 items-center h-full'>
          <Image alt='logo' src={IMAGES.logoTopDev} preview={false} />
          <HeaderMenuItem items={jobItems} />
          <HeaderMenuItem items={itCompany} />
          <HeaderMenuItem items={tools} />
          <HeaderMenuItem items={itBlog} />
        </div>

        <div className='flex items-center h-full gap-4'>
          <Show hideInMobile>
            <div className='flex gap-2 items-center justify-center group cursor-pointer'>
              <PhoneIcon className='group-hover:fill-primary-red fill-black-900' />
              <div className='text-base font-semibold group-hover:text-primary-red'>
                028 6273 3496
              </div>
            </div>
          </Show>
          <Show hideInMobile>
            <NotificationBox />
          </Show>
          <Show hideInMobile>
            <Button className=' !text-primary-red !font-bold hover:!border-primary-red border-primary-red !bg-white-900 hover:!bg-red-300 !text-base !px-6 !h-11 !leading-[100%] rounded-[4px]'>
              {t('employer')}
            </Button>
          </Show>
          <Show hideInMobile>
            <Button className='!bg-primary-red !text-white-900 !font-bold border-none hover:!bg-secondary-red !text-base !px-6 !h-11 !leading-[100%]  rounded-[4px]'>
              Đăng nhập
            </Button>
          </Show>
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
