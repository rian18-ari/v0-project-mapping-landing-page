import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ToolsSection } from '@/components/tools-section'
import { ServicesSection } from '@/components/services-section'
import { PricingSection } from '@/components/pricing-section'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ToolsSection />
      <ServicesSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
