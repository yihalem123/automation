'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'particle'
      
      const size = Math.random() * 4 + 2
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      const duration = Math.random() * 10 + 5
      const delay = Math.random() * 5
      
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${x}px`
      particle.style.top = `${y}px`
      particle.style.animationDuration = `${duration}s`
      particle.style.animationDelay = `${delay}s`
      
      container.appendChild(particle)
      
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle)
        }
      }, (duration + delay) * 1000)
    }

    // Create initial particles
    for (let i = 0; i < 30; i++) {
      setTimeout(createParticle, i * 200)
    }

    // Create new particles periodically
    const interval = setInterval(createParticle, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <div ref={containerRef} className="particles" />
}
