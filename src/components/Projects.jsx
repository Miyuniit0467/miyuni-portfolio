
import { useEffect, useState } from 'react'
import {
  Github,
  ExternalLink,
  ChevronDown,
  Star
} from 'lucide-react'

import { Section, Ext } from './ui'
import {
  featured,
  githubUser,
  profile
} from '../data/siteData'

// Project images
import aswannaImage from '../assets/aswanna-cover.png'
import apiTestingImage from '../assets/api-testing-cover.png'

// Select correct image for each project
function getProjectImage(project) {
  const name = project.name.toLowerCase()

  if (name.includes('aswanna')) {
    return aswannaImage
  }

  if (
    name.includes('postman') ||
    name.includes('api testing')
  ) {
    return apiTestingImage
  }

  return project.image || null
}

// Featured project card
function Featured({ p }) {
  const [open, setOpen] = useState(false)

  const projectImage = getProjectImage(p)

  return (
    <article className="glass glass-hover overflow-hidden">

      {/* Project image */}
      <div className="relative overflow-hidden bg-[#10172d]">

        {projectImage ? (
          <img
            src={projectImage}
            alt={`${p.name} project cover`}
            loading="lazy"
            className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex aspect-video items-center justify-center bg-panel text-sm text-slate-500">
            SCREENSHOT PLACEHOLDER
          </div>
        )}

      </div>

      {/* Project information */}
      <div className="p-6">

        <p className="text-xs font-semibold text-violet">
          {p.type}
        </p>

        <h3 className="mt-1 text-xl font-bold text-white">
          {p.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {p.description}
        </p>

        {/* Technology stack */}
        {p.stack?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((skill) => (
              <li
                key={skill}
                className="rounded-md bg-electric/15 px-3 py-1 text-xs text-electric"
              >
                {skill}
              </li>
            ))}
          </ul>
        )}

        {/* View details button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-electric"
        >
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
          />

          {open ? 'Hide Details' : 'View Details'}
        </button>

        {/* Project contributions */}
        {open && (
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
            {(p.contributions || []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {/* Project links */}
        <div className="mt-6 flex flex-wrap items-center gap-3">

          {p.repo && (
            <Ext href={p.repo} className="btn-primary">
              <Github size={16} aria-hidden="true" />
              View on GitHub
            </Ext>
          )}

          {p.demo && (
            <Ext href={p.demo} className="btn-ghost">
              <ExternalLink size={16} aria-hidden="true" />
              Live Demo
            </Ext>
          )}

          {!p.repo && (
            <span className="text-xs text-slate-500">
              Repository link not added yet
            </span>
          )}

        </div>

      </div>
    </article>
  )
}

// GitHub repositories
function Repos() {
  const [state, setState] = useState({
    status: githubUser ? 'loading' : 'empty',
    repos: []
  })

  useEffect(() => {
    if (!githubUser) return

    fetch(
      `https://api.github.com/users/${githubUser}/repos?per_page=100&sort=updated`
    )
      .then((response) => {
        if (response.status === 403) {
          throw new Error('rate')
        }

        if (!response.ok) {
          throw new Error('fail')
        }

        return response.json()
      })
      .then((data) => {
        const repos = data
          .filter((repo) => !repo.fork)
          .slice(0, 6)

        setState({
          status: repos.length ? 'ok' : 'empty',
          repos
        })
      })
      .catch((error) => {
        setState({
          status:
            error.message === 'rate'
              ? 'rate'
              : 'error',
          repos: []
        })
      })
  }, [])

  const messages = {
    loading: 'Loading repositories…',
    empty: 'Add your GitHub profile URL in src/data/siteData.js to list public repositories here.',
    error: 'Could not load repositories right now.',
    rate: 'GitHub API rate limit reached. Please try again later.'
  }

  return (
    <div className="mt-14">

      <h3 className="text-xl font-bold text-white">
        More from GitHub
      </h3>

      {state.status !== 'ok' ? (
        <p
          role="status"
          className="mt-3 text-sm text-slate-400"
        >
          {messages[state.status]}

          {state.status !== 'loading' &&
            profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-electric underline"
              >
                Open GitHub Profile
              </a>
            )}
        </p>
      ) : (
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {state.repos.map((repo) => (
            <li
              key={repo.id}
              className="glass glass-hover p-5"
            >

              <h4 className="font-semibold text-white">
                {repo.name}
              </h4>

              <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                {repo.description ||
                  'No description provided.'}
              </p>

              <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">

                {repo.language && (
                  <span>{repo.language}</span>
                )}

                <span className="flex items-center gap-1">
                  <Star size={12} aria-hidden="true" />
                  {repo.stargazers_count}
                </span>

              </div>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-4"
              >
                <Github size={16} aria-hidden="true" />
                View on GitHub
              </a>

            </li>
          ))}

        </ul>
      )}

    </div>
  )
}

// Main Projects section
export default function Projects() {
  return (
    <Section
      id="projects"
      title="Featured Projects & GitHub Repositories"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {featured.map((project) => (
          <Featured
            key={project.name}
            p={project}
          />
        ))}
      </div>

      <Repos />
    </Section>
  )
}
