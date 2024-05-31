
import { Label } from "@/components/ui/label"
import Link from "next/link"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function page() {
  const jobListings = [
    {
      title: 'Web Developer Needed',
      description: "We're looking for an experienced web developer to build a custom e-commerce website.",
      budget: '$3,000 - $5,000',
      client: 'ABC Corp',
      dueDate: '2024-06-15',
      status: 'Available to bid'
    },
    {
      title: 'Graphic Designer for Branding',
      description: 'We need a talented graphic designer to create a brand identity for our new startup.',
      budget: '$1,000 - $2,500',
      client: 'XYZ Corp',
      dueDate: '2024-07-10',
      status: 'Bid ends soon'
    },
    {
      title: 'Content Writer for Blog',
      description: 'Looking for a skilled content writer to produce high-quality blog posts on a regular basis.',
      budget: '$500 - $1,000',
      client: '123 Inc',
      dueDate: '2024-06-30',
      status: 'Available to bid'
    },
    {
      title: 'Virtual Assistant Needed',
      description: "We're looking for a reliable virtual assistant to help with administrative tasks and customer support.",
      budget: '$15 - $25 per hour',
      client: 'LMN Co',
      dueDate: '2024-07-25',
      status: 'Bid ends soon'
    },
    {
      title: 'Social Media Manager',
      description: "We need a social media expert to manage our company's Facebook, Instagram, and Twitter accounts.",
      budget: '$1,000 - $2,000 per month',
      client: 'UVW Inc',
      dueDate: '2024-08-10',
      status: 'Available to bid'
    },
    {
      title: 'Copywriter for Marketing',
      description: 'Looking for a talented copywriter for marketing materials.',
      budget: '$500 - $1,500',
      client: 'OPQ Corp',
      dueDate: '2024-08-05',
      status: 'Bid ends soon'
    },
    {
      title: 'Web Developer Needed',
      description: "We're looking for an experienced web developer to build a custom e-commerce website.",
      budget: '$3,000 - $5,000',
      client: 'ABC Corp',
      dueDate: '2024-06-15',
      status: 'Available to bid'
    },
    {
      title: 'Graphic Designer for Branding',
      description: 'We need a talented graphic designer to create a brand identity for our new startup.',
      budget: '$1,000 - $2,500',
      client: 'XYZ Corp',
      dueDate: '2024-07-10',
      status: 'Bid ends'
    },
    {
      title: 'Content Writer for Blog',
      description: 'Looking for a skilled content writer to produce high-quality blog posts on a regular basis.',
      budget: '$500 - $1,000',
      client: '123 Inc',
      dueDate: '2024-06-30',
      status: 'Available to bid'
    },
    {
      title: 'Virtual Assistant Needed',
      description: "We're looking for a reliable virtual assistant to help with administrative tasks and customer support.",
      budget: '$15 - $25 per hour',
      client: 'LMN Co',
      dueDate: '2024-07-25',
      status: 'Bid ends soon'
    },
    {
      title: 'Social Media Manager',
      description: "We need a social media expert to manage our company's Facebook, Instagram, and Twitter accounts.",
      budget: '$1,000 - $2,000 per month',
      client: 'UVW Inc',
      dueDate: '2024-08-10',
      status: 'Available to bid'
    },
    {
      title: 'Copywriter for Marketing',
      description: 'Looking for a talented copywriter for marketing materials.',
      budget: '$500 - $1,500',
      client: 'OPQ Corp',
      dueDate: '2024-08-05',
      status: 'Bid ends'
    },
    {
      title: 'Web Developer Needed',
      description: "We're looking for an experienced web developer to build a custom e-commerce website.",
      budget: '$3,000 - $5,000',
      client: 'ABC Corp',
      dueDate: '2024-06-15',
      status: 'Available to bid'
    },
    {
      title: 'Graphic Designer for Branding',
      description: 'We need a talented graphic designer to create a brand identity for our new startup.',
      budget: '$1,000 - $2,500',
      client: 'XYZ Corp',
      dueDate: '2024-07-10',
      status: 'Bid ends'
    },
    {
      title: 'Content Writer for Blog',
      description: 'Looking for a skilled content writer to produce high-quality blog posts on a regular basis.',
      budget: '$500 - $1,000',
      client: '123 Inc',
      dueDate: '2024-06-30',
      status: 'Available to bid'
    },
    {
      title: 'Virtual Assistant Needed',
      description: "We're looking for a reliable virtual assistant to help with administrative tasks and customer support.",
      budget: '$15 - $25 per hour',
      client: 'LMN Co',
      dueDate: '2024-07-25',
      status: 'Bid ends'
    },
    {
      title: 'Social Media Manager',
      description: "We need a social media expert to manage our company's Facebook, Instagram, and Twitter accounts.",
      budget: '$1,000 - $2,000 per month',
      client: 'UVW Inc',
      dueDate: '2024-08-10',
      status: 'Available to bid'
    },
    {
      title: 'Copywriter for Marketing',
      description: 'Looking for a talented copywriter for marketing materials.',
      budget: '$500 - $1,500',
      client: 'OPQ Corp',
      dueDate: '2024-08-05',
      status: 'Bid ends soon'
    }
  ];


  // function getBidStatusColor(status) {
  //   switch (status) {
  //     case 'Available to bid':
  //       return 'bg-cyan-800 text-white';
  //     case 'Bid ends soon':
  //       return 'bg-yellow-500 text-black';
  //     case 'Bid ends':
  //       return 'bg-red-500 text-black disabled';
  //     default:
  //       return '';
  //   }
  // }

  return (
    <>

      <div className="">

        <header className="sticky top-0 z-10 w-full px-6 py-4 text-white bg-black">
          <div className="container flex items-center justify-between mx-auto">
            <h1 className="text-2xl font-bold">Freelance Jobs</h1>

          </div>
        </header>
        <div className="container grid grid-cols-1 gap-6 py-8 mx-auto text-white bg-black md:grid-cols-12">
          <div className="sticky col-span-1 p-6 bg-cyan-800 rounded-lg shadow-md md:col-span-3 top-24 w-auto h-[50%]">
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
                      <input
                        type="checkbox"
                        id="job-type-web-dev"
                        className="peer hidden"
                      />
                      <label
                        className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="job-type-web-dev"
                      >
                        Web Development
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="job-type-graphic-design"
                        className="peer hidden"
                      />
                      <label
                        className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="job-type-graphic-design"
                      >
                        Graphic Design
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="job-type-content-writing"
                        className="peer hidden"
                      />
                      <label
                        className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="job-type-content-writing"
                      >
                        Content Writing
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="job-type-virtual-assistant"
                        className="peer hidden"
                      />
                      <label
                        className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="job-type-virtual-assistant"
                      >
                        Virtual Assistant
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="job-type-marketing"
                        className="peer hidden"
                      />
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
                        className="w-4 h-4 border text-w rounded-full aspect-square border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                      <input
                        type="checkbox"
                        id="experience-entry"
                        className="peer hidden"
                      />
                      <label
                        className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="experience-entry"
                      >
                        Entry Level
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="experience-intermediate"
                        className="peer hidden"
                      />
                      <label
                        className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="experience-intermediate"
                      >
                        Intermediate
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="experience-expert"
                        className="peer hidden"
                      />
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
          <div className="col-span-1 md:col-span-9 w-full">
            <div className="p-6  rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Available Jobs</h2>
                <div className="flex items-center space-x-4 bg-gray-800">
                  <select className="bg-black focus:outline-none">
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="budget">Budget</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {jobListings.map((job, index) => (

                  <div key={index} className="rounded-lg overflow-hidden border bg-white text-black shadow-sm relative group">
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex flex-col space-y-4 p-6">
                        <h3 className="text-lg font-bold text-center ">{job.title}</h3>

                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Client:</span>
                            <span>{job.client}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500 font-medium">Due Date:</span>
                            <span>{job.dueDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 bg-gray-100 border-t flex gap-2">
                        <div className="text-sm text-gray-600">Budget: {job.budget}</div>
                        <button className={`inline-flex items-center justify-center w-[50%] h-10 bg-cyan-800  rounded-md text-sm font-medium text-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 px-3 py-3`}>
                          bid
                        </button>

                      </div>
                    </div>
                    <div className="absolute inset-0 bg-white opacity-0 rounded-lg transition-opacity group-hover:opacity-20"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default page