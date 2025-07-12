"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                MAHAN LUXE
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Mahan Luxe is your premier destination for luxury fashion, accessories, and lifestyle products. We curate
              the finest collections from around the world.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Shop</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/shop/men" className="text-gray-400 hover:text-primary transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/shop/women" className="text-gray-400 hover:text-primary transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/shop/accessories" className="text-gray-400 hover:text-primary transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/shop/shoes" className="text-gray-400 hover:text-primary transition-colors">
                  Shoes
                </Link>
              </li>
              <li>
                <Link href="/shop/watches" className="text-gray-400 hover:text-primary transition-colors">
                  Watches
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-gray-400 hover:text-primary transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Customer Service</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns" className="text-gray-400 hover:text-primary transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-gray-400 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Stay Connected</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <div className="flex mb-6">
              <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="ml-2 bg-primary hover:bg-primary/90">
                <Send size={16} />
              </Button>
            </div>
            <address className="not-italic text-gray-400 space-y-3">
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                123 Luxury Avenue, Fashion District
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <a href="tel:+989118090476" className="hover:text-primary transition-colors">
                  +989118090476
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <a href="mailto:mahan.khanipour7@gmail.com" className="hover:text-primary transition-colors">
                  mahan.khanipour7@gmail.com
                </a>
              </p>
            </address>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Mahan Luxe. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
