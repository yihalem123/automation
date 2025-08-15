import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
import BookMeeting from './components/BookMeeting'
import LinkedInSection from './components/LinkedInSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900 overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <BookMeeting />
      <LinkedInSection />
      <Footer />
    </main>
  )
}
