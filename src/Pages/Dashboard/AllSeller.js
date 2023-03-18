import React from 'react';
import { useQuery } from 'react-query';

const AllSeller = () => {
  const {data: sellers} = useQuery({
    queryKey: ['seller'],
    queryFn: async() => {
      const res = await fetch('http://localhost:5000/seller')
      const data = await res.json();
      return data;
    }
  })
  return (
    <div>
    <h2 className='text-2xl font-semibold mt-9 mb-4 text-center font-[Metamorphous]' >All Sellers</h2>  

    <table className="table table-zebra w-full">
  
  <thead>
    <tr>
      <th>No.</th>
      <th>  Name</th>
     
      <th>Email</th>
       <th>DElETE</th>
    </tr>
  </thead>
  <tbody>
    {  
     sellers?.map((seller, i) =>   <tr key={seller._key}>
        <th> {i+1}</th>
        <td> {seller.name}</td>
        <td>{seller.email} </td>
        <td> <button className='btn btn-sm btn-primary text-white' type="submit">DELETE</button></td>
      </tr>)
    }
  </tbody>
</table>
  </div>
  );
};

export default AllSeller;