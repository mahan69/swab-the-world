"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { User, Package, Heart, CreditCard, LogOut, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile")

  // Mock user data
  const user = {
    name: "Mahan Khanipour",
    email: "mahan.khanipour7@gmail.com",
    phone: "+989118090476",
    address: "123 Main Street, Tehran, Iran",
  }

  // Mock order data
  const orders = [
    {
      id: "ORD-12345",
      date: "May 15, 2023",
      status: "Delivered",
      total: 449.98,
      items: 2,
    },
    {
      id: "ORD-12346",
      date: "April 28, 2023",
      status: "Processing",
      total: 599.99,
      items: 1,
    },
    {
      id: "ORD-12347",
      date: "March 10, 2023",
      status: "Delivered",
      total: 149.99,
      items: 1,
    },
  ]

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Account</h1>
          <div className="flex items-center text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Account</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                  <p className="text-gray-500">{user.email}</p>
                </div>

                <nav className="space-y-1">
                  <Button
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      activeTab === "profile" ? "bg-primary text-white" : "text-gray-600"
                    }`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="mr-2 h-4 w-4" /> Profile
                  </Button>
                  <Button
                    variant={activeTab === "orders" ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      activeTab === "orders" ? "bg-primary text-white" : "text-gray-600"
                    }`}
                    onClick={() => setActiveTab("orders")}
                  >
                    <Package className="mr-2 h-4 w-4" /> Orders
                  </Button>
                  <Button
                    variant={activeTab === "wishlist" ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      activeTab === "wishlist" ? "bg-primary text-white" : "text-gray-600"
                    }`}
                    onClick={() => setActiveTab("wishlist")}
                  >
                    <Heart className="mr-2 h-4 w-4" /> Wishlist
                  </Button>
                  <Button
                    variant={activeTab === "payment" ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      activeTab === "payment" ? "bg-primary text-white" : "text-gray-600"
                    }`}
                    onClick={() => setActiveTab("payment")}
                  >
                    <CreditCard className="mr-2 h-4 w-4" /> Payment Methods
                  </Button>
                  <Button
                    variant={activeTab === "settings" ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      activeTab === "settings" ? "bg-primary text-white" : "text-gray-600"
                    }`}
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-600">
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </Button>
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                {activeTab === "profile" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Information</h2>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" defaultValue={user.name} />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" defaultValue={user.email} />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" defaultValue={user.phone} />
                        </div>
                        <div>
                          <Label htmlFor="address">Address</Label>
                          <Input id="address" defaultValue={user.address} />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="password">New Password</Label>
                        <Input id="password" type="password" placeholder="Leave blank to keep current password" />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Leave blank to keep current password"
                        />
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-white">Save Changes</Button>
                    </form>
                  </motion.div>
                )}

                {activeTab === "orders" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Order History</h2>
                    {orders.length > 0 ? (
                      <div className="space-y-4">
                        {orders.map((order) => (
                          <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex flex-wrap justify-between items-center mb-4">
                              <div>
                                <h3 className="font-medium text-gray-900">{order.id}</h3>
                                <p className="text-sm text-gray-500">Placed on {order.date}</p>
                              </div>
                              <div>
                                <span
                                  className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                                    order.status === "Delivered"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-blue-100 text-blue-800"
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-wrap justify-between items-center">
                              <div>
                                <p className="text-sm text-gray-600">
                                  {order.items} {order.items === 1 ? "item" : "items"}
                                </p>
                                <p className="font-medium text-gray-900">${order.total.toFixed(2)}</p>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" asChild>
                                  <Link href={`/order/${order.id}`}>View Order</Link>
                                </Button>
                                {order.status === "Delivered" && (
                                  <Button variant="outline" size="sm">
                                    Buy Again
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                          <Package className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
                        <p className="text-gray-500 mb-6">You haven't placed any orders yet.</p>
                        <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                          <Link href="/shop">Start Shopping</Link>
                        </Button>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === "wishlist" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-bold text-gray-900">My Wishlist</h2>
                      <Button variant="outline" asChild>
                        <Link href="/wishlist">View All</Link>
                      </Button>
                    </div>
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                        <Heart className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Your wishlist preview</h3>
                      <p className="text-gray-500 mb-6">View your full wishlist for more details.</p>
                      <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                        <Link href="/wishlist">View Wishlist</Link>
                      </Button>
                    </div>
                  </motion.div>
                )}

                {activeTab === "payment" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Methods</h2>
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                        <CreditCard className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No payment methods</h3>
                      <p className="text-gray-500 mb-6">You haven't added any payment methods yet.</p>
                      <Button className="bg-primary hover:bg-primary/90 text-white">Add Payment Method</Button>
                    </div>
                  </motion.div>
                )}

                {activeTab === "settings" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h2>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">Email Notifications</h3>
                          <p className="text-sm text-gray-500">Receive emails about your account activity</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">Order Updates</h3>
                          <p className="text-sm text-gray-500">Receive updates about your orders</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">Promotional Emails</h3>
                          <p className="text-sm text-gray-500">Receive emails about promotions and discounts</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
                          <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                        </div>
                        <Switch />
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-white">Save Preferences</Button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
