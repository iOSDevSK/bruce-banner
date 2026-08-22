import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'



const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-8 md:mb-10">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Contact</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Giant Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8"
        >
          Get in touch
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="w-full h-px bg-gray-700 mb-8 lg:mb-10"
        />

        {/* Informal Text */}
        <motion.div
          {...fadeInUp}
          className="mb-8 lg:mb-10 max-w-2xl"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-tight mb-4">
            I'M NOTORIOUSLY<br />
            SLOW AT GETTING<br />
            BACK TO EMAILS
          </h3>
          <p className="text-sm text-gray-500 tracking-widest uppercase">
            IN A HURRY? PLEASE CONTACT MY AWESOME PRODUCERS
          </p>
        </motion.div>

        {/* CTA to contact page */}
        <motion.div {...fadeInUp}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 border border-gray-700 px-8 md:px-10 py-4 text-sm tracking-widest uppercase text-white hover:bg-white hover:text-black transition-colors"
          >
            Open the contact form
            <span>↗</span>
          </Link>
          <p className="mt-6 text-sm text-gray-500">
            Or email me at{' '}
            <a
              href="mailto:bruce@banner.photography"
              className="text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              bruce@banner.photography
            </a>
          </p>
        </motion.div>


        {/* Footer */}
        <motion.footer
          {...fadeInUp}
          className="mt-16 lg:mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Bruce Banner Photography. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            New York / London
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
