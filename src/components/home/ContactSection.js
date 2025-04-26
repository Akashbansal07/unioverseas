// ContactSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

const ContactSection = ({ colors }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.darkPurple }}>
            Start Your Educational Journey Today
          </h2>
          <div className="w-24 h-1 mx-auto my-4" style={{ backgroundColor: colors.neonGreen }}></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div 
                className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-center"
                style={{ backgroundColor: colors.darkPurple }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Why Choose UniOversea?
                </motion.h3>
                
                {[
                  "Transparent, student-centered guidance",
                  "Personalized learning experiences",
                  "Expert tutors and counselors",
                  "Focus on your long-term success",
                  "Ethical approach to education"
                ].map((point, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3">
                      <Check size={14} color={colors.darkPurple} />
                    </div>
                    <span className="text-white">{point}</span>
                  </motion.div>
                ))}
                
                <motion.div
                  className="mt-8 py-4 px-6 rounded-lg"
                  style={{ backgroundColor: colors.neonGreen }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <p className="font-medium" style={{ color: colors.darkPurple }}>
                    Experience education guidance that truly puts your interests first.
                  </p>
                </motion.div>
              </div>
              
              <div className="lg:col-span-3 p-8 md:p-10">
                <motion.h3 
                  className="text-2xl font-bold mb-6"
                  style={{ color: colors.darkPurple }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Request Free Consultation
                </motion.h3>
                
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Your name"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label className="block text-gray-700 mb-2 font-medium">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Your email"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <label className="block text-gray-700 mb-2 font-medium">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Your phone number"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <label className="block text-gray-700 mb-2 font-medium">Service Interest</label>
                      <select 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="tutoring">Tutoring</option>
                        <option value="counseling">Study Abroad Counseling</option>
                        <option value="both">Both</option>
                      </select>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label className="block text-gray-700 mb-2 font-medium">Message</label>
                    <textarea 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-32"
                      placeholder="Tell us about your educational goals"
                      rows={4}
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-white"
                    style={{ backgroundColor: colors.darkPurple }}
                    whileHover={{ scale: 1.02, backgroundColor: "#4340D0" }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Send size={20} />
                    Submit Request
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;