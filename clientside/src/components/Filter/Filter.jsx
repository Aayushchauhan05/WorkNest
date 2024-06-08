import { useState } from "react";

const Filter = ({ onFilterChange,  isjobPortal }) => {
  const [jobType, setJobType] = useState("");


  const handleFilterChange = (name, value) => {
    onFilterChange(name, value);
  };

  
  

  return isjobPortal ? (
    <div>
      <div className="flex flex-col gap-5 md:min-w-[10rem] text-white">
        <h3>Job Categories</h3>
        <div>
          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2   border-gray-500 pb-3 pt-3">
            <input
              id="web-radio"
              type="radio"
              value=""
              name="job-category"
             
              className="w-4 h-4  bg-gray-100 border-cyan-500 "
              checked={jobType === "Web Development"}
              onChange={() => {
                setJobType("Web Development");
                handleFilterChange("jobType", "Web Development");
              }}
            />
            <label
              for="web-radio"
              class="ms-2 text-sm font-medium "
            >
              Web Development
            </label>
          </div>

          <div class="flex items-center  border-b hover:bg-cyan-500  rounded px-2 border-gray-500 pb-3 pt-3">
            <input
              id="graphic-radio"
              type="radio"
              value=""
              name="job-category"
              class="w-4 h-4  bg-gray-100 border-cyan-500 "
             checked={jobType === "Graphic Design"}
              onChange={() => {
                setJobType("Graphic Design");
                handleFilterChange("jobType", "Graphic Design");
              }}
            />
            <label
              for="graphic-radio"
              class="ms-2 text-sm font-medium "
            >
            Graphic Design
            </label>
          </div>

          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2 border-gray-500 pb-3 pt-3">
            <input
              id="content-radio"
              type="radio"
              value=""
              name="job-category"
              class="w-4 h-4  bg-gray-100 border-cyan-500 "
              checked={jobType === "Content Writing"}
              onChange={() => {
                setJobType("Content Writing");
                handleFilterChange("jobType", "Content Writing");
              }}
            />
            <label
              for="content-radio"
              class="ms-2 text-sm font-medium "
            >
              Content Writing
            </label>
          </div>

          <div class="flex items-center  border-b hover:bg-cyan-500  rounded px-2 border-gray-500 pb-3 pt-3">
            <input
              id="virtual-radio"
              type="radio"
              value=""
              name="job-category"
              className="w-4 h-4  bg-gray-100 border-cyan-500 "
              checked={jobType === "Virtual Assistant"}
              onChange={() => {
                setJobType("Virtual Assistant");
                handleFilterChange("jobType", "Virtual Assistant");
              }}
            />
            <label
              for="virtual-radio"
              className="ms-2 text-sm font-medium "
            >
              Virtual Assistant
            </label>
          </div>


          <div class="flex items-center  border-b hover:bg-cyan-500  rounded px-2 border-gray-500 pb-3 pt-3">
            <input
              id="marketing-radio"
              type="radio"
              value=""
              name="job-category"
              className="w-4 h-4  bg-gray-100 border-cyan-500 "
              checked={jobType === "Marketing"}
              onChange={() => {
                setJobType("Marketing");
                handleFilterChange("jobType", "Marketing");
              }}
            />
            <label
              for="marketing-radio"
              classNmae="ms-2 text-sm font-medium "
            >
              Marketing
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-5 text-white">
        <h3>Experience Level</h3>
        <div>
          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2 border-gray-500 pb-3 pt-3">
            <input
              id="entry-checkbox"
              type="checkbox"
              value=""
              name="entry-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded px-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={()=>handleFilterChange("experienceLevel","Entry Level")}
            />
            <label
              for="entry-checkbox"
              class="ms-2 text-sm font-medium "
            >
              Entry Level
            </label>
          </div>

          <div class="flex items-center  border-b hover:bg-cyan-500  rounded px-2 border-gray-500 pb-3 pt-3">
            <input
              id="intermediate-checkbox"
              type="checkbox"
              value=""
              name="intermediate-checkbox"
              onChange={()=>handleFilterChange("experienceLevel","Intermediate")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded px-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="intermediate-checkbox"
              className="ms-2 text-sm font-medium "
            >
            Intermediate
            </label>
          </div>

          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2 border-gray-500 pb-3 pt-3">
            <input
              id="expert-checkbox"
                type="checkbox"
              value=""
              onChange={()=>handleFilterChange("experienceLevel","Expert")}
              name="expert-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded px-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="expert-checkbox"
              className="ms-2 text-sm font-medium "
            >
             Expert
            </label>
          </div>

        


          
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-5 text-white">
        <h3>Budget</h3>
        <div>
          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2   border-gray-500 pb-3 pt-3">
            <input
              id="0-500"
              type="radio"
              value="0-500"
              onChange={()=>handleFilterChange("budget","0-500")}
              name="budget-category"
              className="w-4 h-4  bg-gray-100 border-cyan-500 "
            />
            <label
              for="0-500"
              className="ms-2 text-sm font-medium "
            >
            $0-500
            </label>
          </div>

          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2   border-gray-500 pb-3 pt-3">
            <input
              id="500-2000"
              type="radio"
              value="500-2000"
              onChange={()=>handleFilterChange("budget","500-2000")}
              name="budget-category"
              className="w-4 h-4  bg-gray-100 border-cyan-500 "
            />
            <label
              for="500-2000"
              className="ms-2 text-sm font-medium "
            >
            $0-500
            </label>
          </div>

          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2   border-gray-500 pb-3 pt-3">
            <input
              id="2000+"
              type="radio"
              value="2000++"
              onChange={()=>handleFilterChange("budget","2000+")}
              name="budget-category"
              className="w-4 h-4  bg-gray-100 border-cyan-500 "
            />
            <label
              for="2000+"
              class="ms-2 text-sm font-medium "
            >
            $2000+
            </label>
          </div>
          
        </div>
      </div>

     
    </div>
  ) : (
    <div>
   

      <div className="flex flex-col gap-5  md:min-w-[15rem] text-white">
        <h3>Skills</h3>
        <div>
          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2 border-gray-500 pb-3 pt-3">
            <input
              id="react-checkbox"
              type="checkbox"
              value=""
              name="react-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded px-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={()=>handleFilterChange("skills","React")}
            />
            <label
              for="react-checkbox"
              class="ms-2 text-sm font-medium "
            >
             React
            </label>
          </div>

          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2 border-gray-500 pb-3 pt-3">
            <input
              id="nodeJs-checkbox"
              type="checkbox"
              value=""
              name="nodeJs-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded px-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={()=>handleFilterChange("skills","Node.js")}
            />
            <label
              for="nodeJs-checkbox"
              class="ms-2 text-sm font-medium "
            >
             Node.js
            </label>
          </div>

          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2 border-gray-500 pb-3 pt-3">
            <input
              id="vueJs-checkbox"
              type="checkbox"
              value=""
              name="vueJs-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded px-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={()=>handleFilterChange("skills","Vue.js")}
            />
            <label
              for="vueJs-checkbox"
              class="ms-2 text-sm font-medium "
            >
             Vue.js
            </label>
          </div>

          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2 border-gray-500 pb-3 pt-3">
            <input
              id="laravel-checkbox"
              type="checkbox"
              value=""
              name="laravel-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded px-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={()=>handleFilterChange("skills","Laravel")}
            />
            <label
              for="laravel-checkbox"
              class="ms-2 text-sm font-medium "
            >
             Laravel
            </label>
          </div>


          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2 border-gray-500 pb-3 pt-3">
            <input
              id="python-checkbox"
              type="checkbox"
              value=""
              name="python-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded px-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={()=>handleFilterChange("skills","Python")}
            />
            <label
              for="python-checkbox"
              class="ms-2 text-sm font-medium "
            >
             Python
            </label>
          </div>


          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2 border-gray-500 pb-3 pt-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              value=""
              name="angular-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded px-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={()=>handleFilterChange("skills","Angular")}
            />
            <label
              for="angular-checkbox"
              class="ms-2 text-sm font-medium "
            >
             Angular
            </label>
          </div>

         

        


          
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-5 text-white">
        <h3>Hourly Rate</h3>
        <div>
          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2   border-gray-500 pb-3 pt-3">
            <input
              id="0-50"
              type="radio"
              value="0-50"
              onChange={()=>handleFilterChange("hourlyRate","0-50")}
              name="hourlyRate-category"
              className="w-4 h-4  bg-gray-100 border-cyan-500 "
            />
            <label
              for="0-50"
              className="ms-2 text-sm font-medium "
            >
            $0-50
            </label>
          </div>

          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2   border-gray-500 pb-3 pt-3">
            <input
              id="50-100"
              type="radio"
              value="50-100"
              onChange={()=>handleFilterChange("hourlyRate","50-100")}
              name="hourlyRate-category"
              className="w-4 h-4  bg-gray-100 border-cyan-500 "
            />
            <label
              for="50-100"
              className="ms-2 text-sm font-medium "
            >
            $50-100
            </label>
          </div>

          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2   border-gray-500 pb-3 pt-3">
            <input
              id="100+"
              type="radio"
              value="2000++"
              onChange={()=>handleFilterChange("hourlyRate","100+")}
              name="hourlyRate-category"
              className="w-4 h-4  bg-gray-100 border-cyan-500 "
            />
            <label
              for="100+"
              class="ms-2 text-sm font-medium "
            >
            $100+
            </label>
          </div>
          
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-5 text-white">
        <h3>Availability</h3>
        <div>
          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2   border-gray-500 pb-3 pt-3">
            <input
              id="all"
              type="radio"
              value="all"
              onChange={()=>handleFilterChange("availability","All")}
              name="availability-category"
              className="w-4 h-4  bg-gray-100 border-cyan-500 "
            />
            <label
              for="all"
              className="ms-2 text-sm font-medium "
            >
            All
            </label>
          </div>

          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2   border-gray-500 pb-3 pt-3">
            <input
              id="available"
              type="radio"
              value="available"
              onChange={()=>handleFilterChange("availability",true)}
              name="availability-category"
              className="w-4 h-4  bg-gray-100 border-cyan-500 "
            />
            <label
              for="available"
              className="ms-2 text-sm font-medium "
            >
            Available
            </label>
          </div>

          <div class="flex items-center border-b hover:bg-cyan-500  rounded px-2   border-gray-500 pb-3 pt-3">
            <input
              id="unavailable"
              type="radio"
              value="unavailable"
              onChange={()=>handleFilterChange("availability",false)}
              name="availability-category"
              className="w-4 h-4  bg-gray-100 border-cyan-500 "
            />
            <label
              for="unavailable"
              className="ms-2 text-sm font-medium "
            >
            Unavailable
            </label>
          </div>
          
        </div>
      </div>

     
    </div>
  );
};

export default Filter;
