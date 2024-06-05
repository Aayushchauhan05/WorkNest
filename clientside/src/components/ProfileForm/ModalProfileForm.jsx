

import React, { useState } from "react";

function ModalProfileForm({ profile, onClose, onUpdate }) {
  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("socialLinks.")) {
      const updatedSocialLinks = { ...formData.socialLinks, [name.split(".")[1]]: value };
      setFormData({ ...formData, socialLinks: updatedSocialLinks });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="z-10 w-full max-w-lg p-6 bg-white rounded-lg">
        <h2 className="mb-4 text-lg font-semibold">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="flex justify-between w-full">
              <div className="grid">
                <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
                />
              </div>
              <div className="grid">
                <label htmlFor="profession" className="text-sm font-medium">Profession</label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
                />
              </div>
           
          
            </div>
            <div className="grid gap-2">
              <label htmlFor="experience" className="text-sm font-medium">Experience</label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="location" className="text-sm font-medium">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="bio" className="text-sm font-medium">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="flex w-full h-24 px-3 py-2 text-sm border rounded-md border-input bg-background"
              ></textarea>
            </div>
            {/* Social Links */}
            <div className="grid gap-2">
              <label htmlFor="instagram" className="text-sm font-medium">Instagram</label>
              <input
                type="text"
                id="instagram"
                name="socialLinks.instagram"
                value={formData.socialLinks.instagram || ''}
                onChange={handleChange}
                className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="linkedin" className="text-sm font-medium">LinkedIn</label>
              <input
                type="text"
                id="linkedin"
                name="socialLinks.linkedin"
                value={formData.socialLinks.linkedin || ''}
                onChange={handleChange}
                className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="portfolio" className="text-sm font-medium">Portfolio Website</label>
              <input
                type="text"
                id="portfolio"
                name="socialLinks.portfolio"
                value={formData.socialLinks.portfolio || ''}
                onChange={handleChange}
                className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
              />
            </div>
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
