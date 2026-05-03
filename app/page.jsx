import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import CTA from '../components/CTA'
import SignatureSection from '../components/SignatureSection'

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Collections */}
      <section className="pt-14 pb-6 md:pt-20 md:pb-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 md:mb-12">
            Our Collections
          </h2>
          <CategorySection />
        </div>
      </section>

      {/* Signature Section */}
      <SignatureSection />

      <CTA />
    </div>
  )
}