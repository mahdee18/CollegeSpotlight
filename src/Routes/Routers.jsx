import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Colleges from "../Components/Colleges/Colleges";
import Admissions from "../Components/Admissions/Admissions";
import MyColleges from "../Components/MyColleges/MyColleges";
import Login from "../Components/Login/Login";
import Registration from "../Components/Register/Register";
import Home from "../Components/Home/Home/Home";
import NotFoundPage from "../Components/NotFoundPage/NotFoundPage";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <NotFoundPage></NotFoundPage>,
      children: [

        {
          path:'/',
          element: <Home></Home>,
          loader:()=> fetch('data.json')
        },
        {
          path:'/colleges',
          element: <Colleges></Colleges>
        },
        {
          path:'/admissions',
          element: <Admissions></Admissions>
        },
        {
          path:'/mycollege',
          element: <MyColleges></MyColleges>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Registration></Registration>
        },
      ]
    },
  ]);