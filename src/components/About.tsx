import chiSiamo from "@/assets/chi-siamo.png";

const values = [
  { title: "Sicurezza", desc: "Protocolli rigorosi e formazione continua del personale" },
  { title: "Puntualità", desc: "Rispettiamo i tempi di consegna con pianificazione accurata" },
  { title: "Sostenibilità", desc: "Gestione responsabile dei rifiuti e tutela ambientale" },
  { title: "Affidabilità", desc: "Rapporti duraturi basati su trasparenza e qualità" },
];

export default function About() {
  return (
    <section id="chi-siamo" className="section-padding bg-background">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="scroll-reveal relative">
          <div className="aspect-[4/5] relative overflow-hidden">
            <div className="accent-bar-left" />
            <img src={chiSiamo} alt="New Holland E245 con logo S.IM in cantiere" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="scroll-reveal flex flex-col justify-center">
          <span className="eyebrow mb-4">Chi Siamo</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-8">UN'IMPRESA DI VALORE</h2>
          <p className="text-secondary-foreground font-light leading-relaxed mb-10">
            S.IM SRL nasce dall'esperienza e dalla passione per il lavoro ben fatto. Con anni di attività nel settore delle demolizioni, degli scavi e dei trasporti, siamo diventati un punto di riferimento per imprese edili, committenti pubblici e privati in tutto il territorio. La nostra forza sta nella capacità di gestire progetti complessi con un team specializzato, macchinari all'avanguardia e un approccio orientato alla:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="relative pl-4 border-l-2 border-primary">
                <h4 className="font-condensed font-bold text-foreground uppercase tracking-wider text-sm mb-1">{v.title}</h4>
                <p className="text-muted-foreground text-sm font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
