export default function Footer() {
  return (
    <footer className="border-t border-ink-800 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-ink-500 text-sm">
          © {new Date().getFullYear()} Mohammad Azril Sugiarto
        </p>
        <p className="font-mono text-ink-600 text-xs">
          Built with React · TypeScript · Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
