'use client';

import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Linkedin, ExternalLink, Users, TrendingUp, MessageCircle, ArrowRight, Star, Zap } from 'lucide-react';

const LinkedInSection = () => {
  const { theme } = useTheme();
  const linkedInPosts = [
    {
      type: 'article',
      title: '5 AI Automation Trends Transforming Business Operations in 2024',
      excerpt: 'Discover the latest automation technologies that are revolutionizing how businesses operate...',
      engagement: '247 likes • 23 comments',
      timeAgo: '2 days ago',
    },
    {
      type: 'case-study',
      title: 'Case Study: How TechFlow Reduced Manual Work by 85% with Custom Automation',
      excerpt: 'See how we helped TechFlow streamline their customer onboarding process and achieve remarkable results...',
      engagement: '312 likes • 41 comments',
      timeAgo: '5 days ago',
    },
    {
      type: 'insight',
      title: 'The ROI of Marketing Automation: Why Every Business Needs It',
      excerpt: 'Marketing automation isn\'t just a nice-to-have anymore. Here\'s why it\'s essential for growth...',
      engagement: '189 likes • 15 comments',
      timeAgo: '1 week ago',
    },
  ]

  const stats = [
    {
      icon: Users,
      number: '15k+',
      label: 'Followers',
    },
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Engagement Rate',
    },
    {
      icon: MessageCircle,
      number: '500+',
      label: 'Weekly Interactions',
    },
  ]

  return (
    <section id="linkedin" className={`py-24 relative transition-colors duration-500 overflow-hidden ${
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
            Connect with Us on LinkedIn
          </h2>
          
          <div className={`w-24 h-1 mx-auto rounded-full mb-6 transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
          }`} />
          
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Follow our journey, get automation insights, and connect with our community 
            of business leaders who are transforming their operations with AI.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LinkedIn Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`p-8 rounded-3xl transition-all duration-500 ${
              theme === 'dark' 
                ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700/50 hover:bg-gray-800/90 hover:border-cyan-400/50 shadow-xl hover:shadow-2xl' 
                : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:border-blue-400/50 shadow-lg hover:shadow-xl'
            }`}>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0077B5] to-[#0A66C2] rounded-2xl flex items-center justify-center shadow-lg">
                  <Linkedin className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-2xl font-bold font-poppins transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Latest Updates
                </h3>
              </div>

              <div className="space-y-6">
                {linkedInPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 group overflow-hidden ${
                      theme === 'dark' 
                        ? 'bg-gray-700/60 backdrop-blur-md border border-gray-600/30 hover:bg-gray-700/80 hover:border-cyan-400/50' 
                        : 'bg-white/60 backdrop-blur-sm border border-gray-200/30 hover:bg-white/80 hover:border-blue-400/50'
                    }`}
                  >
                    <div className="flex items-start space-x-3 mb-4">
                      <div className={`w-10 h-10 rounded-full flex-shrink-0 ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600' 
                          : 'bg-gradient-to-r from-blue-500 to-blue-600'
                      }`} />
                      <div className="flex-1">
                        <div className={`font-semibold text-sm transition-colors duration-300 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>AutomateAI</div>
                        <div className={`text-xs transition-colors duration-300 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>{post.timeAgo}</div>
                      </div>
                      <ExternalLink className={`w-4 h-4 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                    </div>
                    
                    <h4 className={`font-semibold mb-3 leading-snug transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {post.title}
                    </h4>
                    
                    <p className={`text-sm mb-4 leading-relaxed transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {post.excerpt}
                    </p>
                    
                    <div className={`text-xs transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {post.engagement}
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-br from-cyan-400/5 to-blue-400/5' 
                        : 'bg-gradient-to-br from-blue-50/50 to-indigo-50/50'
                    }`} />
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="https://linkedin.com/company/your-company"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full mt-6 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-700/80 hover:bg-gray-700/90 text-white border border-gray-600/50 hover:border-cyan-400/50'
                    : 'bg-white/80 hover:bg-white/90 text-gray-900 border border-gray-200/50 hover:border-blue-400/50'
                }`}
              >
                <Linkedin className="w-5 h-5" />
                <span>View All Posts</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* LinkedIn Stats & Connection */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className={`p-8 rounded-3xl transition-all duration-500 ${
              theme === 'dark' 
                ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700/50 hover:bg-gray-800/90 hover:border-cyan-400/50 shadow-xl hover:shadow-2xl' 
                : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:border-blue-400/50 shadow-lg hover:shadow-xl'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 font-poppins transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Our LinkedIn Community
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                    className="text-center"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600'
                    }`}>
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      {stat.number}
                    </div>
                    <div className={`text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Connection CTA */}
            <div className={`p-8 rounded-3xl transition-all duration-500 ${
              theme === 'dark' 
                ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700/50 hover:bg-gray-800/90 hover:border-cyan-400/50 shadow-xl hover:shadow-2xl' 
                : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:border-blue-400/50 shadow-lg hover:shadow-xl'
            }`}>
              <h4 className={`text-xl font-bold mb-4 font-poppins transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Join Our Professional Network
              </h4>
              <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Connect with automation experts, get exclusive insights, and stay updated 
                on the latest AI automation trends and success stories.
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="https://linkedin.com/company/your-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-cyan-500/25'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl hover:shadow-blue-500/25'
                  }`}
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Follow Our Company</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/your-founder"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-700/80 hover:bg-gray-700/90 text-white border border-gray-600/50 hover:border-cyan-400/50'
                      : 'bg-white/80 hover:bg-white/90 text-gray-900 border border-gray-200/50 hover:border-blue-400/50'
                  }`}
                >
                  <Users className="w-5 h-5" />
                  <span>Connect with Our Founder</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* LinkedIn Benefits */}
            <div className={`p-8 rounded-3xl transition-all duration-500 ${
              theme === 'dark' 
                ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700/50 hover:bg-gray-800/90 hover:border-cyan-400/50 shadow-xl hover:shadow-2xl' 
                : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:border-blue-400/50 shadow-lg hover:shadow-xl'
            }`}>
              <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                What You'll Get:
              </h4>
              <div className="space-y-3">
                {[
                  'Weekly automation insights and tips',
                  'Case studies and success stories',
                  'Industry trends and predictions',
                  'Exclusive webinars and events',
                  'Direct access to our experts',
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      theme === 'dark' 
                        ? 'bg-cyan-400' 
                        : 'bg-blue-500'
                    }`} />
                    <span className={`text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInSection;
