import React from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaRegUser, FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { SiFreelancer } from "react-icons/si";
import { FiCheckSquare, FiXSquare } from "react-icons/fi";
import { IoMdCodeWorking } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { FiXCircle } from "react-icons/fi";
import UserProfile from "../UserProfile/UserProfile";
import { GoPlusCircle } from "react-icons/go";


const VerticalNav = ({
  isMenuOpen,
  toggleMenu,
  isCompanyDashboard,
  isProject,
  filterProjectsByStatus,
  userName,
  userProfession,
  isActive,
}) => {
  const Initials = userName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  const menuItemClasses = (isActiveCondition) =>
    `flex items-center gap-3 px-3 py-2 transition-colors rounded-md ${
      isActiveCondition ? "bg-gray-800 text-white" : "hover:bg-gray-800 hover:text-white"
    }`;

  const renderLink = (href, label, Icon, condition) => (
    <Link href={href}  onClick={() => {
      onClick()}} className={menuItemClasses(condition)}>
      <Icon /> {label}
    </Link>
  );

  const renderButton = (label, Icon, condition, onClick, toggleMenu) => (
    <button 
      onClick={
        onClick
      
      } 
      className={menuItemClasses(condition)}
    >
      <Icon /> {label}
    </button>
  );
  
  return (
    <div
      className={`fixed p-6 bg-cyan-800 transition-transform transform z-50 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:flex text-gray-50 w-[70%] md:w-[18rem]`}
    >
      <div className="flex flex-col gap-6">
        <button
          onClick={toggleMenu}
          className="absolute top-0 right-0 ml-10 z-50 p-5  text-xl md:hidden"
        >
         <FiXCircle />
        </button>
        <nav className="flex flex-col gap-2 h-screen">
        <UserProfile userName={userName} userProfession={userProfession} />

          {isProject? (
            <>
              {renderLink("/companydashboard", "Dashboard", MdDashboard, isActive === "dashboard")}
              {renderLink("/companydashboard/projects/listproject","Add Project", GoPlusCircle, isActive === "Add Project")}
              {renderButton("View All", CiViewList, isActive === "view all", () => filterProjectsByStatus("view all"))}
              {renderButton("Ongoing", IoMdCodeWorking, isActive === "ongoing", () => filterProjectsByStatus("ongoing"))}
              {renderButton("Pending", FiXSquare, isActive === "pending", () => filterProjectsByStatus("pending"))}
              {renderButton("Completed", FiCheckSquare, isActive === "completed", () => filterProjectsByStatus("complete"))}
            </>
          ) : isCompanyDashboard ? (
            <>
              {renderLink("/companydashboard", "Dashboard", MdDashboard, isActive === "dashboard")}
              {renderLink("/companydashboard/personalinfo", "Profile", FaRegUser, isActive === "profile")}
              {renderLink("/companydashboard/professionalinfo", "Professional Info", FaBriefcase, isActive === "professionalinfo")}
              {renderLink("/companydashboard/projects", "Projects", FaProjectDiagram, isActive === "projects")}
              {/* {renderLink("/companydashboard/selectfreelancer", "Select Freelancer", BiSelectMultiple, isActive === "selectfreelancer")} */}
              {renderLink("/companydashboard/viewfreelancer", "View Freelancer", SiFreelancer, isActive === "viewfreelancer")}
            </>
          ) : (
            <>
              {renderLink("/freelancerDashboard", "Dashboard", MdDashboard, isActive === "dashboard")}
              {renderLink("/freelancerDashboard/personalInfo", "Personal Info", FaRegUser, isActive === "personalinfo")}
              {renderLink("/freelancerDashboard/professionalInfo", "Professional Info", FaBriefcase, isActive === "professionalinfo")}
              {renderLink("/freelancerDashboard/skillsAndProjects", "Skills And Projects", GiSkills, isActive === "skillsandprojects")}
              {renderLink("/freelancerDashboard/projects", "Freelance Projects", FaProjectDiagram, isActive === "freelanceprojects")}
              {renderLink("/freelancerDashboard/interviews", "Interview", FaProjectDiagram, isActive === "interview")}
              {renderLink("/freelancerDashboard/oracleVerify", "Oracle", FaProjectDiagram, isActive === "oracle")}
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default VerticalNav;
