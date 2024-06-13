"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VerifyIdentity() {
  const storedEmail = typeof window !== 'undefined' ? localStorage.getItem('email') : null;
  const [email, setEmail] = useState(storedEmail);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      Email: email || '', 
      otp: ''
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/Api/otp`, values);
        toast.success("otp verified")
        router.push('/login');
        console.log(response.data);
      } catch (error) {
        toast.error(error)
        console.log(error);
       
      }
    }
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="md:w-full max-w-md p-8 space-y-6 text-white bg-gray-800  w-[90vw] rounded-lg shadow-lg dark:bg-gray-800">
        <div className="text-center ">
          <h1 className="text-3xl font-bold text-gray-100">Enter Your OTP</h1>
          <p className="mt-2 text-gray-400">Please enter the one-time password sent to your email: {`${email}`}.</p>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-300">
              One-Time Password
            </label>
            <div className="mt-1">
              <input
                id="otp"
                maxLength="6"
                pattern="[0-9]*"
                required
                className="block w-full px-3 py-2 placeholder-gray-900 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-gray-700 dark:border-gray-600 assstext-gray-100 dark:placeholder-gray-400"
                type="text"
                name="otp"
                value={formik.values.otp}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div>
            <button type="submit" className=" w-full
            py-2 mt-5 text-white rounded-md  bg-cyan-500 hover:bg-cyan-700">
              Verify OTP
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default VerifyIdentity;
