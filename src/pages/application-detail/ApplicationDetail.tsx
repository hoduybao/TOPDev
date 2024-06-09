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
  const { data, isFetching } = useGetApplicationQuery(applicationId);
  console.log(data);

  return (
    <div className='w-full'>
      <Spin spinning={isFetching}>
        <div className='w-full grid grid-cols-3'>
          <div className='col-span-2'>
            <PDFSession fileUrl={data?.cvUrl} />
          </div>

          <div className='col-span-1 px-4 py-2'>
            <ProfileSession name={data?.fullName} email={data?.email} phone={data?.phone} />
            {data && <CVStatus appId={data?.id} status={data?.status} cvUrl={data?.cvUrl} />}
            <CandateCode />
          </div>
        </div>
      </Spin>
    </div>
  );
};

export default ApplicationDetail;
