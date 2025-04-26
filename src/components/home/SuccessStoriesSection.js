// SuccessStoriesSection.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

const SuccessStoriesSection = ({ colors }) => {
  const stories = [
    {
      id: 1,
      name: "Priya Sharma",
      university: "Cornell University",
      year: "Class of 2023",
      testimonial: "UniOversea transformed my SAT preparation and university application process. My dedicated counselor helped me secure admission to Cornell University with a partial scholarship!"
    },
    {
      id: 2,
      name: "Arjun Mehta",
      university: "Imperial College London",
      year: "Class of 2024",
      testimonial: "The IBDP tutoring at UniOversea helped me achieve a 42/45 score. Their study abroad counseling then secured my place at Imperial College London for Engineering."
    },
    {
      id: 3,
      name: "Zara Khan",
      university: "University of Toronto",
      year: "Class of 2023",
      testimonial: "From ACT prep to scholarship applications, UniOversea provided exceptional guidance. I'm now studying at the University of Toronto with a $15,000 annual scholarship."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.darkPurple }}>
            Transforming Educational Journeys
          </h2>
          <div className="w-24 h-1 mx-auto my-4" style={{ backgroundColor: colors.neonGreen }}></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <motion.button
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-white"
              whileHover={{ scale: 1.1, backgroundColor: colors.neonGreen }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
            >
              <ChevronLeft size={24} color={colors.darkPurple} />
            </motion.button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <motion.button
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-white"
              whileHover={{ scale: 1.1, backgroundColor: colors.neonGreen }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
            >
              <ChevronRight size={24} color={colors.darkPurple} />
            </motion.button>
          </div>

          <div className="overflow-hidden py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                  <div className="flex items-center gap-2 mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={24} 
                        fill={colors.neonGreen} 
                        color={colors.neonGreen} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl italic mb-8 text-gray-700">
                    "{stories[currentIndex].testimonial}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                      <User size={32} color={colors.darkPurple} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold" style={{ color: colors.darkPurple }}>
                        {stories[currentIndex].name}
                      </h4>
                      <p className="text-gray-600">
                        {stories[currentIndex].university}, {stories[currentIndex].year}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8">
            {stories.map((_, index) => (
              <motion.button 
                key={index}
                className="w-3 h-3 rounded-full mx-1"
                style={{ 
                  backgroundColor: index === currentIndex ? colors.darkPurple : '#CBD5E0'
                }}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            className="px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
            style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
            whileHover={{ scale: 1.05, backgroundColor: "#E3FF6A" }}
            whileTap={{ scale: 0.98 }}
          >
            View All Success Stories
            <ChevronRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;