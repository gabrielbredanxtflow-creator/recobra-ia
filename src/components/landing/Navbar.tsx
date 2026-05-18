import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="w-8 h-8 rounded-lg bg-gradient-primary grid place-items-center shadow-glow">
            <Flame className="w-4 h-4 text-primary-foreground" />
          </span>
          <span className="text-lg">Recobra</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#problema" className="hover:text-foreground transition-colors">Problema</a>
          <a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a>
          <a href="#resultados" className="hover:text-foreground transition-colors">Resultados</a>
          <a href="#incluso" className="hover:text-foreground transition-colors">Incluso</a>
        </nav>
        <Button variant="hero" size="sm" asChild>
          <a href="#cta">Receber análise grátis</a>
        </Button>
      </div>
    </motion.header>
  );
}
