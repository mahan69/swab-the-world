import { Button } from "@/components/ui/button"

export default function JoinSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Join The Fight</h2>
          <p className="text-xl text-gray-700 mb-10">
            There are many ways to get involved and make a difference. Whether you join the registry, donate, or spread
            the word, you're helping save lives.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Register</h3>
              <p className="text-gray-600 mb-6">
                Join the stem cell registry and become a potential donor. It's simple and could save a life.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white w-full">JOIN NOW</Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Donate</h3>
              <p className="text-gray-600 mb-6">
                Support our mission with a financial contribution. Every dollar helps us reach more potential donors.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white w-full">DONATE</Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Help us organize drives, spread awareness, and educate others about stem cell donation.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white w-full">GET INVOLVED</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
