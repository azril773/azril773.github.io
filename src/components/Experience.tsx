import { useState } from 'react'
import { experiences } from '../data'

const typeColors: Record<string, string> = {
  'Full-time':  'text-sage-400 border-sage-500/40 bg-sage-500/10',
  'Freelance':  'text-gold-300 border-gold-400/40 bg-gold-400/10',
  'Internship': 'text-ink-300 border-ink-500/40 bg-ink-500/10',
}

export default function Experience() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <p className="font-mono text-sage-500 text-sm tracking-widest mb-3">03 &mdash; Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-50">
            Work History
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-sage-500/60 via-ink-700 to-transparent hidden md:block" />

          <div className="space-y-4 md:pl-10">
            {experiences.map((exp, idx) => {
              const isOpen = openIdx === idx
              return (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute -left-[2.85rem] top-7 w-3 h-3 rounded-full border-2 transition-all duration-300 hidden md:block ${
                    isOpen ? 'border-sage-400 bg-sage-500 shadow-lg shadow-sage-500/40' : 'border-ink-600 bg-ink-800'
                  }`} />

                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className={`w-full text-left glass rounded-2xl p-6 transition-all duration-300 ${
                      isOpen ? 'glow-sage' : 'hover:border-ink-600'
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-display font-semibold text-xl text-ink-50">
                            {exp.role}
                          </h3>
                          <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${typeColors[exp.type]}`}>
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-sage-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-ink-400 font-mono text-sm">{exp.period}</span>
                        <svg
                          className={`w-4 h-4 text-ink-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {exp.highlights.length > 0 && (
                      <div className="flex gap-3 mt-4">
                        {exp.highlights.map((h) => (
                          <div key={h.metric} className="glass rounded-lg px-4 py-2">
                            <p className="font-display font-semibold text-2xl text-sage-300">{h.metric}</p>
                            <p className="text-ink-400 text-xs">{h.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {isOpen && (
                      <ul className="mt-6 space-y-2 animate-fade-up">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className="flex items-start gap-3 text-ink-300">
                            <span className="text-sage-500 mt-1 flex-shrink-0">▸</span>
                            <span className="text-sm leading-relaxed">{a}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
