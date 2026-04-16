const navLinks = [
  { label: "Servizi", href: "#servizi" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Aree d'Intervento", href: "#aree" },
  { label: "Contatti", href: "#contatti" },
];

const serviceLinks = ["Demolizioni", "Scavi e Movimento Terra", "Trasporti", "Livellamenti", "Bonifica Ambientale"];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-dark border-t border-border">
      <div className="max-w-[1400px] mx-auto section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-display text-3xl tracking-wider text-foreground">S.<span className="text-primary">IM</span></span>
              <span className="font-condensed text-[10px] tracking-[0.4em] text-muted-foreground ml-2">SRL</span>
            </div>
            <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
              Demolizioni, scavi e trasporti con professionalità, sicurezza e rispetto per l'ambiente.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/s.im_srl" target="_blank" rel="noopener" className="font-condensed text-xs tracking-wider text-secondary-foreground hover:text-primary transition-colors uppercase">Instagram</a>
              <a href="https://www.facebook.com/p/SIM-SRL-100092708657850/" target="_blank" rel="noopener" className="font-condensed text-xs tracking-wider text-secondary-foreground hover:text-primary transition-colors uppercase">Facebook</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-condensed font-bold text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Navigazione</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button onClick={() => scrollTo(l.href)} className="font-condensed text-sm tracking-wider text-secondary-foreground hover:text-primary transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-condensed font-bold text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Servizi</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s} className="font-condensed text-sm tracking-wider text-secondary-foreground">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-muted-foreground text-xs font-light">© {new Date().getFullYear()} S.IM SRL — Tutti i diritti riservati</span>
          <span className="text-muted-foreground text-xs font-light">C.F. / P.IVA: 03XXXXXXXX</span>
        </div>
      </div>
    </footer>
  );
}
