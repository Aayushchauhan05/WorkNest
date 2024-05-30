
import { Label } from "@/components/ui/label"
import Link from "next/link"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function page() {
  return (
   <>

<div className="">

      <header className="sticky top-0 z-10 w-full px-6 py-4 text-white bg-black">
        <div className="container flex items-center justify-between mx-auto">
          <h1 className="text-2xl font-bold">Freelance Jobs</h1>
          <nav className="flex items-center space-x-4">
          <Link href={"/"}>Home</Link>
            <Link href={"/jobs"} className="text-red-500 ">Jobs</Link>
            <Link href={"/freelancerDashboard"}>Dashboard</Link>
          </nav>
        </div>
      </header>
      <div className="container grid grid-cols-1 gap-6 py-8 mx-auto text-white bg-black md:grid-cols-12">
        <div className="sticky col-span-1 p-6 bg-gray-800 rounded-lg shadow-md md:col-span-3 top-24">
          <h2 className="mb-4 text-lg font-bold">Job Categories</h2>
          <ul className="space-y-2">
            <li>
              <a className="text-sm text-white hover:text-gray-300" href="#">
                Web Development
              </a>
            </li>
            <li>
              <a className="text-sm text-white hover:text-gray-300" href="#">
                Graphic Design
              </a>
            </li>
            <li>
              <a className="text-sm text-white hover:text-gray-300" href="#">
                Content Writing
              </a>
            </li>
            <li>
              <a className="text-sm text-white hover:text-gray-300" href="#">
                Virtual Assistant
              </a>
            </li>
            <li>
              <a className="text-sm text-white hover:text-gray-300" href="#">
                Marketing
              </a>
            </li>
          </ul>
          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 bg-gray-100 h-[1px] w-full my-6"
          ></div>
          <div className="grid gap-4">
            <h3 className="text-lg font-bold">Filters</h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label
                  className="text-base font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="job-type"
                >
                  Job Type
                </label>
                <div>
                  <div className="flex items-center gap-2">
                    <label
                      className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="job-type-web-dev"
                    >
                      Web Development
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <label
                      className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="job-type-graphic-design"
                    >
                      Graphic Design
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <label
                      className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="job-type-content-writing"
                    >
                      Content Writing
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <label
                      className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="job-type-virtual-assistant"
                    >
                      Virtual Assistant
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <label
                      className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="job-type-marketing"
                    >
                      Marketing
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <label
                  className="text-base font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="budget"
                >
                  Budget
                </label>
                <div
                  role="radiogroup"
                  aria-required="false"
                  dir="ltr"
                  className="grid gap-2"
                  id="budget"
                  tabIndex="0"
                  style={{ outline: 'none' }}
                >
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="true"
                      data-state="checked"
                      value="any"
                      className="w-4 h-4 border rounded-full aspect-square border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="budget-any"
                      tabIndex="-1"
                      data-radix-collection-item=""
                    >
                      <span data-state="checked" className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-circle h-2.5 w-2.5 fill-current text-current"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                      </span>
                    </button>
                    <label
                      className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="budget-any"
                    >
                      Any
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="low"
                      className="w-4 h-4 border rounded-full aspect-square border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="budget-low"
                      tabIndex="-1"
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="budget-low"
                    >
                      $0 - $500
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="medium"
                      className="w-4 h-4 border rounded-full aspect-square border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="budget-medium"
                      tabIndex="-1"
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="budget-medium"
                    >
                      $500 - $2,000
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="high"
                      className="w-4 h-4 border rounded-full aspect-square border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="budget-high"
                      tabIndex="-1"
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="budget-high"
                    >
                      $2,000+
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <label
                  className="text-base font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="experience"
                >
                  Experience Level
                </label>
                <div>
                  <div className="flex items-center gap-2">
                    <label
                      className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="experience-entry"
                    >
                      Entry Level
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <label
                      className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="experience-intermediate"
                    >
                      Intermediate
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <label
                      className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="experience-expert"
                    >
                      Expert
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-9">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Available Jobs</h2>
              <div className="flex items-center space-x-4">
                <select>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="budget">Budget</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="mb-2 text-lg font-bold">Web Developer Needed</h3>
                <p className="mb-4 text-sm text-gray-400">
                  We're looking for an experienced web developer to build a custom e-commerce website.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">Budget: $3,000 - $5,000</div>
                  <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Place Bid
                  </button>
                </div>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="mb-2 text-lg font-bold">Graphic Designer for Branding</h3>
                <p className="mb-4 text-sm text-gray-400">
                  We need a talented graphic designer to create a brand identity for our new startup.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">Budget: $1,000 - $2,500</div>
                  <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Place Bid
                  </button>
                </div>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="mb-2 text-lg font-bold">Content Writer for Blog</h3>
                <p className="mb-4 text-sm text-gray-400">
                  Looking for a skilled content writer to produce high-quality blog posts on a regular basis.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">Budget: $500 - $1,000</div>
                  <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Place Bid
                  </button>
                </div>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="mb-2 text-lg font-bold">Virtual Assistant Needed</h3>
                <p className="mb-4 text-sm text-gray-400">
                  We're looking for a reliable virtual assistant to help with administrative tasks and customer support.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">Budget: $15 - $25 per hour</div>
                  <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Place Bid
                  </button>
                </div>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="mb-2 text-lg font-bold">Social Media Manager</h3>
                <p className="mb-4 text-sm text-gray-400">
                  We need a social media expert to manage our company's Facebook, Instagram, and Twitter accounts.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">Budget: $1,000 - $2,000 per month</div>
                  <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Place Bid
                  </button>
                </div>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="mb-2 text-lg font-bold">Copywriter for Marketing</h3>
                <p className="mb-4 text-sm text-gray-400">Looking for a talented copywriter for marketing materials.</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">Budget: $500 - $1,500</div>
                  <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Place Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default page