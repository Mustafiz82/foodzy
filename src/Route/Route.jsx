import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/home/Home";
import About from "../components/About/About";

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
        }
    ]

  },
]);


export default router