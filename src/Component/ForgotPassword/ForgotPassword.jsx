import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "Yup";

export default function ForgotPassword() {
  const baseUrl = "https://ecommerce.routemisr.com";
  const navg = useNavigate();
  const [errorMessage, setError] = useState(null);
  const [formDisplay, setFormDisplay] = useState(true);

  async function forgotPasswordAPI(data) {
    axios
      .post(`${baseUrl}/api/v1/auth/forgotPasswords`, data)
      .then((req) => {
        console.log(req.data);
        if (req.data.statusMsg == "success") {
          setFormDisplay(false);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log(err);
      });
  }

  let validateYup = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email address"),
  });

  let forgotPasswordForm = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: forgotPasswordAPI,
    validationSchema: validateYup,
  });

  let validateYup2 = Yup.object({
    resetCode: Yup.string().required("Code is required").matches('^[0-9]{6}$', "Please enter a valid 6-digit verification code")
  });

  async function verifyResetCodeAPI(data) {
    axios
      .post(`${baseUrl}/api/v1/auth/verifyResetCode`, data)
      .then((req) => {
        if(req.data.status == 'Success'){
            navg("/updatePassword");
        }
          console.log(req);  
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log(err);
      });
  }

  let verifyResetCodeForm = useFormik({
    initialValues: {
      resetCode: "",
    },
    onSubmit: verifyResetCodeAPI,
    validationSchema: validateYup2,
  });

  return (
    <>
      {formDisplay ? (
        <div>
          {errorMessage ? (
            <div className="container w-[70%] mx-auto my-5">
              <div
                className="px-4 py-6 mb-4 text-md text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {errorMessage}
              </div>
            </div>
          ) : (
            ""
          )}
          <form
            onSubmit={forgotPasswordForm.handleSubmit}
            className="w-7/12 mx-auto my-12"
          >
            <h1 className="mb-11 font-semibold">Recover your account</h1>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                onChange={forgotPasswordForm.handleChange}
                onBlur={forgotPasswordForm.handleBlur}
                value={forgotPasswordForm.values.email}
                name="email"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green focus:border-opacity-30 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green dark:focus:border-green"
              />
              {forgotPasswordForm.touched.email && forgotPasswordForm.errors.email ? (
                <p className="text-red-600">{forgotPasswordForm.errors.email}</p>
              ) : (
                ""
              )}
            </div>
            <button
              disabled={!(forgotPasswordForm.isValid && forgotPasswordForm.dirty)}
              type="submit"
              className="text-white bg-green hover:bg-green focus:ring-4 focus:outline-none focus:ring-green font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green dark:hover:bg-green dark:focus:ring-green disabled:bg-green disabled:bg-opacity-30"
            >
              Send code
            </button>
          </form>
        </div>
      ) : (
        <div>
          {errorMessage ? (
            <div className="container w-[70%] mx-auto my-5">
              <div
                className="px-4 py-6 mb-4 text-md text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {errorMessage}
              </div>
            </div>
          ) : (
            ""
          )}
          <form
            onSubmit={verifyResetCodeForm.handleSubmit}
            className="w-7/12 mx-auto my-12"
          >
            <h1 className="mb-11 font-semibold">
            Verification code</h1>
            <div className="mb-5">
              <label
                htmlFor="resetCode"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
               Enter the code sent to your email
              </label>
              <input
                onChange={verifyResetCodeForm.handleChange}
                onBlur={verifyResetCodeForm.handleBlur}
                value={verifyResetCodeForm.values.resetCode}
                name="resetCode"
                type="string"
                id="resetCode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green focus:border-opacity-30 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green dark:focus:border-green"
              />
              {verifyResetCodeForm.touched.resetCode &&
              verifyResetCodeForm.errors.resetCode ? (
                <p className="text-red-600">
                  {verifyResetCodeForm.errors.resetCode}
                </p>
              ) : (
                ""
              )}
            </div>
            <button
              disabled={
                !(verifyResetCodeForm.isValid && verifyResetCodeForm.dirty)
              }
              type="submit"
              className="text-white bg-green hover:bg-green focus:ring-4 focus:outline-none focus:ring-green font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green dark:hover:bg-green dark:focus:ring-green disabled:bg-green disabled:bg-opacity-30"
            >
              Verify code
            </button>
          </form>
        </div>
      )}
    </>
  );
}
