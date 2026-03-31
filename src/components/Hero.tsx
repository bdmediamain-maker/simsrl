import heroBg from "@/assets/hero-bg.png";

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Trasporto escavatore CAT al tramonto" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      {/* Diagonal lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute bg-primary/[0.04]" style={{
              width: "1px", height: "200%",
              right: `${10 + i * 8}%`, top: "-50%",
              transform: "rotate(-20deg)",
            }} />
          ))}
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.06]"
          style={{ background: "linear-gradient(135deg, hsl(46 100% 45%), hsl(24 100% 42%))" }} />
      </div>

      <div className="relative z-10 section-padding w-full max-w-[1400px] mx-auto pt-32 pb-20">
        <div className="flex items-center gap-4 mb-8 scroll-reveal">
          <div className="w-12 h-[2px] bg-primary" />
          <span className="eyebrow">Eccellenza nell'edilizia industriale</span>
        </div>

        <h1 className="scroll-reveal mb-8">
          <span className="block font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-[0.9]">DEMOLIAMO.</span>
          <span className="block font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient-hero leading-[0.9] text-outline">SCAVIAMO.</span>
          <span className="block font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary leading-[0.9]">TRASPORTIAMO.</span>
        </h1>

        <p className="scroll-reveal max-w-2xl text-secondary-foreground font-light text-lg md:text-xl mb-10 leading-relaxed">
          S.IM SRL è il partner affidabile per demolizioni, escavazioni, movimento terra e logistica dei materiali. Professionalità, sicurezza e rispetto per l'ambiente in ogni cantiere.
        </p>

        <div className="scroll-reveal flex flex-col sm:flex-row gap-4">
          <button onClick={() => scrollTo("#contatti")} className="bg-primary text-primary-foreground font-condensed font-bold uppercase tracking-[0.2em] text-sm px-8 py-4 hover:bg-primary/90 transition-colors">
            Richiedi un Preventivo
          </button>
          <button onClick={() => scrollTo("#servizi")} className="font-condensed font-bold uppercase tracking-[0.2em] text-sm text-foreground border-b-2 border-primary pb-1 px-2 hover:text-primary transition-colors self-start sm:self-center">
            Scopri i Servizi
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-3 z-10">
        <span className="font-condensed text-xs tracking-[0.3em] text-muted-foreground" style={{ writingMode: "vertical-rl" }}>SCORRI</span>
        <div className="w-[1px] h-12 bg-primary/30 overflow-hidden">
          <div className="w-full h-full bg-primary animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
