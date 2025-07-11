"use client"

import { useState, useEffect } from "react"
import NextImage from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    id: 1,
    title: "SAVE A LIFE",
    subtitle: "JOIN THE REGISTRY",
    description: "Become a stem cell donor and help patients find their match",
    image: "/placeholder.svg?height=600&width=600",
    bgColor: "bg-primary",
    textColor: "text-white",
    buttonText: "REGISTER NOW",
    buttonLink: "/register",
  },
  {
    id: 2,
    title: "DIVERSITY MATTERS",
    subtitle: "IN STEM CELL DONATION",
    description: "Patients from diverse backgrounds have a lower chance of finding a match",
    image: "/placeholder.svg?height=600&width=600",
    bgColor: "bg-secondary",
    textColor: "text-primary",
    buttonText: "LEARN MORE",
    buttonLink: "/stem-cells-101",
  },
  {
    id: 3,
    title: "MAKE AN IMPACT",
    subtitle: "SUPPORT OUR MISSION",
    description: "Help us diversify the international stem cell registry",
    image: "/placeholder.svg?height=600&width=600",
    bgColor: "bg-primary",
    textColor: "text-white",
    buttonText: "DONATE NOW",
    buttonLink: "/support-our-mission",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [currentSlide, isAnimating])

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full"
        >
          <div className="relative w-full h-full flex flex-col md:flex-row">
            <div
              className={`${slides[currentSlide].bgColor} w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center p-8 md:p-16`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className={`${slides[currentSlide].textColor} text-3xl md:text-5xl font-bold mb-2`}>
                  {slides[currentSlide].subtitle}
                </h2>
                <h1 className={`${slides[currentSlide].textColor} text-5xl md:text-7xl font-bold mb-8`}>
                  {slides[currentSlide].title}
                </h1>
                <p className="text-white/80 text-xl md:text-2xl max-w-md mb-8">{slides[currentSlide].description}</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                    {slides[currentSlide].buttonText}
                  </Button>
                </motion.div>
              </motion.div>
              <div className="absolute bottom-6 left-8 text-white/70 text-sm">
                0{currentSlide + 1} — 0{slides.length}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full md:w-1/2 h-1/2 md:h-full bg-gray-100"
            >
              <NextImage
                src={slides[currentSlide].image || "/placeholder.svg"}
                alt={slides[currentSlide].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-6 right-8 text-gray-500 text-sm">
                0{currentSlide + 1} — 0{slides.length}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-secondary w-8" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </motion.button>
    </section>
  )
}
