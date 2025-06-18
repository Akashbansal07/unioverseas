// ServicesSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, ArrowRight } from 'lucide-react';

const ServicesSection = ({ colors, setActiveTab }) => {
  const services = [
    {
      icon: <BookOpen />,
      title: "Tutoring Services",
      description: "Expert-led online tutoring that prioritizes your actual learning outcomes and long-term success. Our specialized instructors deliver personalized learning experiences for SAT, ACT, AP, IBDP, MYP, IGCSE, and GCSE, available as one-on-one or group sessions tailored to your learning style and genuine educational needs.",
      buttonText: "Explore Tutoring",
      targetPage: "tutoring",
      color: colors.darkPurple,
      bgColor: "white",
      delay: 0.2,
      isClickable: true
    },
    {
      icon: <GraduationCap />,
      title: "Study Abroad Counseling",
      description: "End-to-end guidance where your dream university is our priority—not hidden agendas. From university selection across the USA, UK, Canada, Australia, Germany and more to application submission, our dedicated counselors provide transparent, principled support through every step of your global education pursuit.",
      buttonText: "Start Your Journey",
      targetPage: "abroad",
      color: "white",
      bgColor: colors.darkPurple,
      delay: 0.4,
      isClickable: true
    }
  ];

  // Handle service card navigation
  const handleServiceClick = (targetPage) => {
    if (setActiveTab && targetPage) {
      setActiveTab(targetPage);
    }
  };

  // Handle button click with event propagation control
  const handleButtonClick = (e, targetPage) => {
    e.stopPropagation(); // Prevent card click event
    handleServiceClick(targetPage);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.darkPurple }}>
            Student-First Education Solutions
          </h2>
          <div className="w-24 h-1 mx-auto my-4" style={{ backgroundColor: colors.neonGreen }}></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
                service.isClickable ? 'cursor-pointer' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: service.delay }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                scale: 1.02
              }}
              onClick={() => service.isClickable && handleServiceClick(service.targetPage)}
            >
              <div 
                className="p-8 md:p-10 h-full flex flex-col"
                style={{ 
                  backgroundColor: service.bgColor,
                  color: service.color
                }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ 
                    backgroundColor: index === 0 ? `${colors.lightPurple}30` : colors.neonGreen,
                    color: index === 0 ? colors.darkPurple : colors.darkPurple
                  }}
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.8 }
                  }}
                >
                  {React.cloneElement(service.icon, { size: 32, strokeWidth: 1.5 })}
                </motion.div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {service.title}
                </h3>
                
                <p className="mb-8 text-lg opacity-90 flex-grow">
                  {service.description}
                </p>
                
                {service.buttonText && (
                  <motion.button
                    className="flex items-center gap-2 text-lg font-medium mt-auto w-fit group"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ 
                      color: index === 0 ? colors.darkPurple : colors.neonGreen 
                    }}
                    onClick={(e) => handleButtonClick(e, service.targetPage)}
                  >
                    {service.buttonText}
                    <motion.div
                      className="transition-all duration-300 group-hover:translate-x-1"
                      initial={{ x: -5, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;