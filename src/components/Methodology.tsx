const steps = [
  { num: "01", title: "Sopralluogo", desc: "Analizziamo il sito con i nostri tecnici per valutare condizioni operative, rischi e soluzioni migliori. Sopralluoghi e preventivi gratuiti." },
  { num: "02", title: "Progettazione", desc: "Piano di lavoro dettagliato con tempistiche, risorse e modalità nel rispetto delle normative." },
  { num: "03", title: "Esecuzione", desc: "Team qualificato con macchinari di ultima generazione: CAT, New Holland, Hitachi, Doosan." },
  { num: "04", title: "Consegna", desc: "Pulizia, ripristino dell'area e consegna documentazione completa." },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="section-padding bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="scroll-reveal text-center mb-16">
          <span className="eyebrow mb-4 block">La Nostra Metodologia</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">COME LAVORIAMO</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-0 md:gap-4 relative">
          {/* Dashed line connecting circles on desktop */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[1px] border-t border-dashed border-border z-0" />

          {steps.map((s, i) => (
            <div key={s.num} className="relative flex flex-col items-center text-center z-10">
              {/* Mobile vertical connector */}
              {i > 0 && (
                <div className="md:hidden w-[1px] h-8 border-l border-dashed border-primary/30 mb-0" />
              )}
              <div
                className="scroll-reveal flex flex-col items-center"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="group w-16 h-16 border-2 border-primary flex items-center justify-center mb-6 transition-colors hover:bg-primary">
                  <span className="font-display text-2xl text-primary group-hover:text-primary-foreground transition-colors">{s.num}</span>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-[250px]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
