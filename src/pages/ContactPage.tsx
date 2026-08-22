import { useState } from 'react'
import { motion } from 'framer-motion'
import { z } from 'zod'
import { toast } from 'sonner'
import { Navigation } from '@/components/Navigation'
import { GrainOverlay } from '@/components/GrainOverlay'
import { PageHeader } from '@/components/PageHeader'

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name').max(100, 'Name is too long'),
  email: z.string().trim().email('Please enter a valid email').max(255),
  subject: z.string().trim().max(150).optional(),
  message: z
    .string()
    .trim()
    .min(10, 'Tell me a little more (at least 10 characters)')
    .max(2000, 'Message is too long'),
})

const initialForm = { name: '', email: '', subject: '', message: '' }

const inputClass =
  'w-full bg-transparent border-b border-gray-800 py-4 text-base text-white placeholder:text-gray-600 focus:border-white focus:outline-none transition-colors'

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (field: keyof typeof initialForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const result = contactSchema.safeParse(form)

    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as string
        if (!fieldErrors[key]) fieldErrors[key] = issue.message
      })
      setErrors(fieldErrors)
      return
    }

    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setForm(initialForm)
      toast.success('Message sent', {
        description: 'Thanks — I will get back to you, eventually but surely.',
      })
    }, 600)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GrainOverlay />
      <Navigation />

      <main>
        <PageHeader
          label="Contact"
          title={<>GET IN<br />TOUCH</>}
          intro="Commissions, prints, lectures or just a good question — the form below reaches me directly."
        />

        <section className="section-padding pt-0">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              onSubmit={handleSubmit}
              noValidate
              className="lg:col-span-7 space-y-8"
            >
              <div>
                <label htmlFor="name" className="text-xs text-gray-500 tracking-widest uppercase">
                  Name
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={handleChange('name')}
                  maxLength={100}
                  placeholder="Your name"
                  className={inputClass}
                />
                {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="text-xs text-gray-500 tracking-widest uppercase">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  maxLength={255}
                  placeholder="you@studio.com"
                  className={inputClass}
                />
                {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="text-xs text-gray-500 tracking-widest uppercase">
                  Subject
                </label>
                <input
                  id="subject"
                  value={form.subject}
                  onChange={handleChange('subject')}
                  maxLength={150}
                  placeholder="Editorial commission, print request…"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs text-gray-500 tracking-widest uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange('message')}
                  maxLength={2000}
                  rows={6}
                  placeholder="Tell me about the project, dates and location."
                  className={`${inputClass} resize-none`}
                />
                {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="border border-gray-700 px-10 py-4 text-sm tracking-widest uppercase text-white hover:bg-white hover:text-black transition-colors disabled:opacity-50"
              >
                {submitting ? 'Sending…' : 'Send message'}
              </button>
            </motion.form>

            {/* Aside */}
            <motion.aside
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5"
            >
              <h2 className="text-xl md:text-2xl text-white font-light leading-tight mb-4">
                I'M NOTORIOUSLY<br />SLOW AT GETTING<br />BACK TO EMAILS
              </h2>
              <p className="text-sm text-gray-500 tracking-widest uppercase mb-12">
                In a hurry? Please contact my awesome producers
              </p>

              <div className="space-y-0">
                {['UNITED STATES', 'UNITED KINGDOM'].map((location) => (
                  <div
                    key={location}
                    className="flex items-center justify-between border-t border-gray-800 py-5"
                  >
                    <span className="text-sm text-gray-400 tracking-widest">{location}</span>
                    <span className="text-gray-600">↗</span>
                  </div>
                ))}
                <div className="border-t border-gray-800" />
              </div>

              <div className="mt-12 flex flex-col gap-4">
                <a
                  href="mailto:bruce@banner.photography"
                  className="text-base text-gray-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  bruce@banner.photography
                </a>
                <a
                  href="https://instagram.com/brucebanner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  Instagram
                </a>
                <a
                  href="https://vimeo.com/brucebanner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  Vimeo
                </a>
              </div>

              <p className="mt-10 text-xs text-gray-600">New York / London</p>
            </motion.aside>
          </div>
        </section>
      </main>
    </div>
  )
}
