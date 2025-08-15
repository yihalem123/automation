'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative p-3 rounded-xl transition-all duration-300
        ${theme === 'dark' 
          ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20' 
          : 'bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200'
        }
      `}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 1.1 : 1 
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </motion.div>
      
      {/* Glow effect for dark mode */}
      {theme === 'dark' && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-md -z-10"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        />
      )}
    </motion.button>
  )
}
