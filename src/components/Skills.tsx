import { useState } from 'react'
import { skills } from '../data'

const icons: Record<string, string> = {
  backend:  '⚙️',
  frontend: '🎨',
  database: '🗄️',
  devops:   '🚀',
}

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <p className="font-mono text-sage-500 text-sm tracking-widest mb-3">02 &mdash; Skills</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-50">
            Tech Stack
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([key, group]) => (
            <div
              key={key}
              className="glass rounded-2xl p-8 hover:glow-sage transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{icons[key]}</span>
                <h3 className="font-display font-semibold text-lg text-ink-100">
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const isHovered = hovered === item
                  return (
                    <span
                      key={item}
                      onMouseEnter={() => setHovered(item)}
                      onMouseLeave={() => setHovered(null)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-sm cursor-default transition-all duration-200 ${
                        isHovered
                          ? 'bg-sage-500/20 text-sage-300 border border-sage-500/50 scale-105'
                          : 'bg-ink-800/80 text-ink-300 border border-ink-700 hover:border-ink-500'
                      }`}
                    >
                      {item}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
