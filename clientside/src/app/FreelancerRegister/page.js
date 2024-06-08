"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from "@/components/ui/input";

const Form = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    Email: '',
    phone: '',
  });
  const [loading, setloading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split('.');

    setValues((prevValues) => {
      let newValues = { ...prevValues };
      let current = newValues;

      for (let i = 0; i < nameParts.length - 1; i++) {
        if (!current[nameParts[i]]) {
          current[nameParts[i]] = {};
        }
        current = current[nameParts[i]];
      }

      current[nameParts[nameParts.length - 1]] = value;
      return newValues;
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      app.use("/api/freelacer", freelancerroute)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/freelancer/FreelancerRegister`, {
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
        localStorage.setItem("email", data.user.Email);
        router.push("/otp");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      // toast.error("Internal server error");
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className={`flex items-center justify-center  px-4 py-12 bg-gray-950 sm:px-6 lg:px-8`} style={{ height: 'calc(100vh - 5rem)'}} >
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center text-white ">Register As Freelancer</h2>
          <p className="mt-2 text-sm text-center text-gray-400">Join our platform and start showcasing your skills</p>
        </div>
        <section className="flex flex-col items-center justify-center w-full p-6 mt-5 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg md:ml-5">
          <form onSubmit={handleSubmit} className="flex flex-col justify-center p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="mb-5 space-y-2">
                <Input
                  className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                  id="first-name"
                  name="firstName"
                  label="First Name"
                  placeholder="Enter your first name"
                  required
                  value={values.firstName} onChange={handleChange}
                  type="text"

                />
              </div>
              <div className="mb-3 space-y-2">
                <Input
                  className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                  id="last-name"
                  name="lastName"
                  label="   Last Name"
                  placeholder="Enter your last name"
                  required
                  value={values.lastName} onChange={handleChange}
                  type="text"

                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="mb-5 space-y-2">

                <Input
                  className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                  id="email"
                  name="Email"
                  label="Email"
                  placeholder="Enter your email"
                  required
                  value={values.Email} onChange={handleChange}
                  type="email"
                />
              </div>
              <div className="mb-5 space-y-2">

                <Input
                  className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                  id="phone-number"
                  name="phone"
                  label="  Phone Number"
                  placeholder="Enter your phone number"
                  required
                  value={values.phone} onChange={handleChange}
                  type="tel"
                />
              </div>
            </div>

            <div className="mb-5 space-y-2">

              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="user-name"
                name="userName"
                label="Username"
                placeholder="Enter your User Name"
                required
                value={values.userName} onChange={handleChange}
                type="text"
              />
            </div>

            <div className="mb-5 space-y-2">

              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="user-name"
                name="password"
                label="Password"
                placeholder="Enter your User Name"
                required
                value={values.password} onChange={handleChange}
                type="password"
              />
            </div>





            <button type="submit" className="p-2 text-black rounded align-center bg-cyan-500 hover:bg-cyan-400">Submit</button>
          </form>
          <ToastContainer />
        </section>
      </div>
    </div>
  );
};

export default Form;
