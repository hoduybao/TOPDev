import { HeaderMenuConstant } from '../../../+core/constants/user.constant';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenuItem = ({ content, url = '/' }: { content: string; url: string }) => {
  return (
    <div className='font-semibold text-base'>
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
  return <div className={`${addGap && 'gap-12'} flex items-center`}>{children}</div>;
};

const LanguageItem = ({ name, isChosen = false }: { name: string; isChosen?: boolean }) => {
  return <div className={`${isChosen && 'opacity-50'} font-semibold text-lg`}>{name}</div>;
};

const HoverBackground = ({ children }: { children: React.ReactNode }) => {
  return <div className='rounded-lg hover:bg-iconHover hover:cursor-pointer p-4'>{children}</div>;
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
          <HoverBackground>
            <img className='h-[24px]' src='/assets/icons/notification.svg' alt='notification' />
          </HoverBackground>
          <HoverBackground>
            <div className='flex gap-4 items-center justify-center'>
              <img className='h-[24px]' src='/assets/icons/avatar.svg' alt='notification' />
              <div className='text-lg font-semibold'>Hung Ngo</div>
            </div>
          </HoverBackground>
          <div className='p-4 flex items-center gap-4'>
            <LanguageItem name='EN' />|
            <LanguageItem name='VI' isChosen />
          </div>
        </HeaderMenu>
      </div>
    </div>
  );
};

export default UserHeader;
