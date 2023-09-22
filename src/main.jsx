import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import JobsDetails from "./Components/JobsDetails/JobsDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: < AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/job/:id',
        element: <JobsDetails></JobsDetails>,
        loader: () => fetch('/jobs.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);
