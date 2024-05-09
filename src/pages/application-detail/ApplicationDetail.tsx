import Container from '@/components/global/Container/Container';
import PDFSession from './components/PDFSession';
import ProfileSession from './components/ProfileSession';
import CVStatus from './components/CVStatus';
import CandateCode from './components/CandateCode';

const ApplicationDetail = () => {
  return (
    <Container>
      <div className='grid grid-cols-3'>
        <div className='col-span-2'>
          <PDFSession />
        </div>

        <div className='col-span-1 px-4 py-2'>
          <ProfileSession />
          <CVStatus />
          <CandateCode />
        </div>
      </div>
    </Container>
  );
};

export default ApplicationDetail;
