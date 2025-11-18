import { Phone, Mail, MapPin } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_30%_0%,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
          <h2 className="text-3xl font-bold text-white text-center">Contact Us</h2>
          <p className="text-emerald-100/80 text-center mt-2">Get a tailored quote or book an installation assessment.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <a href="tel:+26377842858" className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 transition-colors">
              <div className="flex items-center gap-3 text-emerald-100">
                <div className="rounded-lg bg-emerald-500/15 p-2 border border-emerald-400/20"><Phone className="w-5 h-5 text-emerald-400" /></div>
                <div>
                  <p className="text-sm text-emerald-200/80">Phone</p>
                  <p className="font-semibold text-white">+263 77 842 858</p>
                </div>
              </div>
            </a>

            <a href="mailto:zyliahenergy@aol.com" className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 transition-colors">
              <div className="flex items-center gap-3 text-emerald-100">
                <div className="rounded-lg bg-emerald-500/15 p-2 border border-emerald-400/20"><Mail className="w-5 h-5 text-emerald-400" /></div>
                <div>
                  <p className="text-sm text-emerald-200/80">Email</p>
                  <p className="font-semibold text-white">zyliahenergy@aol.com</p>
                </div>
              </div>
            </a>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-3 text-emerald-100">
                <div className="rounded-lg bg-emerald-500/15 p-2 border border-emerald-400/20"><MapPin className="w-5 h-5 text-emerald-400" /></div>
                <div>
                  <p className="text-sm text-emerald-200/80">Address</p>
                  <p className="font-semibold text-white">Karimapondo Building, 78 Leopold Takawira Avenue, Harare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
