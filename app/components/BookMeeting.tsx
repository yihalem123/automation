'use client';

import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Star, Zap, Shield } from 'lucide-react';

const BookMeeting = () => {
  const { theme } = useTheme();
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
    <section id="book-meeting" className={`py-24 relative transition-colors duration-500 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800' 
        : 'bg-gradient-to-br from-slate-100 via-blue-100 to-slate-200'
    }`}>
      
      {/* Simple Professional Background */}
      <div className="absolute inset-0">
        {/* Subtle Accent Lines */}
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
            Book Your Free Consultation
          </h2>
          
          <div className={`w-24 h-1 mx-auto rounded-full mb-6 transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
          }`} />
          
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
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
            <div className={`p-8 rounded-3xl transition-all duration-500 ${
              theme === 'dark' 
                ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700/50 hover:bg-gray-800/90 hover:border-cyan-400/50 shadow-xl hover:shadow-2xl' 
                : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:border-blue-400/50 shadow-lg hover:shadow-xl'
            }`}>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600'
                }`}>
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold font-poppins transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  What You'll Get
                </h3>
              </div>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      theme === 'dark' 
                        ? 'bg-cyan-500/20 text-cyan-400' 
                        : 'bg-blue-500/20 text-blue-600'
                    }`}>
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className={`transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={`p-8 rounded-3xl transition-all duration-500 ${
              theme === 'dark' 
                ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700/50 hover:bg-gray-800/90 hover:border-cyan-400/50 shadow-xl hover:shadow-2xl' 
                : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:border-blue-400/50 shadow-lg hover:shadow-xl'
            }`}>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-600'
                }`}>
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className={`text-lg font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Meeting Details</h4>
              </div>
              <div className="space-y-4">
                {[
                  { text: 'Duration: 30 minutes', icon: '⏱️' },
                  { text: 'Format: Video call (Zoom/Teams)', icon: '📹' },
                  { text: 'Preparation: None required', icon: '✨' }
                ].map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300">
                    <span className="text-lg">{detail.icon}</span>
                    <span className={`transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>{detail.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`p-8 rounded-3xl transition-all duration-500 ${
              theme === 'dark' 
                ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700/50 hover:bg-gray-800/90 hover:border-cyan-400/50 shadow-xl hover:shadow-2xl' 
                : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:border-blue-400/50 shadow-lg hover:shadow-xl'
            }`}>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600' 
                    : 'bg-gradient-to-r from-blue-500 to-indigo-600'
                }`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className={`text-lg font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Who You'll Meet</h4>
              </div>
              <p className={`leading-relaxed transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
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
            <div className={`p-8 rounded-3xl transition-all duration-500 ${
              theme === 'dark' 
                ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700/50 hover:bg-gray-800/90 hover:border-cyan-400/50 shadow-xl hover:shadow-2xl' 
                : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:border-blue-400/50 shadow-lg hover:shadow-xl'
            }`}>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600'
                }`}>
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold font-poppins transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
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
                      className={`w-full p-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${
                        theme === 'dark'
                          ? 'bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20'
                          : 'bg-white/80 border border-gray-200/50 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400/20'
                      }`}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className={`w-full p-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${
                        theme === 'dark'
                          ? 'bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20'
                          : 'bg-white/80 border border-gray-200/50 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400/20'
                      }`}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className={`w-full p-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${
                        theme === 'dark'
                          ? 'bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20'
                          : 'bg-white/80 border border-gray-200/50 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400/20'
                      }`}
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your automation needs (optional)"
                      rows={3}
                      className={`w-full p-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                        theme === 'dark'
                          ? 'bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20'
                          : 'bg-white/80 border border-gray-200/50 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400/20'
                      }`}
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-cyan-500/25'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl hover:shadow-blue-500/25'
                  }`}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Confirm Booking</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>

                <p className="text-xs text-gray-400 text-center">
                  You'll receive a calendar invite with meeting details after booking.
                </p>
              </div>
            </div>

            {/* Real Calendly Integration Note */}
            <div className={`mt-6 p-6 rounded-xl transition-all duration-500 ${
              theme === 'dark' 
                ? 'bg-gray-800/60 backdrop-blur-md border border-gray-700/30' 
                : 'bg-white/60 backdrop-blur-sm border border-gray-200/30'
            }`}>
              <p className={`text-sm text-center transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                💡 <strong>Integration Note:</strong> Replace this mock interface with your actual Calendly embed code:
                <br />
                <code className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                }`}>&lt;script src="https://assets.calendly.com/assets/external/widget.js"&gt;&lt;/script&gt;</code>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookMeeting;
