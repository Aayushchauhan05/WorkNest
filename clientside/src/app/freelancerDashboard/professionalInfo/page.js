"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/context";
import VerticalNav from "@/components/VerticalNav/VerticalNav";
import Header from "@/components/Header/Header";
import ProfileComponent from "@/components/Profile/ProfileComponent";
import ModalProfileForm from "@/components/ProfileForm/ModalProfileForm";

function ProfilePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { token } = useAuth();
  const [userinfo, setUserinfo] = useState([]);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const fetchProfileData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/Api/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setUserinfo(data.Data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleProfileUpdate = (updatedProfile) => {
    setProfessionalData(updatedProfile);
    toggleModal();
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <VerticalNav
          isMenuOpen={isMenuOpen}
          isActive={"professionalinfo"}
          toggleMenu={toggleMenu}
          isCompanyDashboard={false}
          userName={`${userinfo?.firstName} ${userinfo?.lastName}`}
       
        />
        <div className="flex flex-col w-full">
          <Header
            companyName={`${userinfo?.firstName} ${userinfo?.lastName}`}
            pageName="Your Professional Info"
            isCompanydashboard={true}
            toggleMenu={toggleMenu}
          />
          <ProfileComponent
            name={`${userinfo?.firstName} ${userinfo?.lastName}`}
            email={userinfo?.Email}
            toggleModal={toggleModal}
            isCompanyDashboard={true}
            isProfile={false}
          />
        </div>
      </div>
      {isModalOpen && (
        <ModalProfileForm
          profile={userinfo}
          onClose={toggleModal}
          onUpdate={handleProfileUpdate}
          isProfessional={true}
        />
      )}
    </>
  );
}

export default ProfilePage;
