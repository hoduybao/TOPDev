import React from 'react';
import CompanyCard, { CompanyCardContent } from './CompanyCard';
import { useTranslation } from 'react-i18next';
import SelectionTags, { TAG_TYPES } from '@/components/ui/tag/SelectionTags';
import ProductsSession from './ProductsSession';
import ProfileSession from './ProfileSession';
import useSticky from '@/hooks/sticky';
import { CompanyDetail } from '@/+core/redux/apis/common/company/company.api';

const CompanyDescription = ({ data }: { data: CompanyDetail }) => {
  const productRef = React.useRef<HTMLDivElement>(null);
  const companyRef = React.useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { ref, isSticky } = useSticky();

  return (
    <div>
      <CompanyCard />
      <div>
        <div
          className='pb-4 sticky top-0 z-10 bg-mainBackground'
          style={{
            visibility: isSticky ? 'visible' : 'hidden',
          }}
          ref={ref}
        >
          <div className={` bg-white-900 p-4`}>
            <CompanyCardContent isStickyCustom />
          </div>
        </div>

        <div className='sticky top-[7rem] z-10 bg-white-900'>
          <SelectionTags
            listTags={[
              {
                type: TAG_TYPES.COMPANY,
                name: t('company.infomation'),
                ref: companyRef,
              },
              {
                type: TAG_TYPES.PRODUCT,
                name: t('product.infomation'),
                ref: productRef,
              },
            ]}
          />
        </div>

        <div ref={companyRef} className='bg-white-900 rounded'>
          <ProfileSession data={data} />
        </div>
        <div ref={productRef} className='bg-white-900 rounded mt-8'>
          <ProductsSession />
        </div>
      </div>
    </div>
  );
};

export default CompanyDescription;
