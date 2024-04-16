import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BottomSliders from './BottomSliders';
import Container from '@/components/global/Container/Container';

type JobItem = {
  alias: string;
  url: string;
};
const fresherJob: JobItem[] = [
  { alias: 'job.fresher.java', url: '/' },
  { alias: 'job.fresher.js', url: '/' },
  { alias: 'job.fresher.php', url: '/' },
  { alias: 'job.fresher.py', url: '/' },
  { alias: 'job.fresher.react', url: '/' },
  { alias: 'job.fresher.node', url: '/' },
  { alias: 'job.fresher.c', url: '/' },
  { alias: 'job.fresher.tester', url: '/' },
  { alias: 'job.fresher.fe', url: '/' },
  { alias: 'job.fresher.be', url: '/' },
];

const industries: JobItem[] = [
  { alias: 'job.fields.os', url: '/' },
  { alias: 'job.fields.product', url: '/' },
  { alias: 'job.fields.bank', url: '/' },
  { alias: 'job.fields.vt', url: '/' },
  { alias: 'job.fields.game', url: '/' },
  { alias: 'job.fields.fin', url: '/' },
  { alias: 'job.fields.hw', url: '/' },
  { alias: 'job.fields.sw', url: '/' },
  { alias: 'job.fields.agency', url: '/' },
  { alias: 'job.fields.service', url: '/' },
];

const hotCompanies: JobItem[] = [
  { alias: 'job.hot.os', url: '/' },
  { alias: 'job.hot.sw', url: '/' },
  { alias: 'job.hot.hw', url: '/' },
  { alias: 'job.hot.product', url: '/' },
  { alias: 'job.hot.bank', url: '/' },
  { alias: 'job.hot.vt', url: '/' },
  { alias: 'job.hot.game', url: '/' },
  { alias: 'job.hot.agency', url: '/' },
  { alias: 'job.hot.service', url: '/' },
  { alias: 'job.hot.fin', url: '/' },
];

const ListCompaniesTypes = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col gap-4 p-4 lg:flex-row '>
      {/* fresher */}
      <ListCompaniesItem header={t('job.fresher')} items={fresherJob} />
      {/* fields */}
      <ListCompaniesItem header={t('job.fields')} items={industries} />
      {/* hot companies */}
      <ListCompaniesItem header={t('job.hot')} items={hotCompanies} />
    </div>
  );
};

type ListCompaniesItemProps = {
  header: string;
  items: JobItem[];
};
const ListCompaniesItem = ({ header, items }: ListCompaniesItemProps) => {
  const { t } = useTranslation();
  return (
    <div className='bg-[#faece9] p-4 lg:w-[33.33%]'>
      <h3 className='font-bold text-base'>{header}</h3>
      <ul className='max-h-[170px] overflow-y-scroll mt-2'>
        {items.map((companyType) => (
          <li className='mb-2 text-base' key={t(`${companyType.alias}`)}>
            <Link to={companyType.url}>{t(`${companyType.alias}`)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CompaniesFooter = () => {
  return (
    <div className='mt-8'>
      <BottomSliders />
      <Container>
        <ListCompaniesTypes />
      </Container>
    </div>
  );
};

export default CompaniesFooter;
