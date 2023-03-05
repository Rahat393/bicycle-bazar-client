import React from 'react';
import {   useQuery } from 'react-query';
import CategoryCard from '../CategoryCard/CategoryCard';

const Categories = () => {
  const {data: categories} =  useQuery( {
    queryKey: ["categories"],
    queryFn: async() => {
      try{
        const res = await fetch('http://localhost:5000/categories')
        const data = res.json();
        return data;
      }
      catch{

      }
    }
  })
  return (
    <div>
      <h1 className='text-4xl font-bold text-center mt-16 mb-8 font-[Metamorphous] text-primary'>Choose A Categorie  </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-11'>
      {
        categories?.map(categorie => <CategoryCard
        key={categorie._id}
        categorie={categorie}
        ></CategoryCard>)
      }
      </div>
    </div>
  );
};

export default Categories;