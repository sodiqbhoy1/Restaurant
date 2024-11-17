import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <>
      <nav className="navBar bg-white shadow-md fixed w-full z-10 top-0">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-gray-800">Alata</span>
          </div>

          {/* Navbar Links */}
          <ul className={`md:flex space-x-6 ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:static bg-white w-full md:w-auto transition duration-200 md:top-auto md:shadow-none shadow-lg md:shadow-none z-10`} style={{ top: '60px' }}>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer transition duration-200 p-2 md:p-0">
              <Link to="/"> Home  </Link>  
            </li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer transition duration-200 p-2 md:p-0">
            <Link to="/restaurant"> Restaurant  </Link>  

            </li>
          </ul>

          {/* Search & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <input 
              type="text" 
              placeholder="Search" 
              className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

              <Link className="bg-[#2b2d42] text-white px-4 py-2 rounded-md shadow hover:bg-[#1f1f32] transition duration-200" to="/login"> Login   </Link>  

              <Link className="bg-[#8d99ae] text-white px-4 py-2 rounded-md shadow hover:bg-[#7a8999] transition duration-200" to="/signup"> Sign Up   </Link>  

            
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center bg-white shadow-md">
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer transition duration-200 p-2">
                Home
              </li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer transition duration-200 p-2">
                Restaurant
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
