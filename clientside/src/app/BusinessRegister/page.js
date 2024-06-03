"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Component() {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    companyName: "",
    companySize: "",
    password: "",
    Email: "",
    phone: "",
    Dob: "",
    Position: "",
    Refer: "",
    Linkdin: "",
    personalWebsite: "",
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
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-950 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#00b8d4]">Register Your Business</h2>
          <p className="mt-2 text-sm text-center text-gray-400">Join our platform and start showcasing your company</p>
        </div>
        <form action="#" className="space-y-6" method="POST" onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="first-name">
                First Name
              </Label>
              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="first-name"
                name="firstName"
                placeholder="Enter your first name"
                required
                onChange={formik.handleChange}
                value={formik.values.firstName}
                type="text"
            
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="last-name">
                Last Name
              </Label>
              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="last-name"
                name="lastName"
                placeholder="Enter your last name"
                required
                onChange={formik.handleChange}
                value={formik.values.lastName}
                type="text"
          
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="company-name">
              Company Name
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="company-name"
              name="companyName"
              placeholder="Enter your company name"
              required
              onChange={formik.handleChange}
              value={formik.values.companyName}
              type="text"
              minLength={8}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="company-size">
              Company Size
            </Label>
            <select
              className="block w-full rounded-md border border-[#00b8d4] bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4] cursor-pointer"
              id="company-size"
              name="companySize"
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
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="password">
              Password
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="email">
              Email
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="email"
              name="Email"
              placeholder="Enter your email"
              required
              onChange={formik.handleChange}
              value={formik.values.Email}
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="phone-number">
              Phone Number
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="phone-number"
              name="phone"
              placeholder="Enter your phone number"
              required
              onChange={formik.handleChange}
              value={formik.values.phone}
              type="tel"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="date-of-birth">
                Date of Birth
              </Label>
              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="date-of-birth"
                name="Dob"
                required
                onChange={formik.handleChange}
                value={formik.values.Dob}
                type="date"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="position">
                Position
              </Label>
              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="position"
                name="Position"
                placeholder="Enter your position"
                required
                onChange={formik.handleChange}
                value={formik.values.Position}
                type="text"
                minLength={8}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="referral">
              Referral
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="referral"
              name="Refer"
              placeholder="Enter your referral (optional)"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.Refer}
              minLength={8}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="linkedin-profile">
              LinkedIn Profile
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="linkedin-profile"
              name="Linkdin"
              placeholder="Enter your LinkedIn profile URL"
              required
              onChange={formik.handleChange}
              value={formik.values.Linkdin}
              type="url"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="website">
              Personal Website
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="website"
              name="personalWebsite"
              placeholder="Enter your personal website URL"
              required
              onChange={formik.handleChange}
              value={formik.values.personalWebsite}
              type="url"
            />
          </div>
          <div>
            {!loading ? (
              <Button
                className="flex w-full justify-center rounded-md bg-[#00b8d4] py-2 px-4 text-sm font-medium text-gray-950 shadow-sm hover:bg-[#00a0b4] focus:outline-none focus:ring-2 focus:ring-[#00b8d4] focus:ring-offset-2"
                type="submit"
              >
                Register
              </Button>
            ) : (
              <Button
                disabled
                className="flex w-full justify-center rounded-md bg-[#00b8d4] py-2 px-4 text-sm font-medium text-gray-950 shadow-sm hover:bg-[#00a0b4] focus:outline-none focus:ring-2 focus:ring-[#00b8d4] focus:ring-offset-2"
              >
                Loading...
              </Button>
            )}
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
