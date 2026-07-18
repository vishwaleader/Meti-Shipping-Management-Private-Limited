import { Navigation } from '@/components/sections/navigation'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { WhyUs } from '@/components/sections/why-us'
import { Statistics } from '@/components/sections/statistics'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Statistics />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
