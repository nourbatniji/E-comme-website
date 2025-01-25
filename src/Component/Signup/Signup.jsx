import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "Yup";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const baseUrl = "https://ecommerce.routemisr.com";
  let [errorMessage, setError] = useState(null);
  let navg = useNavigate();

  let initialValues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  };

  async function registerAPI(data) {
    axios
      .post(`${baseUrl}/api/v1/auth/signup`, data)
      .then((req) => {
        if (req.data.message == 'success') {
          navg("/signin")
        }
      })
      .catch((err) => {
        setError(err.response.data.message)
      })
    console.log(req);
  }
  let validateYup = Yup.object({
    name: Yup.string()
      .required("Full name is required")
      .min(3, "Name must be at least 3 characters long")
      .max(20, "Name must be no more than 20 characters long"),

    email: Yup.string()
      .required("Email address is required")
      .email("Please enter a valid email address"),

    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        "Your password is too short. Please use at least 6 characters"
      ),

    rePassword: Yup.string()
      .required("Password is required")
      .oneOf([Yup.ref("password")], "Passwords do not match. Please try again"),

    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^(20)?01[1250][0-9]{8}$/, "Please enter a valid phone number"),
  });

  let registerForm = useFormik({
    initialValues,
    onSubmit: registerAPI,
    validationSchema: validateYup,
  });

  return (
    <>
      {errorMessage ? <div className="container w-[70%] mx-auto my-5">
        <div className="px-4 py-6 mb-4 text-md text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {errorMessage}</div>
      </div> : ''}
      <form
        onSubmit={registerForm.handleSubmit}
        className="w-7/12 mx-auto my-12"
      >
        <h1 className="mb-11 font-semibold">Register now: </h1>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Enter your full name
          </label>
          <input
            value={registerForm.values.name}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
            name="name"
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green focus:border-opacity-20  block w-full p-2.5"
          />
          {registerForm.errors.name && registerForm.touched.name ? (
            <p className="text-red-600 pt-2">{registerForm.errors.name}</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Enter your email address
          </label>
          <input
            value={registerForm.values.email}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
            name="email"
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green focus:border-opacity-20  block w-full p-2.5"
          />
          {registerForm.errors.email && registerForm.touched.email ? (
            <p className="text-red-600 pt-2">{registerForm.errors.email}</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Enter a password
          </label>
          <input
            value={registerForm.values.password}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
            name="password"
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green focus:border-opacity-20  block w-full p-2.5"
          />
          {registerForm.errors.password && registerForm.touched.password ? (
            <p className="text-red-600 pt-2">{registerForm.errors.password}</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="rePassword"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Re-enter your password
          </label>
          <input
            value={registerForm.values.rePassword}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
            name="rePassword"
            type="password"
            id="rePassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green focus:border-opacity-20  block w-full p-2.5"
          />
          {registerForm.errors.rePassword && registerForm.touched.rePassword ? (
            <p className="text-red-600 pt-2">{registerForm.errors.rePassword}</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Enter your phone number
          </label>
          <input
            value={registerForm.values.phone}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
            name="phone"
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green focus:border-opacity-20  block w-full p-2.5"
          />
          {registerForm.errors.phone && registerForm.touched.phone ? (
            <p className="text-red-600 pt-2">{registerForm.errors.phone}</p>
          ) : (
            ""
          )}
        </div>
        <button
          disabled={!(registerForm.isValid && registerForm.dirty)}
          type="submit"
          className="text-white bg-green hover:bg-green focus:ring-4 focus:outline-none focus:ring-green font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:bg-green disabled:bg-opacity-50"
        >
          Register
        </button>
      </form>
    </>
  );
}
