import Container from '@/components/global/Container/Container';
import Filter from './components/Filter';
import SubFilter from './components/SubFilter';
import CVList from './components/CVList';

const ApplicationsPage = () => {
  return (
    <div>
      <div>
        <Filter />
        <div className='mt-8'>
          <SubFilter />
        </div>
      </div>
      <Container>
        <CVList />
      </Container>
      ;
    </div>
  );
};

export default ApplicationsPage;
