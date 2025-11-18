import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Contact />
      </main>
      <footer className="py-8 border-t border-white/10 text-center text-emerald-100/70">
        © {new Date().getFullYear()} Zyliah Energy. All rights reserved.
      </footer>
    </div>
  )
}

export default ContactPage
