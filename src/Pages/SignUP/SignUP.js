import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {  HiOutlineMail } from 'react-icons/hi';
import './SignUp.css'

import { AuthContext } from '../../Contexts/Authprovider';
import { toast } from 'react-hot-toast';

const icon = <HiOutlineMail/>

const SignUP = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser, updateUser  } = useContext(AuthContext)

  const [signUpError, setSignUPError] = useState('')

  const navigate = useNavigate()

  const handleSignUp = (data) => {
    console.log(data);
    setSignUPError('');
    createUser(data.email, data.password, data.role)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast('User create successfully.')
            navigate('/')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
                .then(() => {
                    saveUser(data.name, data.email, data.role)
                })
                .catch(err => console.log(err));
        })
        .catch(error => {
            console.log(error)
            setSignUPError(error.message)
        });
};

const saveUser = ( name, email, role) => {
   const user = {name, email, role};
   fetch('http://localhost:5000/users',{
    method: 'POST',
    headers: {
        'content-type' : 'application/json'
    },
    body: JSON.stringify(user)
   })
   .then(res => res.json())
   .then(data => {
    console.log(data);
   })
}


  return (
    <div className='h-[800px] flex justify-center items-center'>
    <div className='w-96 p-7'>
        <h2 className='text-xl text-center'>Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Name</span></label>
                <input type="text" {...register("name", {
                    required: "Name is Required"
                    
                })}   className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Email</span></label>
                <input type="email" {...register("email", {
                    required: "Email is Required"
                })} className="input input-bordered w-full max-w-xs email-input"  />
                
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
             </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Password</span></label>
                <input type="password" {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be 6 characters long" },
                })} className="input input-bordered w-full max-w-xs" />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text text-xl">Select Account Type</span></label>
                <select {...register("role")} className="select   p-3 border-gray-600   w-full max-w-xs" >
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>

                </select>
            </div>

            <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
            {signUpError && <p className='text-red-600'>{signUpError}</p>}
        </form>
        <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
        <div className="divider">OR</div>
        {/* <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button> */}


    </div>
</div>
  );
};

export default SignUP;