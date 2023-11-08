import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddJob from "../pages/AddJob/AddJob";
import PrivateRoute from "./PrivateRoute";
import AllJobs from "../pages/AllJobs/AllJobs";
import JobDetails from "../components/JobDetails/JobDetails";
import MyJobs from "../pages/MyJobs/MyJobs";
import UpdateJob from "../pages/UpdateJob/UpdateJob";
import AppliedJobs from "../pages/AppliedJob/AppliedJob";
import Blog from "../pages/Blog/Blog";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/job/:id',
        element: <PrivateRoute><JobDetails/></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: 'add-job',
        element: <PrivateRoute><AddJob/></PrivateRoute>
      },
      {
        path: '/all-jobs',
        element: <AllJobs></AllJobs>
      },
      {
        path: '/my-jobs',
        element: <PrivateRoute><MyJobs/></PrivateRoute>
      },
      {
        path: '/update-job/:id',
        element: <PrivateRoute><UpdateJob/></PrivateRoute>
      },
      {
        path: '/applied-jobs',
        element: <PrivateRoute><AppliedJobs/></PrivateRoute>
      },
      {
        path: '/blog',
        element: <Blog/>
      }
    ],
  },
]);

export default MainRouter;
