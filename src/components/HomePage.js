// Updated HomePage.js with contact section ref
import React from 'react';
import HeroSection from './home/HeroSection';
import StatsSection from './home/StatsSection';
import ServicesSection from './home/ServicesSection';
import SuccessStoriesSection from './home/SuccessStoriesSection';
import EventsSection from './home/EventsSection';
import ContactSection from './home/ContactSection';

const HomePage = ({ colors, contactSectionRef }) => {
  return (
    <main className="overflow-hidden">
      <HeroSection colors={colors} />
      <StatsSection colors={colors} />
      <ServicesSection colors={colors} />
      <SuccessStoriesSection colors={colors} />
      <EventsSection colors={colors} />
      <div id="contact-section" ref={contactSectionRef}>
        <ContactSection colors={colors} />
      </div>
    </main>
  );
};

export default HomePage;