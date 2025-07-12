"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, ShoppingBag, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

// Brands data
const brands = [
  {
    id: 1,
    name: "Gucci",
    description: "Italian luxury fashion house",
    image: "/placeholder.svg?height=400&width=300",
    productCount: 45,
  },
  {
    id: 2,
    name: "Louis Vuitton",
    description: "French luxury fashion house",
    image: "/placeholder.svg?height=400&width=300",
    productCount: 38,
  },
  {
    id: 3,
    name: "Chanel",
    description: "French luxury fashion house",
    image: "/placeholder.svg?height=400&width=300",
    productCount: 32,
  },
  {
    id: 4,
    name: "Prada",
    description: "Italian luxury fashion house",
    image: "/placeholder.svg?height=400&width=300",
    productCount: 28,
  },
  {
    id: 5,
    name: "Hermès",
    description: "French luxury fashion house",
    image: "/placeholder.svg?height=400&width=300",
    productCount: 42,
  },
  {
    id: 6,
    name: "Bottega Veneta",
    description: "Italian luxury fashion house",
    image: "/placeholder.svg?height=400&width=300",
    productCount: 25,
  },
  {
    id: 7,
    name: "Saint Laurent",
    description: "French luxury fashion house",
    image: "/placeholder.svg?height=400&width=300",
    productCount: 31,
  },
  {
    id: 8,
    name: "Balenciaga",
    description: "Spanish luxury fashion house",
    image: "/placeholder.svg?height=400&width=300",
    productCount: 29,
  },
]

export default function BrandsPage() {
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null)

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Brands</h1>
          <div className="flex items-center text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-primary transition-colors">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span>Brands</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Luxury Brands</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our curated collection of the world's most prestigious luxury brands, each offering unique craftsmanship and timeless elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
                onMouseEnter={() => setHoveredBrand(brand.id)}
                onMouseLeave={() => setHoveredBrand(null)}
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4">
                  <Link href={`/shop/brands/${brand.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="relative h-80 w-full overflow-hidden">
                      <Image
                        src={brand.image || "/placeholder.svg"}
                        alt={brand.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </Link>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredBrand === brand.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <ShoppingBag size={18} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Heart size={18} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Eye size={18} />
                    </motion.button>
                  </motion.div>
                </div>

                <div className="text-center">
                  <Link href={`/shop/brands/${brand.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary transition-colors">
                      {brand.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-2">{brand.description}</p>
                  <p className="text-sm text-gray-500">{brand.productCount} products</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 