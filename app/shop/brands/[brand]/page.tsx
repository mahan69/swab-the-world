"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, ShoppingBag, Eye, Star, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useProductActions } from "@/lib/product-actions"

// Brand data
const brandData = {
  gucci: {
    name: "Gucci",
    description: "Italian luxury fashion house known for contemporary elegance and innovative design",
    founded: "1921",
    headquarters: "Florence, Italy",
    image: "/placeholder.svg?height=600&width=1200",
    products: [
      {
        id: 1001,
        name: "Gucci Marmont Bag",
        price: 2490.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.8,
      },
      {
        id: 1002,
        name: "Gucci Aces Sneakers",
        price: 790.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.7,
      },
      {
        id: 1003,
        name: "Gucci Dionysus Bag",
        price: 2890.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.9,
      },
      {
        id: 1004,
        name: "Gucci Princetown Loafers",
        price: 690.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.6,
      },
    ],
  },
  "louis-vuitton": {
    name: "Louis Vuitton",
    description: "French luxury fashion house with iconic monogram designs and exceptional craftsmanship",
    founded: "1854",
    headquarters: "Paris, France",
    image: "/placeholder.svg?height=600&width=1200",
    products: [
      {
        id: 2001,
        name: "LV Neverfull Bag",
        price: 1490.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.9,
      },
      {
        id: 2002,
        name: "LV Speedy Bag",
        price: 1290.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.8,
      },
      {
        id: 2003,
        name: "LV Keepall Bag",
        price: 1890.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.7,
      },
      {
        id: 2004,
        name: "LV Capucines Bag",
        price: 4890.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.9,
      },
    ],
  },
  chanel: {
    name: "Chanel",
    description: "Timeless French luxury with classic sophistication and revolutionary fashion",
    founded: "1909",
    headquarters: "Paris, France",
    image: "/placeholder.svg?height=600&width=1200",
    products: [
      {
        id: 3001,
        name: "Chanel Classic Flap Bag",
        price: 8900.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.9,
      },
      {
        id: 3002,
        name: "Chanel Boy Bag",
        price: 6900.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.8,
      },
      {
        id: 3003,
        name: "Chanel 2.55 Reissue",
        price: 9900.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.9,
      },
      {
        id: 3004,
        name: "Chanel Wallet on Chain",
        price: 3900.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.7,
      },
    ],
  },
  prada: {
    name: "Prada",
    description: "Italian luxury fashion house with minimalist elegance and avant-garde design",
    founded: "1913",
    headquarters: "Milan, Italy",
    image: "/placeholder.svg?height=600&width=1200",
    products: [
      {
        id: 4001,
        name: "Prada Re-Edition Bag",
        price: 1290.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.8,
      },
      {
        id: 4002,
        name: "Prada Galleria Bag",
        price: 3890.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.9,
      },
      {
        id: 4003,
        name: "Prada Cahier Bag",
        price: 2890.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.7,
      },
      {
        id: 4004,
        name: "Prada Cleo Bag",
        price: 1890.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.6,
      },
    ],
  },
  hermes: {
    name: "Hermès",
    description: "French luxury house renowned for exceptional craftsmanship and timeless elegance",
    founded: "1837",
    headquarters: "Paris, France",
    image: "/placeholder.svg?height=600&width=1200",
    products: [
      {
        id: 5001,
        name: "Hermès Birkin Bag",
        price: 12900.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.9,
      },
      {
        id: 5002,
        name: "Hermès Kelly Bag",
        price: 9900.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.9,
      },
      {
        id: 5003,
        name: "Hermès Constance Bag",
        price: 8900.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.8,
      },
      {
        id: 5004,
        name: "Hermès Garden Party",
        price: 3900.0,
        image: "/placeholder.svg?height=400&width=300",
        rating: 4.7,
      },
    ],
  },
}

export default function BrandPage() {
  const params = useParams()
  const brand = params?.brand as string
  const { addToCart, addToWishlist, viewProduct } = useProductActions()
  
  const brandInfo = brandData[brand as keyof typeof brandData]

  if (!brandInfo) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Brand Not Found</h1>
          <p className="text-gray-600 mb-6">The brand you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/shop/brands">View All Brands</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image src={brandInfo.image} alt={brandInfo.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <Link href="/shop/brands" className="inline-flex items-center text-white/80 hover:text-white mb-4">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Brands
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4">{brandInfo.name}</h1>
            <p className="text-xl text-white/90 max-w-2xl">{brandInfo.description}</p>
          </div>
        </div>
      </section>

      {/* Brand Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Founded</h3>
              <p className="text-gray-600">{brandInfo.founded}</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Headquarters</h3>
              <p className="text-gray-600">{brandInfo.headquarters}</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Products</h3>
              <p className="text-gray-600">{brandInfo.products.length} items</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandInfo.products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="relative overflow-hidden">
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

                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      className="w-10 h-10 rounded-full bg-white text-primary hover:bg-primary hover:text-white"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingBag size={18} />
                    </Button>
                    <Button
                      size="icon"
                      className="w-10 h-10 rounded-full bg-white text-primary hover:bg-primary hover:text-white"
                      onClick={() => addToWishlist(product)}
                    >
                      <Heart size={18} />
                    </Button>
                    <Button
                      size="icon"
                      className="w-10 h-10 rounded-full bg-white text-primary hover:bg-primary hover:text-white"
                      onClick={() => viewProduct(product.id)}
                    >
                      <Eye size={18} />
                    </Button>
                  </div>
                </div>

                <div className="p-4">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-lg font-medium text-gray-900 mb-2 hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between">
                    <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 