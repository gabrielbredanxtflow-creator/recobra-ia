import { useState } from "react";
import { motion } from "framer-motion";
import { Users, DollarSign, Send, TrendingUp, ArrowRight, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Results() {
  const [baseClientes, setBaseClientes] = useState<number>(0);
  const [ticketMedio, setTicketMedio] = useState<number>(0);

  const taxaRetorno = 0.10;
  const custoPorMensagem = 0.60;

  const clientesRecuperados = Math.floor(baseClientes * taxaRetorno);
  const faturamentoPotencial = clientesRecuperados * ticketMedio;
  const custoCampanha = baseClientes * custoPorMensagem;
  const roiEstimado = custoCampanha > 0 ? faturamentoPotencial / custoCampanha : 0;

  const formatCurrency = (val: number) =>
    val === 0 ? "R$ 0,00" : new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(val);

  const formatNumber = (val: number) =>
    val === 0 ? "0" : new Intl.NumberFormat("pt-BR").format(val);

  const displayCurrency = (val: number) =>
    val === 0 ? "R$ --" : new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(val);

  const displayNumber = (val: number) =>
    val === 0 ? "--" : new Intl.NumberFormat("pt-BR").format(val);

  return (
    <section id="simulador" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Lado Esquerdo: Inputs & CTA */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                Simulador de Retorno
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-gradient leading-[1.1]">
                Quanto dinheiro pode estar parado na sua base de clientes?
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                Simule quanto seu restaurante poderia recuperar ativando clientes antigos pelo WhatsApp.
              </p>
            </div>

            <div className="space-y-5 rounded-3xl border border-border/70 bg-gradient-card backdrop-blur-xl p-6 md:p-8 shadow-elegant relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Quantos clientes você já atendeu?
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                    <Users className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={baseClientes === 0 ? "" : formatNumber(baseClientes)}
                    onChange={(e) => {
                      const val = parseInt(e.target.value.replace(/\D/g, ""), 10);
                      setBaseClientes(isNaN(val) ? 0 : val);
                    }}
                    placeholder="Ex: 1.000"
                    className="w-full bg-background border border-border/60 rounded-xl pl-12 pr-4 py-3.5 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Qual é o ticket médio do seu pedido?
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium group-focus-within:text-primary transition-colors">
                    R$
                  </div>
                  <input
                    type="text"
                    value={ticketMedio === 0 ? "" : formatNumber(ticketMedio)}
                    onChange={(e) => {
                      const val = parseInt(e.target.value.replace(/\D/g, ""), 10);
                      setTicketMedio(isNaN(val) ? 0 : val);
                    }}
                    placeholder="Ex: 80"
                    className="w-full bg-background border border-border/60 rounded-xl pl-12 pr-4 py-3.5 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-foreground"
                  />
                </div>
              </div>

              <div className="pt-2">
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Simulação baseada em 10% da base retornando.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Cálculo inclui custo estimado de R$ 0,60 por mensagem enviada.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <Button variant="hero" size="xl" className="w-full group" asChild>
                <a href="https://wa.me/5547989128119?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Recobra%20e%20quero%20receber%20uma%20an%C3%A1lise%20gr%C3%A1tis%20do%20meu%20restaurante." target="_blank" rel="noopener noreferrer">
                  Receber análise grátis
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Na análise, calculamos o potencial da sua base com mais precisão.
              </p>
            </div>
          </div>

          {/* Lado Direito: Resultados */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Card de Destaque */}
            <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 md:p-10 shadow-glow-soft relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
              <p className="text-xl md:text-2xl leading-relaxed text-foreground font-medium relative z-10">
                Com uma base de <span className="text-primary font-semibold">{displayNumber(baseClientes)}</span> clientes e ticket médio de <span className="text-primary font-semibold">{displayCurrency(ticketMedio)}</span>, uma campanha simples poderia recuperar aproximadamente <span className="text-primary font-semibold text-2xl md:text-3xl bg-primary/10 px-2 py-1 rounded-lg inline-block mx-1 border border-primary/20">{displayNumber(clientesRecuperados)}</span> clientes.
              </p>
              
              <div className="mt-8 pt-6 border-t border-primary/10">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Essa é apenas uma simulação. O resultado real depende da qualidade da base, da oferta, do momento da campanha e da recorrência dos envios.
                </p>
              </div>
            </div>

            {/* Visual Bar (Custo vs Faturamento) */}
            <div className="rounded-2xl border border-border/60 bg-gradient-card p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Cenário Estimado</span>
                <span className="text-sm font-semibold text-gradient-primary">{roiEstimado.toFixed(1)}x de Retorno</span>
              </div>
              <div className="h-4 rounded-full bg-background flex overflow-hidden border border-border/50">
                {/* Cost bar (redimensiona fluidamente) */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: custoCampanha > 0 ? `${Math.max(5, (custoCampanha / (faturamentoPotencial + custoCampanha)) * 100)}%` : '0%' }}
                  transition={{ type: "spring", stiffness: 50, damping: 15 }}
                  className="h-full bg-muted-foreground/40 relative"
                />
                {/* Revenue bar */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: faturamentoPotencial > 0 ? `${Math.min(95, (faturamentoPotencial / (faturamentoPotencial + custoCampanha)) * 100)}%` : '0%' }}
                  transition={{ type: "spring", stiffness: 50, damping: 15 }}
                  className="h-full bg-gradient-primary relative"
                />
              </div>
              <div className="mt-3 flex justify-between text-xs">
                <span className="text-muted-foreground">Custo: {displayCurrency(custoCampanha)}</span>
                <span className="font-medium text-primary">Potencial: {displayCurrency(faturamentoPotencial)}</span>
              </div>
            </div>

            {/* Cards Menores */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border/60 bg-gradient-card p-6 transition-all hover:border-primary/30">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <Users className="w-4 h-4 text-primary" /> Clientes que podem voltar
                </div>
                <div className="text-3xl font-semibold tracking-tight">{displayNumber(clientesRecuperados)}</div>
              </div>
              
              <div className="rounded-2xl border border-border/60 bg-gradient-card p-6 relative overflow-hidden transition-all hover:border-primary/30">
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <DollarSign className="w-4 h-4 text-primary" /> Faturamento potencial
                </div>
                <div className="text-3xl font-semibold tracking-tight text-gradient-primary">{displayCurrency(faturamentoPotencial)}</div>
              </div>
              
              <div className="rounded-2xl border border-border/60 bg-gradient-card p-6 transition-all hover:border-primary/30">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <Send className="w-4 h-4 text-primary" /> Custo estimado da campanha
                </div>
                <div className="text-3xl font-semibold tracking-tight">{displayCurrency(custoCampanha)}</div>
              </div>
              
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-glow-soft transition-all">
                <div className="flex items-center gap-3 text-sm text-primary font-medium mb-3">
                  <TrendingUp className="w-4 h-4" /> ROI estimado
                </div>
                <div className="text-3xl font-semibold tracking-tight text-foreground">{baseClientes === 0 ? "--" : roiEstimado.toFixed(1) + " vezes"}</div>
              </div>
            </div>

            <div className="lg:hidden mt-8">
              <Button variant="hero" size="xl" className="w-full group" asChild>
                <a href="https://wa.me/5547989128119?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Recobra%20e%20quero%20receber%20uma%20an%C3%A1lise%20gr%C3%A1tis%20do%20meu%20restaurante." target="_blank" rel="noopener noreferrer">
                  Receber análise grátis
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Na análise, calculamos o potencial da sua base com mais precisão.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
