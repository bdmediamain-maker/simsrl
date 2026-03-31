import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 20, suffix: "+", label: "Anni di Esperienza" },
  { value: 500, suffix: "+", label: "Cantieri Completati" },
  { value: 50, suffix: "+", label: "Mezzi Operativi" },
  { value: 100, suffix: "%", label: "Clienti Soddisfatti" },
];

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="group flex flex-col items-center py-10 px-4 relative hover:bg-primary/5 transition-colors">
      <span className="font-display text-5xl md:text-6xl text-foreground">
        {count}<span className="text-primary">{suffix}</span>
      </span>
      <span className="font-condensed text-sm tracking-[0.2em] uppercase text-muted-foreground mt-2">{label}</span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="border-y border-border bg-background">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
        {stats.map((s) => <StatItem key={s.label} {...s} />)}
      </div>
    </section>
  );
}
