import React, { useEffect, useState } from 'react'
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import Products from './Component/Products/Products';
import Cart from './Component/Cart/Cart';
import Signin from './Component/Signin/Signin';
import Signup from './Component/Signup/Signup';
import Error from './Component/Error/Error';
import Categories from './Component/Categories/Categories';
import Brands from './Component/Brands/Brands';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UpdatePassword from './Component/UpdatePassword/UpdatePassword';
import ForgotPassword from './Component/ForgotPassword/ForgotPassword';
import AuthContextProvider from './Context/AuthContextProvider';
import ProtectedRouting from './Component/ProtectedRouting/ProtectedRouting';

export default function App() {

  let router = createBrowserRouter([
    {
      path:"",
      element: <Layout/>,
      children:[
      {index: true, element:<ProtectedRouting><Home/></ProtectedRouting>},
      {path:"cart", element:<ProtectedRouting><Cart/></ProtectedRouting>},
      {path:"products", element:<ProtectedRouting><Products/></ProtectedRouting>},
      {path:"categories", element:<ProtectedRouting><Categories/></ProtectedRouting>},
      {path:"brands", element:<ProtectedRouting><Brands/></ProtectedRouting>},
      {path:"signin", element:<Signin/>},
      {path:"signup", element:<Signup/>},
      {path:"updatePassword", element:<UpdatePassword/>},
      {path:"forgotPassword", element:<ForgotPassword/>},
      {path:"*", element:<Error/>}
    ]}
  ])
  return (
    <>
    <AuthContextProvider>
    <RouterProvider router={router}/>
    </AuthContextProvider>
   
    </>
  )
}
