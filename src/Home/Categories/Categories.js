import React from 'react';
import {   useQuery } from 'react-query';
import Loader from '../../Components/Loader';
import CategoryCard from '../CategoryCard/CategoryCard';

const Categories = () => {
  const {data: categories, isLoading} =  useQuery( {
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
  });
  if(isLoading){
    return <Loader/>
  }
  return (
    <div>
      <div className="   ">
      <h1 className='divider text-4xl font-bold text-center place-items-center  mt-16 mb-8 font-[Metamorphous] '>Choose A Categorie  </h1>
      </div>
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