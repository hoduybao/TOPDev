import Container from '@/components/global/Container/Container';
import SubSession from './components/SubSession';
import MainSession from './components/MainSession';

const JobManagement = () => {
  return (
    <Container>
      <div className='flex gap-4 mt-8'>
        <div className='w-[30%]'>
          <SubSession />
        </div>

        <div className='w-[70%]'>
          <MainSession />
        </div>
      </div>
    </Container>
  );
};

export default JobManagement;
