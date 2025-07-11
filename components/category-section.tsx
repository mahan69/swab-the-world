"use client"

import NextImage from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

// Key areas of our work
const categories = [
  {
    id: 1,
    name: "Patient Support",
    image: "/placeholder.svg?height=600&width=400",
    link: "/patient-support",
    description: "Resources and assistance for patients seeking stem cell matches",
  },
  {
    id: 2,
    name: "Donor Recruitment",
    image: "/placeholder.svg?height=600&width=400",
    link: "/donor-recruitment",
    description: "Initiatives to increase diversity in the stem cell registry",
  },
  {
    id: 3,
    name: "Education & Awareness",
    image: "/placeholder.svg?height=600&width=400",
    link: "/education",
    description: "Programs to inform communities about stem cell donation",
  },
  {
    id: 4,
    name: "Research & Innovation",
    image: "/placeholder.svg?height=600&width=400",
    link: "/research",
    description: "Supporting advancements in stem cell transplantation",
  },
]

export default function CategorySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the different areas of our work as we strive to ensure everyone has an equal chance of finding a
            stem cell match.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={category.link} className="block">
                <div className="relative h-80 overflow-hidden rounded-lg">
                  <NextImage
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-white/80">{category.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
