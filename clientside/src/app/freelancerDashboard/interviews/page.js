'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import VerticalNav from '@/components/VerticalNav/VerticalNav';
import Header from "@/components/Header/Header";


function Page() {
  const [userExp, setUserExp] = useState(3);
  const [userinfo, setUserinfo] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [applyMessage, setApplyMessage] = useState('');
  const [isVerified, setIsVerified] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const fetchProfileData = async () => {
    try {
    
      const token = localStorage.getItem("token");
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/Api/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setUserinfo(data.Data);
     
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  
  }, []);

 


  const handleApplyClick = () => {
    const eligibleUser = users.find(user => user.experience > 2);
    setTimeout(() => {
      setIsVerified(true);
    }, 5000);
    if (eligibleUser) {
      setIsApplying(true);
      setApplyMessage('Your verification is under process.');
    } else {
      setApplyMessage('You do not have the required experience.');
    }
  };

  return (
    <div className="flex w-auto overflow-x-hidden  h-screen">
        <VerticalNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isActive={"Interview"} isCompanyDashboard={false} userName={`${userinfo?.firstName} ${userinfo?.lastName}`} userProfession={"Software Developer"} />
        <div className="flex flex-col w-full">
        <Header
            companyName={`${userinfo?.firstName} ${userinfo?.lastName}`}
            pageName="Interviews"
            isCompanydashboard={true}
            toggleMenu={toggleMenu}
          />
   

        {/* Right side Main Container */}
        <main className="md:w-[75vw] w-[90vw] p-10 mx-auto md:relative flex flex-col items-center h-auto md:min-h-screen  md:ml-80  bg-gray-800 rounded-lg shadow-lg ">
      
        {userExp>=2?
         <div className='flex flex-col items-center w-full gap-10 mt-10 '>
         {!isVerified ? (
            <>
            <button
              onClick={handleApplyClick}
              className={`px-4 py-2 ${isApplying ? 'bg-gray-400' : 'bg-cyan-700'} text-white rounded-md hover:bg-cyan-800`}
              disabled={isApplying}
            >
              {isApplying ? "Applied" : "Apply"}
            </button>
           {isApplying && <h2 className='text-xl opacity-50 w-30'>Your request has been sent for verification.</h2>}
            </>
          ) : (
            <>
              <button
                onClick={handleApplyClick}
                className="px-4 py-2 text-white bg-green-700 rounded-md hover:bg-cyan-800"
                disabled={isApplying}
              >
                Verified
              </button>
              <h2 className='text-xl opacity-50'>You are verified now you can take Interviews </h2>
            </>
          )}


          {isVerified && (
            <div className='w-[70%] h-[20rem] bg-gray-500 opacity-40 flex rounded-2xl items-center justify-center '>
           
            <h2 className='text-3xl '>You will receive interview schedules whenever you are selected.</h2>
            </div>
          )}
         </div>:<div>You Are not Eligible to apply for Oracle</div>}
         <div className='flex items-center justify-center w-full h-auto mt-10 opacity-80 rounded-2xl '>
          <h2 className='text-2xl text-white'>Before applying for the Interview verification, you should have a minimum of 5 years of experience.</h2>
         </div>
        </main>
      </div>
    </div>
  
  );
}

export default Page;