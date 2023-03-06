import React from 'react';
import { Link } from 'react-router-dom';
 
const CategoryCard = ({categorie}) => {
  const {category_name, image, _id} = categorie
  return (
    <div className='mb-10'>
      <div className="card card-compact w-96 bg-base-100 shadow-2xl p-3">
  <figure><img className='w-96 h-64 rounded-lg'  src={image} alt="Shoes" /></figure>
  <div className="     p-5">
    <Link to={`/products/${_id}`}>
    <h1 className="p-3 text-center w-3/4  ml-9 font-[Metamorphous]  text-xl  font-semibold rounded-md btn-primary  bg-gradient-to-r from-primary to-secondary text-white  "> {category_name}</h1>
    </Link>
     
  
  </div>
</div>
    </div>
  );
};

export default CategoryCard;