import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
// import Auth from '../utils/auth';

function NavTabs() {
  const currentPage = useLocation().pathname;
  // const { loggedIn, logout } = Auth; // Call the Auth function

  return (
    <section className="bg-[#011638] flex justify-between items-center text-white border-b-4">
      <div className="logo">
        <img className='max-h-[100px] max-w-[200px]' src="../src/assets/images/Logo.webp" alt="Tech-E" />
      </div>

      <ul className="flex items-center space-x-4 mr-5">
        <li className="nav-item">
          <Link
            to="/"
            className={`hover:text-gray-300 ${currentPage === '/' ? 'font-bold' : ''}`}
          >
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/ProductsPage"
            className={`hover:text-gray-300 ${currentPage === '/ProductsPage' ? 'font-bold' : ''}`}
          >
            Products
          </Link>
        </li>

        <li className="nav-item">
          {/* {loggedIn ? (
            <button onClick={logout} className='hover:text-gray-300'>
              Logout
            </button>
          ) : ( */}
            <Link
              to="/Login"
              className={`hover:text-gray-300 ${currentPage === '/Login' ? 'font-bold' : ''}`}
            >
              Login/Sign Up
            </Link>
          {/* )} */}
        </li>

        <li className="nav-item mt-1">
          <Link
            to="/Checkout"
            className={`hover:text-gray-300 ${currentPage === '/Checkout' ? 'font-bold' : ''} flex items-center`}
          >
            <FaShoppingCart className="text-2xl" />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default NavTabs;