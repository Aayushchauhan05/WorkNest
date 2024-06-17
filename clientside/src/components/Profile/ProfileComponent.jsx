import React, { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";
import { AiFillIdcard } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GrCertificate } from "react-icons/gr";

const ProfileComponent = ({
  name,
  jobTitle,
  location,
  email,
  profileDescription,
  experienceInYears,
  experiences = [],
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
  const [showAddExperienceForm, setShowAddExperienceForm] = useState(false);
  const [newExperience, setNewExperience] = useState({
    position: "",
    durationInYears: "",
    location: "",
    company: "",
    employmentType: "",
    duration: "",
    description: "",
  });

  const toggleAddExperienceForm = () => {
    setShowAddExperienceForm(!showAddExperienceForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  const handleAddExperience = async () => {
    experiences.push(newExperience);

    setShowAddExperienceForm(false);
    setNewExperience({
      position: "",
      durationInYears: "",
      location: "",
      company: "",
      employmentType: "",
      duration: "",
      description: "",
    });
  };
  const Initials = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  return (
    <>
      {isCompanyDashboard && (
        <div className="flex flex-col items-center min-h-screen md:container md:relative md:pl-72 ">
          <div className="container flex flex-col items-center gap-8 md:p-6 ">
            <section className="relative flex flex-col items-center w-[100%] h-full space-y-4 overflow-hidden text-white bg-gray-800 rounded-lg shadow-lg">
              <div
                className="relative bg-gradient-to-r from-green-400 to-blue-500 w-[100vw] h-[15rem] flex items-center justify-center
               rounded-t-lg"
              >
                <div className="absolute flex items-center justify-center w-40 h-40 bg-white border rounded-full top-36 md:left-50">
                  <h2 className="text-5xl text-black">{Initials}</h2>
                </div>
              </div>
              <div className="flex flex-col justify-between w-full pt-6 pb-20 md:flex-row">
                <div className="flex flex-col items-center justify-center gap-2 mt-8 md:ml-14 md:items-start">
                  <h2 className="text-xl">{name}</h2>
                  <p className="text-sm">{email}</p>
                  <p className="text-sm">
                    {jobTitle ? (
                      jobTitle
                    ) : (
                      <span className="text-gray-500">add your Job Title</span>
                    )}
                  </p>
                  <p className="text-sm">
                    {location ? (
                      location
                    ) : (
                      <span className="text-gray-500">
                        add location by clicking Edit profile
                      </span>
                    )}
                  </p>

                  <p className="md:right-[10rem] md:absolute md:bottom-0">
                    Experience: {experienceInYears} Years
                  </p>
                  {!isProfile && <p className="text-sm">{phone}</p>}
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
                  <button
                    onClick={toggleModal}
                    className="py-2 mt-5 text-white rounded-md w-36 bg-cyan-800 hover:bg-cyan-700"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </section>

            {!isProfile && (
              <>
                <section className="flex flex-col items-center justify-center w-full p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
                  <div className="flex flex-col w-full">
                    <p className="mb-4 text-lg font-semibold">Skills</p>
                    <div className="flex flex-wrap gap-5">
                      {skills && skills.map((skill) => (
                        <div
                          className="flex items-center justify-center p-5 border rounded-lg min-w-28 max-w-28"
                          key={skill}
                        >
                          <h2>{skill}</h2>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <p className="mb-4 text-lg font-semibold">Certificates</p>
                    <div className="flex flex-wrap gap-5">
                      {certifications &&
                        certifications.map((certificate, index) => (
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
              </>
            )}
            {!isProfile && (
              <section className="flex flex-col items-center justify-center w-full p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
                <div className="flex flex-col w-full">
                  <p className="mb-4 text-lg font-semibold">Experience</p>
                  <div className="flex flex-col items-center space-y-4">
                    {[...experiences].map((exp, index) => (
                      <div
                        key={index}
                        className={`flex flex-col items-start space-y-2 ${
                          index === experiences.length - 1 ? "" : "border-b"
                        } w-full border-gray-600 p-4`}
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
                            <p>{exp.company}</p>
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
                {!showAddExperienceForm && (
                  <button
                    onClick={toggleAddExperienceForm}
                    className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
                  >
                    Add Experience
                  </button>
                )}
                {showAddExperienceForm && (
                  <div className="flex flex-col items-center w-full p-6 mt-4 space-y-4 bg-gray-700 rounded-lg">
                    <div className="w-full">
                      <label className="block text-sm text-gray-300">
                        Position
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={newExperience.position}
                        placeholder="Position"
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-600 rounded-md focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-sm text-gray-300">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={newExperience.company}
                        placeholder="Company"
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-600 rounded-md focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-sm text-gray-300">
                        Employment Type
                      </label>
                      <input
                        type="text"
                        name="employmentType"
                        value={newExperience.employmentType}
                        placeholder="Employment Type"
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-600 rounded-md focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-sm text-gray-300">
                        Duration in Years
                      </label>
                      <input
                        type="text"
                        name="durationInYears"
                        value={newExperience.durationInYears}
                        placeholder="Duration in Years"
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-600 rounded-md focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-sm text-gray-300">
                        Duration
                      </label>
                      <input
                        type="text"
                        name="duration"
                        value={newExperience.duration}
                        placeholder="Duration"
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-600 rounded-md focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-sm text-gray-300">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={newExperience.location}
                        placeholder="Location"
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-600 rounded-md focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-sm text-gray-300">
                        Description
                      </label>
                      <textarea
                        name="description"
                        value={newExperience.description}
                        placeholder="Description"
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-600 rounded-md focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex gap-2 ">
                      <button
                        onClick={toggleAddExperienceForm}
                        className="bg-red-500 text-white min-w-[10rem] px-4 py-2 rounded"
                      >
                        cancal
                      </button>
                      <button
                        onClick={handleAddExperience}
                        className="bg-green-500 text-white min-w-[10rem] px-4 py-2 rounded"
                      >
                        Add Experience
                      </button>
                    </div>
                  </div>
                )}
              </section>
            )}

            {socialLinks && socialLinks.length > 0 && (
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
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileComponent;
