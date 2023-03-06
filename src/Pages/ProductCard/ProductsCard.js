import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';


const ProductsCard = ({product}) => {
  const {name, img, location, resale_price, 
    orginal_price, years_of_use,  product_condition, 
    posted_on, seller_name, category_name   } = product;
    console.log(category_name);
  return (
    <div>
      <h2>{category_name}</h2>
      <div className="      p-4 rounded-2xl   shadow-2xl">
  <figure><img className='h-96 w-[640px] rounded-lg'  src={img} alt="Shoes" /></figure>
   
    <h2 className=" text-3xl font-[Metamorphous] font-semibold text-center mt-2 mb-5"> {name}</h2>
   <div className='flex justify-between mt-4   font-[Merriweather]'>
   <div className='ml-5 '>
    <h3>Location: {location}</h3>
     <h3>Resale Price: <strong>${resale_price}</strong> </h3>
     <h3>Orginal Price : $<del>{orginal_price}</del> </h3>
     <h3>Years Of Use: {years_of_use}</h3>
    </div>
    <div className='mr-5'>
      <h3>Physical Condition: {product_condition}</h3>
      <p>Posted On : {posted_on}</p>
      <h4 className='flex'>Seller Name: {seller_name} <BsFillPatchCheckFill className='mt-1.5 ml-2 text-blue-700'/></h4>
    </div>
   </div>
   <div className='text-center mt-4'>
    <button className='text-2xl font-semibold w-3/4 font-[Metamorphous] p-2 rounded-md bg-gradient-to-r from-primary to-secondary text-white'>Book Now</button>
   </div>
    </div>
   
</div>
    
  );
};

export default ProductsCard;