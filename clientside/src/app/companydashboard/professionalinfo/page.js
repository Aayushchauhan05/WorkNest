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
  const [professionalData, setProfessionalData] = useState({
    name: "Ayush Badoria",
    initials: "AB",
    profession: "Software Developer",
    location: "Delhi, India",
    email: "imdezcode@gmail.com",
    bio: "A software developer who has a passion for development",
    experienceInYears: "7",
    experiences: [
      {
        position: "Co-Founder",
        company: "engineerHUB",
        employmentType: "Full-time",
        duration: "Nov 2020 - Present",
        durationInYears: "3 yrs 8 mos",
        location: "New Delhi, Delhi, India",
        description: "One-stop career solution marketplace.",
      },
      {
        position: "Angel Investor",
        company: "Singro Venture",
        employmentType: "Part-time",
        duration: "Jul 2023 - Present",
        durationInYears: "1 yr",
        location: "Ghaziabad, Uttar Pradesh, India · Remote",
        description: "Helping Early stage founders with finance.",
      },
      {
        position: "Director",
        company: "Singro Venture",
        employmentType: "Full-time",
        duration: "Jul 2023 - Present",
        durationInYears: "1 yr",
        location: "Ghaziabad, Uttar Pradesh, India · Remote",
        description: "Mentoring and supporting early-stage founders.",
      },
      {
        position: "Equity Stock Investor",
        company: "NSE India",
        employmentType: "Part-time",
        duration: "Apr 2018 - Present",
        durationInYears: "6 yrs 3 mos",
        location: "India · Remote",
        description: "Invested in more than 20+ companies with an average CAGR of 28%.",
      },
      {
        position: "Google Study Jam",
        company: "Google",
        duration: "Dec 2020 - May 2023",
        durationInYears: "2 yrs 6 mos",
      },
      {
        position: "Management Intern",
        company: "Vardhan Consulting Engineers",
        employmentType: "Internship",
        duration: "Jan 2021 - Mar 2021",
        durationInYears: "3 mos",
        description: "Analytical learning, simulation, and modeling.",
      },
    ],
    companyName: "Company XYZ",
    industry: "IT",
    phone: "+91 7066668776",
    skills: ["html", "css", "js", "reactjs", "nodejs", "expressjs", "mongodb", "sql", "python"],
    certifications: [
      {
        title: "Azure Course",
        startDate: "2 May 2020",
        endDate: "3 May 2021",
        link: "https://react-icons.github.io/react-icons/search/#q=certificate",
      },
      {
        title: "Advanced Web Development",
        startDate: "15 June 2020",
        endDate: "15 July 2020",
        link: "https://react-icons.github.io/react-icons/search/#q=certificate",
      },
      {
        title: "Data Science Specialization",
        startDate: "1 January 2021",
        endDate: "1 June 2021",
        link: "https://react-icons.github.io/react-icons/search/#q=certificate",
      },
    ],
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      portfolio: "https://portfolio.com",
    },
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const fetchProfileData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/Api/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
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
          isCompanyDashboard={true}
          userName={professionalData.name}
          userProfession={professionalData.profession}
        />
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
            experienceInYears={professionalData.experienceInYears}
            experiences={professionalData.experiences}
            socialLinks={professionalData.socialLinks}
            toggleModal={toggleModal}
            isCompanyDashboard={true}
            industry={professionalData.industry}
            companyName={professionalData.companyName}
            skills={professionalData.skills}
            certifications={professionalData.certifications}
            phone={professionalData.phone}
            isProfile={false}
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
