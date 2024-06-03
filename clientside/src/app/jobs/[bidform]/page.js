// components/JobApplicationForm.js
"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import axios from "axios";

const initialValues = {
  Email: "",
  desiredSalary: "",
  role: "",
  projectId: "",
};
// const [projectid, setprojectid] = useState();

const projectDetails = {
  projectName: "Web Development Project",
  companyName: "Tech Solutions Inc.",
  duration: "6 months",
  skillsRequired: ["JavaScript", "React", "Node.js", "CSS"],
};

const JobApplicationForm = () => {
  const[projectid,setprojectid]=useState(null)
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/Applyforwork`,
        values
      );
      console.log("Success:", response.data);
      resetForm();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const profectinfo = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/projectinfo/:id`
        );
      } catch (error) {
        console.log(error);
      }
    };

    profectinfo()
  }, [projectid]);

  return (
    <div className="flex max-w-4xl mx-auto bg-white rounded-md shadow-md">
      <div className="w-1/2 p-8 border-r">
        <h2 className="mb-4 text-2xl font-semibold">
          {projectDetails.projectName}
        </h2>
        <p className="mb-2">
          <strong>Company Name:</strong> {projectDetails.companyName}
        </p>
        <p className="mb-2">
          <strong>Duration:</strong> {projectDetails.duration}
        </p>
        <p className="mb-2">
          <strong>Skills Required:</strong>
        </p>
        <p className="mb-2">Description: {`${projectDetails.description}`}</p>
        <ul className="list-disc list-inside">
          {projectDetails.skillsRequired.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="w-1/2 p-8">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting, values }) => (
            <Form className="max-w-xl mx-auto">
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <Field
                  name="Email"
                  type="email"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Desired Salary</label>
                <Field
                  name="desiredSalary"
                  type="text"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Role</label>
                <Field
                  name="role"
                  type="text"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Project ID</label>
                <Field
                  name="projectId"
                  type="text"
                  className="w-full p-2 border rounded"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="p-2 text-white bg-blue-500 rounded"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default JobApplicationForm;
