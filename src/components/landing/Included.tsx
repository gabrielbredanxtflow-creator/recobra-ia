import { Check } from "lucide-react";

const items = [
  ["Campanhas automáticas", "Disparos programados por comportamento e tempo sem pedido."],
  ["Recuperação de clientes inativos", "Reativação de quem não pede há 15, 30 ou 60+ dias."],
  ["Cupons inteligentes", "Ofertas personalizadas para cada perfil de cliente."],
  ["Segmentação avançada", "Por comportamento, frequência, produto preferido e região."],
  ["Dashboard de Reativação", "Métricas claras: campanhas, respostas e reengajamento."],
  ["Relatórios de engajamento", "Acompanhe a evolução do relacionamento com seus clientes."],
  ["Implantação completa", "Configuramos tudo para você. Você só acompanha resultados."],
  ["Suporte dedicado", "Time especialista em food service do seu lado."],
];

export function Included() {
  return (
    <section id="incluso" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">O que está incluso</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-gradient">
            Tudo o que você precisa para crescer pela sua base.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(([title, desc]) => (
            <div
              key={title}
              className="rounded-2xl border border-border/60 bg-gradient-card p-6 hover:border-primary/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/15 grid place-items-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
