"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, ShoppingBag, Share2, Star, Truck, RefreshCw, Shield, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import RelatedProducts from "@/components/related-products"

// Mock product data
const product = {
  id: 1,
  name: "Premium Leather Jacket",
  price: 299.99,
  originalPrice: 399.99,
  discount: 25,
  description:
    "Crafted from the finest leather, this premium jacket combines style and durability. The sleek design and attention to detail make it a perfect addition to any wardrobe. Featuring multiple pockets and a comfortable fit, it's ideal for both casual and semi-formal occasions.",
  rating: 4.8,
  reviewCount: 124,
  sku: "LJ-2023-001",
  availability: "In Stock",
  brand: "Mahan Luxe",
  category: "Clothing",
  tags: ["leather", "jacket", "premium", "men"],
  images: [
    "/placeholder.svg?height=600&width=500",
    "/placeholder.svg?height=600&width=500",
    "/placeholder.svg?height=600&width=500",
    "/placeholder.svg?height=600&width=500",
  ],
  colors: [
    { name: "Black", value: "#000000" },
    { name: "Brown", value: "#964B00" },
    { name: "Navy", value: "#000080" },
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  features: [
    "100% Genuine Leather",
    "Water-resistant finish",
    "Quilted lining for extra warmth",
    "Multiple interior and exterior pockets",
    "Heavy-duty YKK zippers",
    "Adjustable cuffs and waist",
  ],
  specifications: {
    Material: "Full-grain leather",
    Lining: "100% Polyester",
    Fit: "Regular fit",
    Care: "Professional leather cleaning only",
    Origin: "Handcrafted in Italy",
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [mainImage, setMainImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="pt-20">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Images */}
            <div className="lg:w-1/2">
              <div className="relative h-[500px] mb-4 rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mainImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full"
                  >
                    <Image
                      src={product.images[mainImage] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative h-24 rounded-md overflow-hidden cursor-pointer border-2 ${
                      mainImage === index ? "border-primary" : "border-transparent"
                    }`}
                    onClick={() => setMainImage(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - View ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2">
              <div className="flex items-center mb-2">
                <Link href="/shop" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  Shop
                </Link>
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/shop/clothing" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  Clothing
                </Link>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
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
                <span className="text-sm text-gray-500 ml-2">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through ml-3">${product.originalPrice.toFixed(2)}</span>
                    <span className="ml-3 bg-red-100 text-red-600 text-sm font-medium px-2 py-1 rounded">
                      {product.discount}% OFF
                    </span>
                  </>
                )}
              </div>

              <p className="text-gray-600 mb-8">{product.description}</p>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <motion.div
                      key={color.name}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`relative w-10 h-10 rounded-full cursor-pointer border-2 ${
                        selectedColor.name === color.name ? "border-primary" : "border-transparent"
                      }`}
                      onClick={() => setSelectedColor(color)}
                    >
                      <div
                        className="absolute inset-1 rounded-full"
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      ></div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">Selected: {selectedColor.name}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
                <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <RadioGroupItem value={size} id={`size-${size}`} className="hidden" />
                      <Label
                        htmlFor={`size-${size}`}
                        className={`px-4 py-2 border rounded-md cursor-pointer transition-all ${
                          selectedSize === size
                            ? "border-primary bg-primary text-white"
                            : "border-gray-300 hover:border-primary"
                        }`}
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <Link href="#size-guide" className="text-sm text-primary hover:underline mt-2 inline-block">
                  Size Guide
                </Link>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="rounded-r-none"
                  >
                    <Minus size={16} />
                  </Button>
                  <div className="w-16 h-10 flex items-center justify-center border-y border-gray-300">{quantity}</div>
                  <Button variant="outline" size="icon" onClick={incrementQuantity} className="rounded-l-none">
                    <Plus size={16} />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-primary hover:bg-primary/90 text-white flex-1 py-6" size="lg">
                  <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white py-6"
                >
                  <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
                </Button>
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-primary mr-3" />
                  <span className="text-sm text-gray-600">Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center">
                  <RefreshCw className="h-5 w-5 text-primary mr-3" />
                  <span className="text-sm text-gray-600">30-day easy returns</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-3" />
                  <span className="text-sm text-gray-600">2-year warranty</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">SKU:</span>
                  <span className="text-sm text-gray-600">{product.sku}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">Availability:</span>
                  <span className="text-sm text-green-600">{product.availability}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Categories:</span>
                  <span className="text-sm text-gray-600">{product.category}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Share2 className="h-4 w-4" /> Share this Product
                </Button>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
                <TabsTrigger
                  value="description"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-base"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-base"
                >
                  Features
                </TabsTrigger>
                <TabsTrigger
                  value="specifications"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-base"
                >
                  Specifications
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-base"
                >
                  Reviews ({product.reviewCount})
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-4">
                    Crafted from the finest leather, this premium jacket combines style and durability. The sleek design
                    and attention to detail make it a perfect addition to any wardrobe.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Featuring multiple pockets and a comfortable fit, it's ideal for both casual and semi-formal
                    occasions. The jacket is designed to provide warmth without being bulky, making it perfect for
                    transitional weather.
                  </p>
                  <p className="text-gray-600">
                    Each jacket is carefully inspected to ensure the highest quality standards. The leather will develop
                    a beautiful patina over time, making each piece uniquely yours.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="features" className="pt-6">
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="specifications" className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index} className="border-b border-gray-200 pb-3">
                      <dt className="text-sm font-medium text-gray-900">{key}</dt>
                      <dd className="mt-1 text-sm text-gray-600">{value}</dd>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="pt-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-center mb-4">
                        <div className="text-5xl font-bold text-gray-900">{product.rating}</div>
                        <div className="flex justify-center my-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={20}
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
                        <div className="text-sm text-gray-500">Based on {product.reviewCount} reviews</div>
                      </div>

                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((star) => (
                          <div key={star} className="flex items-center">
                            <div className="text-sm text-gray-600 w-6">{star}</div>
                            <Star size={16} className="text-yellow-400 fill-yellow-400 mr-2" />
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{
                                  width: `${
                                    star === 5
                                      ? "70%"
                                      : star === 4
                                        ? "20%"
                                        : star === 3
                                          ? "7%"
                                          : star === 2
                                            ? "2%"
                                            : "1%"
                                  }`,
                                }}
                              ></div>
                            </div>
                            <div className="text-sm text-gray-500 w-10 text-right">
                              {star === 5 ? "70%" : star === 4 ? "20%" : star === 3 ? "7%" : star === 2 ? "2%" : "1%"}
                            </div>
                          </div>
                        ))}
                      </div>

                      <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white">Write a Review</Button>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <div className="space-y-6">
                      {/* Sample reviews */}
                      {[1, 2, 3].map((review) => (
                        <div key={review} className="border-b border-gray-200 pb-6">
                          <div className="flex justify-between mb-2">
                            <div className="font-medium text-gray-900">John Doe</div>
                            <div className="text-sm text-gray-500">March 15, 2023</div>
                          </div>
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={
                                  i < (review === 3 ? 4 : 5) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                }
                              />
                            ))}
                          </div>
                          <h4 className="font-medium text-gray-900 mb-2">
                            {review === 1
                              ? "Excellent quality and design"
                              : review === 2
                                ? "Perfect fit and very comfortable"
                                : "Good but could be better"}
                          </h4>
                          <p className="text-gray-600">
                            {review === 1
                              ? "This jacket exceeded my expectations. The leather is soft yet durable, and the craftsmanship is outstanding. I've received many compliments when wearing it."
                              : review === 2
                                ? "I was worried about the sizing, but it fits perfectly. The jacket is very comfortable and warm without being too heavy. Definitely worth the investment."
                                : "The quality of the leather is good, but I found the sleeves to be slightly longer than expected. Otherwise, it's a nice jacket."}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="mt-6">
                      Load More Reviews
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-gray-900">How do I care for leather products?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  To maintain the quality of your leather jacket, we recommend cleaning it with a damp cloth and mild
                  soap when necessary. Apply a leather conditioner every few months to keep the leather supple. Store in
                  a cool, dry place and avoid direct sunlight for prolonged periods.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-gray-900">What is your return policy?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We offer a 30-day return policy for all our products. Items must be unworn, with tags attached, and in
                  their original packaging. Please note that customized items cannot be returned unless there is a
                  manufacturing defect.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-gray-900">How long does shipping take?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Standard shipping typically takes 3-5 business days within the country and 7-14 business days for
                  international orders. We also offer express shipping options at checkout for faster delivery.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-gray-900">Do you offer size exchanges?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, we offer size exchanges within 30 days of purchase. Please contact our customer service team to
                  initiate an exchange. The item must be unworn and in its original condition.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Related Products */}
          <RelatedProducts />
        </div>
      </section>
    </div>
  )
}
