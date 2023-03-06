import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from '../ProductCard/ProductsCard';

const Products = () => {
  const {products, category_name} = useLoaderData()
   console.log(category_name);
  return (
    <div>
     <h2 className='text-4xl font-semibold text-center font-[Metamorphous] mt-10 mb-7'>{category_name}</h2>
    <div className='grid lg:grid-cols-2 gap-8 mb-36'>
    {
      products.map((product, i) => <ProductsCard
       key={i}
       product={product}
       category_name={category_name}
      ></ProductsCard>)
     }

    </div>
    </div>
  );
};

export default Products;