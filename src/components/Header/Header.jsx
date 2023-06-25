import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        {/* Insert your logo or text here */}
      </div>
      <ul className='menu'>
        <li>Home</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
