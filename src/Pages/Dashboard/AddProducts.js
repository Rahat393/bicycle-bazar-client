import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider';

const AddProducts = () => {
    const {user} = useContext(AuthContext)
     
  const { register, handleSubmit, formState: { errors } } = useForm();
  const imgHostKey = process.env.REACT_APP_Imgbb_key;
    const navigate = useNavigate()
    const postTime = new Date()
    // console.log(postTime);

  const handleAddProduct = data => {

    const image = data.image[0];
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`
    fetch(url, {
        method: 'POST',
        body:formData
    })
    .then(res => res.json())
    .then(imgData => {
        if(imgData.success){
            const productImg = imgData.data.url
            console.log(productImg);
            const productInfo ={
                productName: data.productName,
                orginalPrice: data.orginalPrice,
                resalePrice: data.resalePrice,
                purchaseDate: data.purchaseDate,
                location: data.location,
                productCondition: data.productCondition,
                productImg :  productImg,
                description : data.description,
        
                sellerName : data.sellerName,
                sellerEmail: data.sellerEmail,
                sellerPhone : data.sellerPhone ,
                postTime
            }
            productSaveInDB(productInfo)
            
            console.log(productInfo);
        }
  
    })
 
  }

  const productSaveInDB = (productInfo) =>{
    fetch('http://localhost:5000/sellerProduct', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productInfo)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        toast.success('Product Added Successfully')
        navigate('/dashboard/myproducts')

    })
  }

  return (
    <div className='bg-slate-100 p-5'> 
          <h2 className='text-2xl font-semibold mt-6 mb-2 text-center font-[Metamorphous]' >Add A Product</h2>  

          <form  onSubmit={handleSubmit(handleAddProduct)}>
            <p className='mb-2   font-semibold'>Product Info</p>
            <div className='bg-[#9ef68872] rounded-lg p-6 grid lg:grid-cols-2'>
            <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("productName", {
                            required: "Name is Required"
                        })} placeholder='Product Name' className="input   w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Orginal Price</span></label>
                        <input placeholder='Orginal Price' type="number" {...register("orginalPrice", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Resale Price</span></label>
                        <input type="number" {...register("resalePrice", {
                            required: "Name is Required"
                             
                        })} placeholder='Resale Price' className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">  Purchase Date</span></label>
                        <input id="purchaseYear" type="date" {...register("purchaseDate", {
                            required: "Purchase Date required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "Location is Required"
                        })} placeholder='Location' className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Condition</span></label>
                        <select
                            {...register('productCondition')}
                            className="select input-bordered w-full max-w-xs">
                            <option   value="excellent">Excellent</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                        </select>
                    </div>

                        <div className='mt-3'>
                        <label className="label"> <span className="label-text">Product Image</span></label>
                    <div className="form-control border-2 border-dashed border-gray-400 rounded-lg p-4  w-full max-w-xs">
                        <input type="file" {...register("image", {
                            required: "Name is Required"
                        })} className="file-input file-input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                        </div>

                        <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <textarea  placeholder="Description" className="textarea textarea-bordered textarea-lg w-full max-w-xs"  {...register("description", {
                            required: "Description is Required"
                        })}   />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
            </div>
            <p className='   mt-6 mb-2 font-semibold'>Seller Info</p>

            <div className='bg-[#9ef68872] rounded-lg p-6 grid lg:grid-cols-2 '>
            <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input  type="text" {...register("sellerName", {
                            required: "Name is Required"
                        })} defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                 <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email Address</span></label>
                        <input defaultValue={user?.email} type="email" {...register("sellerEmail", {
                            required: "Name is Required"
                        })} readOnly className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                     <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Phone Number</span></label>
                        <input type="text" {...register("sellerPhone", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
            </div>
           <input className='btn btn-primary text-white w-full mt-4 mb-8' value="Add Product" type="submit" />
                </form>
    </div>
  );
};

export default AddProducts;