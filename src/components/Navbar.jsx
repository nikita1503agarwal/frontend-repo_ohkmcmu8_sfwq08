import { Menu } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-slate-900/70">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-lg tracking-tight">Zyliah Energy</a>
        <nav className="hidden md:flex items-center gap-6 text-emerald-100/90">
          <a href="#packages" className="hover:text-white">Packages</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="/test" className="hover:text-white">System Test</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80">
          <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col gap-3 text-emerald-100/90">
            <a href="#packages" onClick={() => setOpen(false)}>Packages</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a href="/test" onClick={() => setOpen(false)}>System Test</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
