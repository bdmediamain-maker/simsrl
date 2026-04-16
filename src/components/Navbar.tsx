import { useState, useEffect } from "react";

const links = [
  { label: "Servizi", href: "#servizi" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Aree d'Intervento", href: "#aree" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""}`}>
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 h-20">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex flex-col leading-none">
            <span className="font-display text-3xl tracking-wider">
              S.<span className="text-primary">IM</span>
            </span>
            <span className="font-condensed text-[10px] tracking-[0.4em] text-muted-foreground -mt-1">SRL</span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="font-condensed text-sm font-bold uppercase tracking-[0.2em] text-secondary-foreground hover:text-primary transition-colors">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("#contatti")} className="font-condensed text-sm font-bold uppercase tracking-[0.2em] bg-primary text-primary-foreground px-6 py-2.5 hover:bg-primary/90 transition-colors">
              Contattaci
            </button>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="lg:hidden flex flex-col gap-1.5 w-8 z-50" aria-label="Menu">
            <span className={`block h-[2px] bg-foreground transition-all duration-300 ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block h-[2px] bg-foreground transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] bg-foreground transition-all duration-300 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-background flex flex-col transition-transform duration-500 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex-1 flex flex-col justify-center items-center gap-8 pt-20">
          {[...links, { label: "Contattaci", href: "#contatti" }].map((l, i) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-display text-4xl text-foreground hover:text-primary transition-all duration-500"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(20px)",
                transitionDelay: open ? `${i * 100}ms` : "0ms",
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
        <div className="pb-12 px-8 flex flex-col items-center gap-3">
          <a href="tel:+393342886555" className="font-condensed text-sm tracking-widest text-secondary-foreground">334 288 6555</a>
          <a href="mailto:silvestrosimsri@gmail.com" className="font-condensed text-sm tracking-widest text-secondary-foreground">silvestrosimsri@gmail.com</a>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/s.im_srl" target="_blank" rel="noopener" className="text-secondary-foreground hover:text-primary transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100092708657850" target="_blank" rel="noopener" className="text-secondary-foreground hover:text-primary transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
