import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface PageHeaderProps {
  label: string
  title: React.ReactNode
  intro?: string
}

export function PageHeader({ label, title, intro }: PageHeaderProps) {
  return (
    <header className="section-padding pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-white transition-colors tracking-widest uppercase"
          >
            ← Bruce Banner
          </Link>
          <div className="mt-10">
            <span className="text-sm text-gray-500 tracking-widest uppercase">{label}</span>
            <div className="w-6 h-px bg-gray-600 mt-2" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="font-display text-[13vw] lg:text-section leading-none tracking-tight"
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 max-w-xl text-base lg:text-lg text-gray-400 leading-relaxed"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </header>
  )
}
