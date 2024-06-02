// Import necessary dependencies
"use client";
import { useAuth } from "@/context/context";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Page() {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const { authtoken, settoken, setfreelancer } = useAuth();

  const formik = useFormik({
    initialValues: {
      Email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setloading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_HOST}/Api/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        const Data = await response.json();
        console.log(Data);
        setloading(false);
        if (response.ok) {
          const token = Data.token;
          const freelancercheck = Data.userexist.isfreelancer;

          console.log("check", freelancercheck);
          toast.success("Login succesfull");
          if (freelancercheck) {
            setfreelancer(true);
          }
          authtoken(token, freelancercheck);
          //    settoken(token)

          setTimeout(() => {
            router.push("/");
          }, 100);
        } else {
          toast.error(`${Data.message}`);
          // router.push("/FreelancerRegister");

          // console.error('Login failed:', errorData);
        }
      } catch (error) {
        toast.error(`Try again later`);
        console.error("Login failed:", error);
        // Handle error state, display error messages, etc.
      }
    },
  });

  // Return your JSX with the form and its elements
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-900 dark:bg-gray-900">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Enter your email and password below.
            </p>
          </div>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400"
                  type="email"
                  name="Email" // Change to lowercase to match initial values
                  onChange={formik.handleChange} // Handle change using Formik
                  value={formik.values.Email} // Set value using Formik
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  autoComplete="current-password"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400"
                  type="password"
                  name="password" // Change to lowercase to match initial values
                  onChange={formik.handleChange} // Handle change using Formik
                  value={formik.values.password} // Set value using Formik
                />
              </div>
            </div>
            <div>
              {loading ? (
                <button
                  disabled
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  Loading
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  Sign in
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Page;
