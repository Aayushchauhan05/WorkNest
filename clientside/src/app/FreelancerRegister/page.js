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
    phone: "123456789",
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
    personalwebsite: "",
    perHourPrice: "10",
    workExperience: "10",
    certifications: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log("console.log in onsubmit", values);

      setLoading(true);
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/Api/FreelancerRegister`, values);
        setLoading(false);
        localStorage.setItem('email', formik.values.Email);
        router.push("/otp");
        console.log(response);
      } catch (error) { // Correct error handling
        toast.error(`${error.message}`); // Corrected error handling
        setLoading(false);
        if (error.response && error.response.status === 400) {
          console.error('Bad Request: ', error.message);
        } else {
          console.error('An unexpected error occurred: ', error.message);
        }
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
              minLength={8} 
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
              minLength={8} 
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
                minLength={10} 
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
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="linkedin-profile">
                LinkedIn Profile
              </Label>
              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="linkedin-profile"
                name="Linkdin"
                value={formik.values.Linkdin}
                onChange={formik.handleChange}
                placeholder="Enter your LinkedIn profile URL"
                required
                type="url"

              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="password">
                Password
              </Label>
              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Enter your password"
                required
                type="password"
                minLength={8} 
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="github-profile">
                GitHub Profile
              </Label>
              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="github-profile"
                name="githubLink"
                value={formik.values.githubLink}
                onChange={formik.handleChange}
                placeholder="Enter your GitHub profile URL"
                required
                type="url"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="refer">
              Refer
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="refer"
              name="Refer"
              value={formik.values.Refer}
              onChange={formik.handleChange}
              placeholder="Enter your refer"
              required
              type="text"
              minLength={8} 
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="role">
              Role
            </Label>
            <select
              className="block w-full rounded-md border border-[#00b8d4] bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4] cursor-pointer"
              id="role"
              name="Role"
              value={formik.values.Role}
              onChange={formik.handleChange}
              required
            >
              <option value="">Select your role</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="writer">Writer</option>
              <option value="other">Other</option>
            </select>
          </div>
          <h1 className="text-center text-[#00b8d4]">Professional Info</h1>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="previouscompany">
              Previous Company
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="previouscompany"
              name="professionalInfo[0].previousCompany" 
              value={formik.values.professionalInfo[0].previousCompany}
              onChange={formik.handleChange}
              placeholder="Enter your previous company"
              required
              type="text"
              minLength={8} 
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="role-in-company">
              Your Role in Company
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="role-in-company"
              name="professionalInfo[0].Role" 
              value={formik.values.professionalInfo[0].Role}
              onChange={formik.handleChange}
              placeholder="Your role in company"
              required
              type="text"
              minLength={8} 
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="start-date">
              Start Date
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="start-date"
              name="professionalInfo[0].start"
              value={formik.values.professionalInfo[0].start}
              onChange={formik.handleChange}
              placeholder="Start date"
              required
              type="date"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="end-date">
              End Date
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="end-date"
              name="professionalInfo[0].end"
              value={formik.values.professionalInfo[0].end}
              onChange={formik.handleChange}
              placeholder="End date"
              required
              type="date"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="skills-used">
              Skills Used
            </Label>
            <Textarea
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="skills-used"
              name="professionalInfo[0].skills"
              value={formik.values.professionalInfo[0].skills}
              onChange={formik.handleChange}
              placeholder="Skills used"
              required
              rows="2"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="description">
              Description
            </Label>
            <Textarea
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="description"
              name="professionalInfo[0].description"
              value={formik.values.professionalInfo[0].description}
              onChange={formik.handleChange}
              placeholder="Description"
              required
              rows="3"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="personal-website">
              Personal Website
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="personal-website"
              name="personalwebsite"
              value={formik.values.personalwebsite}
              onChange={formik.handleChange}
              placeholder="Enter your personal website URL"
              type="url"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="per-hour-price">
              Per Hour Price
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="per-hour-price"
              name="perHourPrice"
              value={formik.values.perHourPrice}
              onChange={formik.handleChange}
              placeholder="Enter your per hour price"
              type="number"
              min="0"
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
                className="flex w-full justify-center rounded-md bg-[#00b8d4] py-2 px-4 text-sm font-medium text-gray-950 shadow-sm hover:bg-[#00a0b4] focus:outline-none focus:ring-2 focus:ring-[#00b8d4] focus:ring-offset-2"
                disabled
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
