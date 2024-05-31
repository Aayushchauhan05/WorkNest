'use client'
import { useState } from 'react';
import Link from 'next/link';

function Page() {
  const [editable, setEditable] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    github: false,
    instagram: false,
    linkedin: false,
  });
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: 'hello',
    github: 'johndoe',
    instagram: 'johndoe',
    linkedin: 'johndoe',
  });

  const handleEditClick = (field) => {
    setEditable((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e, field) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSave = (field) => {

    if (formData[field].trim() === '') {
      alert(`Please provide a ${field}`);
      return;
    }


    console.log(`${field} saved: ${formData[field]}`);


    handleEditClick(field);
  };

  return (
    <>
      <div className="flex w-full h-screen">
        {/* Left side Navbar */}
        <div className="hidden p-6 bg-cyan-800 text-gray-50 w-[20%] md:block">
          <div className="flex flex-col gap-6">
            <nav className="flex flex-col gap-2 fixed top-20 w-auto h-screen">
              <Link href="/freelancerDashboard" className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Dashboard
              </Link>
              <Link href="/freelancerDashboard/profectionalInfo" className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Professional Info
              </Link>
              <Link href="/freelancerDashboard/skills-projects" className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Skills And Projects
              </Link>
              <Link href="/freelancerDashboard/projects" className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Projects
              </Link>
              <Link href="/freelancerDashboard/interview" className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Interview
              </Link>
              <Link href="/freelancerDashboard/oracle-verify" className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Oracle Verify
              </Link>
            </nav>
          </div>
        </div>

        {/* Right side Main Container */}
        <main className="flex-grow container bg-gray-950 p-6">
          <h1 className="text-3xl font-bold text-cyan-700 dark:text-gray-50 mt-2">Personal Info</h1>
          <form className="text-white mt-4">
            <div className="userInfo flex flex-col items-center">
              <img
                src="/default-profile.png"
                alt="Profile Picture"
                className="w-32 h-32 rounded-full object-cover mb-4 border"
              />
              <div className="flex items-center justify-center flex-col gap-4 w-full">
                {[
                  { label: 'First Name', field: 'firstName', type: 'text' },
                  { label: 'Last Name', field: 'lastName', type: 'text' },
                  { label: 'Email', field: 'email', type: 'email' },
                  { label: 'Password', field: 'password', type: 'password' },
                  { label: 'GitHub', field: 'github', type: 'text' },
                  { label: 'Instagram', field: 'instagram', type: 'text' },
                  { label: 'LinkedIn', field: 'linkedin', type: 'text' },
                ].map(({ label, field, type }) => (
                  <div key={field} className="bg-gray-800 px-4 py-2 flex justify-between w-[70%] md:w-[40%] items-center rounded-md">
                   <div>
                   {label}:
                    <input
                      type={type}
                      className={`bg-gray-800 px-4 py-2 rounded-md focus:outline-none ${editable[field] ? 'text-gray-400' : ''}`}
                      readOnly={!editable[field]}
                      value={formData[field]}
                      onChange={(e) => handleChange(e, field)}
                    />
                   </div>
                    <button
                      type="button"
                      className="ml-2 px-4 py-2 rounded-md text-gray-50"
                      onClick={() => {
                        if (editable[field]) {
                          handleSave(field);
                        } else {
                          handleEditClick(field);
                        }
                      }}
                    >
                      {editable[field] ? 'Save' : 'Edit'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default Page;



//  {/* Left side Navbar */}
{/* <div className="hidden p-6 bg-cyan-800 text-gray-50 w-[20%] md:block">
<div className="flex flex-col gap-6">
  <nav className="flex flex-col gap-2 fixed top-20 w-auto h-screen">
    <Link
      href="/freelancerDashboard"
      className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800"
    >
      Dashboard
    </Link>
    <Link
      href="/freelancerDashboard/profile"
      className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800"
    >
      Professional Info
    </Link>
    <Link
      href="/freelancerDashboard/skills-projects"
      className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800"
    >
      Skills And Projects
    </Link>
    <Link
      href="/freelancerDashboard/projects"
      className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800"
    >
      Projects
    </Link>
    <Link
      href="/freelancerDashboard/interview"
      className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800"
    >
      Interview
    </Link>
    <Link
      href="/freelancerDashboard/oracle-verify"
      className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800"
    >
      Oracle Verify
    </Link>
  </nav>
</div>
</div> */}