import Navbar from '../components/Navbar'
import Packages from '../components/Packages'

function PackagesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="pt-0">
        <Packages />
      </main>
      <footer className="py-8 border-t border-white/10 text-center text-emerald-100/70">
        © {new Date().getFullYear()} Zyliah Energy. All rights reserved.
      </footer>
    </div>
  )
}

export default PackagesPage
