'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Cog, Workflow, BarChart3, ArrowRight } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function WhatWeDo() {
  const { theme } = useTheme()
  
  const services = [
    {
      icon: MessageSquare,
      title: 'Marketing Automation',
      description: 'Automate email campaigns, social media, lead nurturing, and customer journeys with intelligent AI-driven strategies.',
      features: ['Email Marketing', 'Social Media', 'Lead Scoring', 'Customer Segmentation'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/8',
    },
    {
      icon: Cog,
      title: 'Digital Operations Automation',
      description: 'Streamline your business operations with automated workflows for data processing, reporting, and task management.',
      features: ['Data Processing', 'Report Generation', 'Task Management', 'System Integration'],
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-600/8',
    },
    {
      icon: Workflow,
      title: 'Custom Workflows',
      description: 'Build tailored automation solutions that fit your unique business processes and requirements.',
      features: ['Custom Integrations', 'Process Optimization', 'API Connections', 'Workflow Design'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/8',
    },
    {
      icon: BarChart3,
      title: 'AI-Powered Insights',
      description: 'Get intelligent analytics and predictive insights to make data-driven decisions and optimize performance.',
      features: ['Predictive Analytics', 'Performance Monitoring', 'AI Recommendations', 'Real-time Dashboards'],
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-600/8',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="services" className={`py-24 relative transition-colors duration-500 ${
      theme === 'dark' ? 'bg-gray-900/50' : 'bg-white/50'
    }`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold font-poppins mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'theme-text'
          }`}>
            What We Do
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'secondary-text'
          }`}>
            We provide comprehensive AI automation solutions that transform how your business operates, 
            from marketing and operations to custom workflows and intelligent insights.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`p-6 rounded-2xl glass-card-hover group relative transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20' 
                  : `bright-card ${service.bgColor}`
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-3 font-poppins transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'dark-text'
              }`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`mb-4 leading-relaxed text-sm transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'secondary-text'
              }`}>
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-400' : 'gray-text'
                    }`}>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Learn More */}
              <motion.button
                whileHover={{ x: 3 }}
                className={`flex items-center space-x-2 font-medium transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'text-cyan-400 group-hover:text-cyan-300' 
                    : 'accent-text group-hover:text-blue-700'
                }`}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
