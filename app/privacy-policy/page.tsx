"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Eye, Lock, Database, Mail, Phone } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <div className="flex items-center text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
              <p className="text-gray-600">
                We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-3" />
                  Information We Collect
                </h3>
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us, such as when you create an account, make a purchase, 
                  or contact our customer service team.
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, shipping address</li>
                  <li><strong>Account Information:</strong> Username, password, account preferences</li>
                  <li><strong>Purchase Information:</strong> Order history, payment details, shipping information</li>
                  <li><strong>Communication:</strong> Customer service inquiries, feedback, reviews</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="h-6 w-6 text-primary mr-3" />
                  How We Use Your Information
                </h3>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to provide, maintain, and improve our services.
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your account and orders</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="h-6 w-6 text-primary mr-3" />
                  Information Sharing
                </h3>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information 
                  in the following limited circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="h-6 w-6 text-primary mr-3" />
                  Data Security
                </h3>
                <p className="text-gray-600 mb-6">
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, 
                  secure servers, and regular security assessments.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h3>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience and analyze website usage.
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Rights and Choices</h3>
                <p className="text-gray-600 mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Marketing Communications</h3>
                <p className="text-gray-600 mb-6">
                  We may send you marketing communications about our products and services. You can opt out of these 
                  communications at any time by clicking the unsubscribe link in our emails or contacting us directly.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h3>
                <p className="text-gray-600 mb-6">
                  Our website is not intended for children under the age of 18. We do not knowingly collect personal 
                  information from children under 18. If you believe we have collected information from a child under 18, 
                  please contact us immediately.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h3>
                <p className="text-gray-600 mb-6">
                  Your personal information may be transferred to and processed in countries other than your own. 
                  We ensure that such transfers comply with applicable data protection laws and implement appropriate 
                  safeguards to protect your information.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h3>
                <p className="text-gray-600 mb-6">
                  We retain your personal information for as long as necessary to provide our services and fulfill 
                  the purposes outlined in this privacy policy. We may retain certain information for longer periods 
                  to comply with legal obligations or resolve disputes.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h3>
                <p className="text-gray-600 mb-6">
                  We may update this privacy policy from time to time. We will notify you of any material changes 
                  by posting the new policy on this page and updating the "Last Updated" date.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-3" />
                  Contact Us
                </h3>
                <p className="text-gray-600 mb-6">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">
                        <strong>Email:</strong><br />
                        mahan.khanipour7@gmail.com
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        <strong>Phone:</strong><br />
                        +989118090476
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-600">
                        <strong>Address:</strong><br />
                        123 Luxury Avenue, Fashion District<br />
                        Tehran, Iran
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-primary/5 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Last updated:</strong> December 2026<br />
                    This privacy policy is effective as of the date listed above and will remain in effect except with 
                    respect to any changes in its provisions in the future, which will be in effect immediately after 
                    being posted on this page.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 