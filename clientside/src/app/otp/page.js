"use client";
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function VerifyIdentity() {
  const [email,setemail]= useState(null)
  useEffect(()=>{
   setemail(localStorage.getItem("email")) 
  })
  const initialValues = {
    Email:`${email}`,
    otp: ""
  };
  const router= useRouter()

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        console.log(values)
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/otp`, values);
       router.push("/login")
        console.log(response.data);
      } catch (error) {
        console.log(error);
        // Handle error appropriately
      }
    }
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Enter Your OTP</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Please enter the one-time password sent to your device.</p>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              One-Time Password
            </label>
            <div className="mt-1">
              <input
                id="otp"
                maxLength="6"
                pattern="[0-9]*"
                required
                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400"
                type="text"
                name="otp"
                value={formik.values.otp}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="flex items-center justify-center text-white bg-black w-96 h-9">
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VerifyIdentity;
