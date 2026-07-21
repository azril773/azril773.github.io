export default function About() {
  const timeline = [
    { year: '2020', label: 'Started self-learning programming' },
    { year: '2021', label: 'Enrolled in SMK Wahidin — Software Engineering' },
    { year: '2023', label: 'Internship at PT Fath Technology Solution' },
    { year: '2024', label: 'Joined PT Asia Tritunggal Jaya as Software Engineer' },
    { year: '2024', label: 'Freelance work at PT Cirebon Digital Solution' },
    { year: '2026', label: 'Actively seeking next challenge' },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <p className="font-mono text-sage-500 text-sm tracking-widest mb-3">01 &mdash; About</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-50">
            Background
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6 text-ink-300 leading-relaxed">
            <p>
              I started programming in <span className="text-ink-100 font-medium">2020</span> through self-learning, driven by curiosity about how software systems work under the hood. That passion led me to specialize in backend engineering — where performance, reliability, and architecture matter most.
            </p>
            <p>
              Graduating from <span className="text-ink-100 font-medium">SMK Wahidin Kota Cirebon</span> as a top student in the Software Engineering program, I frequently mentored classmates and led practical projects that bridged classroom concepts with real-world application.
            </p>
            <p>
              Today I build systems that are <span className="text-sage-400">fast</span>, <span className="text-sage-400">maintainable</span>, and <span className="text-sage-400">measurably impactful</span>. I've replaced legacy systems, optimized databases, and delivered efficiency improvements that teams actually feel.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['Self-learner', 'Systems thinker', 'Clean code advocate', 'Team collaborator'].map((trait) => (
                <span key={trait} className="px-3 py-1.5 rounded-full text-xs font-mono border border-ink-700 text-ink-400 bg-ink-800/50">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-sage-500/60 via-ink-700 to-transparent" />
            <div className="space-y-6">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[1.65rem] top-2 w-2.5 h-2.5 rounded-full border-2 border-sage-500/50 bg-ink-900" />
                  <div className="glass rounded-xl p-4">
                    <p className="font-mono text-sage-500 text-xs mb-1">{item.year}</p>
                    <p className="text-ink-200 text-sm">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
