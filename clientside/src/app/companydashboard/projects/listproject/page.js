// components/ProjectForm.js
"use client";
import React from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';

const ProjectForm = () => {
  const initialValues = {
    projectName: '',
    Description: '',
    Email: '',
    CompanyName: '',
    Start: '',
    End: '',
    SkillsRequired: [''],
    Role: '',
    projectType: '',
    TotalNeedOffreelancer: '',
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/business/Listprojectbusiness`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        resetForm();
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl p-6 mx-auto bg-black rounded-lg shadow-md text-cyan-400">
      <h1 className="mb-6 text-2xl font-bold text-center">Create Project</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div className="form-group">
              <label className="block mb-1">Project Name</label>
              <Field name="projectName" placeholder="Project Name" className="w-full p-2 bg-black border rounded text-cyan-400 border-cyan-400" />
            </div>
            <div className="form-group">
              <label className="block mb-1">Description</label>
              <Field name="Description" placeholder="Description" className="w-full p-2 bg-black border rounded text-cyan-400 border-cyan-400" />
            </div>
            <div className="form-group">
              <label className="block mb-1">Email</label>
              <Field name="Email" placeholder="Email" type="email" className="w-full p-2 bg-black border rounded text-cyan-400 border-cyan-400" />
            </div>
            <div className="form-group">
              <label className="block mb-1">Company Name</label>
              <Field name="CompanyName" placeholder="Company Name" className="w-full p-2 bg-black border rounded text-cyan-400 border-cyan-400" />
            </div>
            <div className="form-group">
              <label className="block mb-1">Start Date</label>
              <Field name="Start" type="date" className="w-full p-2 bg-black border rounded text-cyan-400 border-cyan-400" />
            </div>
            <div className="form-group">
              <label className="block mb-1">End Date</label>
              <Field name="End" type="date" className="w-full p-2 bg-black border rounded text-cyan-400 border-cyan-400" />
            </div>
            <FieldArray name="SkillsRequired">
              {({ push, remove, form }) => (
                <div className="form-group">
                  <label className="block mb-1">Skills Required</label>
                  {form.values.SkillsRequired.map((skill, index) => (
                    <div key={index} className="flex mb-2 space-x-2">
                      <Field name={`SkillsRequired[${index}]`} placeholder="Skill" className="w-full p-2 bg-black border rounded text-cyan-400 border-cyan-400" />
                      <button type="button" onClick={() => remove(index)} className="p-2 text-white bg-red-500 rounded">-</button>
                      <button type="button" onClick={() => push('')} className="p-2 text-white bg-green-500 rounded">+</button>
                    </div>
                  ))}
                </div>
              )}
            </FieldArray>
            <div className="form-group">
              <label className="block mb-1">Role</label>
              <Field name="Role" placeholder="Role" className="w-full p-2 bg-black border rounded text-cyan-400 border-cyan-400" />
            </div>
            <div className="form-group">
              <label className="block mb-1">Project Type</label>
              <Field name="projectType" placeholder="Project Type" className="w-full p-2 bg-black border rounded text-cyan-400 border-cyan-400" />
            </div>
            <div className="form-group">
              <label className="block mb-1">Total Number of Freelancers Needed</label>
              <Field name="TotalNeedOffreelancer" placeholder="Total Number of Freelancers Needed" className="w-full p-2 bg-black border rounded text-cyan-400 border-cyan-400" />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProjectForm;
