import React from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { SiFreelancer } from "react-icons/si";


const VerticalNav = ({
  isMenuOpen,
  toggleMenu,
  isCompanyDashboard,
  isProduct,
  filterProjectsByStatus,
  userName,
  userProfession,
  isActive,
}) => {
  const Initials = userName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  return (
    <div
      className={`fixed  p-6 bg-cyan-800 transition-transform transform z-50 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:flex text-gray-50 w-[70%] md:w-[17rem]`}
    >
      <div className="flex flex-col gap-6">
        <button
          onClick={toggleMenu}
          className="absolute top-0 right-0 z-50 p-5 text-xl md:hidden"
        >
          X
        </button>
        <nav className="flex flex-col gap-2 h-screen">
          <div className="flex items-center gap-4">
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 md:h-14 md:w-14">
              <span className="flex h-full w-full items-center text-black justify-center rounded-full bg-muted">
                {Initials}
              </span>
            </span>
            <div className="grid gap-1">
              <h1 className="text-xl font-semibold md:text-2xl">{userName}</h1>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                {userProfession}
              </p>
            </div>
          </div>

          {isProduct ? (
            <>
              <Link
                className={`flex items-center gap-3 px-3 py-2 mt-10 transition-colors rounded-md ${
                  isActive === "dashboard"
                    ? "bg-gray-800 text-white"
                    : "hover:bg-gray-800 hover:text-white"
                }`}
                href="/companydashboard"
              >
                <MdDashboard />
                Dashboard
              </Link>

              <a
                className={`flex items-center gap-3 px-3 py-2 transition-colors rounded-md ${
                  isActive == "ongoing" ? "bg-gray-800 text-white"
                    : "hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() => filterProjectsByStatus("ongoing")}
              >
                Ongoing
              </a>
              <a
                className={`flex items-center gap-3 px-3 py-2  transition-colors rounded-md ${
                  isActive == "pending" ? "bg-gray-800 text-white"
                    : "hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() => filterProjectsByStatus("pending")}
              >
                Pending
              </a>
              <a
                className={`flex items-center gap-3 px-3 py-2  transition-colors rounded-md  ${isActive === "dashboard"
                ? "bg-gray-800 text-white"
                : "hover:bg-gray-800 hover:text-white"
            }`}
                onClick={() => filterProjectsByStatus("Complete")}
              >
                Completed
              </a>
            </>
          ) : isCompanyDashboard ? (
            <>
            <Link href="/companydashboard">
              <p
                className={`flex items-center gap-3 px-3 py-2 mt-10 transition-colors rounded-md ${
                  isActive == "dashboard"
                    ? "bg-gray-800"
                    : "hover:bg-gray-800"
                }`}
              >
                   <MdDashboard />
                Dashboard
              </p>
            </Link>
            <Link href="/companydashboard/personalinfo">
              <p
                className={`flex items-center gap-3 px-3 py-2 transition-colors rounded-md ${
                  isActive == "profile" ? "bg-gray-800 text-white"
                  : "hover:bg-gray-800 hover:text-white"
                }`}
              >
                <FaRegUser />
                Profile
              </p>
            </Link>
            <Link href="/companydashboard/professionalinfo">
              <p
                className={`flex items-center gap-3 px-3 py-2 transition-colors rounded-md ${
                  isActive == "professionalinfo"
                    ? "bg-gray-800"
                    : "hover:bg-gray-800"
                }`}
              >
                <FaBriefcase />

                Professional Info
              </p>
            </Link>
            <Link href="/companydashboard/projects">
              <p
                className={`flex items-center gap-3 px-3 py-2 transition-colors rounded-md ${
                  isActive == "projects" ? "bg-gray-800 text-white"
                  : "hover:bg-gray-800 hover:text-white"
                }`}
              >
               <FaProjectDiagram />

                Projects
              </p>
            </Link>
            <Link href="/companydashboard/viewfreelancer">
              <p
                className={`flex items-center gap-3 px-3 py-2 transition-colors rounded-md ${
                  isActive == "viewfreelancer"
                    ? "bg-gray-800"
                    : "hover:bg-gray-800"
                }`}
              >
                
                <SiFreelancer />

                View Freelancer
              </p>
            </Link>
          </>

          ) : (
           
<>
<Link
  href="/freelancerDashboard"
  className={`flex items-center gap-3 px-3 py-2 mt-10 transition-colors rounded-md ${
    isActive == "dashboard" ? "bg-gray-800 text-white"
      : "hover:bg-gray-800 hover:text-white"
  }`}
>
    <MdDashboard />
  Dashboard
</Link>
<Link
  href="/freelancerDashboard/personalInfo"
  className={`flex items-center gap-3 px-3 py-2  transition-colors rounded-md ${
    isActive == "personalinfo"
      ? "bg-gray-800"
      : "hover:bg-gray-800"
  }`}
>
  <FaRegUser />
  Personal Info
</Link>
<Link
  href="/freelancerDashboard/professionalInfo"
  className={`flex items-center gap-3 px-3 py-2 transition-colors rounded-md ${
    isActive == "professionalinfo"
      ? "bg-gray-800"
      : "hover:bg-gray-800"
  }`}
>
  <FaBriefcase />

  Professional Info
</Link>
<Link
  href="/freelancerDashboard/skillsAndProjects"
  className={`flex items-center gap-3 px-3 py-2  transition-colors rounded-md ${
    isActive == "skillsandprojects"
      ? "bg-gray-800"
      : "hover:bg-gray-800"
  }`}
>
  <GiSkills />
  Skills And Projects
</Link>
<Link
  href="/freelancerDashboard/projects"
  className={`flex items-center gap-3 px-3 py-2  transition-colors rounded-md ${
    isActive == "freelanceprojects"
      ? "bg-gray-800"
      : "hover:bg-gray-800"
  }`}
>
  <FaProjectDiagram />

  Freelance Projects
</Link>
<Link
  className={`flex items-center gap-3 px-3 py-2  transition-colors rounded-md ${
    isActive == "interview" ? "bg-gray-800 text-white"
      : "hover:bg-gray-800 hover:text-white"
  }`}
  href="/freelancerDashboard/interviews"
>
  Interview
</Link>
<Link
  href="/freelancerDashboard/oracleVerify"
  className={`flex items-center gap-3 px-3 py-2 mt-10 transition-colors rounded-md ${
    isActive == "oracle" ? "bg-gray-800 text-white"
      : "hover:bg-gray-800 hover:text-white"
  }`}
>
  Oracle
</Link>
</>
          )}
        </nav>
      </div>
    </div>
  );
};

export default VerticalNav;
