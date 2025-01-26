import { HeroSection } from "@/components/Home/HeroSection"
import { FeaturesSection } from "@/components/Home/FeaturesSection"
import { BenefitsSection } from "@/components/Home/BenefitsSection "
import { CTASection } from "@/components/Home/CTASection"
import { Footer } from "@/components/Home/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

