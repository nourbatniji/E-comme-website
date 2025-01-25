import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "Yup";

export default function UpdatePassword() {
  const baseUrl = "https://ecommerce.routemisr.com";
  const navg = useNavigate()

  async function updatePasswordAPI(data) {
    axios
      .put(`${baseUrl}/api/v1/auth/resetPassword`, data)
      .then((req) => {
       if(req.data.token){
        navg('/signin')
       }
      })
      .catch((err)=>{
        console.log(err.data);
        
      })  
  }
  let validYup = Yup.object({
    email: Yup.string().required("Email is required").email("Please enter a valid email address"),
    newPassword: Yup.string()
            .required("Password is required")
            .matches(
              /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
              "Your password is too short. Please use at least 6 characters"
            ),
  });
  let  initialValues= {
    email: "",
    newPassword: "",
  }

  let updatePasswordForm = useFormik({
   initialValues,
    onSubmit: updatePasswordAPI,
    validationSchema: validYup,
  });

  return (
    <>
      <form
        onSubmit={updatePasswordForm.handleSubmit}
        className="w-7/12 my-12 mx-auto"
      >
        <h1 className="mb-6 font-semibold">Enter your new password</h1>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Enter you email
          </label>
          <input
            onChange={updatePasswordForm.handleChange}
            onBlur={updatePasswordForm.handleBlur}
            value={updatePasswordForm.values.email}
            name="email"
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green focus:border-opacity-30 block w-full p-2.5"
          />
          {updatePasswordForm.touched.email && updatePasswordForm.errors.email ? (<p className="text-red-600">{updatePasswordForm.errors.email}</p>):""}
        </div>
        <div className="mb-5">
          <label
            htmlFor="newPassword"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Create a new password
          </label>
          <input
            onChange={updatePasswordForm.handleChange}
            onBlur={updatePasswordForm.handleBlur}
            value={updatePasswordForm.values.newPassword}
            name="newPassword"
            type="password"
            id="newPassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green focus:border-opacity-30 block w-full p-2.5"
          />
          {updatePasswordForm.touched.newPassword && updatePasswordForm.errors.newPassword ? (<p className="text-red-600">{updatePasswordForm.errors.newPassword}</p>):""}
        </div>

        <button
          type="Reset password"
          className="text-white bg-green hover:bg-green focus:ring-4 focus:outline-none focus:ring-green font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green dark:hover:bg-green dark:focus:ring-green"
        >
          Submit
        </button>
      </form>
    </>
  );
}
