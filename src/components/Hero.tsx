import { useEffect, useState } from 'react'
import { profile, stats } from '../data'

const roles = [
  'Backend Engineer',
  'System Architect',
  'API Developer',
  'Go & NestJS Dev',
  'Docker Enthusiast',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-5xl mx-auto">

      {/* Decorative grid */}
      <div className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(78,140,66,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(78,140,66,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      <div className="animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
        <p className="font-mono text-sage-400 text-sm tracking-widest mb-6">
          &gt; Hello, world. I'm
        </p>
      </div>

      <div className="animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
        <h1 className="font-display font-700 text-5xl md:text-7xl text-ink-50 leading-tight mb-2">
          Mohammad Azril
        </h1>
        <h1 className="font-display font-700 text-5xl md:text-7xl leading-tight mb-8">
          <span className="text-gradient-sage">Sugiarto</span>
        </h1>
      </div>

      <div className="animate-fade-up flex items-center gap-3 mb-6" style={{ animationDelay: '0.35s', opacity: 0 }}>
        <span className="font-mono text-ink-400 text-lg">//</span>
        <span className="font-mono text-xl text-sage-300">
          {displayed}
          <span className="animate-blink text-sage-400">|</span>
        </span>
      </div>

      <div className="animate-fade-up max-w-xl mb-12" style={{ animationDelay: '0.5s', opacity: 0 }}>
        <p className="text-ink-300 text-lg leading-relaxed">
          {profile.bio}
        </p>
      </div>

      {/* Stats row */}
      <div className="animate-fade-up grid grid-cols-2 md:grid-cols-4 gap-4 mb-12" style={{ animationDelay: '0.65s', opacity: 0 }}>
        {stats.map((stat) => (
          <div key={stat.label} className="glass rounded-xl p-4">
            <p className="font-display font-semibold text-3xl text-sage-300">
              {stat.value}
              <span className="text-sage-500 text-lg">{stat.suffix}</span>
            </p>
            <p className="text-ink-400 text-xs mt-1 leading-snug">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="animate-fade-up flex flex-wrap gap-4" style={{ animationDelay: '0.8s', opacity: 0 }}>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-sage-500 hover:bg-sage-400 text-ink-900 font-display font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-sage-500/20 hover:-translate-y-0.5"
        >
          View my work
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-ink-600 hover:border-ink-400 text-ink-300 hover:text-ink-100 font-display font-medium rounded-lg transition-all duration-200"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-500">
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-ink-600 to-transparent" />
      </div>
    </section>
  )
}
