import { useState } from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-white pt-16 pb-8 w-full">
      <div className="max-w-[2000px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">JK Travels</h2>
            <p className="text-gray-600 mb-6">
              Together, we can make a real impact in communities around the world.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-full bg-gray-100 border-none focus:ring-2 focus:ring-gray-200 outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Links Container */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 lg:w-1/2">
            {/* Quick Links */}
            <div className="flex-1 lg:text-right">
              <h3 className="text-gray-500 font-medium mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/donation" className="text-gray-600 hover:text-gray-800">Donation</a></li>
                <li><a href="/about" className="text-gray-600 hover:text-gray-800">About Us</a></li>
                <li><a href="/programs" className="text-gray-600 hover:text-gray-800">Programs</a></li>
              </ul>
            </div>

            {/* More */}
            <div className="flex-1 lg:text-right">
              <h3 className="text-gray-500 font-medium mb-4">More</h3>
              <ul className="space-y-3">
                <li><a href="/blog" className="text-gray-600 hover:text-gray-800">Blog</a></li>
                <li><a href="/blog/details" className="text-gray-600 hover:text-gray-800">Blog details</a></li>
                <li><a href="/testimonials" className="text-gray-600 hover:text-gray-800">Testimonials</a></li>
              </ul>
            </div>

            {/* Legal & Policy Links */}
            <div className="flex-1 lg:text-right">
              <h3 className="text-gray-500 font-medium mb-4">Legal & Policy Links</h3>
              <ul className="space-y-3">
                <li><a href="/privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-600 hover:text-gray-800">Terms of Service</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              Copyright © 2025 All Rights Reserved by{' '}
              <a href="/" className="text-gray-800 hover:text-gray-600">
                JK Travels
              </a>
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-600 hover:text-gray-800">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-gray-800">
                <FaTwitter size={20} />
              </a>
              <a href="https://github.com" className="text-gray-600 hover:text-gray-800">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-800">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
