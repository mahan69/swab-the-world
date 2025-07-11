"use client"

import { useState } from "react"
import NextImage from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Thanks to a stem cell donor, I got a second chance at life. Now I'm advocating for others to find their match.",
    name: "Sarah Johnson",
    role: "Leukemia Survivor",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    quote:
      "Donating stem cells was a simple process that took just a few hours of my time, but it saved someone's life.",
    name: "Michael Chen",
    role: "Stem Cell Donor",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    quote:
      "The work Swab The World is doing is critical for patients from diverse backgrounds who need stem cell transplants.",
    name: "Dr. Amina Patel",
    role: "Hematologist",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Stories of Hope</h2>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                  width: `${testimonials.length * 100}%`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full px-4">
                    <div className="bg-white rounded-lg p-8 md:p-12">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                          <NextImage
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <blockquote className="text-xl text-gray-700 mb-6">"{testimonial.quote}"</blockquote>
                          <div className="font-bold text-gray-900">{testimonial.name}</div>
                          <div className="text-gray-500">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full text-primary z-10"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full text-primary z-10"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentTestimonial === index ? "bg-secondary" : "bg-white/30"}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
