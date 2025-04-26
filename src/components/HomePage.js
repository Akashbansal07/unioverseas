// HomePage.js
import React from 'react';
import HeroSection from './home/HeroSection';
import StatsSection from './home/StatsSection';
import ServicesSection from './home/ServicesSection';
import SuccessStoriesSection from './home/SuccessStoriesSection';
import EventsSection from './home/EventsSection';
import ContactSection from './home/ContactSection';

const HomePage = ({ colors }) => {
  return (
    <div className="home-container w-full">
      <HeroSection colors={colors} />
      <StatsSection colors={colors} />
      <ServicesSection colors={colors} />
      <SuccessStoriesSection colors={colors} />
      <EventsSection colors={colors} />
      <ContactSection colors={colors} />
    </div>
  );
};

export default HomePage;