// SuccessStoriesSection.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
// Import individual student photos with correct capitalization
import KhushiBhatnagarImage from '../../utils/KhushiBhatnagar.jpeg';
import KanikaAhlawatImage from '../../utils/KanikaAhlawat.jpeg';
import PrernaRanaImage from '../../utils/PrernaRana.jpeg';
import SamsonMadhukarHenryImage from '../../utils/SamsonMadhukarHenry.jpeg';
import ManasRaiImage from '../../utils/ManasRai.jpeg';
import JeevanKollaImage from '../../utils/JeevanKolla.jpeg';
import SumeetGuptaImage from '../../utils/SumeetGupta.jpeg';
import GurumeharSinghImage from '../../utils/GurumeharSingh.jpeg';
import AmitSoniImage from '../../utils/AmitSoni.jpeg';

const SuccessStoriesSection = ({ colors }) => {
  const stories = [
    {
      id: 1,
      name: "Khushi Bhatnagar",
      university: "University of Pittsburgh",
      testimonial: "Ms. Pooja's guidance really helped me in every step of the way to get into the right university. Because of their guidance, I am in a university and in a program that I love",
      image: KhushiBhatnagarImage
    },
    {
      id: 2,
      name: "Kanika Ahlawat",
      university: "San Francisco State University",
      testimonial: "I really want to thank the company UniOversea for being so supportive and motivating and a special thanks to Ms. Pooja who had helped me throughout my visa process. I am so fortunate to have her for guidance. Thank you for being so kind and compassionate. I am so grateful that I have made some of the best decisions of my life under your guidance and supervision. I really want to thank all the members of the faculty. They have provided me an opportunity for better future and respectful placement. Thank you so much!",
      image: KanikaAhlawatImage
    },
    {
      id: 3,
      name: "Prerna Rana",
      university: "University of Glasgow",
      testimonial: "I moved to Glasgow to pursue masters from University of Glasgow. My experience with UniOversea has been so amazing that I've been constantly messaging my friends to avail its services. They provided me with all the options so I could choose the right university for me and my career goals. Since it was my first time going abroad, I was clueless at first but UniOversea made the application and visa process super smooth. I would certainly recommend Unioversea to all future students who wish to kickstart their educational journey abroad.",
      image: PrernaRanaImage
    },
    {
      id: 4,
      name: "Samson Madhukar Henry",
      university: "University of Scranton",
      testimonial: "My experience with UniOverseas Edutech has been incredibly smooth and reassuring. Their end-to-end guidance made the entire study abroad process—from shortlisting universities to securing my visa—stress-free and well-organized. What stood out most was the dedication of my counselor, who was always approachable, knowledgeable, and genuinely invested in my success. Their insights and constant support helped me make informed decisions with confidence. I truly recommend UniOverseas to anyone planning to study abroad.",
      image: SamsonMadhukarHenryImage
    },
    {
      id: 5,
      name: "Manas Rai",
      university: "Cranfield University",
      testimonial: "I'm absolutely thrilled with the service I received from Unioversea! As a first-time applicant to universities abroad, I was clueless about the process, but Unioversea's expert team walked me through every step. They took the time to understand my needs and shortlisted top-ranking universities that fit my profile. What impressed me most was their personalized approach - I felt heard and understood throughout the entire journey. I highly recommend Unioversea to anyone looking to study abroad - their guidance and support can make all the difference!",
      image: ManasRaiImage
    },
    {
      id: 6,
      name: "Jeevan Kolla",
      university: "Lehigh University",
      testimonial: "I received great personal consultation for my masters studies from the Unioversea Edtech. Mam really helped me through the process and I got into a prestigious university with a scholarship",
      image: JeevanKollaImage
    },
    {
      id: 7,
      name: "Sumeet Gupta",
      university: "Thomas Jefferson University",
      testimonial: "UniOversea transformed my graduate school journey! Their personalized guidance helped me secure admission to my dream university with a scholarship I never thought possible. Eternally grateful for their expertise and support!",
      image: SumeetGuptaImage
    },
    {
      id: 8,
      name: "Gurumehar Singh",
      university: "Sheridan College",
      testimonial: "UniOversea really helped me out with everything and made going through the whole process way easier than I expected. Couldn't have done it without them!",
      image: GurumeharSinghImage
    },
    {
      id: 9,
      name: "Amit Soni",
      university: "Sheridan College",
      testimonial: "The genuine care and guidance provided by UniOversea helped me navigate the overwhelming admissions process and land in a good university for my under-grad studies in Canada. I am forever grateful for their belief in me when I doubted myself",
      image: AmitSoniImage
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
                  {/* Student photo with unique creative border */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      {/* Decorative elements around the image - keeping these */}
                      <div className="absolute -inset-2 z-0">
                        {/* Decorative circles */}
                        <div className="absolute top-0 left-1/4 h-4 w-4 rounded-full bg-blue-400 opacity-70 shadow-lg"></div>
                        <div className="absolute bottom-2 right-0 h-6 w-6 rounded-full bg-purple-500 opacity-60 shadow-lg"></div>
                        <div className="absolute top-1/3 -left-2 h-5 w-5 rounded-full bg-pink-400 opacity-60 shadow-lg"></div>
                        <div className="absolute bottom-1/4 -right-3 h-4 w-4 rounded-full bg-yellow-300 opacity-70 shadow-lg"></div>
                        
                        {/* Abstract shapes */}
                        <div className="absolute -top-1 -right-1 h-10 w-10 rotate-45 bg-teal-400 opacity-60 shadow-lg"></div>
                        <div className="absolute -bottom-2 -left-2 h-8 w-8 rotate-12 bg-red-400 opacity-50 shadow-lg"></div>
                      </div>
                      
                      {/* Main photo container with 3D effect */}
                      <div className="relative h-36 w-36 rounded-full bg-white shadow-[0_0_35px_rgba(0,0,0,0.2),_inset_0_0_15px_rgba(0,0,0,0.1)]">
                        {/* Removed the cut-out pattern overlay that was creating circles on top of the image */}
                        
                        {/* Image container with cut-out mask - increased z-index */}
                        <div className="absolute inset-2 overflow-hidden rounded-full border-4 border-white shadow-inner z-20">
                          <img 
                            src={stories[currentIndex].image} 
                            alt={`${stories[currentIndex].name}`} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        
                        {/* Highlight reflection effect - made sure it's behind the image */}
                        <div className="absolute inset-0 rounded-full opacity-30 z-10"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)'
                          }}>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xl md:text-2xl italic mb-8 text-gray-700">
                    "{stories[currentIndex].testimonial}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <h4 className="text-xl font-bold" style={{ color: colors.darkPurple }}>
                      {stories[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {stories[currentIndex].university}
                    </p>
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
      </div>
      
      {/* Add this style for the animations */}
      <style jsx>{`
        .animate-float {
          animation: floating 4s ease-in-out infinite;
        }
        
        @keyframes floating {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </section>
  );
};

export default SuccessStoriesSection;