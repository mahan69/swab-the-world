"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { Menu, Search, ShoppingBag, User, Heart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { useSession } from "next-auth/react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null)
  const [cartCount, setCartCount] = useState(0)
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fetch cart count when user logs in
  useEffect(() => {
    if (session) {
      fetch("/api/cart/count", {
        credentials: "include", // Include cookies
      })
        .then((res) => res.json())
        .then((data) => setCartCount(data.count))
        .catch(() => setCartCount(0))
    } else {
      setCartCount(0)
    }
  }, [session])

  const toggleMegaMenu = (menu: string) => {
    if (megaMenuOpen === menu) {
      setMegaMenuOpen(null)
    } else {
      setMegaMenuOpen(menu)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-40 h-10"
          >
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              MAHAN LUXE
            </span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <Link
              href="/shop"
              className="text-gray-800 font-medium hover:text-primary transition-colors duration-300 relative group"
              onMouseEnter={() => toggleMegaMenu("shop")}
              onClick={() => setMegaMenuOpen(null)}
            >
              SHOP
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="relative">
            <Link
              href="/new-arrivals"
              className="text-gray-800 font-medium hover:text-primary transition-colors duration-300 relative group"
              onMouseEnter={() => toggleMegaMenu("new")}
              onClick={() => setMegaMenuOpen(null)}
            >
              NEW ARRIVALS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="relative">
            <Link
              href="/collections"
              className="text-gray-800 font-medium hover:text-primary transition-colors duration-300 relative group"
              onMouseEnter={() => toggleMegaMenu("collections")}
              onClick={() => setMegaMenuOpen(null)}
            >
              COLLECTIONS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="relative">
            <Link
              href="/sale"
              className="text-gray-800 font-medium hover:text-primary transition-colors duration-300 relative group"
              onMouseEnter={() => toggleMegaMenu("sale")}
              onClick={() => setMegaMenuOpen(null)}
            >
              SALE
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-gray-800 hover:text-primary transition-colors"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            {searchOpen ? <X size={20} /> : <Search size={20} />}
          </motion.button>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hidden md:block">
            <Link href="/wishlist" className="p-2 text-gray-800 hover:text-primary transition-colors">
              <Heart size={20} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hidden md:block">
            <Link href="/account" className="p-2 text-gray-800 hover:text-primary transition-colors">
              <User size={20} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative">
            <Link href="/cart" className="p-2 text-gray-800 hover:text-primary transition-colors">
              <ShoppingBag size={20} />
              {session && cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm border border-white"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>
          </motion.div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-10">
                <Link
                  href="/shop"
                  className="text-gray-800 font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  SHOP
                </Link>
                <Link
                  href="/new-arrivals"
                  className="text-gray-800 font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  NEW ARRIVALS
                </Link>
                <Link
                  href="/collections"
                  className="text-gray-800 font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  COLLECTIONS
                </Link>
                <Link
                  href="/sale"
                  className="text-gray-800 font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  SALE
                </Link>
                <div className="border-t pt-4 mt-4">
                  <Link
                    href="/account"
                    className="flex items-center gap-2 text-gray-800 font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <User size={18} />
                    My Account
                  </Link>
                </div>
                <div>
                  <Link
                    href="/wishlist"
                    className="flex items-center gap-2 text-gray-800 font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Heart size={18} />
                    Wishlist
                  </Link>
                </div>
                <div className="relative">
                  <Link
                    href="/cart"
                    className="flex items-center gap-2 text-gray-800 font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <ShoppingBag size={18} />
                    Cart
                    {session && cartCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                      >
                        {cartCount}
                      </motion.span>
                    )}
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-white shadow-md p-4"
          >
            <div className="container mx-auto flex items-center">
              <Input type="search" placeholder="Search for products..." className="flex-1" autoFocus />
              <Button className="ml-2 bg-primary hover:bg-primary/90">Search</Button>
            </div>
          </motion.div>
        )}

        {megaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white shadow-md py-8"
            onMouseLeave={() => setMegaMenuOpen(null)}
          >
            <div className="container mx-auto px-4">
              {megaMenuOpen === "shop" && (
                <div className="grid grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/shop/clothing" className="text-gray-600 hover:text-primary transition-colors">
                          Clothing
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/shoes" className="text-gray-600 hover:text-primary transition-colors">
                          Shoes
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/bags" className="text-gray-600 hover:text-primary transition-colors">
                          Bags
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/accessories" className="text-gray-600 hover:text-primary transition-colors">
                          Accessories
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/jewelry" className="text-gray-600 hover:text-primary transition-colors">
                          Jewelry
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/watches" className="text-gray-600 hover:text-primary transition-colors">
                          Watches
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Featured Brands</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/shop/brands/gucci" className="text-gray-600 hover:text-primary transition-colors">
                          Gucci
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop/brands/louis-vuitton"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          Louis Vuitton
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/brands/chanel" className="text-gray-600 hover:text-primary transition-colors">
                          Chanel
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/brands/prada" className="text-gray-600 hover:text-primary transition-colors">
                          Prada
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/brands/hermes" className="text-gray-600 hover:text-primary transition-colors">
                          Hermès
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/brands" className="text-primary font-medium hover:underline">
                          View All Brands
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Featured Products</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="group">
                        <Link href="/product/1" className="block">
                          <div className="relative h-40 rounded-lg overflow-hidden mb-2">
                            <NextImage
                              src="/placeholder.svg?height=160&width=240"
                              alt="Featured Product"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                            Italian Leather Jacket
                          </h4>
                          <p className="text-sm text-primary font-medium">$1,299.99</p>
                        </Link>
                      </div>
                      <div className="group">
                        <Link href="/product/3" className="block">
                          <div className="relative h-40 rounded-lg overflow-hidden mb-2">
                            <NextImage
                              src="/placeholder.svg?height=160&width=240"
                              alt="Featured Product"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                            Automatic Chronograph Watch
                          </h4>
                          <p className="text-sm text-primary font-medium">$5,999.99</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {megaMenuOpen === "new" && (
                <div className="grid grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">New Categories</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/new-arrivals/clothing"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          New in Clothing
                        </Link>
                      </li>
                      <li>
                        <Link href="/new-arrivals/shoes" className="text-gray-600 hover:text-primary transition-colors">
                          New in Shoes
                        </Link>
                      </li>
                      <li>
                        <Link href="/new-arrivals/bags" className="text-gray-600 hover:text-primary transition-colors">
                          New in Bags
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/new-arrivals/accessories"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          New in Accessories
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/new-arrivals/jewelry"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          New in Jewelry
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">New Arrivals By Brand</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/new-arrivals/brands/gucci"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          Gucci
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/new-arrivals/brands/louis-vuitton"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          Louis Vuitton
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/new-arrivals/brands/hermes"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          Hermès
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/new-arrivals/brands/prada"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          Prada
                        </Link>
                      </li>
                      <li>
                        <Link href="/new-arrivals" className="text-primary font-medium hover:underline">
                          View All New Arrivals
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <NextImage
                        src="/placeholder.svg?height=240&width=480"
                        alt="New Arrivals"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Just Arrived</h3>
                        <p className="text-white/90 mb-4">Explore our latest luxury arrivals</p>
                        <Button className="bg-white text-primary hover:bg-white/90">Shop Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {megaMenuOpen === "collections" && (
                <div className="grid grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Featured Collections</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/collections/summer-2026"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          Summer 2026
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/collections/autumn-essentials"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          Autumn Essentials
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/collections/evening-elegance"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          Evening Elegance
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/collections/timeless-classics"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          Timeless Classics
                        </Link>
                      </li>
                      <li>
                        <Link href="/collections" className="text-primary font-medium hover:underline">
                          View All Collections
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Designer Collaborations</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/collections/alessandro-michele"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          Alessandro Michele
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/collections/virgil-abloh"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          Virgil Abloh
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/collections/maria-grazia-chiuri"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          Maria Grazia Chiuri
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative h-60 rounded-lg overflow-hidden">
                        <NextImage
                          src="/placeholder.svg?height=240&width=240"
                          alt="Summer Collection"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                          <h4 className="text-xl font-bold text-white mb-1">Summer 2026</h4>
                          <Link
                            href="/collections/summer-2026"
                            className="text-white/90 hover:text-white underline text-sm"
                          >
                            Explore Collection
                          </Link>
                        </div>
                      </div>
                      <div className="relative h-60 rounded-lg overflow-hidden">
                        <NextImage
                          src="/placeholder.svg?height=240&width=240"
                          alt="Autumn Essentials"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                          <h4 className="text-xl font-bold text-white mb-1">Autumn Essentials</h4>
                          <Link
                            href="/collections/autumn-essentials"
                            className="text-white/90 hover:text-white underline text-sm"
                          >
                            Explore Collection
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {megaMenuOpen === "sale" && (
                <div className="grid grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Sale Categories</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/sale/clothing" className="text-gray-600 hover:text-primary transition-colors">
                          Clothing Sale
                        </Link>
                      </li>
                      <li>
                        <Link href="/sale/shoes" className="text-gray-600 hover:text-primary transition-colors">
                          Shoes Sale
                        </Link>
                      </li>
                      <li>
                        <Link href="/sale/bags" className="text-gray-600 hover:text-primary transition-colors">
                          Bags Sale
                        </Link>
                      </li>
                      <li>
                        <Link href="/sale/accessories" className="text-gray-600 hover:text-primary transition-colors">
                          Accessories Sale
                        </Link>
                      </li>
                      <li>
                        <Link href="/sale" className="text-primary font-medium hover:underline">
                          View All Sale Items
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Sale By Discount</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/sale/discount/30" className="text-gray-600 hover:text-primary transition-colors">
                          30% Off and More
                        </Link>
                      </li>
                      <li>
                        <Link href="/sale/discount/40" className="text-gray-600 hover:text-primary transition-colors">
                          40% Off and More
                        </Link>
                      </li>
                      <li>
                        <Link href="/sale/discount/50" className="text-gray-600 hover:text-primary transition-colors">
                          50% Off and More
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <NextImage
                        src="/placeholder.svg?height=240&width=480"
                        alt="Sale Banner"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-red-600/70 flex flex-col justify-center items-center text-center p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">LUXURY SALE</h3>
                        <p className="text-white/90 mb-4">Up to 40% off on premium designer items</p>
                        <Button className="bg-white text-red-600 hover:bg-white/90">Shop Sale</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
