import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import HeaderDropdown from './HeaderDropdown';
import HeaderMessage from './HeaderMessage';
import HeaderUser from './HeaderUser';

import { HeaderMenu } from '../../../../+core/constants/recruitment.constants';

const Header = () => {
  return (
    <header>
      <nav className='h-[46px] bg-white px-4 py-2.5 flex gap-5 items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <Link to={`/recruitment`}>
            <div className='w-[80px] hover:cursor-pointer'>
              <img className='w-[100%]' src='./assets/logo/td-logo.png' alt='td-logo' />
            </div>
          </Link>
          <ul className='hidden md:flex'>
            {HeaderMenu?.map((menu) => {
              return <HeaderDropdown key={uuidv4()} menu={menu} />;
            })}
          </ul>
        </div>
        <div className='flex items-center gap-3'>
          <HeaderMessage />
          <HeaderUser />
        </div>
      </nav>
    </header>
  );
};

export default Header;
