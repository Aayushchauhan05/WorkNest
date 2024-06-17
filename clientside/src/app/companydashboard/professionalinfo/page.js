'use client';

import { useState, useEffect } from "react";
import { useAuth } from "@/context/context";
import VerticalNav from "@/components/VerticalNav/VerticalNav";
import Header from "@/components/Header/Header";
import ProfileComponent from "@/components/Profile/ProfileComponent";
import ModalProfileForm from "@/components/ProfileForm/ModalProfileForm";

function ProfilePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [professionalData, setProfessionalData] = useState({});
  const { token } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const fetchdata = async () => {
      const token = localStorage.getItem("token");
      if (!token) return; // Ensure token exists before making the fetch call

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/Api/profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setProfessionalData({
            ...data.Data,
            socialLinks: {
              instagram: "",
              linkedin: data.Data.Linkdin,
              portfolio: data.Data.personalWebsite,
            }
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchdata();
  }, []);

  const handleProfileUpdate = (updatedProfile) => {
    setProfessionalData(updatedProfile);
    toggleModal();
  };

  if (!professionalData) {
    return <div>Loading...</div>; // Handle the loading state appropriately
  }

  return (
    <>
      <div className="flex w-full h-screen">
        <VerticalNav
          isMenuOpen={isMenuOpen}
          isActive={"professionalinfo"}
          toggleMenu={toggleMenu}
          isCompanyDashboard={true}
          userName={professionalData?.companyName || "Company"}
          userProfession={professionalData?.Position || "Position"}
        />
        <div className="flex flex-col w-full">
          <Header
            companyName={professionalData?.companyName || "Company XYZ"}
            pageName="Your Professional Info"
            isCompanydashboard={true}
            toggleMenu={toggleMenu}
          />
          <ProfileComponent
            name={professionalData?.companyName || "Company Name"}
            initials={professionalData?.initials || "AB"}
            jobTitle={professionalData?.profession || "Profession"}
            location={professionalData?.location || "Location"}
            email={professionalData?.Email || "Email"}
            profileDescription={professionalData?.bio || "Bio"}
            experienceInYears={professionalData?.experienceInYears || "Experience in Years"}
            experiences={professionalData?.experiences || []}
            socialLinks={professionalData?.socialLinks || {}}
            toggleModal={toggleModal}
            isCompanyDashboard={true}
            industry={professionalData?.industry || "Industry"}
            companyName={professionalData?.companyName || "Company Name"}
            skills={professionalData.skills || []}
            certifications={professionalData?.certifications || "Certifications"}
            phone={professionalData?.phone || "Phone"}
            isProfile={false}
            password={professionalData?.password || "Password"}
          />
        </div>
      </div>
      {isModalOpen && (
        <ModalProfileForm
          profile={professionalData}
          onClose={toggleModal}
          onUpdate={handleProfileUpdate}
          isProfessional={true}
        />
      )}
    </>
  );
}

export default ProfilePage;
