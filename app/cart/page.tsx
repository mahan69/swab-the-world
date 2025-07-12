"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Trash2, Minus, Plus, RefreshCw, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSession } from "next-auth/react"
import React, { useEffect } from "react"

// Cart will be empty by default - no mock data

export default function CartPage() {
  const { data: session } = useSession();
  const [cartItems, setCartItems] = useState([])
  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)

  // Fetch cart from API when user logs in
  useEffect(() => {
    if (session) {
      fetch("/api/cart", {
        credentials: "include", // Include cookies
      })
        .then((res) => res.json())
        .then((data) => setCartItems(data.cart || []))
        .catch((error) => console.error("Error fetching cart:", error))
    } else {
      setCartItems([])
    }
  }, [session])

  // Sync cart to server
  const syncCart = (newCart: any[]) => {
    setCartItems(newCart)
    fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // Include cookies
      body: JSON.stringify({ cart: newCart }),
    }).catch((error) => console.error("Error syncing cart:", error))
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    const newCart = cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    syncCart(newCart)
  }

  const removeItem = (id: number) => {
    const newCart = cartItems.filter((item) => item.id !== id)
    syncCart(newCart)
  }

  const addItem = (item: any) => {
    const exists = cartItems.find((i) => i.id === item.id)
    let newCart
    if (exists) {
      newCart = cartItems.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
    } else {
      newCart = [...cartItems, { ...item, quantity: 1 }]
    }
    syncCart(newCart)
  }

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "mahan30") {
      setCouponApplied(true)
    }
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const discount = couponApplied ? subtotal * 0.3 : 0
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal - discount + shipping

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shopping Cart</h1>
          <div className="flex items-center text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Cart</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {cartItems.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-gray-200 bg-gray-50">
                    <div className="col-span-6 font-medium text-gray-900">Product</div>
                    <div className="col-span-2 font-medium text-gray-900 text-center">Price</div>
                    <div className="col-span-2 font-medium text-gray-900 text-center">Quantity</div>
                    <div className="col-span-2 font-medium text-gray-900 text-center">Subtotal</div>
                  </div>

                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b border-gray-200 items-center"
                    >
                      <div className="col-span-6 flex items-center gap-4">
                        <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{item.name}</h3>
                          <div className="text-sm text-gray-500 mt-1">
                            <span>Color: {item.color}</span>
                            <span className="mx-2">|</span>
                            <span>Size: {item.size}</span>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex items-center text-red-500 text-sm mt-2 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="h-4 w-4 mr-1" /> Remove
                          </button>
                        </div>
                      </div>

                      <div className="col-span-2 text-center">
                        <div className="md:hidden font-medium text-gray-900 mb-1">Price:</div>
                        <div className="text-gray-900">${item.price.toFixed(2)}</div>
                      </div>

                      <div className="col-span-2 flex justify-center">
                        <div className="md:hidden font-medium text-gray-900 mb-1">Quantity:</div>
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-r-none"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <div className="w-10 h-8 flex items-center justify-center border-y border-gray-300">
                            {item.quantity}
                          </div>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-l-none"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="col-span-2 text-center">
                        <div className="md:hidden font-medium text-gray-900 mb-1">Subtotal:</div>
                        <div className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    </motion.div>
                  ))}

                  <div className="p-6 flex flex-wrap gap-4">
                    <Link
                      href="/shop"
                      className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <RefreshCw className="h-4 w-4 mr-2" /> Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>

              {/* Cart Summary */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Cart Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>

                    {couponApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount (30%)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium text-gray-900">
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="border-t border-gray-200 pt-4 flex justify-between">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-lg font-bold text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-2">
                      Coupon Code
                    </label>
                    <div className="flex">
                      <Input
                        id="coupon"
                        type="text"
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="rounded-r-none"
                      />
                      <Button
                        onClick={applyCoupon}
                        className="rounded-l-none bg-primary hover:bg-primary/90"
                        disabled={couponApplied}
                      >
                        Apply
                      </Button>
                    </div>
                    {couponApplied && (
                      <p className="text-green-600 text-sm mt-2">Coupon "MAHAN30" applied successfully!</p>
                    )}
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6" size="lg" asChild>
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>

                  <div className="mt-6 text-center text-sm text-gray-500">
                    <p>We accept:</p>
                    <div className="flex justify-center gap-2 mt-2">
                      <div className="w-10 h-6 bg-gray-200 rounded"></div>
                      <div className="w-10 h-6 bg-gray-200 rounded"></div>
                      <div className="w-10 h-6 bg-gray-200 rounded"></div>
                      <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                <ShoppingBag className="h-10 w-10 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
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
