"use client"

import { useRef, useEffect } from "react"
import NextImage from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"

// Partner organizations
const partners = [
  { id: 1, name: "National Health Foundation", logo: "/placeholder.svg?height=100&width=200" },
  { id: 2, name: "Global Stem Cell Registry", logo: "/placeholder.svg?height=100&width=200" },
  { id: 3, name: "Medical Research Institute", logo: "/placeholder.svg?height=100&width=200" },
  { id: 4, name: "Community Health Alliance", logo: "/placeholder.svg?height=100&width=200" },
  { id: 5, name: "International Donor Network", logo: "/placeholder.svg?height=100&width=200" },
  { id: 6, name: "Healthcare Innovation Fund", logo: "/placeholder.svg?height=100&width=200" },
]

export default function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading organizations around the world to advance our mission of diversifying the stem
            cell registry.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.5,
                  },
                }),
              }}
              custom={index}
              initial="hidden"
              animate={controls}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="relative h-12 w-full">
                <NextImage
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-3 font-medium text-gray-800">{partner.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
