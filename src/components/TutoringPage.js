import React from 'react';

const TutoringPage = ({ colors }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4" style={{ color: colors.darkPurple }}>
        Tutoring Services
      </h1>
      <p className="mb-4">Expert tutoring services to help you excel in your studies.</p>
    </div>
  );
};

export default TutoringPage;