import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Components/Loader';
import { AuthContext } from '../../Contexts/Authprovider';

const MyOrdes = () => {
  const {user} = useContext(AuthContext)
  const {data: orders =[], isLoading} = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async() => {
      try{
        const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        const data = await res.json();
        return data
      }
      catch{

      }
    }
    
  });
  console.log(orders);

  if(isLoading){
    return <Loader></Loader>
  }
  return (
    <div>
      <h2 className='text-2xl font-semibold mt-9 mb-4 text-center font-[Metamorphous]'>My Orders </h2> 
     
      <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    
    <thead>
      <tr>
        <th>No.</th>
        <th>Product Name</th>
       
        <th>Price</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      { orders &&
        orders?.map((order, i) =>   <tr key={order._key}>
          <th> {i+1}</th>
          <td> {order.product_name}</td>
          <td>${order.resale_price} </td>
          <td> <button className='btn btn-sm btn-primary text-white' type="submit">PAY</button></td>
        </tr>)
      }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyOrdes;