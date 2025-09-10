import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/home/Home";
import About from "../components/About/About";
import FAQ from "../components/FAQ/FAQ";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import Cart from "../components/Cart/Cart";
import Product from "../components/Product/Product";
import ProductDetail from "../components/productDetal/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement : <ErrorPage/>,
    children : [
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "/about",
            element : <About/>
        },
        {
          path : "/faq",
          element : <FAQ/>
        },
        {
          path : "/login",
          element : <Login/>
        },
        {
          path : "/signup",
          element : <Signup/>
        },
        {
          path : "/cart",
          element : <Cart/>
        },
        {
          path : "/product",
          element : <Product/>
        }, 
        {
          path: "/product/:id" , 
          element : <ProductDetail/>
        }
    ]

  },
]);


export default router