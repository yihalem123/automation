'use client'

import { motion } from 'framer-motion'
import { Linkedin, ExternalLink, Users, TrendingUp, MessageCircle } from 'lucide-react'

export default function LinkedInSection() {
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
            Connect with Us on LinkedIn
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-[#0077B5] to-[#0A66C2] rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-poppins">
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
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 rounded-2xl glass-card-hover cursor-pointer"
                  >
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex-shrink-0" />
                      <div className="flex-1">
                        <div className="text-white font-semibold text-sm">AutomateAI</div>
                        <div className="text-gray-400 text-xs">{post.timeAgo}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </div>
                    
                    <h4 className="text-white font-semibold mb-2 leading-snug">
                      {post.title}
                    </h4>
                    
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="text-gray-400 text-xs">
                      {post.engagement}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="https://linkedin.com/company/your-company"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-secondary mt-6 py-3 rounded-xl text-white font-semibold flex items-center justify-center space-x-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>View All Posts</span>
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
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
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
                    <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Connection CTA */}
            <div className="glass-card p-8 rounded-3xl">
              <h4 className="text-xl font-bold text-white mb-4 font-poppins">
                Join Our Professional Network
              </h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Connect with automation experts, get exclusive insights, and stay updated 
                on the latest AI automation trends and success stories.
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="https://linkedin.com/company/your-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary py-3 rounded-xl text-white font-semibold flex items-center justify-center space-x-2 glow-effect"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Follow Our Company</span>
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/your-founder"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-secondary py-3 rounded-xl text-white font-semibold flex items-center justify-center space-x-2"
                >
                  <Users className="w-5 h-5" />
                  <span>Connect with Our Founder</span>
                </motion.a>
              </div>
            </div>

            {/* LinkedIn Benefits */}
            <div className="glass-card p-8 rounded-3xl">
              <h4 className="text-lg font-semibold text-white mb-4">
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
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-neon-cyan rounded-full flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
