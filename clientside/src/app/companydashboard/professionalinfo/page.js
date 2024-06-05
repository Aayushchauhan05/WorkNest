"use client";
import React, { useState } from "react";
import VerticalNav from '@/components/VerticalNav/VerticalNav';
import Header from "@/components/Header/Header";
import ProfileComponent from "@/components/Profile/ProfileComponent";
import ModalProfileForm from "@/components/ProfileForm/ModalProfileForm";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [professionalData, setProfessionalData] = useState({
    name: 'Ayush Badoria',
    initials: 'AB',
    profession: 'Software Developer',
    location: 'Delhi, India',
    email: 'imdezcode@gmail.com',
    bio: 'A software developer who has a passion for development',
    experience: '7',
    companyName: 'Company XYZ',
    industry: 'IT',
    phone:"+91 7066668776",
    skills: ['html', 'css', 'js', 'reactjs', 'nodejs', 'expressjs', 'mongodb', 'sql', 'python'],
    certifications: [
      {
        title: "asure course",
        startDate: "2 May 2020",
        endDate: "3 May 2021",
        link:"https://react-icons.github.io/react-icons/search/#q=certificate"
      },
      {
        title: "Advanced Web Development",
        startDate: "15 June 2020",
        endDate: "15 July 2020",
        link:"https://react-icons.github.io/react-icons/search/#q=certificate"
      },
      {
        title: "Data Science Specialization",
        startDate: "1 January 2021",
        endDate: "1 June 2021",
        link:"https://react-icons.github.io/react-icons/search/#q=certificate"
      }
    ],
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
    setprofessionalData(updatedProfile);
    toggleModal();
  };
  return (
    <>
      <div className="flex w-full h-screen ">
        <VerticalNav isMenuOpen={isMenuOpen} isActive={"professionalinfo"} toggleMenu={toggleMenu} isCompanyDashboard={true} userName={"ayush badoria"} userProfession={"Software Developer"} />
        <div className="flex flex-col w-full">
          <Header
            companyName="Company XYZ"
            pageName="Your Professional Info"
            isCompanydashboard={true}
            toggleMenu={toggleMenu}

          />
           <ProfileComponent 
            name={professionalData.name}
            initials={professionalData.initials}
            jobTitle={professionalData.profession}
            location={professionalData.location}
            email={professionalData.email}
            profileDescription={professionalData.bio}
            experience={professionalData.experience}
            socialLinks={professionalData.socialLinks}
            toggleModal={toggleModal}
            isCompanyDashboard={true}
            industry={professionalData.industry}
            companyName={professionalData.companyName}
            skills={professionalData.skills}
            certifications={professionalData.certifications}
            phone={professionalData.phone}
            isProfile={false}
            password={professionalData.password}
          />
         
        </div>
      </div>
      {isModalOpen && (
        <ModalProfileForm
          profile={professionalData}
          onClose={toggleModal}
          onUpdate={handleProfileUpdate}
        />
      )}
    </>
  )
}

export default page