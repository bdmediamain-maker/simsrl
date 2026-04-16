import { useState, useEffect, useCallback } from "react";
import demolizioni from "@/assets/demolizioni.png";
import scavi from "@/assets/scavi.png";
import catDaf from "@/assets/cat-daf.png";
import demolizioni1 from "@/assets/demolizioni1.jpg";
import demolizioni2 from "@/assets/demolizioni2.jpg";
import demolizioni3 from "@/assets/demolizioni3.jpg";
import demolizioni4 from "@/assets/demolizioni4.jpg";

const demolizioniGallery = [
  { src: demolizioni1, alt: "Demolizione edificio residenziale con escavatore New Holland" },
  { src: demolizioni2, alt: "Demolizione abitazione con macchinario CAT giallo" },
  { src: demolizioni3, alt: "Demolizione struttura industriale con escavatore CAT" },
  { src: demolizioni4, alt: "Demolizione capannone industriale con escavatore" },
];

const extendedDescs: Record<string, string> = {
  "01": "Eseguiamo demolizioni parziali e totali di edifici civili, residenziali e industriali. Il nostro approccio prevede un'analisi preliminare della struttura, la pianificazione delle fasi operative e l'utilizzo di macchinari di ultima generazione come il New Holland E245. Gestiamo lo smaltimento dei materiali di risulta nel rispetto delle normative ambientali vigenti, con particolare attenzione alla separazione e al recupero degli inerti.",
  "02": "Realizziamo scavi di fondazione, sbancamenti, movimenti terra e livellamenti per ogni tipo di cantiere. Dalla piccola opera privata al grande intervento infrastrutturale, il nostro parco mezzi include escavatori CAT, Hitachi e Doosan in grado di operare in condizioni difficili. Offriamo sopralluoghi gratuiti per valutare la fattibilità e i tempi di ogni intervento.",
  "03": "Disponiamo di una flotta propria di automezzi pesanti per il trasporto di materiali da cantiere, inerti, terre di scavo e rifiuti speciali. Gestiamo internamente tutta la logistica, dalla pianificazione dei carichi alla documentazione per il trasporto di rifiuti. Interveniamo su tutto il territorio con rapidità e flessibilità.",
};

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

function ServiceModal({ service, onClose }: { service: typeof services[number]; onClose: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      style={{ backgroundColor: "hsl(var(--background) / 0.95)", backdropFilter: "blur(4px)", opacity: visible ? 1 : 0 }}
      onClick={handleClose}
    >
      <div
        className="max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-surface-dark border border-border relative"
        style={{
          transform: visible ? "translateY(0)" : "translateY(40px)",
          opacity: visible ? 1 : 0,
          transition: "transform 400ms ease-out, opacity 400ms ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 font-condensed font-bold text-foreground hover:text-primary transition-colors text-2xl leading-none"
        >
          ✕
        </button>

        {/* Hero image */}
        <div className="aspect-video overflow-hidden">
          <img src={service.img} alt={service.alt} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <span className="eyebrow mb-4 block">{service.num}</span>
          <h3 className="font-display text-5xl text-foreground mb-6">{service.title}</h3>
          <p className="text-secondary-foreground font-light text-base leading-relaxed mb-10">
            {extendedDescs[service.num]}
          </p>

          {/* Media grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.num === "01"
              ? demolizioniGallery.map((img, i) => (
                  <div key={i} className="group overflow-hidden aspect-video">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))
              : [0, 1, 2, 3].map((i) => (
                  <div key={i} className="aspect-video bg-secondary border border-border flex items-center justify-center">
                    <span className="font-condensed text-xs text-muted-foreground">Foto / Video — disponibile a breve</span>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const activeService = openModal ? services.find((s) => s.num === openModal) : null;

  return (
    <section id="servizi" className="bg-surface-dark">
      <div className="section-padding max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="scroll-reveal">
            <span className="eyebrow mb-4 block">I Nostri Servizi</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground">COSA FACCIAMO</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-[2px]">
          {services.map((s) => (
            <div key={s.num} className="scroll-reveal group relative bg-secondary overflow-hidden transition-colors hover:bg-secondary/80">
              <span className="absolute top-4 right-6 font-display text-8xl text-foreground/[0.03] leading-none select-none z-10">{s.num}</span>
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

              <div className="aspect-video overflow-hidden">
                <img src={s.img} alt={s.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>

              <div className="relative z-10 p-8 md:p-10">
                {s.icon}
                <span className="block font-condensed text-xs tracking-[0.3em] text-muted-foreground mt-6 mb-2">{s.num}</span>
                <h3 className="font-display text-3xl text-foreground mb-4">{s.title}</h3>
                <p className="text-secondary-foreground font-light text-sm leading-relaxed mb-6">{s.desc}</p>
                <button
                  onClick={() => setOpenModal(s.num)}
                  className="font-condensed text-sm font-bold tracking-[0.15em] text-primary opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer bg-transparent border-none p-0"
                >
                  Scopri di più →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeService && <ServiceModal service={activeService} onClose={() => setOpenModal(null)} />}
    </section>
  );
}
