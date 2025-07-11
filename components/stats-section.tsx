export default function StatsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Impact</h2>
          <p className="text-xl text-gray-600">
            Every registration matters. Here's how we're making a difference together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="text-5xl font-bold text-primary mb-2">50K+</div>
            <p className="text-gray-600">New registrants through our campaigns</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="text-5xl font-bold text-primary mb-2">100+</div>
            <p className="text-gray-600">Countries reached worldwide</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="text-5xl font-bold text-primary mb-2">200+</div>
            <p className="text-gray-600">Successful matches facilitated</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="text-5xl font-bold text-primary mb-2">75%</div>
            <p className="text-gray-600">Increase in diverse donor registrations</p>
          </div>
        </div>
      </div>
    </section>
  )
}
