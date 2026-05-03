import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import AnimatedGrid from '../components/AnimatedGrid'
import CTA from '../components/CTA'
import SignatureSection from '../components/SignatureSection'

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Collections</h2>
          <CategorySection />
        </div>
      </section>
      <SignatureSection/>
      <CTA />
    </div>
  )
}