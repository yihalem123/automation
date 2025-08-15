'use client';

import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowRight, Star, Shield, Heart } from 'lucide-react';

const Footer = () => {
  const { theme } = useTheme();
  const quickLinks = [
    { href: '#services', label: 'Services' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#industries', label: 'Industries' },
    { href: '#testimonials', label: 'Testimonials' },
  ]

  const services = [
    { href: '#marketing-automation', label: 'Marketing Automation' },
    { href: '#operations-automation', label: 'Operations Automation' },
    { href: '#custom-workflows', label: 'Custom Workflows' },
    { href: '#ai-insights', label: 'AI Insights' },
  ]

  const resources = [
    { href: '/blog', label: 'Blog' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/whitepapers', label: 'Whitepapers' },
    { href: '/webinars', label: 'Webinars' },
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/your-company', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/your-company', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/your-company', label: 'YouTube' },
  ]

  return (
    <footer className={`relative py-20 mt-24 transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-t from-gray-950 via-gray-900 to-slate-800' 
        : 'bg-gradient-to-t from-slate-200 via-slate-100 to-slate-50'
    }`}>
      
      {/* Simple Professional Background */}
      <div className="absolute inset-0">
        {/* Subtle Accent Lines */}
        <div className={`absolute top-0 left-0 w-full h-px ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent' 
            : 'bg-gradient-to-r from-transparent via-blue-500/20 to-transparent'
        }`} />
      </div>
      
      <div className="container mx-auto px-6 relative">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`p-8 md:p-12 rounded-3xl mb-16 transition-all duration-500 ${
            theme === 'dark' 
              ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700/50 hover:bg-gray-800/90 hover:border-cyan-400/50 shadow-2xl' 
              : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:border-blue-400/50 shadow-xl'
          }`}
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className={`w-6 h-6 ${
                theme === 'dark' ? 'text-cyan-400' : 'text-blue-500'
              }`} />
              <h3 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Stay Ahead of the Automation Curve
              </h3>
              <Star className={`w-6 h-6 ${
                theme === 'dark' ? 'text-cyan-400' : 'text-blue-500'
              }`} />
            </div>
            <p className={`text-lg mb-8 leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Get weekly insights, case studies, and automation tips delivered to your inbox. 
              Join 5,000+ business leaders who trust our expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 p-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${
                  theme === 'dark'
                    ? 'bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20'
                    : 'bg-white/80 border border-gray-200/50 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400/20'
                }`}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-cyan-500/25'
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl hover:shadow-blue-500/25'
                }`}
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
            
            <p className={`text-sm mt-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              No spam. Unsubscribe at any time. Read our{' '}
              <a href="/privacy" className={`hover:underline transition-colors duration-300 ${
                theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
              }`}>
                Privacy Policy
              </a>
            </p>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600'
                }`}>
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <span className={`text-2xl font-poppins font-bold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  AutomateAI
                </span>
              </div>
              
              <p className={`mb-6 leading-relaxed max-w-md transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We help businesses automate marketing, digital operations, and custom workflows 
                with AI. Transform your processes, boost efficiency, and scale without limits.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    theme === 'dark' 
                      ? 'bg-cyan-500/20 text-cyan-400' 
                      : 'bg-blue-500/20 text-blue-600'
                  }`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:hello@automateai.com" className={`hover:underline transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}>
                    hello@automateai.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    theme === 'dark' 
                      ? 'bg-cyan-500/20 text-cyan-400' 
                      : 'bg-blue-500/20 text-blue-600'
                  }`}>
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href="tel:+1234567890" className={`hover:underline transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}>
                    +1 (234) 567-8900
                  </a>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    theme === 'dark' 
                      ? 'bg-cyan-500/20 text-cyan-400' 
                      : 'bg-blue-500/20 text-blue-600'
                  }`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className={`transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className={`font-semibold mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`hover:underline transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'text-gray-300 hover:text-cyan-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className={`font-semibold mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className={`hover:underline transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'text-gray-300 hover:text-cyan-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className={`font-semibold mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className={`hover:underline transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'text-gray-300 hover:text-cyan-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`border-t pt-8 transition-colors duration-300 ${
            theme === 'dark' ? 'border-white/10' : 'border-gray-200/50'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className={`text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              © 2024 AutomateAI. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              {[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
                { href: '/cookies', label: 'Cookie Policy' }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className={`hover:underline transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-800/80 border border-gray-700/50 text-gray-400 hover:text-white hover:border-cyan-400/50'
                      : 'bg-white/80 border border-gray-200/50 text-gray-500 hover:text-blue-600 hover:border-blue-400/50'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
