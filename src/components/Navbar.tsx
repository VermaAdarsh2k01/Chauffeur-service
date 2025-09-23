import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Track if we're on mobile to determine default Services dropdown state
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  // Update mobile state and reset Services dropdown when screen size changes
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      const wasMobile = isMobile;
      
      setIsMobile(mobile);
      
      // Only reset Services dropdown when transitioning between mobile/desktop
      if (mobile !== wasMobile) {
        setIsServicesOpen(mobile); // Open on mobile, closed on desktop
      }
    };

    // Set initial state
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    setIsServicesOpen(mobile);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const serviceDropdownItems = [
    { name: 'Airport Package', href: '/services/airport-package' },
    { name: 'Chauffeur Service', href: '/services/chauffeur' },
    { name: 'Corporate Travel', href: '/services/corporate' },
    { name: 'Airport Transfer', href: '/services/airport' },
  ];

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { 
      name: 'Services', 
      href: '#',
      hasDropdown: true,
      dropdownItems: serviceDropdownItems,
      isDropdownTrigger: true
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-fit py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/Logo.jpg" 
                alt="JK Travels" 
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation and Download Button */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <div className="flex items-center space-x-4">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                >
                  {link.isDropdownTrigger ? (
                    <button
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                      onClick={(e) => e.preventDefault()}
                    >
                      {link.name}
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                    >
                      {link.name}
                    </a>
                  )}
                  {link.hasDropdown && (
                    <div 
                      className={`absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 mt-1 transition-all duration-200 ease-in-out border border-gray-200 ${
                        isServicesOpen
                          ? 'opacity-100 transform translate-y-0 visible'
                          : 'opacity-0 transform -translate-y-2 invisible'
                      }`}
                    >
                      {link.dropdownItems?.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#download"
                className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors ml-4"
              >
                 Request Enquiry
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.isDropdownTrigger ? (
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    <span>{link.name}</span>
                    <svg
                        className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {link.name}
                    </a>
                  )}
                  {link.hasDropdown && isServicesOpen && (
                    <div className="mt-2 space-y-1 px-4 py-2 border border-gray-200 rounded-md mx-3">
                      {link.dropdownItems?.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md pl-4"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#download"
                className="block w-full text-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors mt-4"
              >
                Request Enquiry
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
