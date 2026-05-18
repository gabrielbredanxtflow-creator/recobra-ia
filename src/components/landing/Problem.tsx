import { motion } from "framer-motion";
import { AlertTriangle, Repeat, TrendingDown, Smartphone, Clock, Wallet } from "lucide-react";

const pains = [
  { icon: Repeat, title: "Cliente compra uma vez e some", desc: "Você gastou para conquistá-lo. Ele pediu, gostou — e nunca mais voltou." },
  { icon: Smartphone, title: "Dependência refém do iFood", desc: "Comissões altas e clientes que pertencem à plataforma, não a você." },
  { icon: Wallet, title: "Dinheiro parado na sua base", desc: "Centenas de clientes prontos para voltar — e ninguém está conversando com eles." },
  { icon: TrendingDown, title: "Movimento fraco no meio da semana", desc: "Terça e quarta vazias enquanto sua base de clientes está adormecida." },
  { icon: Clock, title: "Cliente esquece do seu restaurante", desc: "Sem reativação, em 60 dias 70% dos clientes não voltam mais." },
  { icon: AlertTriangle, title: "Sem dados, sem decisão", desc: "Você não sabe quem está sumindo nem quanto está perdendo por mês." },
];

export function Problem() {
  return (
    <section id="problema" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">O problema real</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-gradient">
            O dinheiro que você perde não está no anúncio. Está na sua base.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A maioria dos restaurantes investe pesado em aquisição e ignora o ativo mais valioso: os clientes que já compraram.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-border/60 bg-gradient-card p-6 hover:border-primary/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
