import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import Loader from '../Components/Loader';
import { AuthContext } from '../Contexts/Authprovider';
import useSeller from '../hooks/useSeller';

const SellerRoute = ({children}) => {
  const {user} = useContext(AuthContext)
  const [isSeller, isSellerLoding] = useSeller(user?.email)
  const location = useLocation()

  if(isSellerLoding){
    return <Loader></Loader>
  }

  if(  isSeller){
    return children;
  }
  return <Navigate to='/login' state={{from : location}} replace></Navigate> ;
};

export default SellerRoute;