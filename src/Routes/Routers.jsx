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
import CardDetails from "../Components/CardDetails/CardDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:4000/cardData')

      },
      {
        path: '/cardData/:id',
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => fetch(`http://localhost:4000/cardData/${params.id}`)

      },
      {
        path: '/colleges',
        element: <Colleges></Colleges>,
        loader: () => fetch('http://localhost:4000/cardData')
      },
      {
        path: '/admissions/:id',
        element: <Admissions></Admissions>
      },
      {
        path: "/admissions",
        element: <CollegeList></CollegeList>,
        loader: () => fetch('http://localhost:4000/cardData')
      },
      {
        path: '/mycollege',
        element: <MyColleges></MyColleges>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
    ]
  },
]);