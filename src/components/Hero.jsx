
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Download,
  Github,
  Linkedin,
  Mail,
  FolderGit2,
  Send
} from 'lucide-react'

import { profile } from '../data/siteData'
import profilePhoto from '../assets/profile.jpeg'

// Rotating professional titles
function Rotating() {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (!profile.roles?.length) return

    const timer = setInterval(() => {
      setI((prev) => (prev + 1) % profile.roles.length)
    }, 2800)

    return () => clearInterval(timer)
  }, [])

  if (!profile.roles?.length) return null

  return (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="gradient-text inline-block"
      aria-live="polite"
    >
      {profile.roles[i]}
    </motion.span>
  )
}

export default function Hero() {
  const socials = [
    [profile.github, Github, 'GitHub'],
    [profile.linkedin, Linkedin, 'LinkedIn'],
    [
      profile.email && `mailto:${profile.email}`,
      Mail,
      'Email'
    ]
  ].filter(([href]) => Boolean(href))

  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-electric/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:py-28">

        {/* LEFT SIDE - Personal Information */}
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Hi, I'm {profile.name}
          </h1>

          <p className="mt-4 text-xl font-semibold text-white sm:text-2xl">
            I'm an Aspiring QA Engineer

            <span className="mt-1 block text-lg sm:text-xl">
              <Rotating />
            </span>
          </p>

          <p className="mt-5 max-w-xl leading-7 text-slate-400">
            Passionate about ensuring software quality,
            identifying defects, improving user experiences,
            and building reliable digital solutions.
            I am an IT undergraduate focused on developing
            my skills in software testing and quality assurance.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">

            <a
              href="#projects"
              className="btn-primary"
            >
              <FolderGit2 size={16} aria-hidden="true" />
              View My Projects
            </a>

            <a
              href={profile.cv}
              download="Miyuni_Devanga_Cv.pdf"
              className="btn-ghost"
>
            <Download size={16} />
             Download My CV
            </a>
            
            <a
              href="#contact"
              className="btn-ghost"
            >
              <Send size={16} aria-hidden="true" />
              Contact Me
            </a>

          </div>

          {/* Social Media Icons */}
          <div className="mt-6 flex gap-3">
            {socials.map(([href, Icon, label]) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={
                  label === 'Email'
                    ? undefined
                    : '_blank'
                }
                rel={
                  label === 'Email'
                    ? undefined
                    : 'noopener noreferrer'
                }
                className="glass glass-hover p-3"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Profile Photo */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="relative mx-auto w-full max-w-[350px]"
        >

          {/* Outer glow */}
          <div className="pointer-events-none absolute -inset-5 rounded-[45px] bg-gradient-to-r from-blue-500/20 to-violet-600/20 blur-3xl" />

          {/* Gradient photo border */}
          <div className="relative rounded-[40px] bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 p-[3px] shadow-[0_0_55px_rgba(139,92,246,0.3)]">

            {/* Profile photo */}
            <div className="overflow-hidden rounded-[37px] bg-slate-900">
              <img
                src={profilePhoto}
                alt="Miyuni Devanga - Aspiring QA Engineer"
                className="aspect-[4/5] w-full object-cover object-center"
                loading="eager"
              />
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}
