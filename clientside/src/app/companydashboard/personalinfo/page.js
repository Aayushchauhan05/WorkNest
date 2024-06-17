'use client'
import { useAuth } from "@/context/context";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import VerticalNav from '@/components/VerticalNav/VerticalNav';
import Header from "@/components/Header/Header";
import ProfileComponent from "@/components/Profile/ProfileComponent";
import ModalProfileForm from "@/components/ProfileForm/ModalProfileForm";

function ProfilePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { token } = useAuth();
  const [profileData, setProfileData] = useState({
    name: 'Ayush Badoria',
    initials: 'AB',
    profession: 'Software Developer',
    location: 'Delhi, India',
    email: 'imdezcode@gmail.com',
    bio: 'A software developer who has passion for development',
    experience: '7',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      portfolio: 'https://portfolio.com'
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleProfileUpdate = (updatedProfile) => {
    setProfileData(updatedProfile);
    toggleModal();
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return; // Guard clause in case token is not available
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/Api/profile`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        const data = await response.json();
        if (response.ok) {
          setProfileData((prevProfileData) => ({
            ...data.Data,
            socialLinks: {
              linkedin: data.Data.Linkdin || prevProfileData.socialLinks.linkedin,
              portfolio: data.Data.personalWebsite || prevProfileData.socialLinks.portfolio,
            },
          }));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>; // Handle the loading state appropriately
  }

  return (
    <>
      <div className="flex w-full h-screen">
        <VerticalNav 
          isMenuOpen={isMenuOpen} 
          isActive={"profile"} 
          toggleMenu={toggleMenu} 
          isCompanyDashboard={true} 
          userName={profileData.companyName || "Company"} 
          userProfession={profileData.Position || "Position"} 
        />
        <div className="flex flex-col w-full">
          <Header
            companyName="Company XYZ"
            pageName="Your Profile"
            isCompanydashboard={true}
            toggleMenu={toggleMenu}
          />
          <ProfileComponent 
            name={profileData?.firstName || "First Name"}
            initials={"Dehix"}
            jobTitle={profileData?.companyName || "Company Name"}
            location={profileData?.location || "Location"}
            email={profileData?.email || "Email"}
            profileDescription={profileData?.bio || "Bio"}
            experience={profileData?.experience || "Experience"}
            socialLinks={profileData.socialLinks || {}}
            toggleModal={toggleModal}
            isCompanyDashboard={true}
            isProfile={true}
          />
        </div>
      </div>
      {isModalOpen && (
        <ModalProfileForm
          profile={profileData}
          onClose={toggleModal}
          onUpdate={handleProfileUpdate}
        />
      )}
    </>
  );
}

export default ProfilePage;
