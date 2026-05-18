import { motion } from "framer-motion";
import { Search, Send, ShoppingBag, BarChart3 } from "lucide-react";

const steps = [
  { icon: Search, title: "Sistema identifica clientes inativos", desc: "Conectamos sua base e segmentamos quem não pede há 15, 30 ou 60 dias." },
  { icon: Send, title: "Campanhas automáticas pelo WhatsApp", desc: "Mensagens personalizadas, com cupons e ofertas, enviadas no momento certo." },
  { icon: ShoppingBag, title: "Clientes retornam a comprar", desc: "Recuperação real, com pedidos entrando direto no seu canal — sem comissão de marketplace." },
  { icon: BarChart3, title: "Dashboard mostra ROI e faturamento", desc: "Você acompanha em tempo real quanto foi reativado e quanto entrou no caixa." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 relative">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Como funciona</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-gradient">
            Quatro passos. Resultados em dias, não meses.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border/60 bg-gradient-card p-6"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-semibold tracking-tight text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
