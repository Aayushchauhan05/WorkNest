

function page() {
  return (
   <>

<div class="flex flex-col items-center justify-center min-h-screen bg-[#000000] text-[#00FFFF]">
  <div class="w-full max-w-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-lg shadow-lg font-sans">
    <h1 class="text-3xl font-bold mb-6 sm:text-4xl md:text-5xl">Business Project Form</h1>
    <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="grid gap-2">
        <label for="projectName" class="text-sm font-medium">
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          class="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
          required=""
        />
      </div>
      <div class="grid gap-2">
        <label for="description" class="text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          class="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF] resize-none h-12"
          required=""
        ></textarea>
      </div>
      <div class="grid gap-2">
        <label for="email" class="text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          class="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
          required=""
        />
      </div>
      <div class="grid gap-2">
        <label for="companyName" class="text-sm font-medium">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          class="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
          required=""
        />
      </div>
      <div class="grid gap-2">
        <label for="startDate" class="text-sm font-medium">
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          class="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
          required=""
        />
      </div>
      <div class="grid gap-2">
        <label for="endDate" class="text-sm font-medium">
          End Date
        </label>
        <input
          type="date"
          id="endDate"
          class="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
          required=""
        />
      </div>
      <div class="grid gap-2">
        <label for="requiredSkills" class="text-sm font-medium">
          Required Skills
        </label>
        <input
          type="text"
          id="requiredSkills"
          class="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
          required=""
        />
      </div>
      <div class="grid gap-2">
        <label for="role" class="text-sm font-medium">
          Role
        </label>
        <input
          type="text"
          id="role"
          class="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
          required=""
        />
      </div>
      <div class="grid gap-2">
        <label for="projectType" class="text-sm font-medium">
          Project Type
        </label>
        <input
          type="text"
          id="projectType"
          class="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
          required=""
        />
      </div>
      <div class="grid gap-2">
        <label for="freelancersNeeded" class="text-sm font-medium">
          Freelancers Needed
        </label>
        <input
          type="number"
          id="freelancersNeeded"
          class="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
          required=""
        />
      </div>
      <div class="grid gap-2 md:col-span-2">
        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            id="verified"
            class="bg-[#000000] border-2 border-[#00FFFF] rounded focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
          />
          <label for="verified" class="text-sm font-medium">
            Verified
          </label>
        </div>
      </div>
      <div class="md:col-span-2">
        <button
          type="submit"
          class="w-full bg-[#00FFFF] text-[#000000] font-medium rounded-md px-4 py-2 hover:bg-[#00b8b8] focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
   </>
  )
}

export default page