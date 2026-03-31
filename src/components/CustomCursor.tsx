import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.left = `${e.clientX}px`;
        dot.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={dot}
      className="fixed w-3 h-3 bg-primary rounded-full pointer-events-none z-[10000] hidden sm:block -translate-x-1/2 -translate-y-1/2"
      style={{ top: 0, left: 0 }}
    />
  );
}
