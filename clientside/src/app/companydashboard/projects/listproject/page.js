
"use client";
import React, { useState } from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from 'next/link';
import { format } from 'date-fns';
import { FaArrowLeft } from "react-icons/fa6";

const ProjectForm = () => {
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const token = localStorage.getItem("token");
    
    // Format the dates
    const formattedValues = {
      ...values,
      Start: values.Start ? format(new Date(values.Start), 'yyyy-MM-dd') : '',
      End: values.End ? format(new Date(values.End), 'yyyy-MM-dd') : '',
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/business/Listprojectbusiness`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify(formattedValues),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data.message);
        toast.success("Project listed successfully");
        resetForm();
      } else {
        const errorText = await response.json();
        console.error('Error:', errorText);
        toast.error(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An unexpected error occurred.');
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl p-6 mx-auto bg-black rounded-lg shadow-md text-cyan-400">
      <Link href="/companydashboard/projects" className="bg-black text-cyan"><FaArrowLeft />
       Go back</Link>
      <h1 className="mb-6 text-3xl font-bold text-center text-white" >Create Project</h1>
      <section className="flex flex-col w-auto px-10 py-10 mt-5 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div className="form-group">
              <label className="block mb-1 text-cyan-400">Project Name</label>
              <Field name="projectName" placeholder="Project Name" className="w-full p-2 text-white bg-black border border-white rounded" />
            </div>
            <div className="form-group">
              <label className="block mb-1 text-cyan-400">Description</label>
              <Field name="Description" placeholder="Description" className="w-full p-2 text-white bg-black border border-white rounded" />
            </div>
            <div className="form-group">
              <label className="block mb-1 text-cyan-400">Company Name</label>
              <Field name="CompanyName" placeholder="Company Name" className="w-full p-2 text-white bg-black border border-white rounded" />
            </div>
            <div className="form-group">
              <label className="block mb-1 text-cyan-400">Start Date</label>
              <Field name="Start" type="date" className="w-full p-2 text-white bg-black border border-white rounded" />
            </div>
            <div className="form-group">
              <label className="block mb-1 text-cyan-400">End Date</label>
              <Field name="End" type="date" className="w-full p-2 text-white bg-black border border-white rounded" />
            </div>
            <FieldArray name="SkillsRequired">
              {({ push, remove, form }) => (
                <div className="form-group">
                  <label className="block mb-1">Skills Required</label>
                  {form.values.SkillsRequired.map((skill, index) => (
                    <div key={index} className="flex mb-2 space-x-2">
                      <Field name={`SkillsRequired[${index}]`} placeholder="Skill" className="w-full p-2 text-white bg-black border border-white rounded" />
                      <button type="button" onClick={() => remove(index)} className="p-2 text-white bg-red-500 rounded">-</button>
                      <button type="button" onClick={() => push('')} className="p-2 text-white bg-green-500 rounded">+</button>
                    </div>
                  ))}
                </div>
              )}
            </FieldArray>
            <div className="form-group">
              <label className="block mb-1 text-cyan-400">Role</label>
              <Field name="Role" placeholder="Role" className="w-full p-2 text-white bg-black border border-white rounded" />
            </div>
            <div className="form-group">
              <label className="block mb-1 text-cyan-400">Project Type</label>
              <Field name="projectType" placeholder="Project Type" className="w-full p-2 text-white bg-black border border-white rounded" />
            </div>
            <div className="form-group">
              <label className="block mb-1 text-cyan-400">Total Number of Freelancers Needed</label>
              <Field name="TotalNeedOffreelancer" placeholder="Total Number of Freelancers Needed" className="w-full p-2 text-white bg-black border border-white rounded" />
            </div>
            <button type="submit" disabled={isSubmitting || loading} className="w-full py-2 text-white border-white rounded-md bg-cyan-500 hover:bg-cyan-400">
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
      </section>
      <ToastContainer />
    </div>
  );
};

export default ProjectForm;
