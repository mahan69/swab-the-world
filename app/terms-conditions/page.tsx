"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FileText, Shield, User, CreditCard, Truck } from "lucide-react"

export default function TermsConditionsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <div className="flex items-center text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Terms and Conditions</h2>
              <p className="text-gray-600">
                Please read these terms and conditions carefully before using our website and services.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="h-6 w-6 text-primary mr-3" />
                  Acceptance of Terms
                </h3>
                <p className="text-gray-600 mb-6">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <User className="h-6 w-6 text-primary mr-3" />
                  User Account
                </h3>
                <p className="text-gray-600 mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                  You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>You must be at least 18 years old to create an account</li>
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>You agree to accept responsibility for all activities under your account</li>
                  <li>You must notify us immediately of any unauthorized use of your account</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CreditCard className="h-6 w-6 text-primary mr-3" />
                  Payment Terms
                </h3>
                <p className="text-gray-600 mb-4">
                  All purchases are subject to our payment terms and conditions. By placing an order, you agree to pay the full amount 
                  specified at the time of purchase.
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>All prices are in USD unless otherwise specified</li>
                  <li>Payment is due at the time of order placement</li>
                  <li>We accept major credit cards and PayPal</li>
                  <li>Orders are not confirmed until payment is received</li>
                  <li>We reserve the right to refuse or cancel orders</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Truck className="h-6 w-6 text-primary mr-3" />
                  Shipping and Delivery
                </h3>
                <p className="text-gray-600 mb-4">
                  We strive to process and ship orders as quickly as possible. Delivery times may vary based on your location and 
                  the shipping method selected.
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Orders are typically processed within 1-2 business days</li>
                  <li>Shipping times vary by location and method</li>
                  <li>Risk of loss transfers to you upon delivery</li>
                  <li>We are not responsible for delays beyond our control</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-3" />
                  Privacy and Data Protection
                </h3>
                <p className="text-gray-600 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, 
                  to understand our practices.
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>We collect and use personal information as described in our Privacy Policy</li>
                  <li>We implement appropriate security measures to protect your data</li>
                  <li>We do not sell or rent your personal information to third parties</li>
                  <li>You may request access to or deletion of your personal data</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h3>
                <p className="text-gray-600 mb-6">
                  The website and its original content, features, and functionality are owned by Mahan Luxe and are protected by 
                  international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h3>
                <p className="text-gray-600 mb-6">
                  In no event shall Mahan Luxe, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable 
                  for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of 
                  profits, data, use, goodwill, or other intangible losses, resulting from your use of the website.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h3>
                <p className="text-gray-600 mb-6">
                  These terms shall be interpreted and governed by the laws of Iran, without regard to its conflict of law provisions. 
                  Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h3>
                <p className="text-gray-600 mb-6">
                  We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is 
                  material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <p className="text-gray-600 mb-6">
                  If you have any questions about these terms and conditions, please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600">
                    <strong>Email:</strong> mahan.khanipour7@gmail.com<br />
                    <strong>Phone:</strong> +989118090476<br />
                    <strong>Address:</strong> 123 Luxury Avenue, Fashion District, Tehran, Iran
                  </p>
                </div>

                <div className="mt-12 p-6 bg-primary/5 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Last updated:</strong> December 2026<br />
                    These terms and conditions are effective as of the date listed above and will remain in effect except with respect 
                    to any changes in their provisions in the future, which will be in effect immediately after being posted on this page.
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