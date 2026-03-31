import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contatti" className="section-padding bg-background">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Info */}
        <div className="scroll-reveal">
          <span className="eyebrow mb-4 block">Contattaci</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-10">PARLIAMO DEL TUO PROGETTO</h2>

          <div className="space-y-6 mb-10">
            {[
              { label: "Telefono", value: "334 288 6555", href: "tel:+393342886555" },
              { label: "Email", value: "silvestrosimsri@gmail.com", href: "mailto:silvestrosimsri@gmail.com" },
              { label: "Sede Operativa", value: "Via Sillaro 2185, Medicina (BO) 40059" },
              { label: "Orari", value: "Lun–Ven: 07:30–18:00 | Sab: 07:30–12:00" },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-border pl-4">
                <span className="font-condensed text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-1">{item.label}</span>
                {item.href ? (
                  <a href={item.href} className="text-foreground hover:text-primary transition-colors">{item.value}</a>
                ) : (
                  <span className="text-secondary-foreground font-light">{item.value}</span>
                )}
              </div>
            ))}
          </div>

          <div className="bg-primary/10 border border-primary/20 p-4">
            <span className="font-condensed text-sm font-bold tracking-wider text-primary uppercase">
              ★ Sopralluoghi e preventivi gratuiti
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="scroll-reveal">
          <form onSubmit={handleSubmit} className="bg-surface-mid border-t-[3px] border-primary p-8 md:p-10">
            <h3 className="font-display text-3xl text-foreground mb-8">RICHIEDI UN PREVENTIVO GRATUITO</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input required placeholder="Nome" className="bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:border-primary transition-colors" />
              <input required placeholder="Cognome" className="bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input required type="tel" placeholder="Telefono" className="bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:border-primary transition-colors" />
              <input required type="email" placeholder="Email" className="bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:border-primary transition-colors" />
            </div>
            <select required defaultValue="" className="w-full bg-secondary border border-border px-4 py-3 text-sm font-body text-muted-foreground focus:outline-none focus:border-primary transition-colors mb-4 appearance-none">
              <option value="" disabled>Tipo di Servizio</option>
              <option>Demolizioni</option>
              <option>Scavi e Movimento Terra</option>
              <option>Trasporti</option>
              <option>Servizio Combinato</option>
            </select>
            <textarea required placeholder="Descrizione del Progetto" rows={4} className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:border-primary transition-colors mb-6 resize-none" />

            <button type="submit" className={`w-full font-condensed font-bold uppercase tracking-[0.2em] text-sm py-4 transition-all duration-300 ${submitted ? "bg-green-600 text-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}>
              {submitted ? "✓ Richiesta Inviata!" : "Invia Richiesta →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
