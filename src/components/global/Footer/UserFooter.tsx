import { Link } from 'react-router-dom';
import { FooterMenu } from '../../../+core/constants/user.constant';
import Container from '../Container/Container';

const MenuHeader = ({ title }: { title: string }) => {
  return <div className='font-bold mb-2'>{title}</div>;
};

const MenuItem = ({ name, url }: { name: string; url: string }) => {
  return (
    <div>
      <Link to={url}>{name}</Link>
    </div>
  );
};

const Menu = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex flex-col gap-1'>{children}</div>;
};

const MainSession = ({ children }: { children: React.ReactNode }) => {
  return <div className='col-span-12 xl:col-span-4 sm:col-span-12 mb-2'>{children}</div>;
};

const SubSession = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='col-span-12 xl:col-span-2 lg:col-span-6 sm:col-span-12 mb-2'>{children}</div>
  );
};

const UserFooter = () => {
  return (
    <div className='w-full px-9 py-16 md:px-4 md:py-16 bg-userFooter flex justify-center items-center text-base leading-1 '>
      <Container>
        <div className='w-full grid grid-cols-12 max-w-[80rem]'>
          <MainSession>
            <div className='mb-2'>
              <img src='/assets/icons/td-logo.png' alt='logo' />
            </div>
            <div>{FooterMenu.address}</div>
            <div>{FooterMenu.contact}</div>
          </MainSession>
          <SubSession>
            <MenuHeader title={FooterMenu.topdevAbout.title} />
            <Menu>
              {FooterMenu.topdevAbout.menu.map((item, index) => (
                <MenuItem key={index} name={item.name} url={item.url} />
              ))}
            </Menu>
          </SubSession>

          <SubSession>
            <MenuHeader title={FooterMenu.candidate.title} />
            <Menu>
              {FooterMenu.candidate.menu.map((item, index) => (
                <MenuItem key={index} name={item.name} url={item.url} />
              ))}
            </Menu>
          </SubSession>

          <SubSession>
            <MenuHeader title={FooterMenu.recuitment.title} />
            <Menu>
              {FooterMenu.recuitment.menu.map((item, index) => (
                <MenuItem key={index} name={item.name} url={item.url} />
              ))}
            </Menu>
          </SubSession>
          <SubSession>
            <MenuHeader title={FooterMenu.follow.title} />
            <MenuHeader title={FooterMenu.install.title} />
          </SubSession>

          <div className='col-span-12 text-center pt-16'>
            <div>{FooterMenu.copyRight}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserFooter;
