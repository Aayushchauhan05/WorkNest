"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Component() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    Email: "",
    Dob: "",
    password: "",
    Education: "",
    Role: "",
    Refer: "",
    phone: "",
    professionalInfo: [
      {
        previousCompany: "",
        Role: "",
        start: "",
        end: "",
        skills: "",
        description: ""
      },
    ],
    Skills: "",
    githubLink: "",
    Linkdin: "",
    personalWebsite: "",
    perHourPrice: "",
    workExperience: "",
    isfreelancer: true,
    consultant: false
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log("Submitted values:", values);

      setLoading(true);
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/Api/FreelancerRegister`, { values });
        setLoading(false);
        localStorage.setItem('email', formik.values.Email);
        router.push("/otp");
        console.log(response);
      } catch (error) {
        toast.error(error.response ? error.response.data.message : 'An unexpected error occurred');
        setLoading(false);
        console.error('Error:', error.message);
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-950 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#00b8d4]">
            Register as a Freelancer
          </h2>
          <p className="mt-2 text-sm text-center text-gray-400">
            Join our platform and start showcasing your skills
          </p>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="first-name">
                First Name
              </Label>
              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="first-name"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                placeholder="Enter your first name"
                required
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
                value={formik.values.lastName}
                onChange={formik.handleChange}
                placeholder="Enter your last name"
                required
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="username">
              Username
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              placeholder="Enter your username"
              required
              type="text"
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
              value={formik.values.Email}
              onChange={formik.handleChange}
              placeholder="Enter your email"
              required
              type="email"
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
                value={formik.values.Dob}
                onChange={formik.handleChange}
                required
                type="date"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="years-of-experience">
                Years of Experience
              </Label>
              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="years-of-experience"
                min="0"
                name="workExperience"
                value={formik.values.workExperience}
                onChange={formik.handleChange}
                placeholder="Enter your years of experience"
                required
                type="number"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="skills">
              Skills
            </Label>
            <Textarea
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="skills"
              name="Skills"
              value={formik.values.Skills}
              onChange={formik.handleChange}
              placeholder="Enter your skills (separated by commas)"
              required
              rows="3"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="highest-education">
              Highest Education
            </Label>
            <select
              className="block w-full rounded-md border border-[#00b8d4] bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4] cursor-pointer"
              id="highest-education"
              name="Education"
              value={formik.values.Education}
              onChange={formik.handleChange}
              required
            >
              <option value="">Select your highest education</option>
              <option value="high-school">High School</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="doctorate">Doctorate</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="certifications">
              Certifications
            </Label>
            <Textarea
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="certifications"
              name="certifications"
              value={formik.values.certifications}
              onChange={formik.handleChange}
              placeholder="Enter your certifications (separated by commas)"
              required
              rows="3"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="github-link">
              GitHub Link
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="github-link"
              name="githubLink"
              value={formik.values.githubLink}
              onChange={formik.handleChange}
              placeholder="Enter your GitHub profile link"
              required
              type="url"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="linkedin-link">
              LinkedIn Link
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="linkedin-link"
              name="Linkdin"
              value={formik.values.Linkdin}
              onChange={formik.handleChange}
              placeholder="Enter your LinkedIn profile link"
              required
              type="url"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="personal-website">
              Personal Website
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="personal-website"
              name="personalWebsite"
              value={formik.values.personalWebsite}
              onChange={formik.handleChange}
              placeholder="Enter your personal website link"
              type="url"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="per-hour-price">
              Per Hour Price (in USD)
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="per-hour-price"
              name="perHourPrice"
              value={formik.values.perHourPrice}
              onChange={formik.handleChange}
              placeholder="Enter your per hour price"
              required
              type="number"
              min="0"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="freelancer">
                Freelancer
              </Label>
              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="freelancer"
                name="isfreelancer"
                checked={formik.values.isfreelancer}
                onChange={formik.handleChange}
                required
                type="checkbox"
              />
            </div>
           
          </div>
          <Button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#00b8d4] py-2 px-4 text-sm font-medium text-white hover:bg-[#00a0b8] focus:outline-none focus:ring-2 focus:ring-[#00a0b8] focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Register'}
          </Button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
