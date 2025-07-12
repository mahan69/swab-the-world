"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Plus, Minus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is Mahan Luxe?",
        answer: "Mahan Luxe is a premium luxury fashion retailer offering high-end clothing, accessories, and lifestyle products from world-renowned brands. We curate exceptional pieces that combine timeless elegance with contemporary style."
      },
      {
        question: "Where are you located?",
        answer: "Our flagship store is located at 123 Luxury Avenue, Fashion District, Tehran, Iran. We also offer worldwide shipping through our online platform."
      },
      {
        question: "What are your business hours?",
        answer: "Our store is open Monday to Friday from 9:00 AM to 6:00 PM, Saturday from 10:00 AM to 4:00 PM, and closed on Sundays. Online orders can be placed 24/7."
      }
    ]
  },
  {
    category: "Shopping",
    questions: [
      {
        question: "Do you offer international shipping?",
        answer: "Yes, we offer worldwide shipping to most countries. International shipping rates and delivery times vary by location. Free shipping is available on orders over $100 within the country."
      },
      {
        question: "How long does shipping take?",
        answer: "Standard shipping typically takes 3-5 business days within the country and 7-14 business days for international orders. Express shipping options are available for faster delivery."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment system."
      },
      {
        question: "Do you offer gift wrapping?",
        answer: "Yes, we offer complimentary gift wrapping for all orders. You can select this option during checkout, and we'll wrap your items in our signature luxury packaging."
      }
    ]
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for all our products. Items must be unworn, with tags attached, and in their original packaging. Return shipping is free for domestic orders."
      },
      {
        question: "How do I return an item?",
        answer: "To return an item, please contact our customer service team within 30 days of purchase. We'll provide you with a return label and instructions. Returns are processed within 5-7 business days."
      },
      {
        question: "Do you offer exchanges?",
        answer: "Yes, we offer exchanges for different sizes or colors of the same item. Exchanges are subject to availability and must be requested within 30 days of purchase."
      },
      {
        question: "What if my item arrives damaged?",
        answer: "If your item arrives damaged, please contact us immediately with photos of the damage. We'll arrange for a replacement or refund at no additional cost."
      }
    ]
  },
  {
    category: "Product Information",
    questions: [
      {
        question: "Are your products authentic?",
        answer: "Yes, all our products are 100% authentic. We work directly with authorized dealers and brands to ensure the authenticity of every item we sell."
      },
      {
        question: "Do you offer size guides?",
        answer: "Yes, we provide detailed size guides for all our clothing and footwear. You can find size charts on each product page to help you find the perfect fit."
      },
      {
        question: "Can I get product recommendations?",
        answer: "Absolutely! Our personal stylists are available to provide personalized recommendations based on your style preferences, body type, and occasion. Contact us to schedule a consultation."
      },
      {
        question: "Do you offer alterations?",
        answer: "Yes, we offer in-store alterations for most clothing items. Our expert tailors can make adjustments to ensure the perfect fit. Alteration services are available for an additional fee."
      }
    ]
  },
  {
    category: "Customer Service",
    questions: [
      {
        question: "How can I contact customer service?",
        answer: "You can reach our customer service team by phone at +989118090476, email at mahan.khanipour7@gmail.com, or through our live chat feature during business hours."
      },
      {
        question: "Do you offer personal shopping services?",
        answer: "Yes, we offer personal shopping services for VIP customers. Our experienced stylists can help you create the perfect wardrobe for any occasion. Contact us to learn more."
      },
      {
        question: "Can I schedule a private appointment?",
        answer: "Yes, we offer private shopping appointments outside of regular business hours. This service is available for VIP customers and can be arranged by contacting our customer service team."
      },
      {
        question: "Do you offer loyalty programs?",
        answer: "Yes, we have a VIP loyalty program that offers exclusive benefits including early access to sales, special events, and personalized styling services. Contact us to learn more about membership."
      }
    ]
  }
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleItem = (itemId: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <div className="flex items-center text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>FAQ</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to the most commonly asked questions about our products, services, and policies.
              </p>
            </div>

            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-8">
              {filteredData.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
                  <div className="space-y-4">
                    {category.questions.map((item, itemIndex) => {
                      const itemId = `${category.category}-${itemIndex}`
                      const isExpanded = expandedItems.has(itemId)
                      
                      return (
                        <motion.div
                          key={itemId}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium text-gray-900">{item.question}</span>
                            {isExpanded ? (
                              <Minus className="h-5 w-5 text-gray-500" />
                            ) : (
                              <Plus className="h-5 w-5 text-gray-500" />
                            )}
                          </button>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-4"
                            >
                              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                            </motion.div>
                          )}
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredData.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-500 mb-6">Try searching with different keywords or browse our categories.</p>
                <Button onClick={() => setSearchTerm("")} variant="outline">
                  Clear Search
                </Button>
              </div>
            )}

            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our customer service team is here to help.
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