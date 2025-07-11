"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, ShoppingBag, Star } from "lucide-react"

const relatedProducts = [
  {
    id: 2,
    name: "Designer Sunglasses",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Luxury Watch",
    price: 599.99,
    originalPrice: 799.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
    rating: 4.9,
    discount: 25,
  },
  {
    id: 4,
    name: "Designer Handbag",
    price: 349.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Premium Sneakers",
    price: 189.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Shoes",
    rating: 4.6,
  },
]

export default function RelatedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {relatedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
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

              {"discount" in product && product.discount && (
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
              </motion.div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">{product.category}</p>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                {"originalPrice" in product && product.originalPrice && (
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
    </section>
  )
}
