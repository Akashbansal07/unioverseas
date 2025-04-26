import React from 'react';

const AboutUsPage = ({ colors }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4" style={{ color: colors.darkPurple }}>
        About Us
      </h1>
      <p className="mb-4">Learn more about UniOversea and our mission.</p>
    </div>
  );
};

export default AboutUsPage;