'use client';

import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  ShoppingCart, 
  TrendingUp, 
  CreditCard, 
  Users, 
  Building, 
  Briefcase, 
  Stethoscope, 
  GraduationCap,
  Rocket,
  Target,
  Zap,
  Globe
} from 'lucide-react';

const Industries = () => {
  const { theme } = useTheme();

  const industries = [
    {
      icon: TrendingUp,
      name: 'Marketing Agencies',
      description: 'Automate client campaigns, reporting, and lead management workflows.',
      color: 'from-blue-500 to-cyan-500',
      features: ['Campaign Automation', 'Lead Scoring', 'ROI Tracking']
    },
    {
      icon: ShoppingCart,
      name: 'eCommerce',
      description: 'Streamline inventory, order processing, and customer service automation.',
      color: 'from-purple-500 to-pink-500',
      features: ['Order Processing', 'Inventory Management', 'Customer Support']
    },
    {
      icon: Building,
      name: 'SaaS Companies',
      description: 'Optimize onboarding, customer success, and product development processes.',
      color: 'from-cyan-500 to-blue-500',
      features: ['User Onboarding', 'Customer Success', 'Product Analytics']
    },
    {
      icon: CreditCard,
      name: 'Financial Services',
      description: 'Automate compliance, reporting, and customer verification workflows.',
      color: 'from-green-500 to-emerald-500',
      features: ['Compliance Monitoring', 'Risk Assessment', 'Customer KYC']
    },
    {
      icon: Users,
      name: 'Human Resources',
      description: 'Streamline recruitment, onboarding, and employee management processes.',
      color: 'from-orange-500 to-red-500',
      features: ['Recruitment Pipeline', 'Employee Onboarding', 'Performance Tracking']
    },
    {
      icon: Briefcase,
      name: 'Consulting',
      description: 'Automate project management, client communication, and billing workflows.',
      color: 'from-indigo-500 to-purple-500',
      features: ['Project Management', 'Client Communication', 'Billing Automation']
    },
    {
      icon: Stethoscope,
      name: 'Healthcare',
      description: 'Optimize patient management, scheduling, and documentation processes.',
      color: 'from-teal-500 to-cyan-500',
      features: ['Patient Scheduling', 'Document Management', 'Billing Automation']
    },
    {
      icon: GraduationCap,
      name: 'Education',
      description: 'Automate student management, course delivery, and administrative tasks.',
      color: 'from-yellow-500 to-orange-500',
      features: ['Student Management', 'Course Delivery', 'Administrative Tasks']
    },
  ];



  return (
    <section id="industries" className={`py-24 relative transition-colors duration-500 overflow-hidden ${
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
            Industries We Serve
          </h2>
          
          <div className={`w-24 h-1 mx-auto rounded-full mb-6 transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
          }`} />
          
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Our automation solutions are designed to meet the unique needs of diverse industries, 
            helping businesses across sectors optimize their operations and achieve growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className={`p-6 rounded-2xl transition-all duration-500 group cursor-pointer overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700/50 hover:bg-gray-800/90 hover:border-cyan-400/50 shadow-xl hover:shadow-2xl' 
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:border-blue-400/50 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Icon with enhanced styling */}
              <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Title */}
              <h3 className={`text-lg font-bold mb-3 font-poppins transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {industry.name}
              </h3>
              
              {/* Description */}
              <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {industry.description}
              </p>
              
              {/* Features */}
              <div className="space-y-2">
                {industry.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className={`flex items-center text-xs transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-r ${industry.color}`} />
                    {feature}
                  </div>
                ))}
              </div>
              
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-cyan-400/5 to-blue-400/5' 
                  : 'bg-gradient-to-br from-blue-50/50 to-indigo-50/50'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories Teaser */}
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
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Don't See Your Industry?
            </h3>
            <p className={`text-lg mb-6 leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We've successfully implemented automation solutions across many other industries. 
              Every business has unique processes that can benefit from intelligent automation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-cyan-500/25'
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl hover:shadow-blue-500/25'
              }`}
            >
              Discuss Your Industry
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
