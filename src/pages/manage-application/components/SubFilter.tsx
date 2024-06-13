import Container from '@/components/global/Container/Container';
import { useTranslation } from 'react-i18next';

const SubFilter = ({
  total,
  // showState,
  // setShowState,
  title,
}: {
  total: number;
  // showState: boolean;
  // setShowState: (value: boolean) => void;
  title: string;
}) => {
  const { t } = useTranslation();
  // const options = [
  //   { label: t('showAllCV'), value: true },
  //   { label: t('onlyUnseenCV'), value: false },
  // ];

  return (
    <Container>
      <div className='flex justify-between'>
        <div>
          {t('found')} <span className='text-orange-500 font-bold'>{total}</span>{' '}
          {total > 1 ? t('candidates') : t('candidate')}
          {total > 0 ? t('applyForJob') : ''}
          {title ? <span className='font-semibold'> {title}</span> : ''}
        </div>
        {/* <Radio.Group
          defaultValue={showState}
          className='text-green-500'
          options={options}
          onChange={({ target: { value } }) => {
            console.log(value);
            setShowState(value);
          }}
        /> */}
      </div>
    </Container>
  );
};

export default SubFilter;
