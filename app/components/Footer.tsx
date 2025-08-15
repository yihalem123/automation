'use client'

import { motion } from 'framer-motion'
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowRight } from 'lucide-react'

export default function Footer() {
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
    <footer className="relative py-16 mt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 rounded-3xl mb-16"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Stay Ahead of the Automation Curve
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get weekly insights, case studies, and automation tips delivered to your inbox. 
              Join 5,000+ business leaders who trust our expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-4 glass-card rounded-xl text-white placeholder-gray-400 border border-white/10 focus:border-neon-cyan focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-6 py-4 rounded-xl text-white font-semibold flex items-center justify-center space-x-2 glow-effect"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              No spam. Unsubscribe at any time. Read our{' '}
              <a href="/privacy" className="text-neon-cyan hover:underline">
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
                <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl flex items-center justify-center glow-effect">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-poppins font-bold gradient-text">
                  AutomateAI
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                We help businesses automate marketing, digital operations, and custom workflows 
                with AI. Transform your processes, boost efficiency, and scale without limits.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                  <a href="mailto:hello@automateai.com" className="text-gray-300 hover:text-white transition-colors">
                    hello@automateai.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                  <span className="text-gray-300">
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
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-neon-cyan transition-colors duration-300"
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
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-neon-cyan transition-colors duration-300"
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
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-neon-cyan transition-colors duration-300"
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
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 AutomateAI. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors"
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
  )
}
