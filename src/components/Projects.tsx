import { projects } from '../data'

const typeColors: Record<string, string> = {
  Backend:        'text-sage-400 bg-sage-500/10 border-sage-500/30',
  Infrastructure: 'text-gold-300 bg-gold-400/10 border-gold-400/30',
  'Full-stack':   'text-ink-200 bg-ink-600/20 border-ink-500/30',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <p className="font-mono text-sage-500 text-sm tracking-widest mb-3">04 &mdash; Projects</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-50">
            Key Achievements
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl p-8 hover:glow-sage transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              {/* Type badge */}
              <div className="flex items-center justify-between mb-6">
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${typeColors[proj.type]}`}>
                  {proj.type}
                </span>
                <svg className="w-5 h-5 text-ink-600 group-hover:text-sage-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>

              <h3 className="font-display font-semibold text-xl text-ink-50 mb-3 group-hover:text-gradient-sage transition-all">
                {proj.name}
              </h3>
              <p className="text-ink-400 text-sm leading-relaxed mb-6">
                {proj.description}
              </p>

              {/* Impact pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-500/10 border border-sage-500/20 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-sage-400 animate-pulse" />
                <span className="text-sage-300 text-sm font-medium">{proj.impact}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs px-2 py-1 rounded bg-ink-800 text-ink-400 border border-ink-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
