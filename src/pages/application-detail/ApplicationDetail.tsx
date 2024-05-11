import Container from '@/components/global/Container/Container';
import PDFSession from './components/PDFSession';
import ProfileSession from './components/ProfileSession';
import CVStatus from './components/CVStatus';
import CandateCode from './components/CandateCode';
import { useParams } from 'react-router-dom';
import { useGetApplicationQuery } from '@/+core/redux/apis/common/application/application.api';
import { Spin } from 'antd';

const ApplicationDetail = () => {
  const { applicationId } = useParams<{ applicationId: string }>();
  const { data, isLoading } = useGetApplicationQuery(applicationId);

  return (
    <Spin spinning={isLoading}>
      <Container>
        <div className='grid grid-cols-3'>
          <div className='col-span-2'>
            <PDFSession fileUrl={data?.data?.cvUrl} />
          </div>

          <div className='col-span-1 px-4 py-2'>
            <ProfileSession
              name={data?.data?.fullName}
              email={data?.data?.email}
              phone={data?.data?.phone}
            />
            <CVStatus status={data?.data?.status} />
            <CandateCode />
          </div>
        </div>
      </Container>
    </Spin>
  );
};

export default ApplicationDetail;
