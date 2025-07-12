"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, ShoppingBag, Filter, ChevronDown, Star, Search, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useProductActions } from "@/lib/product-actions"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

// Enhanced product data with more realistic products
const products = [
  {
    id: 1,
    name: "Italian Leather Jacket",
    price: 1299.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
    brand: "Gucci",
    isNew: true,
    isSale: false,
    discount: 0,
    rating: 4.8,
    description: "Premium Italian leather jacket with signature design elements",
  },
  {
    id: 2,
    name: "Designer Aviator Sunglasses",
    price: 349.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
    brand: "Ray-Ban",
    isNew: true,
    isSale: false,
    discount: 0,
    rating: 4.7,
    description: "Classic aviator design with polarized lenses and gold-tone frame",
  },
  {
    id: 3,
    name: "Automatic Chronograph Watch",
    price: 5999.99,
    originalPrice: 7499.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Watches",
    brand: "Rolex",
    isNew: false,
    isSale: true,
    discount: 20,
    rating: 4.9,
    description: "Swiss-made automatic chronograph with stainless steel bracelet",
  },
  {
    id: 4,
    name: "Quilted Leather Handbag",
    price: 2349.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Bags",
    brand: "Chanel",
    isNew: false,
    isSale: false,
    discount: 0,
    rating: 4.8,
    description: "Iconic quilted leather handbag with gold-tone chain strap",
  },
  {
    id: 5,
    name: "Luxury Sneakers",
    price: 789.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Shoes",
    brand: "Balenciaga",
    isNew: true,
    isSale: false,
    discount: 0,
    rating: 4.6,
    description: "Premium leather sneakers with signature design elements",
  },
  {
    id: 6,
    name: "Silk Evening Dress",
    price: 1849.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
    brand: "Versace",
    isNew: false,
    isSale: false,
    discount: 0,
    rating: 4.7,
    description: "Elegant silk evening dress with intricate embellishments",
  },
  {
    id: 7,
    name: "Cashmere Scarf",
    price: 389.99,
    originalPrice: 519.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
    brand: "Hermès",
    isNew: false,
    isSale: true,
    discount: 25,
    rating: 4.8,
    description: "Ultra-soft cashmere scarf with signature pattern",
  },
  {
    id: 8,
    name: "Leather Card Holder",
    price: 279.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
    brand: "Louis Vuitton",
    isNew: false,
    isSale: false,
    discount: 0,
    rating: 4.5,
    description: "Compact card holder in signature monogram leather",
  },
  {
    id: 9,
    name: "Diamond Stud Earrings",
    price: 3999.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Jewelry",
    brand: "Tiffany & Co.",
    isNew: true,
    isSale: false,
    discount: 0,
    rating: 4.9,
    description: "Classic diamond stud earrings in platinum setting",
  },
  {
    id: 10,
    name: "Wool Tailored Suit",
    price: 2799.99,
    originalPrice: 3499.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
    brand: "Tom Ford",
    isNew: false,
    isSale: true,
    discount: 20,
    rating: 4.8,
    description: "Impeccably tailored wool suit in classic navy",
  },
  {
    id: 11,
    name: "Leather Belt with Logo Buckle",
    price: 459.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
    brand: "Gucci",
    isNew: false,
    isSale: false,
    discount: 0,
    rating: 4.6,
    description: "Signature leather belt with iconic logo buckle",
  },
  {
    id: 12,
    name: "Silk Tie",
    price: 229.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
    brand: "Hermès",
    isNew: false,
    isSale: false,
    discount: 0,
    rating: 4.7,
    description: "Hand-finished silk tie with elegant pattern",
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
  { id: "gucci", name: "Gucci", count: 28 },
  { id: "louisvuitton", name: "Louis Vuitton", count: 34 },
  { id: "chanel", name: "Chanel", count: 19 },
  { id: "hermes", name: "Hermès", count: 23 },
  { id: "rolex", name: "Rolex", count: 15 },
  { id: "prada", name: "Prada", count: 21 },
  { id: "versace", name: "Versace", count: 17 },
  { id: "balenciaga", name: "Balenciaga", count: 14 },
  { id: "tiffany", name: "Tiffany & Co.", count: 12 },
  { id: "tomford", name: "Tom Ford", count: 16 },
]

export default function ShopPage() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [priceRange, setPriceRange] = useState([0, 6000])
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState("featured")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [filteredProducts, setFilteredProducts] = useState(products)
  const { addToCart, addToWishlist, viewProduct } = useProductActions()

  // Filter products based on selected filters
  useEffect(() => {
    let result = [...products]

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query),
      )
    }

    // Filter by price range
    result = result.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Filter by categories
    if (selectedCategories.length > 0) {
      result = result.filter((product) => selectedCategories.includes(product.category.toLowerCase().replace(" ", "")))
    }

    // Filter by brands
    if (selectedBrands.length > 0) {
      result = result.filter((product) =>
        selectedBrands.includes(product.brand.toLowerCase().replace(" & ", "").replace(" ", "")),
      )
    }

    // Sort products
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === "newest") {
      result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1))
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating)
    }

    setFilteredProducts(result)
  }, [searchQuery, priceRange, selectedCategories, selectedBrands, sortBy])

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const toggleBrand = (brandId: string) => {
    setSelectedBrands((prev) => (prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]))
  }

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Luxury Collection</h1>
          <div className="flex items-center text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Shop</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search for products, brands, etc."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

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
                          <Checkbox
                            id={category.id}
                            checked={selectedCategories.includes(category.id)}
                            onCheckedChange={() => toggleCategory(category.id)}
                          />
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
                        defaultValue={[0, 6000]}
                        max={6000}
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
                          <Checkbox
                            id={brand.id}
                            checked={selectedBrands.includes(brand.id)}
                            onCheckedChange={() => toggleBrand(brand.id)}
                          />
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

                <AccordionItem value="availability">
                  <AccordionTrigger className="text-lg font-medium">Availability</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center">
                        <Checkbox id="in-stock" />
                        <label
                          htmlFor="in-stock"
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          In Stock
                        </label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="on-sale" />
                        <label
                          htmlFor="on-sale"
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          On Sale
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedBrands([])
                    setPriceRange([0, 6000])
                    setSearchQuery("")
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>

            {/* Product grid */}
            <div className="lg:w-3/4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <p className="text-gray-600 mb-4 sm:mb-0">Showing {filteredProducts.length} products</p>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, index) => (
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

                        {product.isNew && (
                          <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                            NEW
                          </div>
                        )}

                        {product.isSale && (
                          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            {product.discount}% OFF
                          </div>
                        )}

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
                            onClick={e => { 
                              console.log("Add to cart clicked for product:", product.name);
                              e.preventDefault(); 
                              e.stopPropagation(); 
                              addToCart(product); 
                            }}
                          >
                            <ShoppingBag size={18} />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                            onClick={e => { 
                              console.log("Add to wishlist clicked for product:", product.name);
                              e.preventDefault(); 
                              e.stopPropagation(); 
                              addToWishlist(product); 
                            }}
                          >
                            <Heart size={18} />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                            onClick={e => { 
                              console.log("View product clicked for product:", product.name);
                              e.preventDefault(); 
                              e.stopPropagation(); 
                              viewProduct(product.id); 
                            }}
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
                          {product.originalPrice && (
                            <span className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                          )}
                          <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
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
              ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any products matching your criteria. Try adjusting your filters or search query.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategories([])
                      setSelectedBrands([])
                      setPriceRange([0, 6000])
                      setSearchQuery("")
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}

              {filteredProducts.length > 0 && (
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
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg group"
            >
              <div className="relative h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Summer Collection"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Summer Collection</h3>
                  <p className="text-white/80 mb-4">Discover our latest summer essentials</p>
                  <Button className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">Shop Now</Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg group"
            >
              <div className="relative h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Exclusive Watches"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Exclusive Watches</h3>
                  <p className="text-white/80 mb-4">Timeless elegance for every occasion</p>
                  <Button className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">Shop Now</Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg group"
            >
              <div className="relative h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Designer Bags"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Designer Bags</h3>
                  <p className="text-white/80 mb-4">Iconic styles from top luxury brands</p>
                  <Button className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">Shop Now</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shopping Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Authentic Products</h3>
              <p className="text-gray-600">100% authentic products from luxury brands</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8 4-8-4V5l8 4 8-4v2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free worldwide shipping on all orders over $500</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-gray-600">Multiple secure payment methods accepted</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day easy return policy for all products</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
