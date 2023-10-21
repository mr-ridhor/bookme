import {  createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "./Layouts/Home/HomeLayout";
import HomePage from "./Pages/Home/HomePage";

export const router = createBrowserRouter([
  //home routes

  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element:<HomePage/>
      },
    ],
  },
]);
