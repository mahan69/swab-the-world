"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Collections data
const collections = [
  {
    id: 1,
    name: "Summer 2023",
    description: "Discover our exclusive summer collection featuring lightweight fabrics and vibrant colors.",
    image: "/placeholder.svg?height=600&width=800",
    itemCount: 42,
    featured: true,
  },
  {
    id: 2,
    name: "Autumn Essentials",
    description: "Luxurious knitwear, outerwear, and accessories for the cooler months ahead.",
    image: "/placeholder.svg?height=600&width=800",
    itemCount: 38,
    featured: true,
  },
  {
    id: 3,
    name: "Evening Elegance",
    description: "Sophisticated evening wear and accessories for special occasions and formal events.",
    image: "/placeholder.svg?height=600&width=800",
    itemCount: 24,
    featured: true,
  },
  {
    id: 4,
    name: "Timeless Classics",
    description: "Investment pieces that transcend seasons and remain stylish year after year.",
    image: "/placeholder.svg?height=600&width=800",
    itemCount: 56,
    featured: false,
  },
  {
    id: 5,
    name: "Modern Minimalist",
    description: "Clean lines, neutral colors, and understated elegance for the contemporary wardrobe.",
    image: "/placeholder.svg?height=600&width=800",
    itemCount: 31,
    featured: false,
  },
  {
    id: 6,
    name: "Heritage Collection",
    description: "Traditional craftsmanship meets modern design in our heritage-inspired collection.",
    image: "/placeholder.svg?height=600&width=800",
    itemCount: 27,
    featured: false,
  },
  {
    id: 7,
    name: "Resort Wear",
    description: "Luxury vacation essentials for your next getaway, from swimwear to evening attire.",
    image: "/placeholder.svg?height=600&width=800",
    itemCount: 35,
    featured: false,
  },
  {
    id: 8,
    name: "Artisan Crafted",
    description: "Handcrafted pieces showcasing exceptional artisanal techniques and materials.",
    image: "/placeholder.svg?height=600&width=800",
    itemCount: 19,
    featured: false,
  },
]

// Designer collaborations
const designerCollaborations = [
  {
    id: 101,
    designer: "Alessandro Michele",
    brand: "Gucci",
    description: "A bold, eclectic collection that reimagines vintage aesthetics with a modern twist.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 102,
    designer: "Virgil Abloh",
    brand: "Louis Vuitton",
    description: "Innovative designs that blend streetwear influences with traditional luxury craftsmanship.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 103,
    designer: "Maria Grazia Chiuri",
    brand: "Dior",
    description: "Feminine silhouettes with a contemporary edge, celebrating the modern woman.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function CollectionsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredCollections =
    activeTab === "all"
      ? collections
      : activeTab === "featured"
        ? collections.filter((c) => c.featured)
        : collections.filter((c) => !c.featured)

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Collections</h1>
          <div className="flex items-center text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Collections</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Curated Luxury Collections</h2>
            <p className="text-gray-600">
              Explore our carefully curated collections, each telling a unique story through exceptional design, quality
              materials, and unparalleled craftsmanship.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  activeTab === "all" ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                } border border-gray-200`}
              >
                All Collections
              </button>
              <button
                onClick={() => setActiveTab("featured")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "featured" ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                } border-t border-b border-r border-gray-200`}
              >
                Featured
              </button>
              <button
                onClick={() => setActiveTab("seasonal")}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  activeTab === "seasonal" ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                } border-t border-b border-r border-gray-200`}
              >
                Seasonal
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/collections/${collection.id}`}>
                  <div className="relative h-80 overflow-hidden rounded-lg mb-4">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {collection.featured && (
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                        FEATURED
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{collection.name}</h3>
                        <p className="text-white/80 text-sm">{collection.itemCount} items</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{collection.name}</h3>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <Link href={`/collections/${collection.id}`}>
                  <Button variant="outline" className="w-full">
                    Explore Collection
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Designer Collaborations</h2>
            <p className="text-gray-600">
              Exclusive collections created in partnership with the world's most renowned designers, bringing unique
              perspectives and innovative designs to Mahan Luxe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designerCollaborations.map((collab, index) => (
              <motion.div
                key={collab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="relative h-64">
                  <Image
                    src={collab.image || "/placeholder.svg"}
                    alt={`${collab.designer} for ${collab.brand}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{collab.designer}</h3>
                  <p className="text-primary font-medium mb-3">for {collab.brand}</p>
                  <p className="text-gray-600 mb-4">{collab.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">View Collection</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative rounded-lg overflow-hidden">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=1200"
                alt="Exclusive Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-8">
                <h2 className="text-4xl font-bold text-white mb-4">Exclusive Limited Edition Collection</h2>
                <p className="text-white/90 text-xl mb-8 max-w-2xl">
                  A special collaboration with renowned artisans, featuring one-of-a-kind pieces available only at Mahan
                  Luxe.
                </p>
                <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">Discover Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
