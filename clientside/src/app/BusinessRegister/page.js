"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { useFormik } from "formik";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import isAuth from "@/components/ClientsideProtectedRoutes/isAuth";

function Component() {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    companyName: "",
    companySize: "",
    password: "",
    Email: "",
    phone: "",
    Position: "",
    Refer: "",
    isBusiness: true
  };
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log(values);
      localStorage.clear();

      setLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/business/Companyreg`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        });

        const data = await response.json();
        console.log(data)
        if (response.ok) {
          toast.success("Registration successful");
          // localStorage.setItem("email", data.Data.Email);
          router.push("/otp");
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        // toast.error("Internal server error");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <div className="flex items-center justify-center px-4 py-12 mb-20 bg-gray-950 sm:px-6 lg:px-8" style={{ height: 'calc(100vh - 5rem)'}}>
      <div className="w-full max-w-md space-y-8 h-[70vh] ">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center text-white ">Register Your Business</h2>
          <p className="mt-2 text-sm text-center text-gray-400">Join our platform and start showcasing your company</p>
        </div>
        <section className="flex flex-col items-center justify-center w-full  p-6 mt-5 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg md:ml-5">
          <form action="#" className="space-y-6" method="POST" onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Input
                  className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                  id="first-name"
                  name="firstName"
                  label="First Name"
                  placeholder="Enter your first name"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  type="text"

                />
              </div>
              <div className="space-y-2">
                <Input
                  className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                  id="last-name"
                  name="lastName"
                  label="   Last Name"
                  placeholder="Enter your last name"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  type="text"

                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">

                <Input
                  className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                  id="company-name"
                  name="companyName"
                  label=" Company Name"
                  placeholder="Enter your company name"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.companyName}
                  type="text"
                  
                />
              </div>
              <div className="space-y-2">

                <Input
                  className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                  id="position"
                  name="Position"
                  label="Position"
                  placeholder="Enter your position"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.Position}
                  type="text"
                 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="email">
                Select company Size
              </Label>
              <select
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2  text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4] cursor-pointer"
                id="company-size"
                name="companySize"
                label="   Company Size"
                required
                onChange={formik.handleChange}
                value={formik.values.companySize}
              >
                <option value="">Select your company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="500+">500+ employees</option>
              </select>
            </div>


            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">

                <Input
                  className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                  id="email"
                  name="Email"
                  label="Email"
                  placeholder="Enter your email"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.Email}
                  type="email"
                />
              </div>
              <div className="space-y-2">

                <Input
                  className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                  id="phone-number"
                  name="phone"
                  label="  Phone Number"
                  placeholder="Enter your phone number"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  type="tel"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="password"
                name="password"
                placeholder="Enter your password"
                label="   Password"
                required
                onChange={formik.handleChange}
                value={formik.values.password}
                type="password"
              />
            </div>





            <div className="space-y-2">

              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="referral"
                name="Refer"
                label=" Referral"
                placeholder="Enter your referral (optional)"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.Refer}
                minLength={8}
              />
            </div>

            <div>
              {!loading ? (
                <Button
                  className="flex w-full justify-center rounded-md hover:bg-cyan-400 bg-[#00b8d4] py-2 px-4 text-sm font-medium text-gray-950 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00b8d4] focus:ring-offset-2"
                  type="submit"
                >
                  Register
                </Button>
              ) : (
                <Button
                  disabled
                  className="flex w-full justify-center rounded-md hover:bg-cyan-400 bg-[#00b8d4] py-2 px-4 text-sm font-medium text-gray-950 shadow-sm  focus:outline-none focus:ring-2 focus:ring-[#00b8d4] focus:ring-offset-2"
                >
                  Loading...
                </Button>
              )}
            </div>
          </form>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
}

export default isAuth(Component);