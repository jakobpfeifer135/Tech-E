
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <section className="bg-[#011638] flex justify-between items-center  text-white border-b-2">
      <div className="logo">
        <img className='max-h-[100px] max-w-[200px]' src="../src/assets/images/Logo.webp" alt="Tech-E" />
      </div>

      <ul className="flex justify-end space-x-4 mr-5">
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
            to="/HomePage"
            className={`hover:text-gray-300 ${currentPage === '/HomePage' ? 'font-bold' : ''}`}
          >
            {/* Add your link text here */}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Login"
            className={`hover:text-gray-300 ${currentPage === '/Login' ? 'font-bold' : ''}`}
          >
            Login/Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Checkout"
            className={`hover:text-gray-300 ${currentPage === '/Checkout' ? 'font-bold' : ''}`}
          >
            Checkout
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default NavTabs;

