import { useEffect, useRef } from "react";

export function MouseOrb() {
  const orbRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.12);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.12);

      if (orbRef.current) {
        orbRef.current.style.transform = `translate(${pos.current.x - 96}px, ${pos.current.y - 96}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      className="fixed top-0 left-0 w-48 h-48 rounded-full pointer-events-none z-0"
      style={{
        background: "radial-gradient(circle, oklch(0.72 0.18 50 / 0.18), transparent 70%)",
        filter: "blur(32px)",
        willChange: "transform",
      }}
    />
  );
}
