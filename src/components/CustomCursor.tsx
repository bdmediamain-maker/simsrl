import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    if (isMobile) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      if (dot.current) {
        dot.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      }
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={dot} className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[10000] hidden sm:block" />
      <div ref={ring} className="fixed top-0 left-0 w-9 h-9 border border-primary rounded-full pointer-events-none z-[10000] opacity-50 hidden sm:block" />
    </>
  );
}
