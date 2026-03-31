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

        {/* Visual placeholder */}
        <div className="scroll-reveal relative aspect-square lg:aspect-auto bg-secondary">
          <div className="accent-bar-left" />
        </div>
      </div>
    </section>
  );
}
