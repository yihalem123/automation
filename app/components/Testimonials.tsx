'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow Solutions',
      company: 'SaaS Platform',
      rating: 5,
      text: 'AutomateAI transformed our customer onboarding process. What used to take 2 hours now happens in 15 minutes, and our customer satisfaction scores have increased by 40%.',
      avatar: 'SC',
      results: {
        metric: '87%',
        description: 'Faster Onboarding'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Marketing Director',
      company: 'GrowthLab Agency',
      rating: 5,
      text: 'The marketing automation workflows have been a game-changer. We\'ve increased our lead conversion rate by 65% while reducing manual work by 80%.',
      avatar: 'MR',
      results: {
        metric: '65%',
        description: 'Higher Conversions'
      }
    },
    {
      name: 'Emily Watson',
      role: 'Operations Manager',
      company: 'RetailPro Inc.',
      rating: 5,
      text: 'Our inventory management is now completely automated. We\'ve eliminated stockouts, reduced waste by 30%, and our team can focus on strategic initiatives.',
      avatar: 'EW',
      results: {
        metric: '30%',
        description: 'Waste Reduction'
      }
    },
    {
      name: 'David Kim',
      role: 'CTO, DataSync',
      company: 'Analytics Platform',
      rating: 5,
      text: 'The custom workflow automation has streamlined our data processing pipeline. We can now handle 10x more data with the same team size.',
      avatar: 'DK',
      results: {
        metric: '10x',
        description: 'Data Processing'
      }
    },
    {
      name: 'Lisa Thompson',
      role: 'Finance Director',
      company: 'SecureBank Solutions',
      rating: 5,
      text: 'Compliance reporting that used to take weeks now happens automatically. The accuracy is perfect and we\'ve reduced our audit preparation time by 90%.',
      avatar: 'LT',
      results: {
        metric: '90%',
        description: 'Time Savings'
      }
    },
    {
      name: 'James Anderson',
      role: 'Founder',
      company: 'EduTech Innovations',
      rating: 5,
      text: 'Student enrollment and course management are now seamlessly automated. We\'ve improved student experience while reducing administrative costs by 60%.',
      avatar: 'JA',
      results: {
        metric: '60%',
        description: 'Cost Reduction'
      }
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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See how businesses across industries have transformed their operations 
            and achieved remarkable results with our automation solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-6 rounded-3xl glass-card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Results Badge */}
              <div className="absolute -top-3 -right-3">
                <div className="glass-card px-3 py-1 rounded-full">
                  <div className="text-center">
                    <div className="text-sm font-bold gradient-text">
                      {testimonial.results.metric}
                    </div>
                    <div className="text-xs text-gray-400">
                      {testimonial.results.description}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}
                  </div>
                  <div className="text-neon-cyan text-xs">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
