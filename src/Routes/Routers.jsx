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
import CollegeList from "../Components/Admissions/CollegeList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://college-spotlight-server.vercel.app/cardData')

      },
      {
        path: '/cardData/:id',
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => fetch(`https://college-spotlight-server.vercel.app/cardData/${params.id}`)

      },
      {
        path: '/colleges',
        element: <Colleges></Colleges>,
        loader: () => fetch('https://college-spotlight-server.vercel.app/cardData')
      },
      {
        path: '/admissions/:id',
        element: <Admissions></Admissions>
      },
      {
        path: "/admissions",
        element: <CollegeList></CollegeList>,
        loader: () => fetch('https://college-spotlight-server.vercel.app/cardData')
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