
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function page() {
  return (
   <>
   <div className="flex flex-col min-h-screen text-white bg-black">
     
     <div className="flex flex-1">
       <div className="hidden w-64 p-6 bg-gray-800 border-r border-indigo-500 md:block">
         <div className="mb-6">
           <h3 className="mb-2 text-lg font-bold">Filters</h3>
           <div data-orientation="vertical">
           <h1>Categories</h1>
           <RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>
<h1>Role</h1>
<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>

           </div>
         </div>
       </div>
       <div className="flex-1 p-6">
         <div className="flex items-center justify-between mb-6">
           <div className="text-2xl font-bold">
             <span className="text-indigo-500">1234</span> Jobs Available
           </div>
           <div className="flex items-center gap-4">
             <button
               className="flex items-center justify-center h-10 gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-indigo-500 hover:text-white"
               type="button"
               id="radix-:r46:"
               aria-haspopup="menu"
               aria-expanded="false"
               data-state="closed"
             >
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 className="w-5 h-5"
               >
                 <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
               </svg>
               Filter
             </button>
             <button
               className="flex items-center justify-center h-10 gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-indigo-500 hover:text-white"
               type="button"
               id="radix-:r48:"
               aria-haspopup="menu"
               aria-expanded="false"
               data-state="closed"
             >
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 className="w-5 h-5"
               >
                 <line x1="10" x2="21" y1="6" y2="6"></line>
                 <line x1="10" x2="21" y1="12" y2="12"></line>
                 <line x1="10" x2="21" y1="18" y2="18"></line>
                 <path d="M4 6h1v4"></path>
                 <path d="M4 10h2"></path>
                 <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
               </svg>
               Sort
             </button>
           </div>
         </div>
         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
           <div className="overflow-hidden transition duration-300 ease-in-out bg-gray-800 border border-indigo-500 rounded-md shadow-lg hover:shadow-2xl">
             <div className="relative w-full h-40">
               <img
                 src="/placeholder.svg"
                 alt="Job Image"
                 width="500"
                 height="300"
                 className="object-cover w-full h-full"
                 style={{"aspect-ratio": 500 / 300,"object-fit": "cover"}}
               />
               <div className="absolute px-3 py-1 text-sm font-medium text-white bg-indigo-500 rounded-md top-4 right-4">
                 Hourly
               </div>
             </div>
             <div className="p-4">
               <h3 className="mb-2 text-xl font-bold">UI/UX Designer</h3>
               <p className="mb-4 text-gray-400">Acme Inc.</p>
               <div className="flex items-center justify-between mb-2">
                 <div className="text-sm text-gray-400">Remote</div>
                 <div className="text-lg font-bold text-indigo-500">$50 - $75/hr</div>
               </div>
               <div className="text-sm text-gray-400">Posted 3 days ago</div>
               <button className="inline-flex items-center justify-center w-full h-10 px-4 py-2 mt-4 text-sm font-medium text-indigo-500 transition-colors border rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-indigo-500 hover:text-white">
                 Apply Now
               </button>
             </div>
           </div>
          
          
           
           
         </div>
       </div>
     </div>
   </div></>
  )
}

export default page