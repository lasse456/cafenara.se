import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Catering from "./Catering";
import MenyPage from "./Meny";
import DealSite from "./Dealsite";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/catering",
    element: <Catering />,
  },
  {
    path: "/meny",
    element: <MenyPage />,
  },

  {
    path: "/kaffeprenumeration",
    element: <DealSite />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
