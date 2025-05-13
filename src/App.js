import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import TutoringPage from './components/TutoringPage';
import StudyAbroadPage from './components/StudyAbroadPage';
import ResourcesPage from './components/ResourcesPage';
import SuccessStoriesPage from './components/SuccessStoriesPage';
import AboutUsPage from './components/AboutUsPage';
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
        return <HomePage colors={colors} contactSectionRef={contactSectionRef} />;
      case 'tutoring':
        return <TutoringPage colors={colors} onContactClick={handleContactClick} />;
      case 'abroad':
        return <StudyAbroadPage colors={colors} onContactClick={handleContactClick} />;
      case 'resources':
        return <ResourcesPage colors={colors} />;
      case 'about':
        return <AboutUsPage colors={colors} onContactClick={handleContactClick} />;
      default:
        return <HomePage colors={colors} contactSectionRef={contactSectionRef} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        colors={colors} 
      />
      <main className="relative">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;