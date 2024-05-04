import { useGetApplicationDetailsQuery } from '@/+core/redux/apis/common/recruitment/recruitment.api';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';
import DetailApplicationContainer from '../../components/global/Recruitment/Content/DetailApplicationContainer';
import ViewPdfContainer from '../../components/global/Recruitment/Content/ViewPdfContainer';
import DetailSubHeader from '../../components/global/Recruitment/Header/DetailSubHeader';

const DetailPage = () => {
  const params = useParams();

  const { data, isFetching } = useGetApplicationDetailsQuery(params?.applicationId as string, {
    refetchOnMountOrArgChange: true,
    skip: !params?.applicationId,
  });
  console.log(data);
  return (
    <Spin spinning={isFetching}>
      <div className='flex flex-col'>
        <DetailSubHeader />
        <div className='max-h-[calc(100vh-46px-51px)] flex flex-wrap lg:flex-nowrap'>
          <div className='w-full lg:w-[50%] 2xl:w-[60%]'>
            <DetailApplicationContainer data={data?.data} />
          </div>
          <div className='w-full lg:w-[50%] 2xl:w-[40%]'>
            <ViewPdfContainer fileUrl={data?.data?.cvUrl} />
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default DetailPage;
