import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import TutoringPage from './components/TutoringPage';
import StudyAbroadPage from './components/StudyAbroadPage';
import ResourcesPage from './components/ResourcesPage';
import AboutUsPage from './components/AboutUsPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const contactSectionRef = useRef(null);
  
  // Define the color palette
  const colors = {
    lightPurple: '#BEC1F8',
    darkPurple: '#2E2CAB',
    neonGreen: '#D8FC44'
  };

  // Add an effect to scroll to top when activeTab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  // Modified setActiveTab function that also scrolls to top
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo(0, 0);
  };

  // Function to handle navigation to contact section
  const handleContactClick = () => {
    setActiveTab('home'); // First switch to home page
    
    // Use setTimeout to ensure the home page is rendered before trying to scroll
    setTimeout(() => {
      const contactSection = document.querySelector('#contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Render the appropriate component based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage 
                 colors={colors} 
                 contactSectionRef={contactSectionRef} 
                 setActiveTab={handleTabChange} 
               />;
      case 'tutoring':
        return <TutoringPage colors={colors} onContactClick={handleContactClick} />;
      case 'abroad':
        return <StudyAbroadPage colors={colors} onContactClick={handleContactClick} />;
      case 'resources':
        return <ResourcesPage colors={colors} />;
      case 'about':
        return <AboutUsPage colors={colors} onContactClick={handleContactClick} />;
      case 'privacy':
        return <PrivacyPolicy colors={colors} />;
      case 'terms':
        return <TermsOfService colors={colors} />;
      default:
        return <HomePage 
                 colors={colors} 
                 contactSectionRef={contactSectionRef}
                 setActiveTab={handleTabChange}
               />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={handleTabChange} 
        colors={colors} 
      />
      <main className="relative">
        {renderContent()}
      </main>
      <Footer 
        colors={colors} 
        setActiveTab={handleTabChange} 
      />
    </div>
  );
};

export default App;