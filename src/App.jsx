import React from "react";
import Home from './components/page/Home'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from './components/layer/RootLayout'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
        // errorElement={<Error />}
      >
        <Route index element={<Home/>} ></Route>
        

      </Route>
    )
  );
  return (
   <>
     <RouterProvider router={router} />
   </>
  )
}

export default App