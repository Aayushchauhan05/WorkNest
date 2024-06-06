import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import InputField from "../Input/InputField";

function ModalProfileForm({
  profile,
  onClose,
  onUpdate,
  isProfessional,
  isExperience,
}) {
  const [formData, setFormData] = useState({ ...profile, certifications: [] });
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState(formData.skills || []);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [link, setLink] = useState("");

  const handleRemoveCertificate = (index) => {
    const updatedCertificates = formData.certifications.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, certifications: updatedCertificates });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("socialLinks.")) {
      const updatedSocialLinks = {
        ...formData.socialLinks,
        [name.split(".")[1]]: value,
      };
      setFormData({ ...formData, socialLinks: updatedSocialLinks });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addSkill(inputValue.trim());
      setInputValue("");
    }
  };

  const addSkill = (skill) => {
    if (skill && !skills.includes(skill)) {
      const updatedSkills = [...skills, skill];
      setSkills(updatedSkills);
      setFormData((prevFormData) => ({
        ...prevFormData,
        skills: updatedSkills,
      }));
    }
  };

  const removeSkill = (skill) => {
    const updatedSkills = skills.filter((s) => s !== skill);
    setSkills(updatedSkills);
    setFormData({ ...formData, skills: updatedSkills });
  };

  const addCertificate = () => {
    if (title && startDate && endDate && link) {
      const newCertificate = {
        title,
        startDate,
        endDate,
        link,
      };
      const updatedCertificates = [...formData.certifications, newCertificate];
      setFormData((prevFormData) => ({
        ...prevFormData,
        certifications: updatedCertificates,
      }));
      setTitle("");
      setStartDate("");
      setEndDate("");
      setLink("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 "
        onClick={onClose}
      ></div>
      <div className="z-10 w-full max-w-lg p-6 bg-white rounded-lg mx-2 md:h-[70%] overflow-scroll">
        <h2 className="mb-4 text-lg font-semibold">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="flex justify-between w-full">
              <div className="grid">
                <InputField
                  label={"Full Name"}
                  name={"name"}
                  type={"text"}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="grid">
                <InputField
                  label={"Profession"}
                  name={"profession"}
                  type={"text"}
                  value={formData.profession}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <InputField
                label={"Experience"}
                name={"experience"}
                type={"text"}
                value={formData.experience}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <InputField
                label={"Location"}
                name={"location"}
                type={"text"}
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <InputField
                label={"Email"}
                name={"email"}
                type={"text"}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <InputField
                label={"Bio"}
                name={"bio"}
                type={"text"}
                value={formData.bio}
                onChange={handleChange}
              />
            </div>
            {/* Social Links */}
            <div className="grid gap-2">
              <InputField
                label={"Instagram"}
                name={"socialLinks.instagram"}
                id={"instagram"}
                type={"text"}
                value={formData.socialLinks.instagram || ""}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <InputField
                label={"LinkedIn"}
                name={"socialLinks.linkedin"}
                id={"linkedin"}
                type={"text"}
                value={formData.socialLinks.linkedin || ""}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <InputField
                label={`Portfolio Website ${" "}`}
                name={"socialLinks.portfolio"}
                id={"portfolio"}
                type={"text"}
                value={formData.socialLinks.portfolio || ""}
                onChange={handleChange}
              />
            </div>
            {isProfessional && (
              <>
                <div className="grid gap-2">
                  <InputField
                    label={"Company Name"}
                    name={"companyName"}
                    id={"companyName"}
                    type={"text"}
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-2">
                  <InputField
                    label={"Industry"}
                    name={"industry"}
                    id={"industry"}
                    type={"text"}
                    value={formData.industry}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-2">
                  <InputField
                    label={" Phone Number"}
                    name={"phone"}
                    id={"phone"}
                    type={"text"}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <div className="flex flex-wrap mt-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Skills
                    </label>
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2"
                      >
                        <span className="text-sm font-medium">{skill}</span>
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="ml-1 text-xs text-red-500"
                        >
                          x
                        </button>
                      </div>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="Type a skill and press Enter"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                    className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
                  />
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Certificate
                  </label>
                  <div className="certificate-list flex flex-col gap-2">
                    {formData.certifications.map((certificate, index) => (
                      <div
                        key={index}
                        className="certificate bg-gray-600 rounded-lg flex justify-between text-white p-6"
                      >
                        <div>
                          <div className="title text-2xl">
                            {certificate.title}
                          </div>
                          <div className="date">
                            {certificate.startDate} - {certificate.endDate}
                          </div>
                        </div>
                        <button
                          className="text-red-700"
                          onClick={() => handleRemoveCertificate(index)}
                        >
                          <MdDelete size={22} />
                        </button>
                      </div>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="Certificate Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
                  />
                  <input
                    type="text"
                    placeholder="Certificate Link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
                  />
                  <div className="flex gap-2">
                    <input
                      type="date"
                      placeholder="Start Date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
                    />
                    <input
                      type="date"
                      placeholder="End Date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
                    />
                  </div>
                  <button
                    type="button"
                    className=" items-center px-4 py-2 text-sm font-medium  text-white rounded-md bg-cyan-600 hover:bg-cyan-700"
                    onClick={addCertificate}
                  >
                    Add Certificate
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md bg-cyan-600 hover:bg-cyan-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalProfileForm;
