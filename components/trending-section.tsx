"use client"

import { useState } from "react"
import NextImage from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Tab } from "@headlessui/react"

const categories = ["Upcoming Drives", "Success Stories", "Recent Donors", "News"]

const items = {
  "Upcoming Drives": [
    {
      id: 1,
      title: "University Campus Drive",
      location: "Stanford University",
      date: "June 15, 2023",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 2,
      title: "Community Center Drive",
      location: "Downtown Community Center",
      date: "June 22, 2023",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 3,
      title: "Corporate Wellness Day",
      location: "Tech Innovation Hub",
      date: "July 5, 2023",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 4,
      title: "Cultural Festival Drive",
      location: "International Cultural Center",
      date: "July 12, 2023",
      image: "/placeholder.svg?height=400&width=300",
    },
  ],
  "Success Stories": [
    {
      id: 5,
      title: "Sarah's Second Chance",
      description: "Found her match after 2 years of searching",
      image: "/placeholder.svg?height=400&width=300",
      date: "3 months ago",
    },
    {
      id: 6,
      title: "Michael's Journey",
      description: "International donor saved his life",
      image: "/placeholder.svg?height=400&width=300",
      date: "5 months ago",
    },
    {
      id: 7,
      title: "The Rodriguez Family",
      description: "Community rallied to find a match",
      image: "/placeholder.svg?height=400&width=300",
      date: "6 months ago",
    },
    {
      id: 8,
      title: "David's Recovery",
      description: "Back to school after successful transplant",
      image: "/placeholder.svg?height=400&width=300",
      date: "1 year ago",
    },
  ],
  "Recent Donors": [
    {
      id: 9,
      name: "James Wilson",
      location: "New York, USA",
      quote: "Donating was easier than I expected",
      image: "/placeholder.svg?height=400&width=300",
      date: "2 weeks ago",
    },
    {
      id: 10,
      name: "Aisha Patel",
      location: "London, UK",
      quote: "Proud to have helped save a life",
      image: "/placeholder.svg?height=400&width=300",
      date: "1 month ago",
    },
    {
      id: 11,
      name: "Carlos Mendez",
      location: "Mexico City, Mexico",
      quote: "A small sacrifice for a big impact",
      image: "/placeholder.svg?height=400&width=300",
      date: "1 month ago",
    },
    {
      id: 12,
      name: "Mei Lin",
      location: "Singapore",
      quote: "Everyone should consider registering",
      image: "/placeholder.svg?height=400&width=300",
      date: "2 months ago",
    },
  ],
  News: [
    {
      id: 13,
      title: "New Research Breakthrough",
      description: "Scientists improve stem cell matching accuracy",
      image: "/placeholder.svg?height=400&width=300",
      date: "May 10, 2023",
    },
    {
      id: 14,
      title: "Global Registry Milestone",
      description: "50,000 new diverse donors added",
      image: "/placeholder.svg?height=400&width=300",
      date: "April 28, 2023",
    },
    {
      id: 15,
      title: "Policy Change Announcement",
      description: "New guidelines to improve donor diversity",
      image: "/placeholder.svg?height=400&width=300",
      date: "April 15, 2023",
    },
    {
      id: 16,
      title: "International Collaboration",
      description: "Cross-border initiative launched",
      image: "/placeholder.svg?height=400&width=300",
      date: "March 30, 2023",
    },
  ],
}

export default function TrendingSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed about our upcoming events, success stories, and the latest news in stem cell donation.
          </p>
        </motion.div>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex space-x-4 border-b border-gray-200 mb-12 overflow-x-auto pb-2 justify-center">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-all duration-200 focus:outline-none
                  ${
                    selected ? "bg-primary text-white shadow-md" : "text-gray-600 hover:text-primary hover:bg-gray-100"
                  }`
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {categories.map((category, idx) => (
              <Tab.Panel key={idx} className="focus:outline-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                  >
                    {items[category as keyof typeof items].map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="group"
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4">
                          <div className="relative h-60 w-full overflow-hidden">
                            <NextImage
                              src={item.image || "/placeholder.svg"}
                              alt={item.title || item.name || ""}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>

                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-black/40 flex items-center justify-center"
                          >
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="px-4 py-2 bg-white rounded-md text-primary hover:bg-primary hover:text-white transition-colors"
                            >
                              Learn More
                            </motion.button>
                          </motion.div>
                        </div>

                        <div className="text-center">
                          {"title" in item && <h3 className="text-lg font-medium text-gray-900 mb-1">{item.title}</h3>}
                          {"name" in item && <h3 className="text-lg font-medium text-gray-900 mb-1">{item.name}</h3>}
                          {"location" in item && <p className="text-gray-600 mb-1">{item.location}</p>}
                          {"description" in item && <p className="text-gray-600 mb-1">{item.description}</p>}
                          {"quote" in item && <p className="text-gray-600 italic mb-1">"{item.quote}"</p>}
                          <p className="text-sm text-primary">{item.date}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}
