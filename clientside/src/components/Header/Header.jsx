import React from 'react';
import { IoMdMenu } from "react-icons/io";


const Header = ({ userName, userProfession, companyName, pageName,  isCompanydashboard ,toggleMenu}) => {


 

  return (
    <div className="flex flex-col w-full ">
      <header className="bg-gray-900 shadow-sm dark:bg-gray-900">
        <div className="container flex items-center justify-between px-6 md:pl-64 lg:pl-72 py-4 mx-auto">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:hidden"
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              <IoMdMenu size={30} color="white" />
            </button>

            {isCompanydashboard ? (
              <div>
                <h1 className="text-xl font-bold text-cyan-700 dark:text-gray-50">{companyName}</h1>
                <p className="text-cyan-500 dark:text-gray-400">Company Dashboard</p>
              </div>
            ) : (
              <div>
                <h1 className="text-xl font-bold text-cyan-700 dark:text-gray-50">{userName}</h1>
                <p className="text-cyan-500 dark:text-gray-400">{userProfession}</p>
              </div>
            )}
          </div>
        </div>
      </header>

      <h2 className='text-3xl font-bold tracking-tight text-white dark:text-gray-100 ml-[2rem] md:pl-64 lg:pl-72  mt-5'>{pageName}</h2>
  
    </div>
  );
};

export default Header;

