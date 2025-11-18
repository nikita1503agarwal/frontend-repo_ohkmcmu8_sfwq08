import { Sun, Battery, PanelsTopLeft } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(80rem_80rem_at_50%_-10%,rgba(16,185,129,0.25),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-200 text-sm mb-4">
              <Sun className="w-4 h-4" />
              Clean, reliable solar solutions
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Zyliah Energy
            </h1>
            <p className="mt-4 text-lg text-emerald-100/90">
              Specialists in solar panels, batteries, and professional installations for homes and businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#packages" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-3 transition-colors">
                View Packages
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-emerald-400/30 text-emerald-100 hover:bg-emerald-400/10 font-semibold px-5 py-3 transition-colors">
                Get a Quote
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-emerald-100/80">
              <div className="flex items-center gap-2"><PanelsTopLeft className="w-5 h-5 text-emerald-400" /><span>Premium Panels</span></div>
              <div className="flex items-center gap-2"><Battery className="w-5 h-5 text-emerald-400" /><span>Long-life Batteries</span></div>
              <div className="flex items-center gap-2"><Sun className="w-5 h-5 text-emerald-400" /><span>10-year Warranty</span></div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-400/20 p-5">
                  <Sun className="w-8 h-8 text-emerald-400" />
                  <p className="mt-3 text-sm text-emerald-100/90">High-efficiency modules for maximum yield</p>
                </div>
                <div className="rounded-xl bg-cyan-500/10 border border-cyan-400/20 p-5">
                  <Battery className="w-8 h-8 text-cyan-400" />
                  <p className="mt-3 text-sm text-emerald-100/90">Reliable storage for day and night power</p>
                </div>
                <div className="col-span-2 rounded-xl bg-white/5 border border-white/10 p-5">
                  <p className="text-sm text-emerald-100/90">Professional design, installation, and after‑sales support across Zimbabwe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
