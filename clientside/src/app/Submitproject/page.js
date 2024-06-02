"use client"
import axios from "axios";
import { useFormik } from "formik";

function Page() {
  const initialValues = {
    projectName: "",
    Description: "",
    verified: "",
    isVerified: false,
    githubLink: "",
    Start: "",
    End: "",
    Refer: "",
    TechUsed: [],
    Role: "",
    projectType: ""
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:5001/Api/Listproject", values);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#000000] text-[#00FFFF]">
      <div className="w-full max-w-2xl p-6 font-sans rounded-lg shadow-lg sm:p-8 md:p-10 lg:p-12 xl:p-14">
        <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">Business Project Form</h1>
        <form className="grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={formik.handleSubmit}>
          <div className="grid gap-2">
            <label htmlFor="projectName" className="text-sm font-medium">
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              className="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              required
              onChange={formik.handleChange}
              value={formik.values.projectName}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="Description" className="text-sm font-medium">
              Description
            </label>
            <textarea
              id="Description"
              className="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF] resize-none h-12"
              required
              onChange={formik.handleChange}
              value={formik.values.Description}
            ></textarea>
          </div>
          <div className="grid gap-2">
            <label htmlFor="verified" className="text-sm font-medium">
              Verified
            </label>
            <input
              type="checkbox"
              id="verified"
              className="bg-[#000000] border-2 border-[#00FFFF] rounded focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              onChange={formik.handleChange}
              checked={formik.values.verified}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="isVerified" className="text-sm font-medium">
              Is Verified
            </label>
            <input
              type="checkbox"
              id="isVerified"
              className="bg-[#000000] border-2 border-[#00FFFF] rounded focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              onChange={formik.handleChange}
              checked={formik.values.isVerified}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="githubLink" className="text-sm font-medium">
              GitHub Link
            </label>
            <input
              type="url"
              id="githubLink"
              className="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              required
              onChange={formik.handleChange}
              value={formik.values.githubLink}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="Start" className="text-sm font-medium">
              Start Date
            </label>
            <input
              type="date"
              id="Start"
              className="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              onChange={formik.handleChange}
              value={formik.values.Start}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="End" className="text-sm font-medium">
              End Date
            </label>
            <input
              type="date"
              id="End"
              className="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              onChange={formik.handleChange}
              value={formik.values.End}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="Refer" className="text-sm font-medium">
              Refer
            </label>
            <input
              type="text"
              id="Refer"
              className="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              required
              onChange={formik.handleChange}
              value={formik.values.Refer}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="TechUsed" className="text-sm font-medium">
              Tech Used
            </label>
            <input
              type="text"
              id="TechUsed"
              className="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              required
              onChange={formik.handleChange}
              value={formik.values.TechUsed}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="Role" className="text-sm font-medium">
              Role
            </label>
            <input
              type="text"
              id="Role"
              className="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              required
              onChange={formik.handleChange}
              value={formik.values.Role}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="projectType" className="text-sm font-medium">
              Project Type
            </label>
            <input
              type="text"
              id="projectType"
              className="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              required
              onChange={formik.handleChange}
              value={formik.values.projectType}
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#00FFFF] text-[#000000] font-medium rounded-md px-4 py-2 hover:bg-[#00b8b8] focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
