"use client";
import Link from "next/link";
import { useState } from "react";
import VerticalNav from '@/components/VerticalNav/VerticalNav';
import bannerImg from '../../../../public/banner.jpg'

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
        <VerticalNav isMenuOpen={isMenuOpen} isActive={"profile"} toggleMenu={toggleMenu} isCompanyDashboard={true} userName={"ayush badoria"} userProfession={"Software Developer"} />
        <div className="flex flex-col w-full">
          <Header
            companyName="Company XYZ"
            pageName="Your Profile"
            isCompanydashboard={true}
            toggleMenu={toggleMenu}

          />
          <div className="container flex flex-col md:pl-64 lg:pl-72 items-center max-h-screen relative">

            <div className="container flex flex-col items-center gap-8 p-6">
              {/* Personal Information Section */}
              <section className="flex flex-col items-center w-full relative h-full space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
    <div className="relative bg-gradient-to-r from-green-400 to-blue-500 w-full h-[15rem] rounded-t-lg">
        <div className="h-40 border bg-white w-40 absolute rounded-full top-36 left-[3.6rem] md:left-12 flex items-center justify-center">
            <h2 className="text-black text-5xl">AB</h2>
        </div>
    </div>

    <div className="pt-6 w-full flex flex-col md:flex-row justify-between pb-20">
        <div className="md:ml-14 mt-8 flex flex-col gap-2 items-center md:items-start justify-center">
            <h2 className="text-xl">Ayush Badoria</h2>
            <p className="text-sm">Software Developer</p>
            <p className="text-sm">Delhi India</p>
            <p className="text-sm">imdezcode@gmail.com</p>
        </div>

        <div className="flex flex-col justify-between gap-2 items-center w-full px-[3rem] pt-2 md:p-0 md:relative">
            <p className="text-sm md:absolute right-5">A software developer who has passion for development</p>
            <p className="md:right-5 md:absolute md:bottom-0">Experience: 7 years</p>
        </div>
    </div>
</section>


              {/* Social Links Section */}
              <section className="flex flex-col items-center justify-center w-full p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
                <div className="flex flex-col w-full">
                  <p className="mb-4 text-lg font-semibold">Social Links:</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col items-center w-full">
                      <p className="text-sm font-semibold">Instagram:</p>
                      <a className="text-lg" href="https://instagram.com" target="_blank" rel="noopener noreferrer">instagram.com</a>
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <p className="text-sm font-semibold">LinkedIn:</p>
                      <a className="text-lg" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com</a>
                    </div>
                  </div>
                </div>
              </section>

            </div>


            <button
              onClick={toggleModal}
              className="items-end px-2 absolute py-2 mt-2 right-5 top-10 text-white rounded-md w-26 bg-cyan-800 hover:bg-cyan-700"
            >
              Edit Profile
            </button>

          </div>
        </div >
      </div >

      {isModalOpen && (
        <ModalProfileForm
          profile={profile}
          onClose={toggleModal}
          onUpdate={handleProfileUpdate}
        />
      )
      }
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
