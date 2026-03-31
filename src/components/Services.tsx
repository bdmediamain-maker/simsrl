import demolizioni from "@/assets/demolizioni.png";
import scavi from "@/assets/scavi.png";
import catDaf from "@/assets/cat-daf.png";

const services = [
  {
    num: "01",
    title: "DEMOLIZIONI",
    desc: "Demolizioni parziali e totali di edifici civili e industriali. Macchinari di ultima generazione per interventi precisi, sicuri e nel rispetto delle normative.",
    img: demolizioni,
    alt: "New Holland E245 durante demolizione edificio",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-primary">
        <path d="M8 40h32M12 40V20l12-12 12 12v20M20 40v-8h8v8" />
        <path d="M30 16l6-6m-6 0l6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "SCAVI",
    desc: "Movimento terra, scavi di fondazione, sbancamenti e livellamenti. Dall'analisi preliminare all'esecuzione, gestiamo ogni fase con competenza e attrezzatura specializzata.",
    img: scavi,
    alt: "Escavatore CAT in azione durante scavo",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-primary">
        <path d="M6 42h36M10 42v-6h28v6M14 36l4-14h12l4 14M20 22v-8l4-6 4 6v8" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "TRASPORTI",
    desc: "Trasporto di materiali da cantiere, inerti, terre e rifiuti speciali. Flotta di automezzi pesanti propria con gestione completa della logistica.",
    img: catDaf,
    alt: "CAT 318E carica camion DAF in cantiere",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-primary">
        <rect x="4" y="16" width="28" height="16" /><path d="M32 22h8l4 6v4h-12V22z" />
        <circle cx="14" cy="36" r="3" /><circle cx="38" cy="36" r="3" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servizi" className="bg-surface-dark">
      <div className="section-padding max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="scroll-reveal">
            <span className="eyebrow mb-4 block">I Nostri Servizi</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground">COSA FACCIAMO</h2>
          </div>
          <p className="scroll-reveal max-w-md text-secondary-foreground font-light leading-relaxed">
            Offriamo soluzioni complete per demolizioni, scavi e trasporti con un parco mezzi all'avanguardia e personale altamente qualificato.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-[2px]">
          {services.map((s) => (
            <div key={s.num} className="scroll-reveal group relative bg-secondary overflow-hidden transition-colors hover:bg-secondary/80">
              <span className="absolute top-4 right-6 font-display text-8xl text-foreground/[0.03] leading-none select-none z-10">{s.num}</span>
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img src={s.img} alt={s.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>

              <div className="relative z-10 p-8 md:p-10">
                {s.icon}
                <span className="block font-condensed text-xs tracking-[0.3em] text-muted-foreground mt-6 mb-2">{s.num}</span>
                <h3 className="font-display text-3xl text-foreground mb-4">{s.title}</h3>
                <p className="text-secondary-foreground font-light text-sm leading-relaxed mb-6">{s.desc}</p>
                <span className="font-condensed text-sm font-bold tracking-[0.15em] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Scopri di più →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
