import React, { useState, useEffect, useRef } from 'react';

const ResourcesPage = ({ colors }) => {
  const [scrollY, setScrollY] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const containerRef = useRef(null);

  // Update section height on resize
  useEffect(() => {
    const handleResize = () => {
      setSectionHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrollY(container.scrollTop);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll"
    >
      <div style={{ height: `${sections.length * 100}vh` }}>
        {sections.map((section, index) => {
          let translateY = 0;
          
          if (index > 0) {
            const start = (index - 1) * sectionHeight;
            const end = index * sectionHeight;
            
            if (scrollY < start) {
              translateY = 100;
            } else if (scrollY > end) {
              translateY = 0;
            } else {
              translateY = 100 - ((scrollY - start) / sectionHeight) * 100;
            }
          }

          return (
            <div
              key={index}
              className="fixed top-0 left-0 w-full h-screen transition-transform duration-300"
              style={{
                transform: `translateY(${translateY}%)`,
                zIndex: sections.length - index,
                backgroundColor: index % 2 === 0 ? '#fff' : '#f0f0f0',
              }}
            >
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4" style={{ color: colors.darkPurple }}>
                  {section}
                </h1>
                <div className="space-y-4">
                  <p>Scroll to see the overlapping effect!</p>
                  <p>Section content goes here...</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResourcesPage;