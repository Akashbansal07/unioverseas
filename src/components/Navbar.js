import { useState } from 'react';
import LogoImage from '../utils/logo.png';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Define color scheme with neon green as primary color
  const colors = {
    neonGreen: '#c0ff3c',
    darkText: '#333333',
    hoverGreen: '#d2ff6e',
    activeText: '#1a1a1a'
  };

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'tutoring', label: 'Tutoring Services' },
    { id: 'abroad', label: 'Study Abroad Counseling' },
    { id: 'resources', label: 'Resources' },
    { id: 'about', label: 'About Us' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="shadow-md" style={{ backgroundColor: colors.neonGreen }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              {/* Logo image */}
              <div>
                <img 
                  src={LogoImage} 
                  alt="UniOverseas Logo" 
                  className="h-14 w-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === item.id 
                    ? 'font-bold shadow-sm' 
                    : 'hover:bg-opacity-70'
                }`}
                style={{ 
                  color: colors.darkText,
                  backgroundColor: activeTab === item.id ? colors.hoverGreen : 'transparent',
                  textTransform: 'uppercase', 
                  letterSpacing: '0.5px'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-green-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div 
        className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}
        style={{ backgroundColor: colors.hoverGreen }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                activeTab === item.id 
                  ? 'font-bold' 
                  : 'hover:bg-green-200'
              }`}
              style={{
                color: colors.darkText,
                backgroundColor: activeTab === item.id ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;