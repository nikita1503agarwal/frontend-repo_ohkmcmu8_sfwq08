import { ShieldCheck, Wrench, PackageCheck, FireExtinguisher } from 'lucide-react'

const packages = [
  {
    name: '20kVA Solar System',
    price: '17,995 USD',
    warranty: '10 years warranty',
    features: [
      '34 × 620W solar panels',
      '1 × 20kVA Hanchu ESS 3‑phase inverter',
      '2 × 9.4kWh 51.2V 184Ah Hanchu lithium batteries',
      'Mounting kit, protection kit',
      '2 fire extinguishers',
      'Accessories and labour'
    ],
    highlight: true,
  },
  {
    name: '12kVA Solar System',
    price: '8,990 USD',
    warranty: '10 years warranty',
    features: [
      '22 × 620W solar panels',
      '1 × 12kVA Hanchu ESS 3‑phase inverter',
      '1 × 9.4kWh 51.2V 184Ah Hanchu lithium battery',
      'Mounting kit, protection kit',
      '2 fire extinguishers',
      'Accessories and labour'
    ],
    highlight: false,
  },
]

function Packages() {
  return (
    <section id="packages" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50rem_50rem_at_70%_0%,rgba(6,182,212,0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Solar Packages</h2>
          <p className="mt-2 text-emerald-100/80">All packages include professional installation and after‑sales support.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`rounded-2xl border ${pkg.highlight ? 'border-emerald-400/30 bg-emerald-400/5' : 'border-white/10 bg-white/5'} backdrop-blur p-6`}> 
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">{pkg.name}</h3>
                <span className="text-emerald-300 font-bold text-xl">{pkg.price}</span>
              </div>
              <p className="text-emerald-200/90 mt-1">{pkg.warranty}</p>

              <ul className="mt-6 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-emerald-100/90">
                    <PackageCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3 text-emerald-100/80">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Warranty
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                  <Wrench className="w-4 h-4 text-emerald-400" /> Installation
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                  <FireExtinguisher className="w-4 h-4 text-emerald-400" /> Safety kits
                </div>
              </div>

              <a href="#contact" className="mt-6 inline-flex items-center justify-center w-full rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-3 transition-colors">
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
