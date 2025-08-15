'use client';

import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  ShieldCheck, 
  Zap, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  Award,
  Clock
} from 'lucide-react';

const WhyChooseUs = () => {
  const { theme } = useTheme();

  const stats = [
    {
      icon: ShieldCheck,
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable automation that never stops working"
    },
    {
      icon: Zap,
      number: "10x",
      label: "Faster Operations",
      description: "Dramatically reduce manual work time"
    },
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Trusted by businesses worldwide"
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "Cost Reduction",
      description: "Significant savings on operational costs"
    }
  ];

  const reasons = [
    {
      icon: CheckCircle,
      title: "Proven Expertise",
      description: "5+ years of automation experience with Fortune 500 companies",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Star,
      title: "Custom Solutions",
      description: "Tailored automation workflows designed specifically for your business",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Award,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Quick Implementation",
      description: "Get your automation up and running in days, not months",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="why-choose-us" className={`py-24 relative transition-colors duration-500 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100'
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
        {/* Header */}
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
            Why Choose Us
          </h2>
          
          <div className={`w-24 h-1 mx-auto rounded-full mb-6 transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
          }`} />
          
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            We deliver exceptional automation solutions with unmatched reliability, 
            customization, and support that transforms your business operations.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              className={`p-6 rounded-2xl text-center transition-all duration-500 group ${
                theme === 'dark' 
                  ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700/50 hover:bg-gray-800/90 hover:border-cyan-400/50' 
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:border-blue-400/50'
              }`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-600'
              }`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
              }`}>
                {stat.number}
              </div>
              
              <div className={`font-semibold mb-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.label}
              </div>
              
              <div className={`text-sm transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              className={`p-8 rounded-2xl transition-all duration-500 group hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700/50 hover:bg-gray-800/90 hover:border-cyan-400/50' 
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:border-blue-400/50'
              }`}
            >
              <div className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-r ${reason.color}`}>
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {reason.title}
              </h3>
              
              <p className={`leading-relaxed transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-cyan-500/25'
                : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl hover:shadow-blue-500/25'
            }`}
          >
            Start Your Automation Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
