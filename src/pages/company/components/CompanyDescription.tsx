import React from 'react';
import CompanyCard from './CompanyCard';
import { useTranslation } from 'react-i18next';
import SelectionTags, { TAG_TYPES } from '@/components/ui/tag/SelectionTags';
import ProductsSession from './ProductsSession';
import ProfileSession from './ProfileSession';

const CompanyDescription = () => {
  const productRef = React.useRef<HTMLDivElement>(null);
  const companyRef = React.useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  return (
    <div>
      <CompanyCard />
      <div className='mt-20 '>
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
        <div ref={companyRef} className='bg-white-900 rounded'>
          <ProfileSession />
        </div>
        <div ref={productRef} className='bg-white-900 rounded mt-8'>
          <ProductsSession />
        </div>
      </div>
    </div>
  );
};

export default CompanyDescription;
