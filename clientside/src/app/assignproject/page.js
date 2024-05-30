import axios from "axios";
import { useFormik } from "formik";

function Page() {
  const initialValues = {
    projectName: "",
    Description: "",
    Email: "",
    verified: false,
    isVerified: "",
    CompanyName: "",
    Start: "",
    End: "",
    SkillsRequired: [],
    Role: "",
    projectType: "",
    TotalNeedOffreelancer: ""
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const response = await axios
        .post("http://localhost:5001/Api/Listprojectbusiness", values)
        .then(res => console.log(res))
        .catch(err => console.error(err));
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
            <label htmlFor="Email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="Email"
              className="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              required
              onChange={formik.handleChange}
              value={formik.values.Email}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="CompanyName" className="text-sm font-medium">
              Company Name
            </label>
            <input
              type="text"
              id="CompanyName"
              className="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              required
              onChange={formik.handleChange}
              value={formik.values.CompanyName}
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
              required
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
              required
              onChange={formik.handleChange}
              value={formik.values.End}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="SkillsRequired" className="text-sm font-medium">
              Required Skills
            </label>
            <input
              type="text"
              id="SkillsRequired"
              className="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              required
              onChange={formik.handleChange}
              value={formik.values.SkillsRequired}
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
          <div className="grid gap-2">
            <label htmlFor="TotalNeedOffreelancer" className="text-sm font-medium">
              Freelancers Needed
            </label>
            <input
              type="number"
              id="TotalNeedOffreelancer"
              className="bg-[#000000] border-2 border-[#00FFFF] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              required
              onChange={formik.handleChange}
              value={formik.values.TotalNeedOffreelancer}
            />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="verified"
                className="bg-[#000000] border-2 border-[#00FFFF] rounded focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
                onChange={formik.handleChange}
                value={formik.values.verified}
              />
              <label htmlFor="verified" className="text-sm font-medium">
                Verified
              </label>
            </div>
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
