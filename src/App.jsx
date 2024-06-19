// import { Children, useEffect, useState, useContext } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FormProvider } from "./Context/FormContext";
// import {}

import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar";
// import AddShoe from "./Components/AddShoe";
import AddShoe from "./Components/AddShoe";
import Shoe from "./Pages/Shoe/Shoe";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Add-shoe",
        element: (
          <FormProvider>
            <AddShoe button="Add Shoe" />
          </FormProvider>
        ),
      },
      {
        path: "/Edit-shoe/:shoeId",
        element: (
          <FormProvider>
            <AddShoe button="Edit Shoe" />
          </FormProvider>
        ),
      },
      {
        path: "/product/:shoeId",
        element: <Shoe />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
