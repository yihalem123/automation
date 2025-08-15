'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Zap, Bot } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const floatingIcons = [
    { Icon: Sparkles, delay: 0, position: 'top-1/4 left-10' },
    { Icon: Zap, delay: 2, position: 'top-1/3 right-16' },
    { Icon: Bot, delay: 4, position: 'bottom-1/4 left-20' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Modern Light Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-indigo-400/5 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_80%)]" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 4,
            delay: delay,
            repeat: Infinity,
            repeatDelay: 8,
          }}
          className={`absolute ${position} hidden lg:block`}
        >
          <div className="w-16 h-16 bright-card rounded-2xl flex items-center justify-center">
            <Icon className="w-8 h-8 text-blue-600" />
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bright-card px-6 py-3 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm dark-text font-medium">
              AI-Powered Automation Solutions
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 leading-tight"
          >
            <span className="theme-text">Automate Everything.</span>
            <br />
            <span className="dark-text">Grow Faster.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl gray-text mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We help businesses automate marketing, digital operations, and custom workflows with AI. 
            <span className="accent-text font-semibold"> Transform your processes, boost efficiency, and scale without limits.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 rounded-xl text-white font-semibold text-lg flex items-center space-x-2"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-8 py-4 rounded-xl text-white font-semibold text-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>See How We Can Help</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: '500+', label: 'Automations Delivered' },
              { number: '80%', label: 'Faster Operations' },
              { number: '10k+', label: 'Hours Saved' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bright-card p-6 rounded-2xl text-center glass-card-hover"
              >
                <div className="text-3xl font-bold theme-text mb-2">
                  {stat.number}
                </div>
                <div className="gray-text font-medium text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
