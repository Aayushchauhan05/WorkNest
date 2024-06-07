import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";
import { AiFillIdcard } from "react-icons/ai";
import SkillComponent from "../Skills/SkillsComponent";
import { GrCertificate } from "react-icons/gr";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const ProfileComponent = ({
  name,
  initials,
  jobTitle,
  location,
  email,
  profileDescription,
  experienceInYears,
  experiences,
  socialLinks,
  toggleModal,
  industry,
  companyName,
  skills,
  certifications,
  phone,
  password,
  isCompanyDashboard,
  isProfile,
}) => {
  return (
    <>
      {isCompanyDashboard && (
        <div className="container relative flex flex-col items-center min-h-screen md:pl-64 lg:pl-72">
          <div className="container flex flex-col items-center gap-8 p-6 ">
            {/* Personal Information Section */}
            <section className="relative flex flex-col items-center w-full h-full space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
              <div className="relative bg-gradient-to-r from-green-400 to-blue-500 w-full h-[15rem] rounded-t-lg">
                <div className="h-40 border bg-white w-40 absolute rounded-full top-36 left-[3.6rem] md:left-12 flex items-center justify-center">
                  <h2 className="text-5xl text-black">{initials}</h2>
                </div>
              </div>
              <div className="flex flex-col justify-between w-full pt-6 pb-20 md:flex-row">
                <div className="flex flex-col items-center justify-center gap-2 mt-8 md:ml-14 md:items-start">
                  <h2 className="text-xl">{name}</h2>
                  <p className="text-sm">{jobTitle}</p>
                  <p className="text-sm">{location}</p>
                  <p className="text-sm">{email}</p>
                  {!isProfile && <p className="text-sm">{phone}</p>}
                  <button
                    onClick={toggleModal}
                    className="py-2 mt-5 text-white rounded-md w-36 bg-cyan-800 hover:bg-cyan-700"
                  >
                    Edit Profile
                  </button>
                </div>
                <div className="flex flex-col justify-between gap-2 items-center w-full px-[3rem] pt-2 md:p-0 md:relative">
                  <p className="text-sm md:absolute right-5">
                    {profileDescription}
                  </p>
                  {!isProfile && (
                    <div className="md:absolute top-20 right-[10rem] flex items-center gap-2">
                      <div className="flex items-center justify-center w-10 h-10 border rounded">
                        <AiFillIdcard size={32} />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h2 className="text-2xl">{companyName}</h2>
                        <p className="text-sm text-gray-400">{industry}</p>
                      </div>
                    </div>
                  )}
                  <p className="md:right-[10rem] md:absolute md:bottom-0">
                    Experience: {experienceInYears} Years
                  </p>
                </div>
              </div>
            </section>
            {!isProfile && (
              <section className="flex flex-col items-center justify-center w-full p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
                <div className="flex flex-col w-full">
                  <p className="mb-4 text-lg font-semibold">Skills</p>
                  <div className="flex flex-wrap gap-5">
                    {skills.map((skill, index) => (
                      <div
                        className="flex items-center justify-center p-5 border rounded-lg min-w-28 max-w-28"
                        key={index}
                      >
                        <SkillComponent skill={skill} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
            {/* Certificates Section */}
            {certifications && certifications.length > 0 && (
              <section className="flex flex-col items-center justify-center w-full p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
                <div className="flex flex-col w-full">
                  <p className="mb-4 text-lg font-semibold">Certificates</p>
                  <div className="flex flex-wrap gap-5">
                    {certifications.map((certificate, index) => (
                      <Link
                        href={certificate?.link}
                        key={index}
                        className="flex items-center flex-col border p-5 w-[47%] h-50 justify-center rounded-lg"
                      >
                        <GrCertificate size={65} />
                        <div className="flex flex-col items-center justify-center">
                          <h2>{certificate.title}</h2>
                          <div className="flex">
                            <p>{certificate.startDate + " - "}</p>
                            <p>{certificate.endDate}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Experience Section */}
            {experiences && experiences.length > 0 && (
              <section className="flex flex-col items-center justify-center w-full p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
                <div className="flex flex-col w-full">
                  <p className="mb-4 text-lg font-semibold">Experience</p>
                  <div className="flex flex-col items-center space-y-4">
                    {experiences.map((exp, index) => (
                      <div
                        key={index}
                        className={`flex flex-col items-start space-y-2 ${
                          index === experiences.length - 1 ? "" : "border-b"
                        } w-full border-gray-600 p-4 `}
                      >
                        <div>
                          <HiOutlineBuildingOffice2 size={22} />
                        </div>
                        <div>
                          <h2 className="text-lg font-semibold">
                            {exp.position}
                          </h2>
                          <p className="text-sm">{exp.durationInYears}</p>
                          {exp.location && (
                            <p className="text-xs text-gray-400">
                              {exp.location}
                            </p>
                          )}
                          <div className="flex">
                            <p>{exp.company} </p>
                            <p> - {exp.employmentType}</p>
                          </div>
                          <div className="flex justify-between text-sm text-gray-500">
                            <p>{exp.duration}</p>
                          </div>
                          {exp.description && <p>{exp.description}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
            {/* Social Links Section */}
            <section className="flex flex-col items-center justify-center w-full p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
              <div className="flex flex-col w-full">
                <p className="mb-4 text-lg font-semibold">Social Links:</p>
                <div className="flex items-center space-x-4">
                  {socialLinks?.instagram && (
                    <div className="flex flex-col items-center w-full">
                      <Link href={socialLinks.instagram}>
                        <FaInstagram size={35} />
                      </Link>
                    </div>
                  )}
                  {socialLinks?.linkedin && (
                    <div className="flex flex-col items-center w-full">
                      <Link href={socialLinks.linkedin}>
                        <FaLinkedin size={35} />
                      </Link>
                    </div>
                  )}
                  {socialLinks?.portfolio && (
                    <div className="flex flex-col items-center w-full">
                      <Link href={socialLinks.portfolio}>
                        <CgWebsite size={35} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileComponent;
