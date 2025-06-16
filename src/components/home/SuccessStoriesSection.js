// SuccessStoriesSection.js with website color theme
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, User, Quote } from 'lucide-react';
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

const SuccessStoriesSection = ({ colors = {
  lightPurple: '#BEC1F8',
  darkPurple: '#2E2CAB',
  neonGreen: '#D8FC44'
} }) => {
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
    <section className="py-20 relative overflow-hidden" style={{ 
      background: `linear-gradient(135deg, ${colors.lightPurple}15 0%, rgba(255,255,255,0.9) 50%, ${colors.neonGreen}10 100%)`
    }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20 animate-float" 
             style={{ backgroundColor: colors.lightPurple }}></div>
        <div className="absolute top-40 right-16 w-16 h-16 rounded-full opacity-20 animate-float-delay" 
             style={{ backgroundColor: colors.neonGreen }}></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 rounded-full opacity-20 animate-float" 
             style={{ backgroundColor: colors.darkPurple }}></div>
        <div className="absolute bottom-20 right-32 w-24 h-24 rounded-full opacity-10 animate-float-delay" 
             style={{ backgroundColor: colors.lightPurple }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.darkPurple }}>
            Transforming Educational Journeys
          </h2>
          <div className="w-24 h-1 mx-auto my-4" style={{ backgroundColor: colors.neonGreen }}></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our personalized guidance has helped students achieve their international education dreams
          </p>
        </motion.div>

        {/* Container with relative positioning to hold both testimonial and arrows */}
        <div className="relative max-w-5xl mx-auto">
          {/* Fixed positioned arrow buttons - now positioned outside the content area */}
          <div className="fixed-arrow-container hidden md:block">
            <motion.button
              className="left-arrow-fixed w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-white hover:bg-gray-50 border-2"
              style={{ borderColor: colors.lightPurple }}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: colors.neonGreen,
                borderColor: colors.neonGreen 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
            >
              <ChevronLeft size={28} color={colors.darkPurple} />
            </motion.button>
            
            <motion.button
              className="right-arrow-fixed w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-white hover:bg-gray-50 border-2"
              style={{ borderColor: colors.lightPurple }}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: colors.neonGreen,
                borderColor: colors.neonGreen 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
            >
              <ChevronRight size={28} color={colors.darkPurple} />
            </motion.button>
          </div>
          
          {/* Mobile-only arrows (inside container) */}
          <div className="md:hidden flex justify-between items-center mb-4 mobile-arrows-container">
            <motion.button
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-md bg-white border-2"
              style={{ borderColor: colors.lightPurple }}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: colors.neonGreen,
                borderColor: colors.neonGreen 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
            >
              <ChevronLeft size={24} color={colors.darkPurple} />
            </motion.button>
            
            <motion.button
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-md bg-white border-2"
              style={{ borderColor: colors.lightPurple }}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: colors.neonGreen,
                borderColor: colors.neonGreen 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
            >
              <ChevronRight size={24} color={colors.darkPurple} />
            </motion.button>
          </div>

          {/* Testimonial content */}
          <div className="overflow-hidden py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative border-2" 
                     style={{ borderColor: `${colors.lightPurple}30` }}>
                  
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 opacity-20">
                    <Quote size={48} color={colors.lightPurple} />
                  </div>
                  
                  {/* Student photo with website-themed decorative elements */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      {/* Decorative elements around the image using website colors */}
                      <div className="absolute -inset-4 z-0">
                        {/* Themed decorative circles */}
                        <div className="absolute top-0 left-1/4 h-6 w-6 rounded-full opacity-80 shadow-lg animate-float" 
                             style={{ backgroundColor: colors.lightPurple }}></div>
                        <div className="absolute bottom-2 right-0 h-8 w-8 rounded-full opacity-70 shadow-lg animate-float-delay" 
                             style={{ backgroundColor: colors.neonGreen }}></div>
                        <div className="absolute top-1/3 -left-2 h-5 w-5 rounded-full opacity-75 shadow-lg animate-float" 
                             style={{ backgroundColor: colors.darkPurple }}></div>
                        <div className="absolute bottom-1/4 -right-3 h-4 w-4 rounded-full opacity-80 shadow-lg animate-float-delay" 
                             style={{ backgroundColor: colors.lightPurple }}></div>
                        
                        {/* Abstract shapes with website theme */}
                        <div className="absolute -top-1 -right-1 h-12 w-12 rotate-45 opacity-60 shadow-lg animate-float rounded-lg" 
                             style={{ backgroundColor: colors.neonGreen }}></div>
                        <div className="absolute -bottom-2 -left-2 h-10 w-10 rotate-12 opacity-50 shadow-lg animate-float-delay rounded-lg" 
                             style={{ backgroundColor: colors.lightPurple }}></div>
                      </div>
                      
                      {/* Main photo container with enhanced 3D effect */}
                      <div className="relative h-40 w-40 rounded-full bg-white shadow-[0_0_40px_rgba(46,44,171,0.3),_inset_0_0_20px_rgba(0,0,0,0.1)]"
                           style={{ 
                             background: `linear-gradient(135deg, ${colors.lightPurple}20, white, ${colors.neonGreen}10)`
                           }}>
                        
                        {/* Glowing ring effect */}
                        <div className="absolute inset-0 rounded-full animate-pulse"
                             style={{
                               background: `conic-gradient(${colors.neonGreen}, ${colors.lightPurple}, ${colors.darkPurple}, ${colors.neonGreen})`,
                               padding: '3px'
                             }}>
                          <div className="w-full h-full rounded-full bg-white"></div>
                        </div>
                        
                        {/* Image container with cut-out mask */}
                        <div className="absolute inset-3 overflow-hidden rounded-full border-4 border-white shadow-inner z-20">
                          <img 
                            src={stories[currentIndex].image} 
                            alt={`${stories[currentIndex].name}`} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        
                        {/* Enhanced highlight reflection effect */}
                        <div className="absolute inset-0 rounded-full opacity-40 z-10"
                          style={{
                            background: `linear-gradient(135deg, ${colors.lightPurple}60 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 70%)`
                          }}>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced testimonial styling */}
                  <div className="relative">
                    <p className="text-xl md:text-2xl italic mb-8 text-gray-700 leading-relaxed">
                      "{stories[currentIndex].testimonial}"
                    </p>
                    
                    {/* Decorative line */}
                    <div className="w-16 h-1 mx-auto mb-6 rounded" 
                         style={{ backgroundColor: colors.neonGreen }}></div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <h4 className="text-2xl font-bold mb-2" style={{ color: colors.darkPurple }}>
                      {stories[currentIndex].name}
                    </h4>
                    <p className="text-lg font-medium" style={{ color: colors.lightPurple }}>
                      {stories[currentIndex].university}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced pagination dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {stories.map((_, index) => (
              <motion.button 
                key={index}
                className="w-4 h-4 rounded-full border-2 transition-all duration-300"
                style={{ 
                  backgroundColor: index === currentIndex ? colors.darkPurple : 'transparent',
                  borderColor: index === currentIndex ? colors.darkPurple : colors.lightPurple
                }}
                whileHover={{ 
                  scale: 1.2,
                  backgroundColor: colors.neonGreen,
                  borderColor: colors.neonGreen
                }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced styles with website theme animations */}
      <style jsx>{`
        .animate-float {
          animation: floating 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: floating 6s ease-in-out infinite 3s;
        }
        
        @keyframes floating {
          0% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(2deg); }
          50% { transform: translateY(-15px) rotate(0deg); }
          75% { transform: translateY(-8px) rotate(-2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        /* Fixed arrow positioning */
        .fixed-arrow-container {
          position: relative;
          height: 0;
          z-index: 30;
        }
        
        .left-arrow-fixed {
          position: absolute;
          left: -80px;
          top: 240px;
          transition: all 0.3s ease;
        }
        
        .right-arrow-fixed {
          position: absolute;
          right: -80px;
          top: 240px;
          transition: all 0.3s ease;
        }
        
        /* Mobile arrow positioning */
        .mobile-arrows-container {
          position: relative;
          top: 180px;
          z-index: 30;
        }
        
        @media (min-width: 1200px) {
          .left-arrow-fixed {
            left: -90px;
          }
          
          .right-arrow-fixed {
            right: -90px;
          }
        }
        
        /* Enhanced hover effects */
        .left-arrow-fixed:hover,
        .right-arrow-fixed:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 25px rgba(46, 44, 171, 0.3);
        }
      `}</style>
    </section>
  );
};

export default SuccessStoriesSection;