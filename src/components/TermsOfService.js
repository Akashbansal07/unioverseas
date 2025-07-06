import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = ({ colors }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.darkPurple }}>
              Terms of Service
            </h1>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: colors.neonGreen }}></div>
            <p className="text-gray-600 text-lg">
              Effective Date: June 1, 2025
            </p>
          </div>

          {/* Content */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Welcome to UniOversea. These Terms of Service ("Terms") govern your access to and use of our website (https://unioversea.com/) and our educational services, including overseas educational consulting, SAT preparation, ACT preparation, AP preparation, IB coaching, IGCSE coaching, GCSE coaching, and other related educational offerings (collectively, the "Services"). By accessing or using our Services, you agree to these Terms. If you do not agree, please refrain from using our Services.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                1. Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                By engaging with our Services, you confirm that you are at least 18 years old or have the consent of a parent or legal guardian to enter into this agreement. You agree to comply with these Terms and all applicable local, national, and international laws.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                2. Our Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                UniOversea specializes in educational support and consulting, offering personalized and group-based coaching for SAT, ACT, AP, IB, IGCSE, and GCSE programs, as well as expert guidance for international education applications. Our Services may include in-person or online classes, one-on-one tutoring, workshops, and related educational resources. We reserve the right to modify, suspend, or discontinue any Service with reasonable notice, ensuring minimal disruption to enrolled programs.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                3. Your Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a user of our Services, you agree to:
              </p>
              <ul className="text-gray-700 leading-relaxed mb-6 ml-4">
                <li className="mb-2">Provide accurate, complete, and current information during enrollment or when contacting us.</li>
                <li className="mb-2">Use our Services solely for personal, non-commercial, and lawful educational purposes.</li>
                <li className="mb-2">Respect the confidentiality of course materials, including study guides, videos, practice tests, and other resources, and refrain from sharing, reproducing, or distributing them without prior written consent.</li>
                <li className="mb-2">Maintain respectful conduct during classes and interactions, avoiding any behavior that disrupts the learning environment, such as harassment or academic dishonesty.</li>
                <li className="mb-2">Adhere to program-specific policies, including attendance, participation, and submission requirements.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                4. Enrollment and Program Guidelines
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Enrollment in our coaching programs or consulting services is subject to availability and our discretion. We may decline or cancel enrollment if you fail to comply with these Terms or program-specific guidelines. You agree to follow all instructions provided by our instructors or consultants to ensure a productive learning experience.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                5. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                All content provided through our Services, including but not limited to course materials, study guides, practice exams, videos, and consulting resources, is the property of UniOversea or its licensors and is protected by copyright, trademark, and other intellectual property laws. You are granted a limited, non-transferable, revocable license to use these materials solely for your personal educational purposes. Unauthorized use, reproduction, or distribution of our materials is strictly prohibited.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                6. Fees and Refund Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Participation in our Services may require payment of fees, as outlined during enrollment or in a separate agreement. All fees must be paid in full prior to accessing the Services, unless otherwise agreed. Refunds are subject to our program-specific refund policy, which will be communicated at the time of enrollment. Unless otherwise stated, fees are non-refundable after the program start date. For refund inquiries, contact us at <a href="mailto:pooja@unioversea.com" className="text-blue-600 hover:underline">pooja@unioversea.com</a>.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                7. Termination of Access
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We reserve the right to suspend or terminate your access to our Services, including course enrollment or consulting sessions, if you violate these Terms, engage in disruptive behavior, or fail to meet payment obligations. You may discontinue using our Services at any time, subject to our refund policy. Obligations related to intellectual property, confidentiality, and payment will remain in effect after termination.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                8. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To the fullest extent permitted by law, UniOversea, its affiliates, and their respective officers, employees, or agents will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services, including but not limited to academic performance, test scores, or admission outcomes. Our total liability will not exceed the fees you paid for the Services in the preceding 12 months.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                9. No Warranties
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our Services are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including guarantees of specific academic results, test scores, or successful educational applications. While we strive to provide high-quality educational support, we cannot guarantee specific outcomes due to the individualized nature of academic performance.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                10. Third-Party Platforms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our Services may rely on third-party platforms, such as video conferencing tools, learning management systems, or payment processors. We are not responsible for the functionality, security, or policies of these platforms. Your use of third-party services is governed by their respective terms and conditions.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                11. Governing Law and Dispute Resolution
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                These Terms are governed by the laws of the State of Delaware, USA, without regard to its conflict of law principles. Any disputes arising under these Terms will be resolved through binding arbitration in Delaware, conducted under the rules of the American Arbitration Association, unless prohibited by applicable law.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                12. Updates to These Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may revise these Terms from time to time to reflect changes in our Services or legal requirements. We will notify you of significant changes via email or a notice on our website. Your continued use of our Services after such updates constitutes acceptance of the revised Terms.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                13. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions, concerns, or feedback regarding these Terms, please reach out to us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong>UniOversea</strong><br/>
                  Email: <a href="mailto:pooja@unioversea.com" className="text-blue-600 hover:underline">pooja@unioversea.com</a><br/>
                  Phone: <a href="tel:+918800429321" className="text-blue-600 hover:underline">+91 8800429321</a><br/>
                  Address: 1201, The Palm Square, Gurugram
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;