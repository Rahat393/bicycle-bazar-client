import moment from 'moment';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import ConformationModal from '../../Components/ConformationModal';

const MypProductCard = ({product}) => {
const {description, productImg, _id, postTime, location, orginalPrice, productCondition,
 productName, purchaseDate, resalePrice, sellerEmail, sellerName, sellerPhone, refetch} = product;

 const time = moment(postTime).fromNow();
 const [deletingProduct, setDeletingProduct] = useState(null)

 const closeModal = () => {
  setDeletingProduct(null)
 }

 const handleDeleteProduct = product =>{
      fetch(`http://localhost:5000/sellerProduct/${product._id}`,{
        method: 'DELETE',
               
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount === 1){
          toast.success('Product Deleted Successfully')
          refetch()
        }
        console.log(data);
      })
 }

  return (
    <div>
      <div>
      
      <div className="      p-4 rounded-2xl   shadow-2xl">
  <figure><img className='h-96 w-[640px] rounded-lg'  src={productImg} alt="Shoes" /></figure>
   
    <h2 className=" text-3xl font-[Metamorphous] font-semibold text-center mt-2 mb-5"> {productName }</h2>
   <div className='flex justify-between mt-4   font-[Merriweather]'>
   <div className='ml-5 '>
    <h3>Location: { location}</h3>
     <h3>Resale Price: <strong>${resalePrice }</strong> </h3>
     <h3>Orginal Price : $<del>{orginalPrice }</del> </h3>
     
     
     
    </div>
    <div className='mr-5'>
      <h3>Physical Condition: {productCondition }</h3>
      {/* <p>Posted On : { }</p> */}
      <h4 className='flex'>Seller Name: {sellerName } <BsFillPatchCheckFill className='mt-1.5 ml-2 text-blue-700'/></h4>
    </div>
   </div>
   <h3 className=' font-[Merriweather] ml-5'>Purchase Date: {purchaseDate }</h3>
   <h3 className=' font-[Merriweather] ml-5 '>Posted On : <span className='text-gray-500'>{time }</span>   </h3>
   <h3 className=' font-[Merriweather] ml-5'>Seller Phone: {sellerPhone }</h3>
   <div className='text-center mt-4   '>
    <button className='w-3/4'>
    <label onClick={() => setDeletingProduct(product)}   htmlFor="confirmation-modal" className='text-xl font-semibold    p-2  lg:px-36   rounded-md   bg-gradient-to-r from-primary to-secondary text-white'>Delete</label>

    </button>
   </div>
    </div>
      </div>
      {deletingProduct &&
        <ConformationModal
        closeModal={closeModal}
        modalData={deletingProduct}
        handleDeleteProduct={handleDeleteProduct}
      ></ConformationModal>}
    </div>
  );
};

export default MypProductCard;