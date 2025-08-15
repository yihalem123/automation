'use client'

import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

export default function WhatWeDoNew() {
  const { theme } = useTheme()
  const services = [
    {
      id: 1,
      iconUrl: 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/megaphone.svg',
      title: 'Marketing Automation',
      description: 'Plan, launch, and optimize campaigns across email, social, and ads automatically.',
      gradient: 'from-blue-500 to-blue-600',
      borderGlow: theme === 'dark' ? 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]' : 'hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]',
      animation: 'slideInLeft',
      delay: 0.1
    },
    {
      id: 2,
      iconUrl: 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cog-6-tooth.svg',
      title: 'Digital Operations Automation',
      description: 'Streamline internal processes, data entry, reporting, and tool integrations.',
      gradient: 'from-indigo-500 to-indigo-600',
      borderGlow: theme === 'dark' ? 'hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]' : 'hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]',
      animation: 'slideInBottom',
      delay: 0.2
    },
    {
      id: 3,
      iconUrl: 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/puzzle-piece.svg',
      title: 'Custom Workflows',
      description: 'Build AI-powered workflows tailored to your exact business processes.',
      gradient: 'from-purple-500 to-purple-600',
      borderGlow: theme === 'dark' ? 'hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]' : 'hover:shadow-[0_0_20px_rgba(147,51,234,0.2)]',
      animation: 'slideInRight',
      delay: 0.3
    },
    {
      id: 4,
      iconUrl: 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/chart-bar.svg',
      title: 'AI-Powered Insights',
      description: 'Analytics, dashboards, predictive AI, and decision automation.',
      gradient: 'from-cyan-500 to-cyan-600',
      borderGlow: theme === 'dark' ? 'hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]' : 'hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]',
      animation: 'zoomIn',
      delay: 0.4
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const getAnimationVariants = (animationType: string) => {
    switch (animationType) {
      case 'slideInLeft':
        return {
          hidden: { x: -100, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: 'easeOut' }
          }
        }
      case 'slideInRight':
        return {
          hidden: { x: 100, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: 'easeOut' }
          }
        }
      case 'slideInBottom':
        return {
          hidden: { y: 100, opacity: 0, scale: 0.8 },
          visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: 'easeOut' }
          }
        }
      case 'zoomIn':
        return {
          hidden: { scale: 0.5, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: { 
              duration: 0.8, 
              ease: 'easeOut',
              type: "spring",
              stiffness: 100
            }
          }
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }
    }
  }

  return (
    <section className={`relative py-20 overflow-hidden transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-black' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* AI Network Pattern */}
        <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-40' : 'opacity-20'}`}>
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={theme === 'dark' ? "#00D1FF" : "#3B82F6"} stopOpacity={theme === 'dark' ? "0.3" : "0.2"} />
                <stop offset="100%" stopColor={theme === 'dark' ? "#A855F7" : "#6366F1"} stopOpacity={theme === 'dark' ? "0.3" : "0.2"} />
              </linearGradient>
            </defs>
            <g stroke="url(#networkGradient)" strokeWidth="1" fill="none">
              <motion.path
                d="M100,200 L300,150 L500,300 L700,100 L900,250"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.path
                d="M150,400 L350,500 L550,350 L750,600 L850,450"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
              />
              <motion.path
                d="M200,600 L400,650 L600,500 L800,700 L950,600"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1 }}
              />
            </g>
            {/* Network Nodes */}
            {[...Array(12)].map((_, i) => (
              <motion.circle
                key={i}
                cx={100 + (i * 80)}
                cy={200 + Math.sin(i) * 150}
                r="3"
                fill={theme === 'dark' ? "#00D1FF" : "#3B82F6"}
                opacity={theme === 'dark' ? "0.6" : "0.4"}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </svg>
        </div>

        {/* Enhanced Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-cyan-400 to-blue-400 opacity-60' 
                : 'bg-blue-500 opacity-30'
            }`}
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 font-poppins transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            What We Do
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-400 to-purple-500' 
              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
          }`}></div>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={getAnimationVariants(service.animation)}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className={`group relative p-8 rounded-2xl backdrop-blur-xl transition-all duration-500 cursor-pointer overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10' 
                  : 'bg-white/80 border border-blue-200/30 hover:border-blue-400/50 hover:bg-white/90'
              } ${service.borderGlow}`}
            >
              {/* Glassmorphic Background Overlay */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-white/5 to-transparent' 
                  : 'bg-gradient-to-br from-blue-50/50 to-transparent'
              }`}></div>
              
              {/* Neon Border Effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-cyan-400/20 to-purple-500/20' 
                  : 'bg-gradient-to-r from-blue-400/10 to-indigo-400/10'
              }`}></div>
              
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 relative">
                  <motion.div
                    whileHover={{ 
                      rotate: [0, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <img 
                      src={service.iconUrl} 
                      alt={service.title}
                      className="w-8 h-8 filter invert brightness-0 contrast-100"
                    />
                  </motion.div>
                  
                  {/* Enhanced Icon Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Floating Sparkles */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      rotate: [0, 360],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </motion.div>
                </div>

                {/* Content */}
                <div>
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'text-white group-hover:text-cyan-100' 
                      : 'text-gray-900 group-hover:text-blue-700'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'text-gray-400 group-hover:text-gray-300' 
                      : 'text-gray-600 group-hover:text-gray-700'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className={`absolute bottom-6 right-6 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-blue-500'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>

              {/* Pulsing Effect for AI Insights Card */}
              {service.id === 4 && (
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 ${
                    theme === 'dark' ? 'border-purple-500/30' : 'border-cyan-500/20'
                  }`}
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-8 py-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-cyan-500/25' 
                : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-blue-500/25'
            }`}
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Button Content */}
            <span className="relative z-10 flex items-center space-x-2">
              <span>Explore Our Solutions</span>
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
