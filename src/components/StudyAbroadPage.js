import React from 'react';

const StudyAbroadPage = ({ colors }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4" style={{ color: colors.darkPurple }}>
        Study Abroad Counseling
      </h1>
      <p className="mb-4">Comprehensive support for your international education journey.</p>
    </div>
  );
};

export default StudyAbroadPage;