import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";
import { AiFillIdcard } from "react-icons/ai";
import SkillComponent from "../Skills/SkillsComponent";
import { GrCertificate } from "react-icons/gr";

const ProfileComponent = ({
  name,
  initials,
  jobTitle,
  location,
  email,
  profileDescription,
  experience,
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
      {isCompanyDashboard ? (
        <div className="container flex flex-col md:pl-64 lg:pl-72 items-center min-h-screen relative">
          <div className="container flex flex-col items-center gap-8 p-6">
            {/* Personal Information Section */}
            <section className="flex flex-col items-center w-full relative h-full space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
              <div className="relative bg-gradient-to-r from-green-400 to-blue-500 w-full h-[15rem] rounded-t-lg">
                <div className="h-40 border bg-white w-40 absolute rounded-full top-36 left-[3.6rem] md:left-12 flex items-center justify-center">
                  <h2 className="text-black text-5xl">{initials}</h2>
                </div>
              </div>
              <div className="pt-6 w-full flex flex-col md:flex-row justify-between pb-20">
                <div className="md:ml-14 mt-8 flex flex-col gap-2 items-center md:items-start justify-center">
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
                      <div className="border rounded w-10 flex items-center justify-center h-10">
                        <AiFillIdcard size={32} />
                      </div>
                      <div className="flex items-center justify-center flex-col">
                        <h2 className="text-2xl">{companyName}</h2>
                        <p className="text-sm text-gray-400">{industry}</p>
                      </div>
                    </div>
                  )}
                  <p className="md:right-[10rem] md:absolute md:bottom-0">
                    Experience: {experience} Years
                  </p>
                </div>
              </div>
            </section>
            {!isProfile && (
              <section className="flex flex-col items-center justify-center w-full p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
                <div className="flex flex-col w-full">
                  <p className="mb-4 text-lg font-semibold">Skills</p>
                  <div className="flex flex-wrap gap-5">
                    {skills.map((skill) => (
                      <div
                        className="flex items-center border p-5 min-w-28 max-w-28 justify-center rounded-lg"
                        key={skill}
                      >
                        <SkillComponent skill={skill} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <p className="mb-4 text-lg font-semibold">Certificates</p>
                  <div className="flex flex-wrap gap-5">
                    {certifications.map((certificate, index) => (
                      <Link
                        href={certificate.link}
                        className="flex items-center flex-col border p-5 w-[47%] h-50 justify-center rounded-lg"
                        key={index}
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
            {/* Social Links Section */}
            <section className="flex flex-col items-center justify-center w-full p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
              <div className="flex flex-col w-full">
                <p className="mb-4 text-lg font-semibold">Social Links:</p>
                <div className="flex items-center space-x-4">
                  {socialLinks.instagram && (
                    <div className="flex flex-col items-center w-full">
                      <Link href={socialLinks.instagram}>
                        <FaInstagram size={35} />
                      </Link>
                    </div>
                  )}
                  {socialLinks.linkedin && (
                    <div className="flex flex-col items-center w-full">
                      <Link href={socialLinks.linkedin}>
                      <FaLinkedin size={35} />
                      </Link>
                    </div>
                  )}
                  {socialLinks.portfolio && (
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
      ) : null}
    </>
  );
};

export default ProfileComponent;

                       
