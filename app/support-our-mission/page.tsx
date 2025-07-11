import NextImage from "next/image"
import { Button } from "@/components/ui/button"

export default function SupportOurMissionPage() {
  return (
    <div className="pt-20">
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Support Our Mission</h1>
            <p className="text-xl text-white/80">Help us give everyone an equal chance at finding a stem cell match</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Your Support Matters</h2>
            <p className="text-lg text-gray-700 mb-6">
              Every year, thousands of people are diagnosed with blood cancers and disorders that can be treated with a
              stem cell transplant. However, finding a matching donor can be extremely difficult, especially for people
              from diverse ethnic backgrounds.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              At Swab The World, we're working to change that by increasing the diversity of the international stem cell
              registry. Your support helps us run recruitment campaigns, educate communities, and provide resources to
              potential donors.
            </p>
            <div className="relative h-[400px] rounded-lg overflow-hidden my-10">
              <NextImage
                src="/placeholder.svg?height=400&width=800"
                alt="Diverse group of people at a stem cell drive"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ways to Support</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-4">Make a Donation</h3>
                <p className="text-gray-700 mb-6">
                  Your financial contribution helps us reach more potential donors and support patients in need. Every
                  dollar makes a difference.
                </p>
                <div className="space-y-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white w-full">ONE-TIME DONATION</Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white w-full"
                  >
                    BECOME A MONTHLY DONOR
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-4">Corporate Partnerships</h3>
                <p className="text-gray-700 mb-6">
                  Partner with us to make a meaningful impact. We offer various partnership opportunities, from
                  sponsoring events to organizing corporate donor drives.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white w-full">BECOME A PARTNER</Button>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-4">Fundraise for Us</h3>
                <p className="text-gray-700 mb-6">
                  Start your own fundraising campaign to support our mission. Whether it's a birthday fundraiser, a
                  sports challenge, or a community event, your efforts make a difference.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white w-full">START FUNDRAISING</Button>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-4">Volunteer Your Time</h3>
                <p className="text-gray-700 mb-6">
                  Join our team of dedicated volunteers who help with events, administrative tasks, translation, and
                  more. Your time and skills are invaluable to our mission.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white w-full">VOLUNTEER WITH US</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Impact</h2>

            <div className="bg-gray-50 p-8 rounded-lg mb-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <p className="text-gray-700">New registrants</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <p className="text-gray-700">Countries reached</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <p className="text-gray-700">Successful matches</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">75%</div>
                  <p className="text-gray-700">Increase in diversity</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Thanks to our supporters, we've been able to make significant progress in our mission to diversify the
              stem cell registry. But there's still much work to be done.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With your continued support, we can reach more communities, educate more people about the importance of
              stem cell donation, and ultimately save more lives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Join Our Community</h2>
            <p className="text-xl text-gray-700 mb-10">
              Stay updated on our work, success stories, and upcoming events by subscribing to our newsletter.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <Button className="bg-primary hover:bg-primary/90 text-white whitespace-nowrap">SUBSCRIBE</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
