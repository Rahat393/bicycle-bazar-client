import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar';

const DashboardLayout = () => {
  return (
    <div>
              <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80   text-base-content">
                        {/* <li><Link to="/dashboard">My Appointments</Link></li> */}
                          {
                            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                          }
                        {
                             <>
                                <li><Link to='/dashboard/allbuyers'>All Buyer</Link></li>
                                <li><Link to='/dashboard/allsellers'>All Seller</Link></li>

                            </>
                        }
                        {
                             
                            <>
                                <li><Link to='/dashboard/addproducts'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Product</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
  );
};

export default DashboardLayout;