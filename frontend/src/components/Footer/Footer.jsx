import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-50 py-8 border-t border-gray-200">
      <div className="text-center mt-4">
        <a href="#top" className="text-indigo-600 hover:underline">Go to Top ↑</a>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-700 hover:text-indigo-600">About Us</Link></li>
              <li><Link to="/contact-us" className="text-gray-700 hover:text-indigo-600">Contact Us</Link></li>
              <li><Link to="/services" className="text-gray-700 hover:text-indigo-600">Services</Link></li>
              <li><Link to="/blogs" className="text-gray-700 hover:text-indigo-600">Blogs</Link></li>
              <li><Link to="/testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</Link></li>
              <li><Link to="/resources" className="text-gray-700 hover:text-indigo-600">Resources</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-700 mb-4">Feel free to reach out to us.</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600">X</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Email</a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">Contact support@gmail.com for further info.</p>
          <p className="text-gray-600 text-sm">©2025 Company</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
