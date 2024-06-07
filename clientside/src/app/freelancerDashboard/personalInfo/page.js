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

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/Api/profile`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex w-full h-screen">
        <VerticalNav 
          isMenuOpen={isMenuOpen} 
          isActive={"profile"} 
          toggleMenu={toggleMenu} 
          isCompanyDashboard={false} 
          userName={profileData.name} 
          userProfession={profileData.profession} 
        />
        <div className="flex flex-col w-full">
          <Header
            companyName="Company XYZ"
            pageName="Your Profile"
            isCompanydashboard={true}
            toggleMenu={toggleMenu}
          />
          <ProfileComponent 
            name={profileData.name}
            initials={profileData.initials}
            jobTitle={profileData.profession}
            location={profileData.location}
            email={profileData.email}
            profileDescription={profileData.bio}
            experience={profileData.experience}
            socialLinks={profileData.socialLinks}
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
