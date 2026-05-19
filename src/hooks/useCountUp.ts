import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number; // ms
  decimals?: number;
  delay?: number; // ms before starting
}

export function useCountUp({ end, duration = 1800, decimals = 0, delay = 300 }: UseCountUpOptions) {
  const [value, setValue] = useState(0);
  const rafId = useRef<number>(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const animate = (now: number) => {
        if (!startTime.current) startTime.current = now;
        const elapsed = now - startTime.current;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(parseFloat((eased * end).toFixed(decimals)));

        if (progress < 1) {
          rafId.current = requestAnimationFrame(animate);
        } else {
          setValue(end);
        }
      };

      rafId.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId.current);
    };
  }, [end, duration, decimals, delay]);

  return value;
}
