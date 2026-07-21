import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <p className="font-mono text-sage-500 text-sm tracking-widest mb-3">05 &mdash; Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-50">
            Let's Build Something
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-ink-300 text-lg leading-relaxed mb-8">
              I'm open to backend engineer roles, freelance projects, and interesting technical conversations. Let's connect.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:border-sage-500/50 transition-all">
                  <svg className="w-4 h-4 text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-ink-400 text-xs mb-0.5">Email</p>
                  <p className="text-ink-100 font-mono text-sm group-hover:text-sage-300 transition-colors">{profile.email}</p>
                </div>
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:border-sage-500/50 transition-all">
                  <svg className="w-4 h-4 text-sage-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-ink-400 text-xs mb-0.5">GitHub</p>
                  <p className="text-ink-100 font-mono text-sm group-hover:text-sage-300 transition-colors">{profile.github}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                  <svg className="w-4 h-4 text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-ink-400 text-xs mb-0.5">Phone / WhatsApp</p>
                  <p className="text-ink-100 font-mono text-sm">{profile.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                  <svg className="w-4 h-4 text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-ink-400 text-xs mb-0.5">Location</p>
                  <p className="text-ink-100 font-mono text-sm">{profile.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="glass rounded-2xl p-8 glow-sage">
            <p className="font-mono text-sage-500 text-xs tracking-widest mb-4">// Available for</p>
            <ul className="space-y-3 mb-8">
              {[
                'Full-time Backend / Fullstack roles',
                'Freelance & contract projects',
                'Technical consulting',
                'Open source collaboration',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-300 text-sm">
                  <span className="text-sage-500">▸</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${profile.email}?subject=Hi Azril, I'd like to connect!`}
              className="block w-full text-center py-3 bg-sage-500 hover:bg-sage-400 text-ink-900 font-display font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-sage-500/25"
            >
              Send me a message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
