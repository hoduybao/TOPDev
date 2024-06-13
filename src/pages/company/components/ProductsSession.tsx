import { CompanyDetail } from '@/+core/redux/apis/common/company/company.api';
type ProductItemProps = {
  name: string;
  description: string;
  img: string;
};
const ProductItem = ({ name, img, description }: ProductItemProps) => {
  return (
    <div className='col-span-1 border rounded p-4'>
      <div className='flex gap-2'>
        <div className='w-[6.25rem]'>
          <img src={img} alt='product logo' className='w-full rounded' />
        </div>
        <div className='flex-1 max-h-[10rem] overflow-y-auto'>
          <h4 className='font-bold capitalize text-base'>{name}</h4>
          <p className='mt-2'>{description}</p>
        </div>
      </div>
    </div>
  );
};

const ProductsSession = ({ data }: { data: CompanyDetail }) => {
  return (
    <div className='p-4'>
      <h1 className='font-bold text-lg uppercase'>product</h1>
      <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 mt-2'>
        {data?.products?.map((product, index) => (
          <ProductItem
            key={index}
            name={product.productName}
            img={product.productPhoto || ''}
            description={product.description || ''}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSession;
