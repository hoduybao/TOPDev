import Container from '@/components/global/Container/Container';
import SearchSession from './components/SearchSession';
import CompanyTypes from './components/CompanyTypes';
import CompanySliders from './components/CompanySliders';
import ListCompanies from './components/ListCompanies';
import { Button } from 'antd';
import CompaniesFooter from './components/CompaniesFooter';
import { useTranslation } from 'react-i18next';

const LoadMoreBtn = () => {
  const { t } = useTranslation();
  return (
    <Button className='bg-black-900 rounded h-full w-[40%] text-white-900 p-2 text-base'>
      {t('button.loadmore.employers')}
    </Button>
  );
};

const CompaniesPage = () => {
  return (
    <>
      <Container>
        <SearchSession />
        <CompanyTypes />
        <CompanySliders />
        <CompanySliders />
        <ListCompanies />
        <div className='flex justify-center'>
          <LoadMoreBtn />
        </div>
      </Container>
      <CompaniesFooter />
    </>
  );
};

export default CompaniesPage;
