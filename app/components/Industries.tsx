'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, TrendingUp, CreditCard, Users, Building, Briefcase, Stethoscope, GraduationCap } from 'lucide-react'

export default function Industries() {
  const industries = [
    {
      icon: TrendingUp,
      name: 'Marketing Agencies',
      description: 'Automate client campaigns, reporting, and lead management workflows.',
      color: 'from-neon-blue to-neon-cyan',
    },
    {
      icon: ShoppingCart,
      name: 'eCommerce',
      description: 'Streamline inventory, order processing, and customer service automation.',
      color: 'from-neon-purple to-neon-pink',
    },
    {
      icon: Building,
      name: 'SaaS Companies',
      description: 'Optimize onboarding, customer success, and product development processes.',
      color: 'from-neon-cyan to-neon-blue',
    },
    {
      icon: CreditCard,
      name: 'Financial Services',
      description: 'Automate compliance, reporting, and customer verification workflows.',
      color: 'from-neon-pink to-neon-purple',
    },
    {
      icon: Users,
      name: 'Human Resources',
      description: 'Streamline recruitment, onboarding, and employee management processes.',
      color: 'from-neon-blue to-neon-purple',
    },
    {
      icon: Briefcase,
      name: 'Consulting',
      description: 'Automate project management, client communication, and billing workflows.',
      color: 'from-neon-cyan to-neon-pink',
    },
    {
      icon: Stethoscope,
      name: 'Healthcare',
      description: 'Optimize patient management, scheduling, and documentation processes.',
      color: 'from-neon-purple to-neon-cyan',
    },
    {
      icon: GraduationCap,
      name: 'Education',
      description: 'Automate student management, course delivery, and administrative tasks.',
      color: 'from-neon-pink to-neon-blue',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="industries" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our automation solutions are designed to meet the unique needs of diverse industries, 
            helping businesses across sectors optimize their operations and achieve growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-2xl glass-card-hover group cursor-pointer"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-4 glow-effect group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 font-poppins">
                {industry.name}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We've successfully implemented automation solutions across many other industries. 
              Every business has unique processes that can benefit from intelligent automation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-6 py-3 rounded-xl text-white font-semibold"
            >
              Discuss Your Industry
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
