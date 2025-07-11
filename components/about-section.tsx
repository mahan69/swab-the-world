import NextImage from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Swab The World</h2>
          <p className="text-xl text-gray-600">
            We're on a mission to diversify the international stem cell registry and ensure everyone has an equal chance
            of finding a match.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              When it comes to finding a stem cell match, ethnicity matters. People from diverse backgrounds have a much
              lower chance of finding a compatible donor.
            </p>
            <p className="text-gray-600 mb-8">
              Swab The World is working to change that by encouraging people from all ethnic backgrounds to join stem
              cell registries worldwide.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white">LEARN MORE ABOUT OUR MISSION</Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <NextImage
              src="/placeholder.svg?height=400&width=600"
              alt="Swab The World Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
