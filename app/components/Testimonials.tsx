'use client';

import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Star, Quote, TrendingUp, Users, Clock } from 'lucide-react';

const Testimonials = () => {
  const { theme } = useTheme();
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



  return (
    <section id="testimonials" className={`py-24 relative transition-colors duration-500 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900' 
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
            Success Stories
          </h2>
          
          <div className={`w-24 h-1 mx-auto rounded-full mb-6 transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
          }`} />
          
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            See how businesses across industries have transformed their operations 
            and achieved remarkable results with our automation solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className={`p-8 rounded-3xl relative transition-all duration-500 group overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700/50 hover:bg-gray-800/90 hover:border-cyan-400/50 shadow-xl hover:shadow-2xl' 
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:border-blue-400/50 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4">
                <div className={`w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg ${
                  theme === 'dark' ? 'ring-2 ring-gray-800' : 'ring-2 ring-white'
                }`}>
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Results Badge */}
              <div className="absolute -top-4 -right-4">
                <div className={`px-4 py-2 rounded-full backdrop-blur-md ${
                  theme === 'dark' 
                    ? 'bg-cyan-500/20 border border-cyan-400/30' 
                    : 'bg-blue-500/20 border border-blue-400/30'
                }`}>
                  <div className="text-center">
                    <div className={`text-sm font-bold transition-colors duration-300 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      {testimonial.results.metric}
                    </div>
                    <div className={`text-xs transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {testimonial.results.description}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className={`mb-6 leading-relaxed text-lg transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg ${
                  theme === 'dark' ? 'ring-2 ring-gray-800' : 'ring-2 ring-white'
                }`}>
                  <span className="text-white font-bold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className={`font-semibold transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {testimonial.role}
                  </div>
                  <div className={`text-xs transition-colors duration-300 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                  }`}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-cyan-400/5 to-blue-400/5' 
                  : 'bg-gradient-to-br from-blue-50/50 to-indigo-50/50'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className={`p-8 rounded-3xl max-w-4xl mx-auto transition-all duration-500 ${
            theme === 'dark' 
              ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700/50' 
              : 'bg-white/80 backdrop-blur-sm border border-gray-200/50'
          }`}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                }`}>98%</div>
                <div className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                }`}>500+</div>
                <div className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>Projects Completed</div>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                }`}>24/7</div>
                <div className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
