import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader';
import { AuthContext } from '../Contexts/Authprovider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
  const {user} = useContext(AuthContext)
  const [isAdmin, isAdminLoading] = useAdmin(user?.email)
  const location = useLocation()

  if(isAdminLoading){
    return <Loader></Loader>
  }

  if(user && isAdmin){
    return children;
  }
  return <Navigate to='/login' state={{from : location}} replace></Navigate> ;
};

export default AdminRoute;