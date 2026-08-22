import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { GrainOverlay } from '@/components/GrainOverlay'
import { PageHeader } from '@/components/PageHeader'
import { blogPosts } from '@/data/blogPosts'

export default function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GrainOverlay />
      <Navigation />

      <main>
        <PageHeader
          label="Journal"
          title={<>BLOG</>}
          intro="Field notes, essays and process pieces written between assignments."
        />

        <section className="section-padding pt-0">
          <div className="max-w-7xl mx-auto space-y-0">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block border-t border-gray-800 py-8 md:py-12 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div className="lg:col-span-4 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-56 lg:h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <div className="lg:col-span-6">
                      <p className="text-xs text-gray-500 tracking-widest uppercase mb-3">
                        {post.category}
                      </p>
                      <h2 className="text-2xl lg:text-3xl font-light text-white group-hover:text-gray-300 transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-4 text-sm lg:text-base text-gray-400 leading-relaxed max-w-xl">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="lg:col-span-2 lg:text-right">
                      <p className="text-sm text-gray-600">{post.date}</p>
                      <p className="text-xs text-gray-600 mt-1">{post.readingTime}</p>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
            <div className="border-t border-gray-800" />
          </div>
        </section>
      </main>
    </div>
  )
}
