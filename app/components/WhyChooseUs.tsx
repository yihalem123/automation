'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Target, Users, Award, Clock } from 'lucide-react'

export default function WhyChooseUs() {
  const stats = [
    {
      number: '500+',
      label: 'Automations Delivered',
      icon: Award,
      color: 'from-neon-blue to-neon-cyan',
    },
    {
      number: '80%',
      label: 'Faster Operations',
      icon: Zap,
      color: 'from-neon-purple to-neon-pink',
    },
    {
      number: '10k+',
      label: 'Hours Saved',
      icon: Clock,
      color: 'from-neon-cyan to-neon-blue',
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for all automation systems.',
    },
    {
      icon: Target,
      title: 'Customization',
      description: 'Tailored solutions designed specifically for your business processes and requirements.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 dedicated support team with automation specialists ready to help.',
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
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We deliver proven results with reliable, customized automation solutions 
            backed by expert support and cutting-edge technology.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-8 rounded-3xl text-center glass-card-hover group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 glow-effect group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
                className="text-4xl md:text-5xl font-bold gradient-text mb-2"
              >
                {stat.number}
              </motion.div>
              
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-20 h-20 glass-card rounded-3xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-10 h-10 text-neon-cyan" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 font-poppins">
                {benefit.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of businesses that have already automated their way to success. 
              Let's discuss how we can help you achieve your automation goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 rounded-xl text-white font-semibold text-lg glow-effect"
            >
              Start Your Automation Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
