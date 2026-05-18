import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Dashboard } from "./Dashboard";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/60 bg-card/60 backdrop-blur text-xs text-muted-foreground"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          +Clientes voltando automaticamente
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient max-w-4xl mx-auto"
        >
          Seus clientes já compraram de você.
          <br />
          <span className="text-gradient-primary">O problema é que eles nunca mais voltam.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Recupere clientes automaticamente pelo WhatsApp, aumente pedidos e faturamento sem depender só do iFood.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#cta">
              Receber análise grátis
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="soft" size="lg" asChild>
            <a href="#como-funciona">
              <Play className="w-4 h-4" />
              Ver como funciona
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 text-xs text-muted-foreground"
        >
          Sem cartão de crédito · Análise gratuita personalizada
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-16 relative"
        >
          <div className="absolute -inset-x-20 -inset-y-10 bg-hero-glow blur-2xl pointer-events-none" />
          <div className="relative">
            <Dashboard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
