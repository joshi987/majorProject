import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Layout from './components/Layout.jsx';
import Studentlogin from './components/Studentlogin.jsx';
import Teacherlogin from './components/Teacherlogin.jsx';
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"student-login",
        element:<Studentlogin/>,
      },
      {
        path:"teacher-login",
        element:<Teacherlogin/>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
