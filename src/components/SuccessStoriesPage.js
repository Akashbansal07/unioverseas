import React from 'react';

const SuccessStoriesPage = ({ colors }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4" style={{ color: colors.darkPurple }}>
        Success Stories
      </h1>
      <p className="mb-4">Inspiring journeys of students who achieved their educational goals.</p>
    </div>
  );
};

export default SuccessStoriesPage;