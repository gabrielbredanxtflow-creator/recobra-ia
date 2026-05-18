import { TrendingUp, MessageCircle, Users, DollarSign, ArrowUpRight, Check } from "lucide-react";

function Metric({
  label,
  value,
  delta,
  icon: Icon,
}: {
  label: string;
  value: string;
  delta: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-gradient-card backdrop-blur p-5 text-left">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{label}</span>
        <div className="w-8 h-8 rounded-lg bg-primary/10 grid place-items-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 inline-flex items-center gap-1 text-xs text-[oklch(0.78_0.16_155)]">
        <ArrowUpRight className="w-3 h-3" />
        {delta}
      </div>
    </div>
  );
}

function Bar({ h, active }: { h: number; active?: boolean }) {
  return (
    <div
      className={`flex-1 rounded-md ${active ? "bg-gradient-primary" : "bg-muted"}`}
      style={{ height: `${h}%` }}
    />
  );
}

export function Dashboard() {
  return (
    <div className="rounded-3xl border border-border/70 bg-card/80 backdrop-blur-xl shadow-elegant overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border/60 bg-background/40">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
        </div>
        <div className="text-xs text-muted-foreground">recobra.app / dashboard</div>
        <div className="w-12" />
      </div>

      <div className="grid md:grid-cols-3 gap-0">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col gap-1 p-4 border-r border-border/60 text-sm">
          {[
            ["Visão geral", true],
            ["Campanhas", false],
            ["Clientes", false],
            ["Mensagens", false],
            ["Relatórios", false],
          ].map(([label, active]) => (
            <div
              key={label as string}
              className={`px-3 py-2 rounded-lg ${
                active ? "bg-primary/10 text-foreground" : "text-muted-foreground"
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="md:col-span-2 p-5 md:p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm text-muted-foreground">Últimos 30 dias</h3>
              <p className="text-lg font-semibold">Performance da recuperação</p>
            </div>
            <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-success/15 text-[oklch(0.8_0.16_155)]">
              ao vivo
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <Metric label="Mensagens enviadas" value="12.480" delta="+34%" icon={MessageCircle} />
            <Metric label="Clientes recuperados" value="1.327" delta="+22%" icon={Users} />
            <Metric label="Faturamento gerado" value="R$ 84.210" delta="+41%" icon={DollarSign} />
            <Metric label="ROI estimado" value="9.4x" delta="+1.8x" icon={TrendingUp} />
          </div>

          <div className="grid lg:grid-cols-5 gap-3">
            {/* Chart */}
            <div className="lg:col-span-3 rounded-2xl border border-border/60 bg-background/40 p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted-foreground">Faturamento recuperado / semana</span>
                <span className="text-xs font-medium">R$ 84.210</span>
              </div>
              <div className="flex items-end gap-2 h-32">
                {[28, 42, 35, 58, 48, 70, 62, 84, 76, 92, 88, 96].map((h, i) => (
                  <Bar key={i} h={h} active={i >= 8} />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[10px] text-muted-foreground">
                <span>S1</span><span>S4</span><span>S8</span><span>S12</span>
              </div>
            </div>

            {/* WhatsApp preview */}
            <div className="lg:col-span-2 rounded-2xl border border-border/60 bg-background/40 p-4 space-y-2">
              <div className="flex items-center gap-2 pb-2 border-b border-border/60">
                <div className="w-7 h-7 rounded-full bg-success/20 grid place-items-center">
                  <MessageCircle className="w-3.5 h-3.5 text-[oklch(0.8_0.16_155)]" />
                </div>
                <div>
                  <div className="text-xs font-medium">Campanha · Inativos 30d</div>
                  <div className="text-[10px] text-muted-foreground">enviada para 842 clientes</div>
                </div>
              </div>
              <div className="bg-card rounded-xl rounded-tl-sm p-2.5 text-xs leading-relaxed">
                Oi João! Sentimos sua falta 🍕 Voltamos com uma pizza grande por R$ 39,90 só pra você. Válido hoje!
              </div>
              <div className="bg-primary/15 rounded-xl rounded-tr-sm p-2.5 text-xs leading-relaxed ml-6 text-right">
                Quero pedir agora 🔥
              </div>
              <div className="flex items-center gap-1.5 pt-1 text-[10px] text-[oklch(0.8_0.16_155)]">
                <Check className="w-3 h-3" /> 312 respostas · 184 pedidos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
