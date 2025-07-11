"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, ChevronRight, CreditCard, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

// Mock cart data
const cartItems = [
  {
    id: 1,
    name: "Premium Leather Jacket",
    price: 299.99,
    image: "/placeholder.svg?height=400&width=300",
    color: "Black",
    size: "L",
    quantity: 1,
  },
  {
    id: 2,
    name: "Designer Sunglasses",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=300",
    color: "Tortoise",
    size: "One Size",
    quantity: 1,
  },
  {
    id: 3,
    name: "Luxury Watch",
    price: 599.99,
    image: "/placeholder.svg?height=400&width=300",
    color: "Silver",
    size: "One Size",
    quantity: 1,
  },
]

const steps = ["Shipping", "Payment", "Review"]

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
  })
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [saveInfo, setSaveInfo] = useState(false)

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 10
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep(1)
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep(2)
  }

  const handlePlaceOrder = () => {
    // Process order
    alert("Order placed successfully!")
  }

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Checkout</h1>
          <div className="flex items-center text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/cart" className="hover:text-primary transition-colors">
              Cart
            </Link>
            <span className="mx-2">/</span>
            <span>Checkout</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Checkout Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center w-full max-w-3xl">
              {steps.map((step, index) => (
                <div key={step} className="flex-1 relative">
                  <div
                    className={`flex flex-col items-center ${index <= currentStep ? "text-primary" : "text-gray-400"}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                        index <= currentStep ? "bg-primary text-white" : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {index < currentStep ? <Check className="h-5 w-5" /> : index + 1}
                    </div>
                    <div className="text-sm font-medium">{step}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute top-5 left-1/2 w-full h-0.5 ${
                        index < currentStep ? "bg-primary" : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Checkout Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                {/* Shipping Information */}
                {currentStep === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                    <form onSubmit={handleShippingSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={shippingInfo.firstName}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={shippingInfo.lastName}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={shippingInfo.email}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={shippingInfo.phone}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            value={shippingInfo.address}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            value={shippingInfo.city}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State/Province</Label>
                          <Input
                            id="state"
                            value={shippingInfo.state}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                          <Input
                            id="zipCode"
                            value={shippingInfo.zipCode}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="country">Country</Label>
                          <Select
                            value={shippingInfo.country}
                            onValueChange={(value) => setShippingInfo({ ...shippingInfo, country: value })}
                          >
                            <SelectTrigger id="country">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="US">United States</SelectItem>
                              <SelectItem value="CA">Canada</SelectItem>
                              <SelectItem value="UK">United Kingdom</SelectItem>
                              <SelectItem value="AU">Australia</SelectItem>
                              <SelectItem value="IR">Iran</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="flex items-center mb-6">
                        <Checkbox
                          id="saveInfo"
                          checked={saveInfo}
                          onCheckedChange={(checked) => setSaveInfo(checked as boolean)}
                        />
                        <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-600">
                          Save this information for next time
                        </label>
                      </div>

                      <div className="flex justify-end">
                        <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                          Continue to Payment <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* Payment Information */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h2>
                    <form onSubmit={handlePaymentSubmit}>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="credit-card" id="credit-card" />
                          <Label htmlFor="credit-card" className="flex items-center">
                            <CreditCard className="mr-2 h-5 w-5" /> Credit/Debit Card
                          </Label>
                        </div>
                        <div
                          className={`border rounded-md p-6 ${
                            paymentMethod === "credit-card" ? "border-primary" : "border-gray-200"
                          }`}
                        >
                          {paymentMethod === "credit-card" && (
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="cardName">Name on Card</Label>
                                <Input id="cardName" required />
                              </div>
                              <div>
                                <Label htmlFor="cardNumber">Card Number</Label>
                                <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="expiry">Expiry Date</Label>
                                  <Input id="expiry" placeholder="MM/YY" required />
                                </div>
                                <div>
                                  <Label htmlFor="cvc">CVC</Label>
                                  <Input id="cvc" placeholder="123" required />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal">PayPal</Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                          <Label htmlFor="bank-transfer">Bank Transfer</Label>
                        </div>
                      </RadioGroup>

                      <div className="flex justify-between mt-8">
                        <Button type="button" variant="outline" onClick={() => setCurrentStep(0)}>
                          Back to Shipping
                        </Button>
                        <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                          Continue to Review <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* Order Review */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Review Your Order</h2>

                    <div className="mb-8">
                      <h3 className="font-medium text-gray-900 mb-2">Shipping Information</h3>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <p>
                          {shippingInfo.firstName} {shippingInfo.lastName}
                        </p>
                        <p>{shippingInfo.address}</p>
                        <p>
                          {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}
                        </p>
                        <p>Email: {shippingInfo.email}</p>
                        <p>Phone: {shippingInfo.phone}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-medium text-gray-900 mb-2">Payment Method</h3>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <p className="flex items-center">
                          <CreditCard className="mr-2 h-5 w-5" />
                          {paymentMethod === "credit-card"
                            ? "Credit/Debit Card"
                            : paymentMethod === "paypal"
                              ? "PayPal"
                              : "Bank Transfer"}
                        </p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-medium text-gray-900 mb-4">Order Items</h3>
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center gap-4">
                            <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{item.name}</h4>
                              <div className="text-sm text-gray-500">
                                <span>
                                  {item.color}, {item.size}
                                </span>
                                <span className="mx-2">|</span>
                                <span>Qty: {item.quantity}</span>
                              </div>
                            </div>
                            <div className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between mt-8">
                      <Button type="button" variant="outline" onClick={() => setCurrentStep(1)}>
                        Back to Payment
                      </Button>
                      <Button onClick={handlePlaceOrder} className="bg-primary hover:bg-primary/90 text-white">
                        Place Order
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-gray-900">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
                  <ShieldCheck className="h-5 w-5 mr-2 text-green-500" />
                  <span>Secure checkout powered by Stripe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
