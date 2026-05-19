

export function Transition() {
  return (
    <div className="relative flex justify-center h-24 md:h-40 z-10 pointer-events-none">
      <div className="absolute top-1/2 -translate-y-1/2 w-px h-64 md:h-[400px] bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
    </div>
  );
}
