const areas = [
  "Edilizia Residenziale e Civile",
  "Infrastrutture e Opere Pubbliche",
  "Industria e Logistica",
  "Bonifica e Risanamento Ambientale",
  "Opere Idrauliche e Fluviali",
  "Livellamenti e Sistemazioni Terreni",
];

export default function Areas() {
  return (
    <section id="aree" className="section-padding bg-surface-dark">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="scroll-reveal">
          <span className="eyebrow mb-4 block">Dove Operiamo</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-10">AREE D'INTERVENTO</h2>

          <ul className="space-y-4">
            {areas.map((a) => (
              <li key={a} className="group flex items-center gap-4 cursor-default py-2 border-b border-border/50 hover:border-primary/30 transition-colors">
                <span className="w-2.5 h-2.5 bg-primary flex-shrink-0" />
                <span className="font-condensed text-lg tracking-wider text-secondary-foreground group-hover:text-primary transition-colors uppercase">{a}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Info block */}
        <div className="scroll-reveal relative aspect-square lg:aspect-auto bg-secondary overflow-hidden flex items-center justify-center">
          <div className="accent-bar-left" />
          <span className="absolute font-display text-7xl md:text-8xl lg:text-9xl text-foreground/5 select-none whitespace-nowrap">
            Medicina (BO)
          </span>
          <div className="relative z-10 px-8 md:px-12">
            <span className="eyebrow mb-4 block">Copertura Territoriale</span>
            <p className="text-secondary-foreground font-light leading-relaxed max-w-md">
              Operiamo principalmente in Emilia-Romagna con disponibilità su tutto il territorio nazionale. Contattaci per valutare interventi fuori area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
