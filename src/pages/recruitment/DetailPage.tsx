import DetailSubHeader from '../../components/global/Recruitment/Header/DetailSubHeader';
import DetailApplicationContainer from '../../components/global/Recruitment/Content/DetailApplicationContainer';
import ViewPdfContainer from '../../components/global/Recruitment/Content/ViewPdfContainer';

const DetailPage = () => {
  return (
    <div className='flex flex-col'>
      <DetailSubHeader />
      <div className='max-h-[calc(100vh-46px-51px)] flex flex-wrap lg:flex-nowrap'>
        <div className='w-full lg:w-[50%] 2xl:w-[60%]'>
          <DetailApplicationContainer />
        </div>
        <div className='w-full lg:w-[50%] 2xl:w-[40%]'>
          <ViewPdfContainer />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
