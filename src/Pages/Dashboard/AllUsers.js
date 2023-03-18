import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loader from '../../Components/Loader';

const AllUsers = () => {
  const {data:buyers, isLoading, refetch} = useQuery({
    queryKey: ['buyer'],
    queryFn: async () =>{
      const res = await fetch('http://localhost:5000/buyer')
      const data = await res.json();
      return data;
    }
  });

  const handleMakeAdmin = id => {
      fetch(`http://localhost:5000/users/admin/${id}`,{
        method: 'PUT'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.modifiedCount === 1){
          toast.success('Make Admin Successfully')
          refetch()
        }
      })
  }

  const handleUserDelete = id => {
    fetch(`http://localhost:5000/users/${id}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
        if(data.deletedCount > 0){
          toast.success('User Delete Successfully !!')
          refetch()
        }
    })
  }

  if(isLoading){
    return <Loader/>
  }
  // console.log(buyers);
  return (
    <div>
      <h2 className='text-2xl font-semibold mt-9 mb-4 text-center font-[Metamorphous]' >All Buyers</h2>  

      <table className="table table-zebra w-full">
    
    <thead>
      <tr>
        <th>No.</th>
        <th>  Name</th>
        <th>Email</th>
        <th>Admin</th>
         <th>DElETE</th>
      </tr>
    </thead>
    <tbody>
      {  
        buyers?.map((buyer, i) =>   <tr key={buyer._key}>
          {/* {console.log(buyer._id)} */}
          <th> {i+1}</th>
          <td> {buyer.name}</td>
          <td>{buyer.email} </td>
          <td> { buyer?.role !== 'admin' && <button onClick={() => handleMakeAdmin(buyer._id)} className='btn btn-xs btn-primary text-white'>Make Admin</button>}</td>
          <td> <button onClick={() => handleUserDelete(buyer._id)} className='btn btn-sm btn-primary text-white' type="submit">DELETE</button></td>
        </tr>)
      }
    </tbody>
  </table>
    </div>
  );
};

export default AllUsers;