import NextImage from "next/image"
import { Button } from "@/components/ui/button"

export default function StemCells101Page() {
  return (
    <div className="pt-20">
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Stem Cells 101</h1>
            <p className="text-xl text-white/80">Understanding stem cells and how they save lives</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What are Stem Cells?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Stem cells are the body's raw materials — cells from which all other cells with specialized functions are
              generated. Under the right conditions in the body or a laboratory, stem cells divide to form more cells
              called daughter cells.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              These daughter cells either become new stem cells (self-renewal) or become specialized cells
              (differentiation) with a more specific function, such as blood cells, brain cells, heart muscle cells or
              bone cells.
            </p>
            <div className="relative h-[400px] rounded-lg overflow-hidden my-10">
              <NextImage
                src="/placeholder.svg?height=400&width=800"
                alt="Stem Cells Diagram"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Stem Cells</h2>

            <div className="space-y-10">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-4">Hematopoietic Stem Cells</h3>
                <p className="text-gray-700 mb-4">
                  These are the blood-forming stem cells found in bone marrow, peripheral blood, and cord blood. They
                  can develop into different types of blood cells, including white blood cells, red blood cells, and
                  platelets.
                </p>
                <p className="text-gray-700">
                  Hematopoietic stem cell transplants are used to treat blood cancers like leukemia and lymphoma, as
                  well as other blood disorders.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-4">Mesenchymal Stem Cells</h3>
                <p className="text-gray-700 mb-4">
                  Found in bone marrow, fat tissue, and other sources, these stem cells can develop into bone,
                  cartilage, muscle, and fat cells.
                </p>
                <p className="text-gray-700">
                  They are being studied for their potential to treat a variety of conditions, including bone and
                  cartilage diseases, heart disease, and autoimmune disorders.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-4">Cord Blood Stem Cells</h3>
                <p className="text-gray-700 mb-4">
                  These are hematopoietic stem cells collected from the umbilical cord and placenta after birth.
                </p>
                <p className="text-gray-700">
                  They can be stored for potential future use in treating various diseases, including certain cancers,
                  blood disorders, and immune system disorders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">The Donation Process</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Peripheral Blood Stem Cell Donation</h3>
                <p className="text-gray-700 mb-4">
                  This is the most common method of donation, used in about 80% of cases. The process involves:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Receiving injections of a medication that increases stem cell production for 4-5 days</li>
                  <li>Having blood removed through a needle in one arm</li>
                  <li>Passing the blood through a machine that separates out the stem cells</li>
                  <li>Returning the remaining blood through a needle in the other arm</li>
                </ol>
                <p className="text-gray-700 mt-4">
                  The procedure takes about 4-6 hours and is similar to donating platelets.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Bone Marrow Donation</h3>
                <p className="text-gray-700 mb-4">Used in about 20% of cases, this method involves:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Receiving general anesthesia</li>
                  <li>Having liquid marrow extracted from the back of the pelvic bone using a special needle</li>
                  <li>A hospital stay of 1-2 days</li>
                  <li>Recovery period of about 1-2 weeks</li>
                </ol>
                <p className="text-gray-700 mt-4">
                  While this method is less common, it's sometimes the best option for certain patients, especially
                  children.
                </p>
              </div>
            </div>

            <div className="bg-secondary/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Is Donation Painful?</h3>
              <p className="text-gray-700 mb-4">
                For peripheral blood stem cell donation, donors may experience flu-like symptoms during the days they
                receive injections. The donation process itself is not painful, though some people experience discomfort
                from having to remain still for several hours.
              </p>
              <p className="text-gray-700">
                For bone marrow donation, donors receive anesthesia, so the procedure itself is painless. After
                donation, donors may experience soreness in the lower back for a few days to a week.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Save a Life?</h2>
            <p className="text-xl text-white/80 mb-10">
              Joining the stem cell registry is a simple process that could give someone a second chance at life.
            </p>
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              JOIN THE REGISTRY TODAY
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
