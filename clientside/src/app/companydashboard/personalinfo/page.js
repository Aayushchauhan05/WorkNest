"use client";
import Link from "next/link";
import { useState } from "react";
import VerticalNav from '@/components/VerticalNav/VerticalNav';

import Header from "@/components/Header/Header";


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
      <div className="flex w-full h-screen ">
        <VerticalNav isMenuOpen={isMenuOpen}   isActive={"profile"} toggleMenu={toggleMenu} isCompanyDashboard={true} userName={"ayush badoria"} userProfession={"Software Developer"} />
        <div className="flex flex-col w-full">
          <Header
            companyName="Company XYZ"
            pageName="Your Profile"
            isCompanydashboard={true}
            toggleMenu={toggleMenu}
          
          />
          <div className="container flex flex-col md:pl-64 lg:pl-72 items-center max-h-screen ">

            <div className="container flex flex-col items-center gap-8 p-6">
              {/* Personal Information Section */}
              <section className="flex flex-col items-center w-full p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
             
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
              <section className="flex flex-col items-center justify-center w-full p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
                <div className="flex flex-col w-full">
                  <p className="mb-4 text-lg font-semibold">Social Links:</p>
                  <div className="flex items-center space-x-4">
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
              className="items-end px-4 py-2 mt-4 text-white rounded-md w-36 bg-cyan-600 hover:bg-cyan-700"
            >
              Edit Profile
            </button>
            <div class="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg shadow-xl overflow-hidden">
  <div class="p-6">
    <h2 class="text-3xl font-bold text-white mb-4">Title of the Card</h2>
    <p class="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia nulla eget ultricies pulvinar.</p>
    <div class="flex items-center mt-6">
      <img class="w-10 h-10 rounded-full" src="https://via.placeholder.com/50" alt="Avatar"/>
      <p class="text-sm text-gray-300 ml-2">John Doe</p>
    </div>
  </div>
  <img class="w-full h-32 object-cover object-center" src="https://via.placeholder.com/600x200" alt="Blockchain Image"/>
  <div class="p-6 flex justify-between items-center">
    <button class="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500">Action</button>
    <span class="text-xs uppercase font-semibold tracking-wider text-gray-300">May 12, 2024</span>
  </div>
</div>

<div class="bg-gradient-to-br from-teal-900 to-blue-900 rounded-lg shadow-xl overflow-hidden">
  <div class="p-6">
    <h2 class="text-3xl font-bold text-white mb-4">Title of the Card</h2>
    <p class="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia nulla eget ultricies pulvinar.</p>
    <div class="flex items-center mt-6">
      <img class="w-10 h-10 rounded-full" src="https://via.placeholder.com/50" alt="Avatar"/>
      <p class="text-sm text-gray-300 ml-2">John Doe</p>
    </div>
  </div>
  <img class="w-full h-32 object-cover object-center" src="https://via.placeholder.com/600x200" alt="Blockchain Image"/>
  <div class="p-6 flex justify-between items-center">
    <button class="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-500">Action</button>
    <span class="text-xs uppercase font-semibold tracking-wider text-gray-300">May 12, 2024</span>
  </div>
</div>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="z-10 w-full max-w-lg p-6 bg-white rounded-lg">
        <h2 className="mb-4 text-lg font-semibold">Edit Profile</h2>
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
                className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
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
                className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="bio" className="text-sm font-medium">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="flex w-full h-24 px-3 py-2 text-sm border rounded-md border-input bg-background"
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
                className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
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
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md bg-cyan-600 hover:bg-cyan-700"
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

