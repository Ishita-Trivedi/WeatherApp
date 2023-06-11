import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className='bg bg-teal-100 h-12 flex items-center justify-between relative roboto font-medium text-2xl'>
      <div className='flex items-center absolute left-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
        <h1 className='pl-2'>Weather App</h1>
      </div>
      <ul className='flex space-x-8 absolute right-4'>
        <li>Home</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
