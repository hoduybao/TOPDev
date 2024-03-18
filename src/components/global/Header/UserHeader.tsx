import { HeaderMenuConstant } from '../../../+core/constants/user.constant';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenuItem = ({ content, url = '/' }: { content: string; url: string }) => {
  return (
    <div className='font-semibold sm:text-xs md:text-base sm:hidden md:block'>
      <Link to={url}>{content}</Link>
    </div>
  );
};

const HeaderMenu = ({
  children,
  addGap = true,
}: {
  children: React.ReactNode;
  addGap?: boolean;
}) => {
  return <div className={`${addGap && 'lg:gap-12 md:gap-4'} flex items-center`}>{children}</div>;
};

const LanguageItem = ({ name, isChosen = false }: { name: string; isChosen?: boolean }) => {
  return (
    <div className={`${isChosen && 'opacity-50'} font-semibold text-lg md:text-base`}>{name}</div>
  );
};

const HoverBackground = ({
  children,
  hideInMobile = false,
}: {
  children: React.ReactNode;
  hideInMobile?: boolean;
}) => {
  return (
    <div
      className={`
    ${hideInMobile && 'sm:hidden md:block'}
    rounded-lg hover:bg-iconHover hover:cursor-pointer lg:p-4 md:p-2`}
    >
      {children}
    </div>
  );
};

const UserHeader = () => {
  return (
    <div className='w-full bg-white-700 shadow-md px-3'>
      <div className='flex justify-between items-center h-[5.25rem]'>
        <HeaderMenu>
          <img src='/assets/icons/td-logo.png' alt='logo' />
          <HeaderMenuItem content={HeaderMenuConstant.jobs.title} url='/' />
          <HeaderMenuItem content={HeaderMenuConstant.company} url='/' />
          <HeaderMenuItem content={HeaderMenuConstant.tools.title} url='/' />
          <HeaderMenuItem content={HeaderMenuConstant.blog} url='/' />
        </HeaderMenu>

        <HeaderMenu addGap={false}>
          <HoverBackground hideInMobile>
            <img className='h-[24px]' src='/assets/icons/notification.svg' alt='notification' />
          </HoverBackground>
          <HoverBackground>
            <div className='flex gap-4 items-center justify-center'>
              <img className='h-[24px]' src='/assets/icons/avatar.svg' alt='notification' />
              <div className='text-lg md:text-base font-semibold'>Hung Ngo</div>
            </div>
          </HoverBackground>
          <div className='p-4 flex items-center gap-4 md:p-2 md:gap-2'>
            <LanguageItem name='EN' />|
            <LanguageItem name='VI' isChosen />
          </div>
        </HeaderMenu>
      </div>
    </div>
  );
};

export default UserHeader;
