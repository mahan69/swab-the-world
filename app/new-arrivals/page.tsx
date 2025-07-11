"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, ShoppingBag, Eye, Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// New arrivals products with luxury brands
const newArrivalsProducts = [
  {
    id: 101,
    name: "Monogram Canvas Handbag",
    price: 2450.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "Bags",
    brand: "Louis Vuitton",
    arrivalDate: "2 days ago",
    rating: 4.9,
  },
  {
    id: 102,
    name: "Silk Twill Scarf",
    price: 495.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
    brand: "Hermès",
    arrivalDate: "3 days ago",
    rating: 4.8,
  },
  {
    id: 103,
    name: "Interlocking G Leather Belt",
    price: 520.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
    brand: "Gucci",
    arrivalDate: "5 days ago",
    rating: 4.7,
  },
  {
    id: 104,
    name: "Medusa Head Sunglasses",
    price: 395.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
    brand: "Versace",
    arrivalDate: "1 week ago",
    rating: 4.6,
  },
  {
    id: 105,
    name: "Leather Ankle Boots",
    price: 1290.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "Shoes",
    brand: "Prada",
    arrivalDate: "1 week ago",
    rating: 4.9,
  },
  {
    id: 106,
    name: "Cashmere Sweater",
    price: 890.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
    brand: "Brunello Cucinelli",
    arrivalDate: "1 week ago",
    rating: 4.8,
  },
  {
    id: 107,
    name: "Leather Card Holder",
    price: 350.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
    brand: "Saint Laurent",
    arrivalDate: "10 days ago",
    rating: 4.7,
  },
  {
    id: 108,
    name: "Wool Blazer",
    price: 2200.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
    brand: "Tom Ford",
    arrivalDate: "10 days ago",
    rating: 4.9,
  },
  {
    id: 109,
    name: "Leather Loafers",
    price: 750.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "Shoes",
    brand: "Salvatore Ferragamo",
    arrivalDate: "2 weeks ago",
    rating: 4.8,
  },
  {
    id: 110,
    name: "Silk Tie",
    price: 220.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
    brand: "Ermenegildo Zegna",
    arrivalDate: "2 weeks ago",
    rating: 4.6,
  },
  {
    id: 111,
    name: "Diamond Stud Earrings",
    price: 3500.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "Jewelry",
    brand: "Tiffany & Co.",
    arrivalDate: "2 weeks ago",
    rating: 4.9,
  },
  {
    id: 112,
    name: "Leather Crossbody Bag",
    price: 1850.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "Bags",
    brand: "Bottega Veneta",
    arrivalDate: "2 weeks ago",
    rating: 4.8,
  },
]

export default function NewArrivalsPage() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState("newest")
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">New Arrivals</h1>
          <div className="flex items-center text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>New Arrivals</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-900">Latest Luxury Arrivals</h2>
              <p className="text-gray-600">Discover our newest additions from top luxury brands</p>
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

          <div
            className={`md:flex space-y-4 md:space-y-0 md:space-x-4 mb-8 ${filterOpen ? "block" : "hidden md:flex"}`}
          >
            <Button
              variant="outline"
              className={`${
                sortBy === "newest" ? "bg-primary text-white" : "bg-white text-gray-700"
              } hover:bg-primary hover:text-white`}
              onClick={() => setSortBy("newest")}
            >
              All
            </Button>
            <Button variant="outline" className="bg-white text-gray-700 hover:bg-primary hover:text-white">
              Clothing
            </Button>
            <Button variant="outline" className="bg-white text-gray-700 hover:bg-primary hover:text-white">
              Shoes
            </Button>
            <Button variant="outline" className="bg-white text-gray-700 hover:bg-primary hover:text-white">
              Bags
            </Button>
            <Button variant="outline" className="bg-white text-gray-700 hover:bg-primary hover:text-white">
              Accessories
            </Button>
            <Button variant="outline" className="bg-white text-gray-700 hover:bg-primary hover:text-white">
              Jewelry
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivalsProducts.map((product, index) => (
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

                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </div>

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
                  <p className="text-primary font-bold mb-1">${product.price.toFixed(2)}</p>
                  <p className="text-xs text-gray-500">Added {product.arrivalDate}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="mr-2">
              Previous
            </Button>
            <Button variant="outline" className="bg-primary text-white">
              1
            </Button>
            <Button variant="outline" className="mx-2">
              2
            </Button>
            <Button variant="outline">3</Button>
            <Button variant="outline" className="ml-2">
              Next
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe for New Arrivals</h2>
            <p className="text-gray-600 mb-8">
              Be the first to know about our newest luxury arrivals, exclusive collections, and special events.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
