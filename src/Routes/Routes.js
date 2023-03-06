import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layouts/Main";
import Products from "../Pages/Products/Products";

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
      }
    ]
  }
])