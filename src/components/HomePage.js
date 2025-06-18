// HomePage.js
import React from 'react';
import HeroSection from './home/HeroSection';
import StatsSection from './home/StatsSection';
import ServicesSection from './home/ServicesSection';
import SuccessStoriesSection from './home/SuccessStoriesSection';
import EventsSection from './home/EventsSection';
import ContactSection from './home/ContactSection';

const HomePage = ({ colors, contactSectionRef, setActiveTab }) => {
  // Function to scroll to contact section
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="overflow-hidden">
      <HeroSection 
        colors={colors} 
        onContactClick={handleContactClick} 
        setActiveTab={setActiveTab} 
      />
      <StatsSection colors={colors} />
      <ServicesSection 
        colors={colors} 
        setActiveTab={setActiveTab}
      />
      <SuccessStoriesSection colors={colors} />
      <EventsSection colors={colors} />
      <div id="contact-section" ref={contactSectionRef}>
        <ContactSection colors={colors} />
      </div>
    </main>
  );
};

export default HomePage;