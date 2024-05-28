

function page() {
  return (
 <>


<div class="flex flex-col items-center justify-center min-h-screen bg-black text-[#00ffff]">
  <div class="w-full max-w-4xl p-6 rounded-lg shadow-lg bg-gray-900 sm:px-8 md:px-10 lg:px-12">
    <h1 class="text-2xl font-bold mb-4 sm:text-3xl md:text-4xl">Project Submission</h1>
    <form class="space-y-4 sm:space-y-6 md:space-y-8">
      <div>
        <label for="name" class="block font-medium mb-1 sm:mb-2">
          Project Name
        </label>
        <input
          id="name"
          class="w-full px-3 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00ffff] border-2 border-cyan-500 sm:px-4 sm:py-3 md:px-5 md:py-4"
          placeholder="Enter project name"
          required=""
          type="text"
        />
      </div>
      <div>
        <label for="description" class="block font-medium mb-1 sm:mb-2">
          Description
        </label>
        <textarea
          id="description"
          class="w-full px-3 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00ffff] border-2 border-cyan-500 sm:px-4 sm:py-3 md:px-5 md:py-4"
          rows="3"
          placeholder="Enter project description"
          required=""
        ></textarea>
      </div>
      <div>
        <label for="github" class="block font-medium mb-1 sm:mb-2">
          GitHub Link
        </label>
        <input
          id="github"
          class="w-full px-3 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00ffff] border-2 border-cyan-500 sm:px-4 sm:py-3 md:px-5 md:py-4"
          placeholder="Enter GitHub link"
          required=""
          type="url"
        />
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8">
        <div>
          <label for="start-date" class="block font-medium mb-1 sm:mb-2">
            Start Date
          </label>
          <input
            id="start-date"
            class="w-full px-3 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00ffff] border-2 border-cyan-500 sm:px-4 sm:py-3 md:px-5 md:py-4"
            required=""
            type="date"
          />
        </div>
        <div>
          <label for="end-date" class="block font-medium mb-1 sm:mb-2">
            End Date
          </label>
          <input
            id="end-date"
            class="w-full px-3 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00ffff] border-2 border-cyan-500 sm:px-4 sm:py-3 md:px-5 md:py-4"
            required=""
            type="date"
          />
        </div>
      </div>
      <div>
        <label for="referral" class="block font-medium mb-1 sm:mb-2">
          Referral Source
        </label>
        <input
          id="referral"
          class="w-full px-3 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00ffff] border-2 border-cyan-500 sm:px-4 sm:py-3 md:px-5 md:py-4"
          placeholder="Enter referral source"
          required=""
          type="text"
        />
      </div>
      <div>
        <label for="technologies" class="block font-medium mb-1 sm:mb-2">
          Technologies Used
        </label>
        <input
          id="technologies"
          class="w-full px-3 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00ffff] border-2 border-cyan-500 sm:px-4 sm:py-3 md:px-5 md:py-4"
          placeholder="Enter technologies used (comma-separated)"
          required=""
          type="text"
        />
      </div>
      <div>
        <label for="role" class="block font-medium mb-1 sm:mb-2">
          Role
        </label>
        <input
          id="role"
          class="w-full px-3 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00ffff] border-2 border-cyan-500 sm:px-4 sm:py-3 md:px-5 md:py-4"
          placeholder="Enter your role"
          required=""
          type="text"
        />
      </div>
      <div>
        <label for="project-type" class="block font-medium mb-1 sm:mb-2">
          Project Type
        </label>
        <select
          id="project-type"
          class="w-full px-3 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00ffff] border-2 border-cyan-500 sm:px-4 sm:py-3 md:px-5 md:py-4"
          required=""
        >
          <option value="">Select project type</option>
          <option value="personal">Personal</option>
          <option value="freelance">Freelance</option>
          <option value="contract">Contract</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="flex items-center">
        <input
          id="verified"
          class="mr-2 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
          type="checkbox"
        />
        <label for="verified" class="font-medium">
          Project is Verified
        </label>
      </div>
      <button
        type="submit"
        class="w-full px-4 py-2 rounded-md bg-[#00ffff] text-black font-medium hover:bg-[#00d9d9] focus:outline-none focus:ring-2 focus:ring-[#00ffff] sm:px-6 sm:py-3 md:px-8 md:py-4"
      >
        Submit Project
      </button>
    </form>
  </div>
</div>
 </>
  )
}

export default page