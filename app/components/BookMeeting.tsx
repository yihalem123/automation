'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react'

export default function BookMeeting() {
  const benefits = [
    {
      icon: CheckCircle,
      text: 'Free 30-minute consultation',
    },
    {
      icon: CheckCircle,
      text: 'Personalized automation strategy',
    },
    {
      icon: CheckCircle,
      text: 'ROI calculation and timeline',
    },
    {
      icon: CheckCircle,
      text: 'No commitment required',
    },
  ]

  const timeSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '12:00 PM', available: false },
    { time: '2:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '5:00 PM', available: false },
  ]

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
            Book Your Free Consultation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI automation? Schedule a free consultation 
            to discuss your needs and discover how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                What You'll Get
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <benefit.icon className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                    <span className="text-gray-300">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-neon-purple" />
                <h4 className="text-lg font-semibold text-white">Meeting Details</h4>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                  <span>Duration: 30 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                  <span>Format: Video call (Zoom/Teams)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                  <span>Preparation: None required</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-neon-blue" />
                <h4 className="text-lg font-semibold text-white">Who You'll Meet</h4>
              </div>
              <p className="text-gray-300">
                Our automation specialists will understand your business needs, 
                identify opportunities, and provide actionable recommendations 
                tailored to your specific situation.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Calendly Integration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-6 h-6 text-neon-cyan" />
                <h3 className="text-2xl font-bold text-white font-poppins">
                  Schedule Your Call
                </h3>
              </div>

              {/* Mock Calendar Interface */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Select Date
                  </label>
                  <div className="glass-card p-4 rounded-xl">
                    <div className="grid grid-cols-7 gap-2 text-center text-sm">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className="text-gray-400 font-medium py-2">
                          {day}
                        </div>
                      ))}
                      {Array.from({ length: 35 }, (_, i) => {
                        const day = i - 6
                        const isCurrentMonth = day > 0 && day <= 30
                        const isSelected = day === 15
                        return (
                          <motion.button
                            key={i}
                            whileHover={isCurrentMonth ? { scale: 1.1 } : {}}
                            className={`w-8 h-8 rounded-lg text-sm transition-all ${
                              isSelected
                                ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                                : isCurrentMonth
                                ? 'text-gray-300 hover:bg-white/10'
                                : 'text-gray-600'
                            }`}
                          >
                            {isCurrentMonth ? day : ''}
                          </motion.button>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Available Times
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((slot, index) => (
                      <motion.button
                        key={index}
                        whileHover={slot.available ? { scale: 1.05 } : {}}
                        whileTap={slot.available ? { scale: 0.95 } : {}}
                        disabled={!slot.available}
                        className={`p-3 rounded-xl text-sm font-medium transition-all ${
                          slot.available
                            ? 'glass-card text-white hover:bg-white/10'
                            : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {slot.time}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 glass-card rounded-xl text-white placeholder-gray-400 border border-white/10 focus:border-neon-cyan focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 glass-card rounded-xl text-white placeholder-gray-400 border border-white/10 focus:border-neon-cyan focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full p-3 glass-card rounded-xl text-white placeholder-gray-400 border border-white/10 focus:border-neon-cyan focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your automation needs (optional)"
                      rows={3}
                      className="w-full p-3 glass-card rounded-xl text-white placeholder-gray-400 border border-white/10 focus:border-neon-cyan focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary py-4 rounded-xl text-white font-semibold text-lg glow-effect"
                >
                  Confirm Booking
                </motion.button>

                <p className="text-xs text-gray-400 text-center">
                  You'll receive a calendar invite with meeting details after booking.
                </p>
              </div>
            </div>

            {/* Real Calendly Integration Note */}
            <div className="mt-6 p-4 glass-card rounded-xl">
              <p className="text-sm text-gray-400 text-center">
                💡 <strong>Integration Note:</strong> Replace this mock interface with your actual Calendly embed code:
                <br />
                <code className="text-neon-cyan">&lt;script src="https://assets.calendly.com/assets/external/widget.js"&gt;&lt;/script&gt;</code>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
