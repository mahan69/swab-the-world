"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Trash2, ShoppingBag, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"

// Wishlist will be empty by default - no mock data

export default function WishlistPage() {
  const { data: session } = useSession();
  const [wishlistItems, setWishlistItems] = useState([])

  // Fetch wishlist from API when user logs in
  useEffect(() => {
    if (session) {
      fetch("/api/wishlist", {
        credentials: "include", // Include cookies
      })
        .then((res) => res.json())
        .then((data) => setWishlistItems(data.wishlist || []))
        .catch((error) => {
          console.error("Error fetching wishlist:", error);
          setWishlistItems([]);
        });
    } else {
      setWishlistItems([])
    }
  }, [session])

  const removeItem = (id: number) => {
    fetch("/api/wishlist", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // Include cookies
      body: JSON.stringify({ productId: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setWishlistItems(wishlistItems.filter((item) => item.id !== id));
        }
      })
      .catch((error) => {
        console.error("Error removing item from wishlist:", error);
      });
  }

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Wishlist</h1>
          <div className="flex items-center text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Wishlist</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {!session ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                <Heart className="h-10 w-10 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to view your wishlist</h2>
              <p className="text-gray-600 mb-8">You need to be logged in to access your wishlist.</p>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="lg" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          ) : wishlistItems.length > 0 ? (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-gray-200 bg-gray-50">
                <div className="col-span-6 font-medium text-gray-900">Product</div>
                <div className="col-span-2 font-medium text-gray-900 text-center">Price</div>
                <div className="col-span-2 font-medium text-gray-900 text-center">Stock Status</div>
                <div className="col-span-2 font-medium text-gray-900 text-center">Actions</div>
              </div>

              {wishlistItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b border-gray-200 items-center"
                >
                  <div className="col-span-6 flex items-center gap-4">
                    <Link
                      href={`/product/${item.id}`}
                      className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0"
                    >
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </Link>
                    <div>
                      <Link
                        href={`/product/${item.id}`}
                        className="font-medium text-gray-900 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                      <div className="text-sm text-gray-500 mt-1">Category: {item.category}</div>
                    </div>
                  </div>

                  <div className="col-span-2 text-center">
                    <div className="md:hidden font-medium text-gray-900 mb-1">Price:</div>
                    <div className="flex flex-col md:items-center">
                      {item.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">${item.originalPrice.toFixed(2)}</span>
                      )}
                      <span className="font-medium text-gray-900">${item.price.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="col-span-2 text-center">
                    <div className="md:hidden font-medium text-gray-900 mb-1">Stock Status:</div>
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                        item.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  <div className="col-span-2 flex flex-col md:flex-row gap-2 justify-center">
                    <Button className="bg-primary hover:bg-primary/90 text-white" size="sm" disabled={!item.inStock}>
                      <ShoppingBag className="h-4 w-4 mr-1" /> Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" /> Remove
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                <Heart className="h-10 w-10 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added any products to your wishlist yet.</p>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="lg" asChild>
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
