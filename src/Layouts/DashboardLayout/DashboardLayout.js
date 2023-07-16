import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar';
import './DashBoardLayout.css'
import { MdOutlineBorderColor  } from 'react-icons/md';
import { HiUsers  } from 'react-icons/hi';
import { FaUserTie   } from 'react-icons/fa';
import { CgExtensionAdd   } from 'react-icons/cg';
import { MdOutlineProductionQuantityLimits   } from 'react-icons/md';
import { AuthContext } from '../../Contexts/Authprovider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';


const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)
  return (
    <div>
              <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type='checkbox'  className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                {/* <h3 className='ml-7 mt-7  absolute top-10 mb-8  '>Dashboard</h3> */}

                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="  p-4 w-40 rounded-lg mt-1 ml-1   h-52 bg-white  text-base-content">
                           { <div className='flex mt-9'>
                            <MdOutlineBorderColor className='mt-2 mr-2 '></MdOutlineBorderColor>
                            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                           </div>
                          }
                        {  isAdmin &&  
                             <>
                              <div className='flex mt-7 '>
                              <HiUsers className='mt-2 mr-2'></HiUsers>
                                <li><Link to='/dashboard/allbuyers'>All Buyer</Link></li>
                             </div>
                             <div className='flex mt-7'>
                             <FaUserTie className='mt-2 mr-2'></FaUserTie>
                                <li><Link to='/dashboard/allsellers'>All Seller</Link></li>
                             </div>

                            </>
                        }
                        {  isSeller && 
                             
                            <>   <div className='flex mt-7'>
                              <CgExtensionAdd className='mt-1 mr-2 text-2xl'></CgExtensionAdd>
                                <li><Link to='/dashboard/addproducts'>Add A Product</Link></li>
                            </div>
                            <div className='flex mt-7'>
                            <MdOutlineProductionQuantityLimits className='mt-2 mr-2'></MdOutlineProductionQuantityLimits>
                                <li><Link to='/dashboard/myproducts'>My Product</Link></li>
                            </div>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
  );
};

export default DashboardLayout;