import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Components/Loader';
import { AuthContext } from '../../Contexts/Authprovider';
import MypProductCard from './MypProductCard';

const MyProducts = () => {
  const {user} = useContext(AuthContext)
  const {data: products,  isLoading, refetch } = useQuery({
    queryKey: ['sellerProduct' ,user?.email],
    queryFn: async () => {
      try{
        const res = await fetch(`http://localhost:5000/sellerProduct?sellerEmail=${user?.email}`,{
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      const data = await res.json()
      return data
      }
      catch(error) {

      }
    }
  });

  if(isLoading){
    return <Loader></Loader>
  }
  return (
    <div>
      <h2>products {products?.length}</h2>
     <div className='grid lg:grid-cols-2 gap-8 mb-36'>
     {
        products?.map(product =>  <MypProductCard
         key={product._id}
         product={product}
         refetch={refetch}
        ></MypProductCard>)
      }
     </div>
    </div>
  );
};

export default MyProducts;