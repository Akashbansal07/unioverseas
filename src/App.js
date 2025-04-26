// App.js
import { useState } from 'react';
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
  
  // Define the color palette
  const colors = {
    lightPurple: '#BEC1F8',
    darkPurple: '#2E2CAB',
    neonGreen: '#D8FC44'
  };

  // Render the appropriate component based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage colors={colors} />;
      case 'tutoring':
        return <TutoringPage colors={colors} />;
      case 'abroad':
        return <StudyAbroadPage colors={colors} />;
      case 'resources':
        return <ResourcesPage colors={colors} />;
      case 'success':
        return <SuccessStoriesPage colors={colors} />;
      case 'about':
        return <AboutUsPage colors={colors} />;
      default:
        return <HomePage colors={colors} />;
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