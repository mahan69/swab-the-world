"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Truck, RefreshCw, Shield, Clock, MapPin, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ShippingReturnsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping & Returns</h1>
          <div className="flex items-center text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Shipping & Returns</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Shipping Information</h2>
              <p className="text-gray-600">
                We offer fast, reliable shipping to ensure your luxury items arrive safely and on time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Free Shipping</CardTitle>
                    <CardDescription>On orders over $100</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Enjoy complimentary shipping on all orders over $100 within the country.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Fast Delivery</CardTitle>
                    <CardDescription>3-5 business days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Standard shipping typically takes 3-5 business days within the country.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Secure Packaging</CardTitle>
                    <CardDescription>Luxury protection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      All items are carefully packaged to ensure they arrive in perfect condition.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-primary" />
                      <CardTitle>Shipping Rates</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Orders under $100</span>
                        <span className="font-medium">$10</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Orders $100+</span>
                        <span className="font-medium text-green-600">FREE</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Express Shipping</span>
                        <span className="font-medium">$25</span>
                      </div>
                      <div className="flex justify-between">
                        <span>International</span>
                        <span className="font-medium">$35</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      *International shipping rates and delivery times vary by location.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-primary" />
                      <CardTitle>Delivery Times</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Standard Shipping</span>
                        <span className="font-medium">3-5 business days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Express Shipping</span>
                        <span className="font-medium">1-2 business days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>International</span>
                        <span className="font-medium">7-14 business days</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      *Delivery times may vary during peak seasons and holidays.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Returns & Exchanges</h2>
              <p className="text-gray-600">
                We want you to be completely satisfied with your purchase. Our flexible return policy ensures peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <RefreshCw className="h-6 w-6 text-primary" />
                      <CardTitle>30-Day Return Policy</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Items must be unworn and unwashed</li>
                      <li>• Original tags must be attached</li>
                      <li>• Items must be in original packaging</li>
                      <li>• Return shipping is free for domestic orders</li>
                      <li>• Returns processed within 5-7 business days</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-6 w-6 text-primary" />
                      <CardTitle>Refund Information</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Full refund to original payment method</li>
                      <li>• Refunds processed within 5-7 business days</li>
                      <li>• Store credit available for exchanges</li>
                      <li>• Gift cards are non-refundable</li>
                      <li>• Sale items are final sale</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Return an Item</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Contact Us</h4>
                  <p className="text-sm text-gray-600">
                    Contact our customer service team within 30 days of purchase to initiate your return.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Get Return Label</h4>
                  <p className="text-sm text-gray-600">
                    We'll provide you with a prepaid return label and detailed instructions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Ship & Refund</h4>
                  <p className="text-sm text-gray-600">
                    Ship your item back to us and we'll process your refund within 5-7 business days.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-6">
                Our customer service team is here to help with any questions about shipping or returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/customer-service">Customer Service</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 