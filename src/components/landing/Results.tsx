import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

function Stat({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-gradient-card p-7">
      <div className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient-primary">{value}</div>
      <div className="mt-2 text-sm font-medium">{label}</div>
      {sub && <div className="mt-1 text-xs text-muted-foreground">{sub}</div>}
    </div>
  );
}

export function Results() {
  return (
    <section id="resultados" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Resultados</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-gradient">
              Cada cliente esquecido é dinheiro que está saindo do seu caixa.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Resultados médios observados em restaurantes que ativam sua base de clientes com o Recobra.
            </p>

            <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-medium">
                <TrendingUp className="w-4 h-4" /> Comparativo
              </div>
              <div className="mt-4 grid grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="text-muted-foreground">Investimento mensal</div>
                  <div className="mt-1 text-2xl font-semibold">R$ 897</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Faturamento recuperado</div>
                  <div className="mt-1 text-2xl font-semibold text-gradient-primary">R$ 38.420</div>
                </div>
              </div>
              <div className="mt-5 h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "94%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-gradient-primary"
                />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">ROI médio: <span className="text-foreground font-medium">42x</span></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Stat value="12.480" label="Mensagens enviadas" sub="por mês, em média" />
            <Stat value="1.327" label="Clientes recuperados" sub="que voltaram a comprar" />
            <Stat value="R$ 84k" label="Faturamento gerado" sub="recorrente e previsível" />
            <Stat value="9.4x" label="ROI médio" sub="sobre o investimento" />
          </div>
        </div>
      </div>
    </section>
  );
}
