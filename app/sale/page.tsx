"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, ShoppingBag, Eye, Filter, ChevronDown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useProductActions } from "@/lib/product-actions"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

// Sale products with luxury brands
const saleProducts = [
  {
    id: 201,
    name: "Leather Biker Jacket",
    price: 1599.99,
    originalPrice: 2499.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
    brand: "Saint Laurent",
    discount: 36,
    rating: 4.8,
  },
  {
    id: 202,
    name: "Wool Cashmere Coat",
    price: 1299.99,
    originalPrice: 1999.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
    brand: "Burberry",
    discount: 35,
    rating: 4.7,
  },
  {
    id: 203,
    name: "Leather Tote Bag",
    price: 1450.0,
    originalPrice: 2100.0,
    image: "/placeholder.svg?height=400&width=300",
    category: "Bags",
    brand: "Celine",
    discount: 31,
    rating: 4.9,
  },
  {
    id: 204,
    name: "Silk Evening Dress",
    price: 1799.99,
    originalPrice: 2899.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
    brand: "Valentino",
    discount: 38,
    rating: 4.8,
  },
  {
    id: 205,
    name: "Leather Ankle Boots",
    price: 699.99,
    originalPrice: 1099.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Shoes",
    brand: "Jimmy Choo",
    discount: 36,
    rating: 4.6,
  },
  {
    id: 206,
    name: "Wool Tailored Suit",
    price: 1899.99,
    originalPrice: 2999.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
    brand: "Tom Ford",
    discount: 37,
    rating: 4.9,
  },
  {
    id: 207,
    name: "Diamond Tennis Bracelet",
    price: 4999.99,
    originalPrice: 7999.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Jewelry",
    brand: "Cartier",
    discount: 38,
    rating: 4.9,
  },
  {
    id: 208,
    name: "Cashmere Sweater",
    price: 499.99,
    originalPrice: 799.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
    brand: "Loro Piana",
    discount: 38,
    rating: 4.7,
  },
  {
    id: 209,
    name: "Leather Crossbody Bag",
    price: 899.99,
    originalPrice: 1399.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Bags",
    brand: "Bottega Veneta",
    discount: 36,
    rating: 4.8,
  },
  {
    id: 210,
    name: "Silk Blouse",
    price: 399.99,
    originalPrice: 599.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
    brand: "Equipment",
    discount: 33,
    rating: 4.6,
  },
  {
    id: 211,
    name: "Leather Loafers",
    price: 499.99,
    originalPrice: 799.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Shoes",
    brand: "Gucci",
    discount: 38,
    rating: 4.7,
  },
  {
    id: 212,
    name: "Wool Scarf",
    price: 249.99,
    originalPrice: 399.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
    brand: "Acne Studios",
    discount: 38,
    rating: 4.5,
  },
]

const categories = [
  { id: "clothing", name: "Clothing", count: 42 },
  { id: "shoes", name: "Shoes", count: 36 },
  { id: "accessories", name: "Accessories", count: 58 },
  { id: "watches", name: "Watches", count: 24 },
  { id: "bags", name: "Bags", count: 32 },
  { id: "jewelry", name: "Jewelry", count: 18 },
]

const brands = [
  { id: "saintlaurent", name: "Saint Laurent", count: 28 },
  { id: "burberry", name: "Burberry", count: 34 },
  { id: "gucci", name: "Gucci", count: 19 },
  { id: "valentino", name: "Valentino", count: 23 },
  { id: "tomford", name: "Tom Ford", count: 15 },
  { id: "bottegaveneta", name: "Bottega Veneta", count: 21 },
]

export default function SalePage() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [filterOpen, setFilterOpen] = useState(false)
  const { addToCart, addToWishlist, viewProduct } = useProductActions()
  const [sortBy, setSortBy] = useState("discount")

  return (
    <div className="pt-20">
      <section className="bg-red-600 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">LUXURY SALE</h1>
            <p className="text-xl text-white/90 mb-6">Up to 40% off on premium designer items</p>
            <div className="inline-block bg-white text-red-600 font-bold px-4 py-2 rounded-md">LIMITED TIME ONLY</div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile filter button */}
            <div className="lg:hidden mb-4">
              <Button
                variant="outline"
                className="w-full flex items-center justify-between"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <span className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" /> Filters
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${filterOpen ? "rotate-180" : ""}`} />
              </Button>
            </div>

            {/* Sidebar filters */}
            <div className={`lg:w-1/4 ${filterOpen ? "block" : "hidden lg:block"} bg-white p-6 rounded-lg shadow-sm`}>
              <h2 className="text-xl font-bold mb-6">Filters</h2>

              <Accordion type="single" collapsible defaultValue="categories">
                <AccordionItem value="categories">
                  <AccordionTrigger className="text-lg font-medium">Categories</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 mt-2">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center">
                          <Checkbox id={category.id} />
                          <label
                            htmlFor={category.id}
                            className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category.name} ({category.count})
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="price">
                  <AccordionTrigger className="text-lg font-medium">Price Range</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 mt-2">
                      <Slider
                        defaultValue={[0, 5000]}
                        max={5000}
                        step={100}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">${priceRange[0]}</span>
                        <span className="text-sm font-medium">${priceRange[1]}</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="brands">
                  <AccordionTrigger className="text-lg font-medium">Brands</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 mt-2">
                      {brands.map((brand) => (
                        <div key={brand.id} className="flex items-center">
                          <Checkbox id={brand.id} />
                          <label
                            htmlFor={brand.id}
                            className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {brand.name} ({brand.count})
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="discount">
                  <AccordionTrigger className="text-lg font-medium">Discount</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center">
                        <Checkbox id="discount-30" />
                        <label
                          htmlFor="discount-30"
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          30% and above
                        </label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="discount-40" />
                        <label
                          htmlFor="discount-40"
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          40% and above
                        </label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="discount-50" />
                        <label
                          htmlFor="discount-50"
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          50% and above
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Product grid */}
            <div className="lg:w-3/4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <p className="text-gray-600 mb-4 sm:mb-0">Showing {saleProducts.length} products</p>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="discount">Biggest Discount</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {saleProducts.map((product, index) => (
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

                      <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}% OFF
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
                          onClick={() => addToCart(product)}
                        >
                          <ShoppingBag size={18} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                          onClick={() => addToWishlist(product)}
                        >
                          <Heart size={18} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                          onClick={() => viewProduct(product.id)}
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
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                        <span className="text-red-600 font-bold">${product.price.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={`${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : i < product.rating
                                    ? "text-yellow-400 fill-yellow-400 opacity-50"
                                    : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                      </div>
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
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sale Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Sale Duration</h3>
                    <p className="text-gray-600">
                      Our luxury sale runs for a limited time only. All discounts are valid while stocks last.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Authenticity Guarantee</h3>
                    <p className="text-gray-600">
                      All sale items are 100% authentic and come with our standard authenticity guarantee.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Returns Policy</h3>
                    <p className="text-gray-600">
                      Sale items follow our standard 30-day return policy. Items must be unworn with original tags
                      attached.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Exclusive Offers</h3>
                    <p className="text-gray-600">
                      Subscribe to our newsletter to receive early access to future sales and exclusive offers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Don't Miss Out!</h2>
            <p className="text-xl text-white/90 mb-8">
              Join our mailing list to be the first to know about upcoming sales and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md border border-white/30 bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-red-600 hover:bg-white/90 whitespace-nowrap">Subscribe Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
