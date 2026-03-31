import hitachi from "@/assets/hitachi.png";
import primaDopo from "@/assets/prima-dopo.png";
import cantiereStrada from "@/assets/cantiere-strada.png";
import catDaf from "@/assets/cat-daf.png";
import demolizioni from "@/assets/demolizioni.png";
import scavi from "@/assets/scavi.png";

const items = [
  { title: "Demolizione edificio industriale", subtitle: "New Holland E245", img: demolizioni },
  { title: "Scavo e movimento terra", subtitle: "CAT 320", img: scavi },
  { title: "Opere idrauliche e stradali", subtitle: "New Holland + CAT Skid Steer", img: cantiereStrada },
  { title: "Livellamento terreno", subtitle: "Prima / Dopo", img: primaDopo, special: true },
  { title: "Cantiere scavi", subtitle: "Hitachi ZX240", img: hitachi },
  { title: "Caricamento materiali", subtitle: "CAT 318E + DAF", img: catDaf },
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
            <div key={item.title} className="scroll-reveal group relative aspect-[4/3] overflow-hidden cursor-pointer">
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

              {item.special && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="font-condensed text-xs font-bold tracking-[0.2em] uppercase bg-primary text-primary-foreground px-3 py-1">Prima / Dopo</span>
                </div>
              )}

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
