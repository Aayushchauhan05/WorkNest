
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
        setloading(false);
        toast.error(`Try again later`);
        console.error("Login failed:", error);
      
      }
    },
  });


  return (
    <div>
      <div className="flex items-center justify-center  bg-gray-900 dark:bg-gray-900  h-[92.5vh]">
        <div className="md:w-full w-[80vw] max-w-md p-8 space-y-8 rounded-md shadow-lg bg-gray-800">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-100">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Enter your email and password below.
            </p>
          </div>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 text-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400"
                  type="email"
                  name="Email" 
                  onChange={formik.handleChange} 
                  value={formik.values.Email} 
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200 "
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  autoComplete="current-password"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-100 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 dark:border-gray-600 text-gray-100 dark:placeholder-gray-400"
                  type="password"
                  name="password" s
                  onChange={formik.handleChange} 
                  value={formik.values.password} 
                />
              </div>
            </div>
            <div>
              {loading ? (
                <button
                  disabled
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-cyan-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  Loading ...
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-cyan-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
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
