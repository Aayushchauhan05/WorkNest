/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TMorSKlrRQ4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Component() {
//  const [count,setcount]= useState(0)
//  useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:5001/Api/EmailToOracle");
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   fetchData();

//   return () => {
//     // This is where you can perform cleanup, if necessary
//     console.log("Cleanup function called");
//   };
// }, []);
  return (
    <div className="text-white bg-black">
      
      <section className="px-4 py-20 md:px-6 lg:py-32">
        <div className="container max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#00ffff] sm:text-5xl md:text-6xl">
            Unlock Your Freelancing Potential
            {/* <button className="bg-red-800 " onClick={()=>{
              setcount(count+1)
            }}>click</button> */}
          </h1>
          <p className="mt-4 text-lg text-white md:text-xl">
            Discover a world of opportunities and connect with talented freelancers to bring your projects to life.
          </p>
          <Button className="mt-8 bg-[#00ffff] text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-[#00d9d9]">
            Get Started
          </Button>
        </div>
      </section>
      <section className="px-4 py-20 md:px-6">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#00ffff] sm:text-3xl">About Our Freelancing Platform</h2>
          <p className="mt-4 text-lg text-white md:text-xl">
            Our platform connects you with talented freelancers from around the world, empowering you to bring your
            projects to life. We're dedicated to providing a seamless experience and helping you find the perfect fit
            for your needs.
          </p>
          <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-[#1a1a1a] p-6 text-left">
              <PencilIcon className="h-8 w-8 text-[#00ffff]" />
              <h3 className="mt-4 text-xl font-bold text-[#00ffff]">Content Creation</h3>
              <p className="mt-2 text-base text-white">Bring your ideas to life with our talented content creators.</p>
            </div>
            <div className="rounded-lg bg-[#1a1a1a] p-6 text-left">
              <CodeIcon className="h-8 w-8 text-[#00ffff]" />
              <h3 className="mt-4 text-xl font-bold text-[#00ffff]">Web Development</h3>
              <p className="mt-2 text-base text-white">Elevate your online presence with our expert web developers.</p>
            </div>
            <div className="rounded-lg bg-[#1a1a1a] p-6 text-left">
              <TypeIcon className="h-8 w-8 text-[#00ffff]" />
              <h3 className="mt-4 text-xl font-bold text-[#00ffff]">Graphic Design</h3>
              <p className="mt-2 text-base text-white">Bring your brand to life with our talented graphic designers.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-20 md:px-6">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#00ffff] sm:text-3xl">What Our Clients Say</h2>
          <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2">
            <div className="rounded-lg bg-[#1a1a1a] p-6 text-left">
              <blockquote className="text-lg font-medium text-white">
                "The freelancers on this platform are truly exceptional. They delivered high-quality work that exceeded
                my expectations."
              </blockquote>
              <div className="mt-4">
                <p className="text-[#00ffff] font-bold">John Doe</p>
                <p className="text-base text-white">CEO, Acme Inc.</p>
              </div>
            </div>
            <div className="rounded-lg bg-[#1a1a1a] p-6 text-left">
              <blockquote className="text-lg font-medium text-white">
                "I've been using this freelancing platform for years, and it's been a game-changer for my business.
                Highly recommended!"
              </blockquote>
              <div className="mt-4">
                <p className="text-[#00ffff] font-bold">Jane Smith</p>
                <p className="text-base text-white">Founder, XYZ Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-20 md:px-6">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#00ffff] sm:text-3xl">Our Portfolio</h2>
          <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg">
              <img
                alt="Portfolio Item 1"
                className="object-cover w-full h-auto"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="bg-[#1a1a1a] p-4">
                <h3 className="text-xl font-bold text-[#00ffff]">Project Title 1</h3>
                <p className="mt-2 text-base text-white">A brief description of the project.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                alt="Portfolio Item 2"
                className="object-cover w-full h-auto"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="bg-[#1a1a1a] p-4">
                <h3 className="text-xl font-bold text-[#00ffff]">Project Title 2</h3>
                <p className="mt-2 text-base text-white">A brief description of the project.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                alt="Portfolio Item 3"
                className="object-cover w-full h-auto"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="bg-[#1a1a1a] p-4">
                <h3 className="text-xl font-bold text-[#00ffff]">Project Title 3</h3>
                <p className="mt-2 text-base text-white">A brief description of the project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-20 md:px-6">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#00ffff] sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-6 text-left">
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between rounded-lg bg-[#1a1a1a] px-6 py-4">
                <h3 className="text-lg font-bold text-[#00ffff]">How do I hire a freelancer?</h3>
                <ChevronDownIcon className="h-6 w-6 text-[#00ffff]" />
              </CollapsibleTrigger>
              <CollapsibleContent className="rounded-lg bg-[#1a1a1a] px-6 py-4">
                <p className="text-base text-white">
                  To hire a freelancer, simply browse our platform, review freelancer profiles, and send them a project
                  proposal. Our secure payment system and communication tools make the process easy and efficient.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between rounded-lg bg-[#1a1a1a] px-6 py-4">
                <h3 className="text-lg font-bold text-[#00ffff]">What is the pricing structure?</h3>
                <ChevronDownIcon className="h-6 w-6 text-[#00ffff]" />
              </CollapsibleTrigger>
              <CollapsibleContent className="rounded-lg bg-[#1a1a1a] px-6 py-4">
                <p className="text-base text-white">
                  Our pricing is flexible and tailored to your specific needs. Freelancers set their own rates, and you
                  can negotiate directly with them. We also offer various subscription plans to fit your budget and
                  project requirements.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between rounded-lg bg-[#1a1a1a] px-6 py-4">
                <h3 className="text-lg font-bold text-[#00ffff]">How do I ensure quality work?</h3>
                <ChevronDownIcon className="h-6 w-6 text-[#00ffff]" />
              </CollapsibleTrigger>
              <CollapsibleContent className="rounded-lg bg-[#1a1a1a] px-6 py-4">
                <p className="text-base text-white">
                  We carefully vet and screen all freelancers on our platform to ensure they meet our high standards of
                  quality and expertise. You can also review freelancer portfolios, ratings, and reviews to find the
                  perfect fit for your project.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </section>
      <section className="px-4 py-20 md:px-6">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#00ffff] sm:text-3xl">Get in Touch</h2>
          <p className="mt-4 text-lg text-white md:text-xl">Have a project in mind? Let's discuss how we can help.</p>
          <form className="mt-8 space-y-4 text-left">
            <div>
              <label className="block text-base font-medium text-white" htmlFor="name">
                Name
              </label>
              <Input
                className="mt-2 w-full rounded-md bg-[#1a1a1a] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
                id="name"
                placeholder="Enter your name"
                type="text"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-white" htmlFor="email">
                Email
              </label>
              <Input
                className="mt-2 w-full rounded-md bg-[#1a1a1a] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
                id="email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-white" htmlFor="message">
                Message
              </label>
              <Textarea
                className="mt-2 w-full rounded-md bg-[#1a1a1a] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <Button
              className="w-full rounded-md bg-[#00ffff] px-6 py-3 text-base font-medium text-black hover:bg-[#00d9d9]"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </section>
      <footer className="bg-[#1a1a1a] py-8 px-4 md:px-6">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-base text-gray-400">© 2024 Freelancing Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}


function TypeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}