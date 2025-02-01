import { Link } from "react-router-dom";
import logo from './image.png'; // Import the image file
function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10"
          />
          <span className="text-lg font-bold text-gray-800">Counseling FOR YOU</span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/home"
                className="text-gray-800 font-medium hover:text-indigo-600"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-800 font-medium hover:text-indigo-600"
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="text-gray-800 font-medium hover:text-indigo-600"
              >
                TESTIMONIAL
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="text-gray-800 font-medium hover:text-indigo-600"
              >
                BLOGS
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="text-gray-800 font-medium hover:text-indigo-600"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sign In/Up Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/sign-in"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;