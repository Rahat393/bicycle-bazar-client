import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Components/Loader';

const AllUsers = () => {
  const {data:buyers, isLoading} = useQuery({
    queryKey: ['buyer'],
    queryFn: async () =>{
      const res = await fetch('http://localhost:5000/buyer')
      const data = await res.json();
      return data;
    }

  });
  if(isLoading){
    return <Loader/>
  }
  console.log(buyers);
  return (
    <div>
      <h2 className='text-2xl font-semibold mt-9 mb-4 text-center font-[Metamorphous]' >All Buyers</h2>  

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
        buyers?.map((buyer, i) =>   <tr key={buyer._key}>
          <th> {i+1}</th>
          <td> {buyer.name}</td>
          <td>${buyer.email} </td>
          <td> <button className='btn btn-sm btn-primary text-white' type="submit">DELETE</button></td>
        </tr>)
      }
    </tbody>
  </table>
    </div>
  );
};

export default AllUsers;