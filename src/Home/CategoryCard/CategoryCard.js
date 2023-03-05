import React from 'react';
 
const CategoryCard = ({categorie}) => {
  const {category_name, image} = categorie
  return (
    <div className='mb-10'>
      <div className="card card-compact w-96 bg-base-100 shadow-2xl">
  <figure><img className='w-96 h-64' src={image} alt="Shoes" /></figure>
  <div className="     p-5">
    <h1 className="p-3 text-center w-3/4  ml-9  text-xl  font-semibold rounded-md btn-primary  bg-gradient-to-r from-primary to-secondary text-white  "> {category_name}</h1>
     
  
  </div>
</div>
    </div>
  );
};

export default CategoryCard;