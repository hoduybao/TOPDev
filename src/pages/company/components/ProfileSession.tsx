import ContentSession from './ContentSession';
import companyData from '../../../draft/company-new.json';

const ProfileSession = () => {
  return (
    <div className='p-4'>
      <ContentSession header='about us' content={companyData.about} />
      <ContentSession header='introduction' content={companyData.introduction} />
      <ContentSession header='benefit' content={companyData.benefit} />
      <div className='flex gap-2 mb-2'>
        {companyData.imgs.map((img, index) => (
          <img
            key={index}
            src={img}
            alt='company logo'
            className='w-[33.33%] rounded aspect-square h-full object-cover'
          />
        ))}
      </div>
      <ContentSession header='job benefit' content={companyData.benefit} />
    </div>
  );
};

export default ProfileSession;
