"use client"

import NextImage from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

// Featured luxury brands
const featuredBrands = [
  {
    id: 1,
    name: "Gucci",
    image: "/placeholder.svg?height=600&width=400",
    link: "/shop/brands/gucci",
    description: "Italian luxury fashion house known for contemporary elegance",
    productCount: 156,
  },
  {
    id: 2,
    name: "Louis Vuitton",
    image: "/placeholder.svg?height=600&width=400",
    link: "/shop/brands/louis-vuitton",
    description: "French luxury fashion house with iconic monogram designs",
    productCount: 203,
  },
  {
    id: 3,
    name: "Chanel",
    image: "/placeholder.svg?height=600&width=400",
    link: "/shop/brands/chanel",
    description: "Timeless French luxury with classic sophistication",
    productCount: 89,
  },
  {
    id: 4,
    name: "Prada",
    image: "/placeholder.svg?height=600&width=400",
    link: "/shop/brands/prada",
    description: "Italian luxury fashion house with minimalist elegance",
    productCount: 134,
  },
  {
    id: 5,
    name: "Hermès",
    image: "/placeholder.svg?height=600&width=400",
    link: "/shop/brands/hermes",
    description: "French luxury house renowned for exceptional craftsmanship",
    productCount: 78,
  },
  {
    id: 6,
    name: "View All Brands",
    image: "/placeholder.svg?height=600&width=400",
    link: "/shop/brands",
    description: "Explore our complete collection of luxury brands",
    productCount: 1200,
    isViewAll: true,
  },
]

export default function BrandsSection() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Brands</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the world's most prestigious luxury brands, each offering unique craftsmanship and timeless design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBrands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={brand.link} className="block">
                <div className="relative h-80 overflow-hidden rounded-lg">
                  <NextImage
                    src={brand.image || "/placeholder.svg"}
                    alt={brand.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{brand.name}</h3>
                    <p className="text-white/80 text-sm mb-2">{brand.description}</p>
                    {!brand.isViewAll && (
                      <p className="text-white/60 text-sm">{brand.productCount} products</p>
                    )}
                  </div>
                  {brand.isViewAll && (
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">+{brand.productCount}</div>
                        <div className="text-white/90 text-lg">Luxury Brands</div>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
