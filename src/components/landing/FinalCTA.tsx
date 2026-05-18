import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <h2 className="text-3xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-gradient">
          Quantos clientes antigos estão esquecendo do seu restaurante <span className="text-gradient-primary">hoje?</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Receba uma análise gratuita e descubra quanto sua base pode faturar novamente.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="hero" size="xl">
            Receber análise grátis
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Resposta em até 24h · Sem compromisso · Feito para restaurantes, deliverys e food service
        </p>
      </div>
    </section>
  );
}
