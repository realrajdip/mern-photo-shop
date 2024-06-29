import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 fixed top-0 left-0 right-0 shadow-lg z-30 bg-white">
      <div className="flex items-center gap-4">
        <img src="/picprismlogo.png" alt="logo" className="w-12 rounded-full shadow-md" />
        <Link to="/" className="font-bold text-3xl text-gray-900">
          PicPrism
        </Link>
      </div>
      <ul className="flex gap-6 mt-4 sm:mt-0 text-lg text-gray-600">
        <li>
          <Link to="/" className="rounded-md p-2 hover:bg-black hover:text-white transition-colors duration-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="rounded-md p-2 hover:bg-black hover:text-white transition-colors duration-300">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/login" className="rounded-md p-2  hover:bg-black hover:text-white transition-colors duration-300">
            Log In
          </Link>
        </li>
        <li>
          <Link to="/signup" className="rounded-md p-2  hover:bg-black hover:text-white transition-colors duration-300">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
