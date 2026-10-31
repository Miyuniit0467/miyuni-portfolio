
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Phone,
  Mail,
  Github,
  Linkedin,
  Send,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'
import { profile } from '../data/siteData'

const env = import.meta.env

const configured = Boolean(
  env.VITE_EMAILJS_SERVICE_ID &&
  env.VITE_EMAILJS_TEMPLATE_ID &&
  env.VITE_EMAILJS_PUBLIC_KEY
)

const contactLinks = [
  {
    label: 'Phone',
    value: '074 1699017',
    href: 'tel:+94741699017',
    icon: Phone
  },
  {
    label: 'Email',
    value: 'mdevanga2004@gmail.com',
    href: 'mailto:mdevanga2004@gmail.com',
    icon: Mail
  },
  {
    label: 'LinkedIn',
    value: 'Connect with me',
    href: profile.linkedin || '',
    icon: Linkedin
  },
  {
    label: 'GitHub',
    value: 'Explore my projects',
    href: profile.github || '',
    icon: Github
  }
]

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!configured) {
      setStatus('unconfigured')
      return
    }

    setStatus('sending')

    try {
      await emailjs.sendForm(
        env.VITE_EMAILJS_SERVICE_ID,
        env.VITE_EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        {
          publicKey: env.VITE_EMAILJS_PUBLIC_KEY
        }
      )

      e.currentTarget.reset()
      setStatus('sent')
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080d1d] py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

        {/* Section heading */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-400">
            GET IN TOUCH
          </span>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's Connect &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
              Collaborate
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-400">
            I'm currently seeking QA internship opportunities
            and would love to connect with professionals,
            collaborate on projects, and grow in the
            software quality assurance field.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">

          {/* Left: Contact details */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Contact Information
            </h3>

            <p className="mb-8 leading-7 text-slate-400">
              Have an internship opportunity, project idea,
              or question? Feel free to reach out.
              I'd be happy to connect with you.
            </p>

            <div className="space-y-4">
              {contactLinks.map((item) => {
                const Icon = item.icon
                const external =
                  item.href.startsWith('https://')

                return (
                  <a
                    key={item.label}
                    href={item.href || undefined}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    aria-disabled={!item.href}
                    className={`group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 ${
                      item.href
                        ? 'hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10'
                        : 'cursor-not-allowed opacity-50'
                    }`}
                    onClick={(e) => {
                      if (!item.href) e.preventDefault()
                    }}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-400">
                      <Icon size={25} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="mb-1 text-sm text-slate-400">
                        {item.label}
                      </p>

                      <p className="break-words text-sm font-semibold text-white sm:text-base">
                        {item.value}
                      </p>
                    </div>

                    {item.href && (
                      <ArrowUpRight
                        size={19}
                        className="shrink-0 text-slate-500 transition group-hover:text-blue-400"
                      />
                    )}
                  </a>
                )
              })}
            </div>

            {/* Availability */}
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <span className="h-3 w-3 rounded-full bg-emerald-400" />

              <p className="text-sm text-emerald-300">
                Open to QA Internship Opportunities
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="rounded-3xl border border-white/10 bg-[#111827] p-6 shadow-2xl sm:p-8">

            <div className="mb-7">
              <h3 className="mb-2 text-2xl font-bold text-white">
                Send Me a Message
              </h3>

              <p className="text-sm leading-6 text-slate-400">
                Fill out the form below and I'll get back
                to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300">
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-300">
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-slate-300">
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="QA Internship Opportunity"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-300">
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Write your message here..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-300 hover:from-blue-600 hover:to-violet-700 hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={19} />
                {status === 'sending'
                  ? 'Sending...'
                  : 'Send Message'}
              </button>

              {status === 'sent' && (
                <div role="status" className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 size={18} />
                  Your message was sent successfully!
                </div>
              )}

              {status === 'error' && (
                <div role="alert" className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle size={18} />
                  Failed to send. Please try again or email me directly.
                </div>
              )}

              {status === 'unconfigured' && (
                <div role="alert" className="flex items-center gap-2 text-sm text-amber-400">
                  <AlertCircle size={18} />
                  Email service is not configured yet.
                  Please use the email link instead.
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
