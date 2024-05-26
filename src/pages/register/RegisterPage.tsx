import Advertising from './components/Advertising/Advertising';
import RegisterSession from './components/RegisterSession';
import Container from '@/components/global/Container/Container';

const RegisterPage = () => {
  return (
    <Container>
      <div className='grid grid-cols-2 gap-14 flex-wrap pt-14 bg-white-900'>
        <Advertising />
        <RegisterSession />
      </div>
    </Container>
  );
};

export default RegisterPage;
