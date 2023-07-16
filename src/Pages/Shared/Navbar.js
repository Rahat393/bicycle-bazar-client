import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/reshot-icon-track-bike-6MEXQZ5D2S.svg'
import { AuthContext } from '../../Contexts/Authprovider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(err => console.log(err))
}
  const menuItem =  <React.Fragment>
      <li><Link to={'/'}>Home</Link> </li>
      <li><Link>About</Link> </li>
      { user?.uid ? 
       <>
           <li><Link to={'/dashboard/myorders'}>Dashboard</Link> </li>
          <li><button onClick={handleLogOut}> Sign Out</button></li>
       </>
        :
      <li><Link to={'/login'}>Sign In  </Link> </li>}
   </React.Fragment>
  return (
    <div  className='bg-primary text-white'>
      <div className="navbar  -p-20  w-full flex justify-between">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost  lg:hidden bg-white text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:bg-white bg-white text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu   menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black  rounded-box w-52">
      {menuItem}
      </ul>
    </div>
    <div className='flex ml-24 lg:ml-0 justify-center align-middle'>
    <Link to={'/'} className="btn hover:bg-primary btn-ghost  mt- normal-case text-2xl font-[Metamorphous]"> bicycle<span className='bg-black p-1   rounded-md'>Bazar</span></Link>
      <img className='w-24 h-24 -ml-3 -mb-6 -mt-6  '    src={logo} alt="" />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal   px-1">
    {menuItem}
    </ul>
  </div>
  <label tabIndex={1} htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
</div>
    </div>
  );
};

export default Navbar;