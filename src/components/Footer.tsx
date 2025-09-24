import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white w-full relative">
      {/* Clean Elegant Separator */}
      <div className="w-full py-4 bg-gradient-to-b from-gray-50/20 to-transparent">
        <div className="max-w-[2000px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-center">
            {/* Left line */}
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300"></div>

            {/* Center decorative dots - simple and clean */}
            <div className="px-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            {/* Right line */}
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-12 pb-8">
        <div className="max-w-[2000px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-12">
            {/* Logo and Description */}
            <div className="lg:w-1/3">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/Logo.jpg" 
                  alt="JK Travels Logo" 
                  className="w-16 h-16 object-contain"
                />
                <h2 className="text-2xl font-semibold text-gray-800">
                  JK Travels
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Experience luxury travel with our premium car rental and
                professional chauffeur services. Making every journey
                comfortable, safe, and memorable.
              </p>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm">+91 9876543210</span>
              </div>
            </div>

            {/* Links Container */}
            <div className="flex flex-col md:flex-row gap-8 lg:gap-16 lg:w-2/3">
              {/* Services */}
              <div className="flex-1">
                <h3 className="text-gray-500 font-medium mb-4">Our Services</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/services/airport-package"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Airport Transfers
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-600 hover:text-gray-800">
                      Luxury Car Rental
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-600 hover:text-gray-800">
                      Corporate Travel
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-600 hover:text-gray-800">
                      Wedding Cars
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="flex-1">
                <h3 className="text-gray-500 font-medium mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/about"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-600 hover:text-gray-800">
                      Our Fleet
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & Support */}
              <div className="flex-1">
                <h3 className="text-gray-500 font-medium mb-4">
                  Legal & Support
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/privacy"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Customer Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm mb-4 md:mb-0">
                Copyright © 2025 All Rights Reserved by{" "}
                <a href="/" className="text-gray-800 hover:text-gray-600">
                  JK Travels
                </a>
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
