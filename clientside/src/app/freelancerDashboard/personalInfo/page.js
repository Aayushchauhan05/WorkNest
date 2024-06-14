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
  const [userinfo, setUserinfo] = useState([]);
  const { token } = useAuth();
 


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleProfileUpdate = (updatedProfile) => {
    setUserinfo(updatedProfile);
    toggleModal();
  };

  const fetchData = async () => {
   
    try {
      
      const token=localStorage.getItem("token")
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/Api/profile`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await response.json();
setUserinfo(data.Data);

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
          userName={`${userinfo?.firstName} ${userinfo?.lastName}`} 
          userProfession={'Software Developer'} 
        />
        <div className="flex flex-col w-full">
          <Header
            companyName={`${userinfo?.firstName} ${userinfo?.lastName}`}
            pageName="Your Profile"
            isCompanydashboard={true}
            toggleMenu={toggleMenu}
          />
          <ProfileComponent 
            name={`${userinfo?.firstName} ${userinfo?.lastName}`}
            jobTitle={'software Developer'}
            email={userinfo?.Email}
            toggleModal={toggleModal}
            isCompanyDashboard={true}
            isProfile={true}
          />
        </div>
      </div>
      {isModalOpen && (
        <ModalProfileForm
          profile={userinfo}
          onClose={toggleModal}
          onUpdate={handleProfileUpdate}
        />
      )}
    </>
  );
}

export default ProfilePage;
