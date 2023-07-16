import { createBrowserRouter } from "react-router-dom";
import Notfound from "../Components/Notfound";
import Home from "../Home/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main";
import AddProducts from "../Pages/Dashboard/AddProducts";
import AllSeller from "../Pages/Dashboard/AllSeller";
import AllUsers from "../Pages/Dashboard/AllUsers";
import MyOrdes from "../Pages/Dashboard/MyOrdes";
import MyProducts from "../Pages/Dashboard/MyProducts";
import LogIn from "../Pages/LogIn/LogIn";
import Products from "../Pages/Products/Products";
import SignUP from "../Pages/SignUP/SignUP";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/products/:id',
        element: <Products></Products>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <SignUP></SignUP>
      },
      {
        path: '/*',
        element: <Notfound></Notfound>
      }
    ]
  },
  {
    path:'/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard/myorders',
        element: <MyOrdes></MyOrdes>
      },
      {
        path: '/dashboard/allbuyers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: '/dashboard/allsellers',
        element:  <AdminRoute><AllSeller></AllSeller></AdminRoute>
      },
      {
        path: '/dashboard/addproducts',
        element:  <SellerRoute> <AddProducts></AddProducts></SellerRoute> 
      },
      {
        path: '/dashboard/myproducts',
        element:  <SellerRoute><MyProducts></MyProducts> </SellerRoute>
      },
       
    ]
  },
 
])