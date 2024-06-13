import Container from '@/components/global/Container/Container';
import CompanySliders from './components/CompanySliders';
import CompanyTypes, { Company } from './components/CompanyTypes';
import SearchSession from './components/SearchSession';
// import ListCompanies from './components/ListCompanies';
import { useGetCompaniesQuery } from '@/+core/redux/apis/common/company/company.api';
import { Button, Spin } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CompaniesFooter from './components/CompaniesFooter';
import ListCompanies from './components/ListCompanies';

const LoadMoreBtn = ({ onClick }: { onClick?: () => void }) => {
  const { t } = useTranslation();
  return (
    <Button
      className='bg-black-900 rounded h-full w-[40%] text-white-900 p-2 text-base'
      onClick={onClick}
    >
      {t('button.loadmore.employers')}
    </Button>
  );
};

const CompaniesPage = () => {
  const topRef = React.useRef<HTMLDivElement>(null);
  const flRef = React.useRef<HTMLDivElement>(null);
  const trendRef = React.useRef<HTMLDivElement>(null);
  const totalRef = React.useRef<HTMLDivElement>(null);

  const [pageTotalCompany, setPageTotalCompany] = useState(1);

  const list: Company[] = [
    { alias: 'trend.top', url: '/companies', isSelected: true, ref: topRef },
    { alias: 'trend.follow', url: '/companies', ref: flRef },
    { alias: 'trend.job', url: '/companies', ref: trendRef },
    { alias: 'trend.total', url: '/companies', ref: totalRef },
  ];

  const { data: dataAllCompanies, isFetching: isFetchingGetAll } = useGetCompaniesQuery({
    type: 'ALL',
  });
  console.log(dataAllCompanies);
  const { data: dataTopCompanies, isFetching: isFetchingGetTop } = useGetCompaniesQuery({
    type: 'TOP',
  });
  const { data: dataMostFollowCompanies, isFetching: isFetchingGetMostFollow } =
    useGetCompaniesQuery({
      type: 'MOST_FOLLOW ',
    });
  const { data: dataLatestJobCompanies, isFetching: isFetchingGetLatestJob } = useGetCompaniesQuery(
    {
      type: 'LATEST_JOB',
    },
  );

  return (
    <Spin
      spinning={
        isFetchingGetAll || isFetchingGetTop || isFetchingGetLatestJob || isFetchingGetMostFollow
      }
    >
      <Container>
        <SearchSession />
        <CompanyTypes list={list} />
        <div ref={topRef}>
          <CompanySliders type='trend.top' size={4} autoplay data={dataTopCompanies?.data} />
        </div>
        <div ref={flRef}>
          <CompanySliders type='trend.follow' size={4} data={dataMostFollowCompanies?.data} />
        </div>
        <div ref={trendRef}>
          <ListCompanies type='trend.job' data={dataLatestJobCompanies?.data} />
        </div>
        <div ref={totalRef}>
          <ListCompanies
            type='trend.total'
            data={dataAllCompanies?.data?.slice(0, pageTotalCompany * 12)}
          />
        </div>
        <div
          className={`flex justify-center mt-12 ${
            dataAllCompanies?.data?.slice(0, pageTotalCompany * 12).length ===
            dataAllCompanies?.data.length
              ? 'hidden'
              : 'block'
          }`}
        >
          <LoadMoreBtn
            onClick={() => {
              setPageTotalCompany(pageTotalCompany + 1);
            }}
          />
        </div>
      </Container>
      <CompaniesFooter />
    </Spin>
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
