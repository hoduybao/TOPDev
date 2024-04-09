import Container from '@/components/global/Container/Container';
import CompanyDescription from './components/CompanyDescription';
import CompanyOverview from './components/CompanyOverview';
import CompanyContact from './components/CompanyContact';

const CompanyPage = () => {
  return (
    <Container>
      <div className='grid grid-cols-12'>
        <div className='col-span-12 lg:col-span-8'>
          <CompanyDescription />
        </div>
        <div className='col-span-12 lg:col-span-4 bg-blue-400'>
          <CompanyOverview />
          <CompanyContact />
        </div>
      </div>
    </Container>
  );
};

export default CompanyPage;
