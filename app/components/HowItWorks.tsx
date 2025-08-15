'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Rocket } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We analyze your current processes, identify automation opportunities, and understand your business goals to create a tailored strategy.',
      features: ['Process Analysis', 'Goal Setting', 'Opportunity Mapping', 'Strategy Development'],
    },
    {
      icon: Lightbulb,
      title: 'Automation Design',
      description: 'Our experts design custom automation workflows, integrate with your existing systems, and create intelligent solutions that fit your needs.',
      features: ['Workflow Design', 'System Integration', 'Custom Development', 'Testing & Validation'],
    },
    {
      icon: Rocket,
      title: 'Launch & Optimization',
      description: 'We deploy your automation solutions, provide training, and continuously optimize performance to ensure maximum efficiency and ROI.',
      features: ['Deployment', 'Team Training', 'Performance Monitoring', 'Ongoing Optimization'],
    },
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
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins theme-text mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Our proven 3-step process ensures seamless automation implementation 
            that delivers measurable results for your business.
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
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-px bg-gradient-to-r from-blue-400 to-transparent z-0" />
              )}

              {/* Step Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="bright-card p-8 rounded-3xl text-center relative z-10 glass-card-hover"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-200 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center justify-center space-x-3"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span className="text-slate-300 text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline for Mobile */}
        <div className="md:hidden mt-12">
          <div className="flex flex-col items-center space-y-8">
            {steps.map((_, index) => (
              index < steps.length - 1 && (
                <div key={index} className="w-px h-16 bg-gradient-to-b from-blue-400 to-blue-500" />
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}