'use client'

import { useTheme } from './contexts/ThemeContext'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import WhatWeDoNew from './components/WhatWeDoNew'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
import BookMeeting from './components/BookMeeting'
import LinkedInSection from './components/LinkedInSection'
import Footer from './components/Footer'

export default function Home() {
  const { theme } = useTheme()
  
  return (
    <main className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white' 
        : 'bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900'
    }`}>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <WhatWeDoNew />
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
