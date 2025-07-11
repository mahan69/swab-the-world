"use client"
import NextImage from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function PromoSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg"
          >
            <div className="relative h-[500px] w-full">
              <NextImage
                src="/placeholder.svg?height=500&width=600"
                alt="Stem Cell Donation Process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex flex-col justify-center p-12">
                <h3 className="text-4xl font-bold text-white mb-4">The Donation Process</h3>
                <p className="text-white/90 text-lg mb-8 max-w-md">
                  Learn about the simple process of donating stem cells and how it can save someone's life.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-white text-primary hover:bg-white/90">LEARN MORE</Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg"
          >
            <div className="relative h-[500px] w-full">
              <NextImage
                src="/placeholder.svg?height=500&width=600"
                alt="Patient Stories"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-secondary/80 to-transparent flex flex-col justify-center p-12">
                <h3 className="text-4xl font-bold text-white mb-4">Patient Stories</h3>
                <p className="text-white/90 text-lg mb-8 max-w-md">
                  Read inspiring stories of patients whose lives were saved by stem cell transplants.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-white text-secondary hover:bg-white/90">READ STORIES</Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 relative overflow-hidden rounded-lg"
        >
          <div className="relative h-[300px] w-full">
            <NextImage
              src="/placeholder.svg?height=300&width=1200"
              alt="Join Our Mission"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-12 text-center">
              <h3 className="text-4xl font-bold text-white mb-4">JOIN OUR MISSION</h3>
              <p className="text-white/90 text-xl mb-8 max-w-2xl">
                Together, we can ensure everyone has an equal chance of finding a stem cell match, regardless of their
                ethnic background.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-primary hover:bg-primary/90 text-white">GET INVOLVED TODAY</Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
