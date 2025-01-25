import React, { useContext, useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios'
import * as Yup from 'Yup'
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthContextProvider";

export default function Signin() {
  let {setToken} = useContext(AuthContext)
  let navg = useNavigate()
  let [errorMessage, setError] = useState(null)
  const baseUrl = 'https://ecommerce.routemisr.com'
  let initialValues = {
    email: "",
    password: ""
  }
  let validateYup = Yup.object({
    email:
      Yup.string()
        .required('Email is required!')
        .email('Please enter a valid email address'),

    password:
      Yup.string()
        .required('Password is required!')
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, "Your password is too short. Please use at least 6 characters"),
  })

  async function loginAPI(data) {
    axios
      .post(`${baseUrl}/api/v1/auth/signin`, data)
      .then((req) => {
        if(req.data.message == 'success'){
          setToken(req.data.token)
          localStorage.setItem('token', req.data.token)
          navg('/') // بخليها اخر حاجة لانه مينفعش احط كود بعدها
        }
       })
      .catch((err) => {
        setError(err.response.data.message)
        console.log(err.response.data.message)
      })
    //الداتا والمسج جبناهم من الريسبونس في الانسبكت
  }

  let loginForm = useFormik({
    initialValues,
    onSubmit: loginAPI,
    validationSchema: validateYup
  })

  return (
    <>
     {errorMessage ?  <div className="container w-[70%] mx-auto my-5">
      <div className="px-4 py-6 mb-4 text-md text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
       {errorMessage}</div>
     </div> :''}
     <h1 className='w-[60%] mx-auto py-12 11 font-semibold'>Login to you account</h1>

      <form onSubmit={loginForm.handleSubmit} className="w-7/12 mx-auto  mb-12 mt-0">

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email address</label>
          <input
            value={loginForm.values.email}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-green focus:border-green focus:border-opacity-20 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " />
          {loginForm.touched.email && loginForm.errors.email ? <p className='text-red-800 pt-2'>{loginForm.errors.email}</p> : ''}
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-900">Password</label>
          <input
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            type="password"
            name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green focus:border-opacity-20 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
          {loginForm.touched.password && loginForm.errors.password ? <p className='text-red-800 pt-2'>{loginForm.errors.password}</p> : ''}
        </div>
        <Link to ="/forgotPassword" className='text-blue-800 underline font-medium'>Forgot password?</Link>
        <br/>
        <button
          disabled={!(loginForm.isValid && loginForm.dirty)}
          type="submit"
          className="text-white my-5
           bg-green hover:bg-green focus:ring-4 focus:outline-none focus:ring-green font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:bg-green disabled:bg-opacity-50
          ">Signin</button>
      </form>
    </>
  )
}
