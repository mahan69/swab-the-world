"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, ShoppingBag, Eye, Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Accessories products
const accessoriesProducts = [
  {
    id: 501,
    name: "Silk Twill Scarf",
    price: 495.0,
    image: "/placeholder.svg?height=400&width=300",
    brand: "Hermès",
    category: "Scarves",
  },
  {
    id: 502,
    name: "Interlocking G Leather Belt",
    price: 520.0,
    image: "/placeholder.svg?height=400&width=300",
    brand: "Gucci",
    category: "Belts",
  },
  {
    id: 503,
    name: "Medusa Head Sunglasses",
    price: 395.0,
    image: "/placeholder.svg?height=400&width=300",
    brand: "Versace",
    category: "Sunglasses",
  },
  {
    id: 504,
    name: "Wool Scarf",
    price: 350.0,
    image: "/placeholder.svg?height=400&width=300",
    brand: "Acne Studios",
    category: "Scarves",
  },
  {
    id: 505,
    name: "Leather Gloves",
    price: 290.0,
    image: "/placeholder.svg?height=400&width=300",
    brand: "Dents",
    category: "Gloves",
  },
  {
    id: 506,
    name: "Velvet Bow Tie",
    price: 190.0,
    image: "/placeholder.svg?height=400&width=300",
    brand: "Lanvin",
    category: "Ties",
  },
]

export default function AccessoriesPage() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState("newest")
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Accessories</h1>
          <div className="flex items-center text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-primary transition-colors">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span>Accessories</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-900">Luxury Accessories</h2>
              <p className="text-gray-600">Discover our premium accessories collection</p>
            </div>
            <div className="flex items-center">
              <div className="mr-4 md:hidden">
                <Button variant="outline" className="flex items-center" onClick={() => setFilterOpen(!filterOpen)}>
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${filterOpen ? "rotate-180" : ""}`} />
                </Button>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {accessoriesProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4">
                  <Link href={`/product/${product.id}`}>
                    <div className="relative h-80 w-full overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </Link>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
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
                  <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-lg font-medium text-gray-900 mb-2 hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 