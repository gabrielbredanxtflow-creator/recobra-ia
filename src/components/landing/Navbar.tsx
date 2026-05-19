import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ease-out ${
        isScrolled ? "pt-4 px-4 sm:px-6" : "pt-0 px-0"
      }`}
    >
      <div
        className={`w-full pointer-events-auto transition-all duration-500 ease-out flex items-center justify-center border ${
          isScrolled
            ? "max-w-4xl h-14 sm:h-16 rounded-2xl border-primary/30 bg-card/70 backdrop-blur-lg shadow-elegant px-5"
            : "max-w-full h-20 border-border/10 border-t-transparent border-x-transparent bg-background/30 backdrop-blur-md px-6 lg:px-12 rounded-none"
        }`}
      >
        <div
          className={`w-full flex items-center justify-between transition-all duration-500 ease-out ${
            isScrolled ? "max-w-full" : "max-w-7xl"
          }`}
        >
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight shrink-0">
            <span className="w-8 h-8 rounded-lg bg-gradient-primary grid place-items-center shadow-glow">
              <Flame className="w-4 h-4 text-primary-foreground" />
            </span>
            <span className="text-lg">Recobra</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#problema" className="hover:text-foreground transition-colors">Problema</a>
            <a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a>
            <a href="#simulador" className="hover:text-foreground transition-colors">Simulador</a>
            <a href="#incluso" className="hover:text-foreground transition-colors">Incluso</a>
          </nav>
          <div className="shrink-0">
            <Button variant="hero" size="sm" asChild>
              <a href="https://wa.me/5547989128119?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Recobra%20e%20quero%20receber%20uma%20an%C3%A1lise%20gr%C3%A1tis%20do%20meu%20restaurante." target="_blank" rel="noopener noreferrer">Receber análise grátis</a>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
