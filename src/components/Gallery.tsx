const items = [
  { title: "Demolizione edificio industriale", subtitle: "New Holland E245" },
  { title: "Scavo di fondazione", subtitle: "CAT 320" },
  { title: "Trasporto escavatore", subtitle: "Camion DAF" },
  { title: "Livellamento terreno", subtitle: "Prima / Dopo", special: true },
  { title: "Cantiere idraulico", subtitle: "Hitachi ZX240" },
  { title: "Caricamento materiali", subtitle: "CAT 318E" },
];

export default function Gallery() {
  return (
    <section id="galleria" className="section-padding bg-surface-dark">
      <div className="max-w-[1400px] mx-auto">
        <div className="scroll-reveal mb-16">
          <span className="eyebrow mb-4 block">I Nostri Lavori</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">CANTIERI IN AZIONE</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {items.map((item) => (
            <div key={item.title} className="scroll-reveal group relative aspect-[4/3] bg-muted/20 overflow-hidden cursor-pointer">
              {/* Placeholder */}
              <div className="absolute inset-0 bg-secondary transition-transform duration-700 group-hover:scale-105" />

              {item.special && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="font-condensed text-xs font-bold tracking-[0.2em] uppercase bg-primary text-primary-foreground px-3 py-1">Prima / Dopo</span>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-10">
                <h4 className="font-display text-2xl text-foreground">{item.title}</h4>
                <span className="font-condensed text-sm tracking-wider text-primary">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
