import companyData from '../../../draft/company-new.json';
type ProductItemProps = {
  name: string;
  description: string;
  img: string;
};
const ProductItem = ({ name, img, description }: ProductItemProps) => {
  return (
    <div className='flex-1 border rounded p-4'>
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

const ProductsSession = () => {
  return (
    <div className='p-4'>
      <h1 className='font-bold text-lg uppercase'>product</h1>
      <div className='flex gap-2 flex-col lg:flex-row mt-2'>
        {companyData.products.map((product, index) => (
          <ProductItem
            key={index}
            name={product.name}
            img={product.img}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSession;
