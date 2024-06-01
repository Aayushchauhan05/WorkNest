// components/JobApplicationForm.js
"use client"
import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import axios from 'axios';

const initialValues = {
  Name: '',
  Email: '',
  phoneNumber: '',
  address: '',
  desiredSalary: '',
  experience: {
    education: [{ degree: '', institution: '', yearOfGraduation: '' }],
    Workhistory: [{ company: '', position: '', duration: '' }]
  },
  role: '',
  projectId: '',
};

const projectDetails = {
  projectName: 'Web Development Project',
  companyName: 'Tech Solutions Inc.',
  duration: '6 months',
  skillsRequired: ['JavaScript', 'React', 'Node.js', 'CSS']
};

const JobApplicationForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/apply`, values);
      console.log('Success:', response.data);
      resetForm();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex max-w-4xl mx-auto bg-white rounded-md shadow-md">
      <div className="w-1/2 p-8 border-r">
        <h2 className="mb-4 text-2xl font-semibold">{projectDetails.projectName}</h2>
        <p className="mb-2"><strong>Company Name:</strong> {projectDetails.companyName}</p>
        <p className="mb-2"><strong>Duration:</strong> {projectDetails.duration}</p>
        <p className="mb-2"><strong>Skills Required:</strong></p>
        <p className="mb-2">
          Description:{`${projectDetails.description}`}
        </p>
        <ul className="list-disc list-inside">
          {projectDetails.skillsRequired.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="w-1/2 p-8">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
            <Form className="max-w-xl mx-auto">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <Field name="Name" type="text" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <Field name="Email" type="email" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <Field name="phoneNumber" type="text" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <Field name="address" type="text" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Desired Salary</label>
                <Field name="desiredSalary" type="text" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Role</label>
                <Field name="role" type="text" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Project ID</label>
                <Field name="projectId" type="text" className="w-full p-2 border rounded" />
              </div>

              <FieldArray name="experience.education">
                {({ remove, push }) => (
                  <div className="mb-4">
                    <h3 className="mb-2 text-lg font-semibold">Education</h3>
                    {values.experience.education.map((_, index) => (
                      <div key={index} className="mb-2">
                        <Field name={`experience.education.${index}.degree`} placeholder="Degree" className="w-full p-2 mb-2 border rounded" />
                        <Field name={`experience.education.${index}.institution`} placeholder="Institution" className="w-full p-2 mb-2 border rounded" />
                        <Field name={`experience.education.${index}.yearOfGraduation`} placeholder="Year of Graduation" className="w-full p-2 mb-2 border rounded" />
                        <button type="button" onClick={() => remove(index)} className="text-red-500">Remove</button>
                      </div>
                    ))}
                    <button type="button" onClick={() => push({ degree: '', institution: '', yearOfGraduation: '' })} className="text-blue-500">Add Education</button>
                  </div>
                )}
              </FieldArray>

              <FieldArray name="experience.Workhistory">
                {({ remove, push }) => (
                  <div className="mb-4">
                    <h3 className="mb-2 text-lg font-semibold">Work History</h3>
                    {values.experience.Workhistory.map((_, index) => (
                      <div key={index} className="mb-2">
                        <Field name={`experience.Workhistory.${index}.company`} placeholder="Company" className="w-full p-2 mb-2 border rounded" />
                        <Field name={`experience.Workhistory.${index}.position`} placeholder="Position" className="w-full p-2 mb-2 border rounded" />
                        <Field name={`experience.Workhistory.${index}.duration`} placeholder="Duration" className="w-full p-2 mb-2 border rounded" />
                        <button type="button" onClick={() => remove(index)} className="text-red-500">Remove</button>
                      </div>
                    ))}
                    <button type="button" onClick={() => push({ company: '', position: '', duration: '' })} className="text-blue-500">Add Work History</button>
                  </div>
                )}
              </FieldArray>

              <button type="submit" disabled={isSubmitting} className="p-2 text-white bg-blue-500 rounded">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default JobApplicationForm;
