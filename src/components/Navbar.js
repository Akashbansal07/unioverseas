import { useState, useEffect } from 'react';
import LogoImage from '../utils/logo.png';

const Navbar = ({ activeTab, setActiveTab, colors }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoverItem, setHoverItem] = useState(null);

  // Navigation items with icons
  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'tutoring', label: 'Tutoring Services', icon: 'book-open' },
    { id: 'abroad', label: 'Study Abroad Counseling', icon: 'globe' },
    { id: 'resources', label: 'Resources', icon: 'file-text' },
    { id: 'about', label: 'About Us', icon: 'users' }
  ];

  // Remove scroll effect handling but keep hover handling
  useEffect(() => {
    return () => {};
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to handle logo click
  const handleLogoClick = () => {
    setActiveTab('home');
    setMobileMenuOpen(false); // Close mobile menu if open
    window.scrollTo(0, 0); // Scroll to top of page
  };

  // Function to render icons
  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'home':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        );
      case 'book-open':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
          </svg>
        );
      case 'globe':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
          </svg>
        );
      case 'file-text':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      case 'users':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <nav 
      className="fixed w-full z-50 transition-all duration-300 bg-white py-3 shadow-md h-20"
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with animation and click handler */}
          <div className="flex-shrink-0 flex items-center h-14"> {/* Fixed height container */}
            <button 
              onClick={handleLogoClick}
              className="flex items-center transform transition-transform duration-300 hover:scale-105 focus:outline-none"
              aria-label="Go to home page"
            >
              <img 
                src={LogoImage} 
                alt="UniOverseas Logo" 
                className="transition-all duration-300 w-auto object-contain"
                style={{ 
                  height: "180px", /* Increased logo size from the original 16px */
                  maxHeight: "180px" /* Ensures it doesn't exceed this height */
                }}
              />
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                onMouseEnter={() => setHoverItem(item.id)}
                onMouseLeave={() => setHoverItem(null)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center relative overflow-hidden group ${
                  activeTab === item.id 
                    ? 'font-semibold' 
                    : 'hover:text-opacity-90'
                }`}
                style={{ 
                  color: activeTab === item.id ? colors.darkPurple : 
                         hoverItem === item.id ? colors.darkPurple : 'black',
                }}
              >
                {/* Background animation */}
                <span 
                  className={`absolute inset-0 w-full h-full transition-all duration-300 transform 
                    ${activeTab === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} 
                    ${hoverItem === item.id && activeTab !== item.id ? 'scale-100' : 'scale-0 group-hover:scale-100'}`}
                  style={{ 
                    backgroundColor: colors.lightPurple,
                    borderRadius: '0.375rem',
                    zIndex: -1
                  }}
                ></span>
                
                {/* Icon with animation */}
                <span className={`transform transition-transform duration-300 group-hover:scale-110 ${activeTab === item.id ? 'scale-110' : ''}`}>
                  {renderIcon(item.icon)}
                </span>
                
                {/* Text */}
                <span className="relative z-10">{item.label}</span>
                
                {/* Underline animation */}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 
                    ${activeTab === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  style={{ 
                    backgroundColor: colors.darkPurple,
                  }}
                ></span>
              </button>
            ))}
          </div>
          
          {/* Mobile menu button with animation */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors duration-300"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Animated hamburger icon */}
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span 
                  className={`block w-5 h-0.5 bg-current absolute transition-all duration-300 transform ${
                    mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                  }`}
                ></span>
                <span 
                  className={`block w-5 h-0.5 bg-current absolute transition-opacity duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span 
                  className={`block w-5 h-0.5 bg-current absolute transition-all duration-300 transform ${
                    mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu with slide animation */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        style={{ 
          backgroundColor: 'white',
          boxShadow: mobileMenuOpen ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200 flex items-center ${
                activeTab === item.id 
                  ? 'font-semibold' 
                  : 'hover:bg-gray-100'
              }`}
              style={{
                color: activeTab === item.id ? colors.darkPurple : 'black',
                backgroundColor: activeTab === item.id ? colors.lightPurple : 'transparent'
              }}
            >
              {renderIcon(item.icon)}
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;