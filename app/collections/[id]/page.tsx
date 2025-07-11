"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, ShoppingBag, Eye, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// Collection data
const collections = {
  1: {
    id: 1,
    name: "Summer 2023",
    description:
      "Discover our exclusive summer collection featuring lightweight fabrics and vibrant colors, perfect for warm weather and vacation getaways. Each piece is crafted with premium materials and attention to detail.",
    image: "/placeholder.svg?height=600&width=1200",
    banner: "/placeholder.svg?height=400&width=1200",
    products: [
      {
        id: 301,
        name: "Linen Shirt",
        price: 450.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Loro Piana",
      },
      {
        id: 302,
        name: "Silk Shorts",
        price: 380.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Brunello Cucinelli",
      },
      {
        id: 303,
        name: "Leather Sandals",
        price: 590.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Hermès",
      },
      {
        id: 304,
        name: "Straw Hat",
        price: 320.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Gucci",
      },
      {
        id: 305,
        name: "Swim Shorts",
        price: 290.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Orlebar Brown",
      },
      {
        id: 306,
        name: "Silk Scarf",
        price: 420.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Hermès",
      },
    ],
  },
  2: {
    id: 2,
    name: "Autumn Essentials",
    description:
      "Luxurious knitwear, outerwear, and accessories for the cooler months ahead. Our autumn collection combines comfort with sophistication for a seamless transition into the new season.",
    image: "/placeholder.svg?height=600&width=1200",
    banner: "/placeholder.svg?height=400&width=1200",
    products: [
      {
        id: 307,
        name: "Cashmere Sweater",
        price: 890.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Brunello Cucinelli",
      },
      {
        id: 308,
        name: "Wool Coat",
        price: 1790.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Max Mara",
      },
      {
        id: 309,
        name: "Leather Boots",
        price: 1290.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Bottega Veneta",
      },
      {
        id: 310,
        name: "Wool Scarf",
        price: 350.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Acne Studios",
      },
      {
        id: 311,
        name: "Leather Gloves",
        price: 290.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Dents",
      },
      {
        id: 312,
        name: "Wool Trousers",
        price: 590.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Loro Piana",
      },
    ],
  },
  3: {
    id: 3,
    name: "Evening Elegance",
    description:
      "Sophisticated evening wear and accessories for special occasions and formal events. From stunning gowns to tailored tuxedos, this collection embodies timeless elegance and luxury.",
    image: "/placeholder.svg?height=600&width=1200",
    banner: "/placeholder.svg?height=400&width=1200",
    products: [
      {
        id: 313,
        name: "Silk Gown",
        price: 2990.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Oscar de la Renta",
      },
      {
        id: 314,
        name: "Tuxedo",
        price: 3290.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Tom Ford",
      },
      {
        id: 315,
        name: "Diamond Earrings",
        price: 5990.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Tiffany & Co.",
      },
      {
        id: 316,
        name: "Satin Clutch",
        price: 1290.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Jimmy Choo",
      },
      {
        id: 317,
        name: "Velvet Bow Tie",
        price: 190.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Lanvin",
      },
      {
        id: 318,
        name: "Crystal Heels",
        price: 1490.0,
        image: "/placeholder.svg?height=400&width=300",
        brand: "Manolo Blahnik",
      },
    ],
  },
}

export default function CollectionPage({ params }: { params: { id: string } }) {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const collectionId = Number.parseInt(params.id)
  const collection = collections[collectionId as keyof typeof collections]

  if (!collection) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Collection Not Found</h1>
          <p className="text-gray-600 mb-6">The collection you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/collections">View All Collections</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <section className="relative h-[400px]">
        <Image src={collection.banner || "/placeholder.svg"} alt={collection.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <Link href="/collections" className="inline-flex items-center text-white/80 hover:text-white mb-4">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Collections
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4">{collection.name}</h1>
            <p className="text-xl text-white/90 max-w-2xl">{collection.description}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {collection.products.map((product, index) => (
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Your Look</h2>
            <p className="text-gray-600 mb-8">
              Discover complementary pieces to create the perfect ensemble from our {collection.name} collection.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/collections">Explore More Collections</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
