import { createBrowserRouter } from "react-router-dom";
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
        element: <AllUsers></AllUsers>
      },
      {
        path: '/dashboard/allsellers',
        element:  <AllSeller></AllSeller>
      },
      {
        path: '/dashboard/addproducts',
        element:  <AddProducts></AddProducts>
      },
      {
        path: '/dashboard/myproducts',
        element: <MyProducts></MyProducts>
      },
       
    ]
  }
])