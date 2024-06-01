"use client";
import Link from "next/link";
import { useState } from "react";

function ProfilePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Jared Palmer",
    experience: "5 years",
    bio: "I'm a software engineer with a passion for building beautiful and functional web applications. I've been working in the industry for the past 5 years, and I'm always excited to learn new technologies and techniques.",
    social: "@jaredpalmer",
    profileImage: "/placeholder-user.jpg",
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
    toggleModal();
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <div
          className={`fixed md:relative p-6 bg-cyan-800 transition-transform transform z-10 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:flex text-gray-50 w-[50%] md:w-[20%]`}
        >
          <div className="flex flex-col gap-6">
            <button
              onClick={toggleMenu}
              className="md:hidden p-5 absolute text-xl top-0 right-0 z-50"
            >
              X
            </button>

            <nav class="flex flex-col gap-2 h-screen">
            <div class="flex items-center gap-4">
              <span class="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 md:h-14 md:w-14">
                <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
              </span>
              <div class="grid gap-1">
                <h1 class="text-xl font-semibold md:text-2xl">Jared Palmer</h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
              </div>
            </div>
            <Link href={"/companydashboard"} className="flex items-center mt-10 gap-3 px-3 py-2 transition-colors rounded-md bg-gray-800 ">
             
            Dashboard
           </Link>

           <Link href={"/companydashboard/personalinfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800 ">
             
            Profile
           </Link>

           <Link href={"/companydashboard/professionalinfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800 ">
             
           professional info
           </Link>

           <Link href={"/companydashboard/projects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800 ">
             
            Projects
           </Link>
           <Link href={"/companydashboard/viewfreelancer"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800 ">
             
             View Freelancer
            </Link>
             
              
              
            </nav>
          </div>
        </div>

        <div className="flex flex-col w-full text-white">
          <header className="bg-gray-900 shadow-sm dark:bg-gray-900">
            <div className="container flex items-center justify-between px-6 py-4 mx-auto">
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground md:hidden"
                >
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
                    className="w-6 h-6 text-gray-500 dark:text-gray-400"
                  >
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                  </svg>
                </button>
                <span className="relative flex w-10 h-10 overflow-hidden rounded-full shrink-0">
                  <img
                    className="w-full h-full aspect-square"
                    src={profile.profileImage}
                  />
                </span>
                <div className="">
                  <h1 className="text-xl font-bold text-cyan-700 dark:text-gray-50">
                    Acme Inc.
                  </h1>
                  <p className="text-cyan-500 dark:text-gray-400">
                    Company Dashboard
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:bg-red-700">
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
                    className="w-6 h-6 text-white dark:text-gray-400"
                  >
                    <path d="M2 20h.01"></path>
                    <path d="M7 20v-4"></path>
                    <path d="M12 20v-8"></path>
                    <path d="M17 20V8"></path>
                    <path d="M22 4v16"></path>
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:bg-red-700">
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
                    className="w-6 h-6 text-white dark:text-gray-400"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>
          </header>
          <div className="container flex flex-col items-center max-h-screen ">

          <div className="container flex flex-col items-center gap-8 p-6">
  {/* Personal Information Section */}
  <section className="w-full flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg text-white space-y-4">
    <div className="w-full flex items-center justify-center">
      <img src="#" className="rounded-full h-20 border w-auto" alt="Profile" />
    </div>
    <div className="flex flex-col items-center w-full">
      <p className="text-sm font-semibold">Name:</p>
      <span className="text-lg">ImDezCode</span>
    </div>
    <div className="flex flex-col items-center w-full">
      <p className="text-sm font-semibold">Email:</p>
      <span className="text-lg">imdezcode@gmail.com</span>
    </div>
    <div className="flex flex-col items-center w-full">
      <p className="text-sm font-semibold">Bio:</p>
      <span className="text-lg">a software developer who has passion for development</span>
    </div>
    <div className="flex flex-col items-center w-full">
      <p className="text-sm font-semibold">Experience:</p>
      <span className="text-lg">5 year</span>
    </div>
    <div className="flex flex-col items-center w-full">
      <p className="text-sm font-semibold">Description:</p>
      <span className="text-lg">a software developer who has passion for development</span>
    </div>
    
  </section>

  {/* Social Links Section */}
  <section className="w-full flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg text-white space-y-4">
    <div className="flex flex-col w-full">
      <p className="text-lg font-semibold mb-4">Social Links:</p>
      <div className="flex space-x-4 items-center">
      <div className="flex flex-col items-center w-full">
      <p className="text-sm font-semibold">Instagram:</p>
      <a className="text-lg">instagram.com</a>
    </div>
    <div className="flex flex-col items-center w-full">
      <p className="text-sm font-semibold">linkedin:</p>
      <a className="text-lg">linkedin.com</a>
    </div>
      </div>
    </div>
  </section>
</div>


            <button
              onClick={toggleModal}
              className="mt-4  items-end w-36 px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ModalProfileForm
          profile={profile}
          onClose={toggleModal}
          onUpdate={handleProfileUpdate}
        />
      )}
    </>
  );
}

function ModalProfileForm({ profile, onClose, onUpdate }) {
  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-6 z-10 max-w-lg w-full">
        <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="fullName" className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="experience" className="text-sm font-medium">Experience</label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="bio" className="text-sm font-medium">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              ></textarea>
            </div>
            <div className="grid gap-2">
              <label htmlFor="social" className="text-sm font-medium">Social Media</label>
              <input
                type="text"
                id="social"
                name="social"
                value={formData.social}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-md hover:bg-cyan-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;

