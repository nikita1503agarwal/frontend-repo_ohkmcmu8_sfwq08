import Hero from './components/Hero'
import Packages from './components/Packages'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Packages />
      <Contact />
      <footer className="py-8 border-t border-white/10 text-center text-emerald-100/70">
        © {new Date().getFullYear()} Zyliah Energy. All rights reserved.
      </footer>
    </div>
  )
}

export default App
