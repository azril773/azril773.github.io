import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3 glass' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <span className="font-mono text-sage-400 text-sm tracking-widest uppercase">
          azril.dev
        </span>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className={`font-sans text-sm transition-colors duration-200 ${
                  active === link
                    ? 'text-sage-400'
                    : 'text-ink-300 hover:text-ink-50'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:azrilsugiarto06@gmail.com"
          className="text-sm font-display font-medium px-4 py-2 rounded border border-sage-500/40 text-sage-400 hover:bg-sage-500/10 transition-all duration-200"
        >
          Hire me
        </a>
      </div>
    </nav>
  )
}
