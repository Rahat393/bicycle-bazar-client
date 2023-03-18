import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllSeller = () => {
  const {data: sellers, refetch} = useQuery({
    queryKey: ['seller'],
    queryFn: async() => {
      const res = await fetch('http://localhost:5000/seller')
      const data = await res.json();
      return data;
    }
  });

  const handleSellerDelete = id => {
    fetch(`http://localhost:5000/users/${id}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
        if(data.deletedCount > 0){
          toast.success('Seller Delete Successfully !!')
          refetch()
        }
    })
  }
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
        <td> <button onClick={() => handleSellerDelete(seller._id)} className='btn btn-sm btn-primary text-white' type="submit">DELETE</button></td>
      </tr>)
    }
  </tbody>
</table>
  </div>
  );
};

export default AllSeller;