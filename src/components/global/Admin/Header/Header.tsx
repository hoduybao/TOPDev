import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='z-10 fixed w-full h-[46px] bg-white px-4 py-2.5 flex gap-5 items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <Link to={`/recruitment`}>
            <div className='w-[80px] hover:cursor-pointer'>
              <img className='w-[100%]' src='../assets/logo/td-logo.png' alt='td-logo' />
            </div>
          </Link>
          {/* <div className='hidden md:flex list-none'>Menu</div> */}
        </div>
        <div className='flex items-center gap-5 md:gap-3'>abc</div>
      </nav>
    </header>
  );
};

export default Header;
