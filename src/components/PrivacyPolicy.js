import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = ({ colors }) => {
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
              Privacy Policy
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
                At Unioversea, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website (https://unioversea.com/), use our services, or interact with us. By using our website, you consent to the practices described in this policy.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                1. Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="text-gray-700 leading-relaxed mb-6 ml-4">
                <li className="mb-2"><strong>Personal Information:</strong> When you contact us, register for services, or fill out forms, we may collect your name, email address, phone number, company name, and address.</li>
                <li className="mb-2"><strong>Usage Data:</strong> We collect information about how you interact with our website, such as IP address, browser type, pages visited, and time spent on our site, using cookies and analytics tools like Google Analytics.</li>
                <li className="mb-2"><strong>Communication Data:</strong> If you reach out via email or contact forms, we may collect the content of your messages and any attachments.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="text-gray-700 leading-relaxed mb-6 ml-4">
                <li className="mb-2">Provide and improve our services, including software solutions and consulting.</li>
                <li className="mb-2">Respond to inquiries and provide customer support.</li>
                <li className="mb-2">Send marketing communications, such as newsletters or updates, with your consent.</li>
                <li className="mb-2">Analyze website usage to enhance user experience and optimize our site.</li>
                <li className="mb-2">Comply with legal obligations and protect our rights.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                3. How We Share Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell or rent your personal information. We may share your data with:
              </p>
              <ul className="text-gray-700 leading-relaxed mb-6 ml-4">
                <li className="mb-2"><strong>Service Providers:</strong> Third-party vendors (e.g., hosting providers, analytics tools) that assist us in operating our website and services, bound by confidentiality agreements.</li>
                <li className="mb-2"><strong>Legal Requirements:</strong> If required by law, such as to comply with a subpoena or legal process.</li>
                <li className="mb-2"><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred with appropriate safeguards.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                4. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We use cookies to enhance your experience, analyze traffic, and personalize content. You can manage cookie preferences through your browser settings. Note that disabling cookies may affect certain website features.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                5. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We implement reasonable security measures, such as encryption and secure servers, to protect your data. However, no system is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                6. Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights under laws like GDPR or CCPA:
              </p>
              <ul className="text-gray-700 leading-relaxed mb-6 ml-4">
                <li className="mb-2">Access, correct, or delete your personal information.</li>
                <li className="mb-2">Opt out of marketing communications.</li>
                <li className="mb-2">Request information about data we've collected or shared.</li>
                <li className="mb-2">Object to or restrict certain data processing activities.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                To exercise these rights, contact us at <a href="mailto:pooja@unioversea.com" className="text-blue-600 hover:underline">pooja@unioversea.com</a>.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                7. Third-Party Links
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our website may contain links to third-party sites. We are not responsible for their privacy practices, and we encourage you to review their policies.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                8. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our services are not directed to individuals under 13. If we discover a child under 13 has provided personal information, we will delete it immediately.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                9. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                10. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you are located outside the United States, your data may be transferred to and processed in the U.S. or other countries, subject to appropriate safeguards under applicable laws.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                11. Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may update this Privacy Policy periodically. We will notify you of material changes via email or a website notice. Continued use of our services after updates constitutes acceptance of the revised policy.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: colors.darkPurple }}>
                12. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Unioversea</strong><br/>
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

export default PrivacyPolicy;