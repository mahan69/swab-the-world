"use client"

import { useState } from "react"
import NextImage from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Featured initiatives and ways to get involved
const initiatives = [
  {
    id: 1,
    title: "Join the Registry",
    description: "Become a potential stem cell donor and help save lives.",
    image: "/placeholder.svg?height=400&width=300",
    link: "/register",
    buttonText: "Register Now",
  },
  {
    id: 2,
    title: "Donate",
    description: "Support our mission with a financial contribution.",
    image: "/placeholder.svg?height=400&width=300",
    link: "/donate",
    buttonText: "Donate",
  },
  {
    id: 3,
    title: "Volunteer",
    description: "Help organize drives and spread awareness in your community.",
    image: "/placeholder.svg?height=400&width=300",
    link: "/volunteer",
    buttonText: "Get Involved",
  },
  {
    id: 4,
    title: "Corporate Partnerships",
    description: "Partner with us to make a meaningful impact.",
    image: "/placeholder.svg?height=400&width=300",
    link: "/partnerships",
    buttonText: "Learn More",
  },
]

export default function FeaturedInitiatives() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How You Can Help</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            There are many ways to get involved and make a difference. Every action counts in our mission to diversify
            the stem cell registry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              onMouseEnter={() => setHoveredItem(initiative.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4">
                <Link href={initiative.link}>
                  <div className="relative h-60 w-full overflow-hidden">
                    <NextImage
                      src={initiative.image || "/placeholder.svg"}
                      alt={initiative.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </Link>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === initiative.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-white text-primary hover:bg-primary hover:text-white">
                      {initiative.buttonText}
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/get-involved"
            className="inline-block px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            See All Ways to Help
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
