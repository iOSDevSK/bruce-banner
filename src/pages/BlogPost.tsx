import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { GrainOverlay } from '@/components/GrainOverlay'
import { getPostBySlug, blogPosts } from '@/data/blogPosts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-6">
        <GrainOverlay />
        <h1 className="font-display text-6xl">Article not found</h1>
        <Link to="/blog" className="text-gray-400 hover:text-white underline underline-offset-4">
          Back to the blog
        </Link>
      </div>
    )
  }

  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GrainOverlay />
      <Navigation />

      <main>
        <article className="section-padding pt-32 md:pt-40">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="text-sm text-gray-500 hover:text-white transition-colors tracking-widest uppercase"
            >
              ← Blog
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-10"
            >
              <p className="text-xs text-gray-500 tracking-widest uppercase mb-4">
                {post.category} — {post.date} — {post.readingTime}
              </p>
              <h1 className="font-display text-[11vw] md:text-6xl lg:text-7xl leading-none tracking-tight">
                {post.title}
              </h1>
            </motion.div>

            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              src={post.image}
              alt={post.title}
              className="w-full h-72 md:h-[28rem] object-cover grayscale mt-12"
            />

            <div className="mt-12 space-y-6">
              {post.body.map((paragraph) => (
                <p key={paragraph} className="text-base lg:text-lg text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-gray-800">
              <p className="text-sm text-gray-500 tracking-widest uppercase mb-6">Keep reading</p>
              <div className="space-y-0">
                {others.map((other) => (
                  <Link
                    key={other.slug}
                    to={`/blog/${other.slug}`}
                    className="flex items-center justify-between border-t border-gray-800 py-5 group"
                  >
                    <span className="text-lg text-white font-light group-hover:text-gray-400 transition-colors">
                      {other.title}
                    </span>
                    <span className="text-gray-600 group-hover:text-white transition-colors">↗</span>
                  </Link>
                ))}
                <div className="border-t border-gray-800" />
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
