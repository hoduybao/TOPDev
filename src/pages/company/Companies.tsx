import Container from '@/components/global/Container/Container';
import SearchSession from './components/SearchSession';
import CompanyTypes, { Company } from './components/CompanyTypes';
import CompanySliders from './components/CompanySliders';
// import ListCompanies from './components/ListCompanies';
import { Button } from 'antd';
import CompaniesFooter from './components/CompaniesFooter';
import { useTranslation } from 'react-i18next';
import React from 'react';
import ListCompanies from './components/ListCompanies';

const LoadMoreBtn = () => {
  const { t } = useTranslation();
  return (
    <Button className='bg-black-900 rounded h-full w-[40%] text-white-900 p-2 text-base'>
      {t('button.loadmore.employers')}
    </Button>
  );
};

const CompaniesPage = () => {
  const topRef = React.useRef<HTMLDivElement>(null);
  const flRef = React.useRef<HTMLDivElement>(null);
  const trendRef = React.useRef<HTMLDivElement>(null);
  const totalRef = React.useRef<HTMLDivElement>(null);

  const list: Company[] = [
    { alias: 'trend.top', url: '/companies', isSelected: true, ref: topRef },
    { alias: 'trend.follow', url: '/companies', ref: flRef },
    { alias: 'trend.job', url: '/companies', ref: trendRef },
    { alias: 'trend.total', url: '/companies', ref: totalRef },
  ];

  return (
    <>
      <Container>
        <SearchSession />
        <CompanyTypes list={list} />
        <div ref={topRef}>
          <CompanySliders type='trend.top' size={4} autoplay />
        </div>
        <div ref={flRef}>
          <CompanySliders type='trend.follow' size={4} />
        </div>
        <div ref={trendRef}>
          <ListCompanies type='trend.job' />
        </div>
        <div ref={totalRef}>
          <ListCompanies type='trend.follow' />
        </div>
        <div className='flex justify-center'>
          <LoadMoreBtn />
        </div>
      </Container>
      <CompaniesFooter />
    </>
  );
};

// const swiperProps = {
//   spaceBetween: 5,
//   slidesPerView: size,
//   autoHeight: true,
//   loop: true,
//   modules: [Autoplay],
//   autoplay: { delay: 1000 },
// };

export default CompaniesPage;
