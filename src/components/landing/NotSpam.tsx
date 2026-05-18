import { ShieldCheck, Lock, UserCheck, Target } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "100% LGPD", desc: "Tratamento de dados em conformidade com a legislação brasileira." },
  { icon: UserCheck, title: "Consentimento real", desc: "Apenas clientes da sua própria base que já compraram com você." },
  { icon: Target, title: "Segmentação inteligente", desc: "Sem disparos em massa. Mensagens relevantes para o cliente certo." },
  { icon: Lock, title: "Sua base protegida", desc: "Dados criptografados e nunca compartilhados com terceiros." },
];

export function NotSpam() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-border/70 bg-gradient-card p-8 md:p-14 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Isso não é spam</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gradient">
                As campanhas são enviadas apenas para clientes da própria base do restaurante.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Comunicação inteligente, com consentimento, dentro das boas práticas e da legislação.
                Nada de listas frias. Nada de envio em massa para desconhecidos.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {items.map((it) => (
                <div key={it.title} className="rounded-2xl border border-border/60 bg-background/40 p-5">
                  <div className="w-9 h-9 rounded-lg bg-primary/15 grid place-items-center">
                    <it.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold">{it.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
