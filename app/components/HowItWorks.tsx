'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Rocket } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function HowItWorks() {
  const { theme } = useTheme()
  
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We analyze your current processes and identify automation opportunities that will deliver the highest ROI.'
    },
    {
      icon: Lightbulb,
      title: 'Automation Design',
      description: 'Our experts design custom automation workflows tailored to your specific business needs and goals.'
    },
    {
      icon: Rocket,
      title: 'Launch & Optimization',
      description: 'We implement your automation solution with minimal disruption and provide comprehensive training.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="how-it-works" className={`py-20 relative transition-colors duration-500 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100'
    }`}>
      {/* Professional Background */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern - Dark Theme Only */}
        {theme === 'dark' && (
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.2"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        )}
        
        {/* Simple Accent Lines */}
        <div className={`absolute top-0 left-0 w-full h-px ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent' 
            : 'bg-gradient-to-r from-transparent via-blue-500/20 to-transparent'
        }`} />
        <div className={`absolute bottom-0 left-0 w-full h-px ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-transparent via-blue-500/30 to-transparent' 
            : 'bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent'
        }`} />
        

      </div>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className={`text-4xl md:text-5xl font-bold font-poppins mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            How It Works
          </h2>
          
          <div className={`w-24 h-1 mx-auto rounded-full mb-6 transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
          }`} />
          
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Our streamlined 3-step process transforms your ideas into powerful automation solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Enhanced Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-32 left-full w-full h-px z-0">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${
                      theme === 'dark' 
                        ? 'from-cyan-400/40 via-blue-400/30 to-transparent' 
                        : 'from-blue-400/30 via-indigo-400/20 to-transparent'
                    }`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    style={{ transformOrigin: 'left' }}
                  />
                  
                  {/* Animated Dots along the line */}
                  {[...Array(3)].map((_, dotIndex) => (
                    <motion.div
                      key={dotIndex}
                      className={`absolute top-1/2 w-2 h-2 rounded-full ${
                        theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-400'
                      }`}
                      style={{
                        left: `${(dotIndex + 1) * 25}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.8 + index * 0.2 + dotIndex * 0.1 
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.6, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: dotIndex * 0.2
                      }}
                    />
                  ))}
                </div>
              )}

                            {/* Enhanced Step Card */}
              <motion.div
                whileHover={{ scale: 1.03, y: -8 }}
                className={`p-8 rounded-2xl text-center relative z-10 transition-all duration-500 overflow-hidden group ${
                  theme === 'dark' 
                    ? 'bg-gray-800/98 backdrop-blur-md border-2 border-gray-600/70 hover:bg-gray-800/99 hover:border-cyan-400/80 shadow-2xl' 
                    : 'bg-white/95 backdrop-blur-sm border-2 border-gray-200/60 hover:bg-white/98 hover:border-blue-400/70 shadow-xl'
                }`}
              >
                {/* Enhanced Background Overlay */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-cyan-400/15 to-blue-400/15' 
                    : 'bg-gradient-to-br from-blue-50/60 to-indigo-50/60'
                }`} />
                
                {/* Subtle Border Glow */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  theme === 'dark' 
                    ? 'border-2 border-cyan-400/40' 
                    : 'border-2 border-blue-400/30'
                }`} />
                {/* Enhanced Step Number */}
                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 ring-4 ring-gray-800' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 ring-4 ring-white'
                    }`}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    animate={{
                      boxShadow: [
                        '0 4px 20px rgba(0, 209, 255, 0.4)',
                        '0 8px 30px rgba(0, 209, 255, 0.6)',
                        '0 4px 20px rgba(0, 209, 255, 0.4)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {index + 1}
                  </motion.div>
                  
                  {/* Step Number Glow */}
                  <motion.div 
                    className={`absolute inset-0 w-16 h-16 rounded-full ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-400' 
                        : 'bg-gradient-to-r from-blue-400 to-blue-500'
                    } opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Enhanced Icon */}
                <div className="w-20 h-20 mx-auto mb-6 relative mt-8">
                  <motion.div 
                    className={`w-full h-full rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 ring-2 ring-cyan-400/30' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 ring-2 ring-blue-400/30'
                    }`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, 8, -8, 0]
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  {/* Icon Glow Effect */}
                  <motion.div 
                    className={`absolute inset-0 w-20 h-20 rounded-2xl ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-400' 
                        : 'bg-gradient-to-r from-blue-400 to-blue-500'
                    } opacity-0 group-hover:opacity-25 blur-lg transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Floating Sparkles */}
                  <motion.div
                    className={`absolute -top-3 -right-3 w-5 h-5 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-blue-500'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
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

                {/* Title */}
                <h3 className={`text-lg font-semibold mb-2 font-poppins transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

                            {/* Timeline for Mobile */}
                    <div className="md:hidden mt-12">
                      <div className="flex flex-col items-center space-y-10">
                        {steps.map((_, index) => (
                          index < steps.length - 1 && (
                            <div key={index} className={`w-px h-20 bg-gradient-to-b ${
                              theme === 'dark' 
                                ? 'from-cyan-400/60 to-blue-400/60' 
                                : 'from-blue-400/60 to-blue-500/60'
                            }`} />
                          )
                        ))}
                      </div>
                    </div>
      </div>
    </section>
  )
}