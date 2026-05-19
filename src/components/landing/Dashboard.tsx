import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, MessageCircle, Users, DollarSign, ArrowUpRight, Check, Activity } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

function Metric({
  label,
  delta,
  icon: Icon,
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  delay = 300,
}: {
  label: string;
  delta: string;
  icon: React.ComponentType<{ className?: string }>;
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delay?: number;
}) {
  const [liveValue, setLiveValue] = useState(0);
  const initialCount = useCountUp({ end, duration: 1800, decimals, delay });

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (Math.random() > 0.6) {
          setLiveValue((prev) => prev + (decimals > 0 ? 0.1 : Math.floor(Math.random() * 2) + 1));
        }
      }, 2500);
      return () => clearInterval(interval);
    }, delay + 2000);
    return () => clearTimeout(timer);
  }, [decimals, delay]);

  const value = initialCount + liveValue;
  const formatted =
    decimals > 0
      ? value.toFixed(decimals).replace(".", ",")
      : value.toLocaleString("pt-BR");

  return (
    <div className="group relative rounded-2xl border border-border/60 bg-gradient-card backdrop-blur p-5 text-left overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-glow-soft">
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 5 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent w-full h-full -skew-x-12"
      />
      <div className="relative flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{label}</span>
        <div className="w-8 h-8 rounded-lg bg-primary/10 grid place-items-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
      </div>
      <div className="relative mt-3 text-2xl font-semibold tracking-tight tabular-nums">
        {prefix}{formatted}{suffix}
      </div>
      <div className="relative mt-1 inline-flex items-center gap-1 text-xs text-[oklch(0.78_0.16_155)]">
        <ArrowUpRight className="w-3 h-3" />
        {delta}
      </div>
    </div>
  );
}

function Bar({ h, active, i }: { h: number; active?: boolean; i: number }) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setHeight(h), 500 + i * 80);
    const i2 = setInterval(() => {
      if (active && Math.random() > 0.6) {
        setHeight(h + (Math.random() * 8 - 4));
      }
    }, 2000 + i * 300);
    return () => { clearTimeout(t); clearInterval(i2); };
  }, [h, i, active]);

  return (
    <div className="flex-1 flex items-end h-full">
      <motion.div
        animate={{ height: `${Math.max(5, Math.min(100, height))}%` }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
        className={`w-full rounded-md relative ${
          active ? "bg-gradient-primary shadow-[0_0_12px_oklch(0.72_0.18_50/0.4)]" : "bg-muted"
        }`}
      >
        {active && (
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-1 inset-x-0 h-2 bg-white/30 rounded-t-md blur-[2px]"
          />
        )}
      </motion.div>
    </div>
  );
}

const NOTIFICATIONS = [
  { id: 1, text: "Cliente respondeu campanha", time: "agora mesmo", icon: MessageCircle },
  { id: 2, text: "Novo retorno detectado", time: "2 min atrás", icon: Users },
  { id: 3, text: "Cupom visualizado", time: "5 min atrás", icon: Activity },
  { id: 4, text: "Cliente voltou a interagir", time: "12 min atrás", icon: Check },
];

function LiveNotifications() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const notif = NOTIFICATIONS[index];
  const Icon = notif.icon;

  return (
    <div className="absolute top-16 right-5 z-20 w-64 pointer-events-none hidden md:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={notif.id}
          initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-start gap-3 p-3 rounded-2xl bg-card/80 backdrop-blur-xl border border-primary/20 shadow-elegant"
        >
          <div className="w-8 h-8 shrink-0 rounded-full bg-primary/20 flex items-center justify-center relative">
            <Icon className="w-4 h-4 text-primary" />
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 rounded-full bg-primary"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground truncate">{notif.text}</p>
            <p className="text-[10px] text-muted-foreground">{notif.time}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const CONVERSATIONS = [
  {
    outbound: "🍔 Faz um tempinho que você não pede aqui 😄\n\nLiberamos 15% OFF no seu próximo pedido, válido somente hoje.\n\nAproveita antes que acabe 👇",
    button: "VER CARDÁPIO",
    inbound: "Pode deixar que hoje vou pedir 😅"
  },
  {
    outbound: "🔥 HOJE TEM PROMOÇÃO ESPECIAL 🔥\n\nNa compra de uma pizza grande, você recebe uma condição exclusiva válida até às 22h 🍕\n\nOferta liberada apenas para clientes da nossa base.",
    button: "QUERO APROVEITAR",
    inbound: "Já abriu o cardápio aqui 😂"
  },
  {
    outbound: "😄 Você já pediu com a gente antes… então liberamos FRETE GRÁTIS no seu próximo pedido 🚗💨\n\nVálido somente hoje para clientes selecionados.",
    button: "PEDIR AGORA",
    inbound: "Agora vocês me convenceram 👀"
  }
];

function ChatSimulation() {
  const [step, setStep] = useState(0);
  const [convIndex, setConvIndex] = useState(0);

  useEffect(() => {
    let currentConv = 0;
    const sequence = async () => {
      setStep(0);
      await new Promise((r) => setTimeout(r, 2500));
      setStep(1);
      await new Promise((r) => setTimeout(r, 2000));
      setStep(2);
    };
    
    sequence();
    
    const interval = setInterval(() => {
      currentConv = (currentConv + 1) % CONVERSATIONS.length;
      setConvIndex(currentConv);
      sequence();
    }, 9000);
    
    return () => clearInterval(interval);
  }, []);

  const conv = CONVERSATIONS[convIndex];

  return (
    <div className="lg:col-span-2 rounded-2xl border border-border/60 bg-background/40 p-4 space-y-3 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative flex items-center justify-between pb-2 border-b border-border/60">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-full bg-[oklch(0.8_0.16_155)]/20 grid place-items-center">
            <MessageCircle className="w-4 h-4 text-[oklch(0.8_0.16_155)]" />
            <motion.span 
              animate={{ opacity: [1, 0.3, 1] }} 
              transition={{ repeat: Infinity, duration: 1.5 }} 
              className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[oklch(0.8_0.16_155)] rounded-full shadow-[0_0_8px_oklch(0.8_0.16_155)]" 
            />
          </div>
          <div>
            <div className="text-xs font-medium flex items-center gap-1.5 text-foreground">
              Disparo WhatsApp
            </div>
            <div className="text-[10px] text-muted-foreground">Inativos 30d · 842 contatos</div>
          </div>
        </div>
      </div>
      
      {/* Container com altura ajustada para acomodar textos longos sem sobrepor as bordas */}
      <div className="relative pt-1 h-[270px] flex flex-col justify-between">
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div 
              key={`out-${convIndex}`}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }} 
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-card rounded-2xl rounded-tl-sm text-xs leading-relaxed border border-border/40 w-[95%] shadow-sm flex flex-col overflow-hidden"
            >
              <div className="p-3.5 whitespace-pre-wrap text-foreground/90">
                {conv.outbound}
              </div>
              {conv.button && (
                <div className="border-t border-border/40 py-2.5 text-center text-primary font-medium bg-muted/20 hover:bg-muted/40 transition-colors cursor-default">
                  {conv.button}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="min-h-[56px] flex flex-col justify-end">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="typing"
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }} 
                className="flex items-center gap-1.5 text-[10px] text-muted-foreground ml-2 pb-2"
              >
                <div className="flex gap-1">
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0 }} className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
                </div>
                <span className="ml-1 font-medium">cliente digitando...</span>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div 
                key="message"
                initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(4px)" }} 
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} 
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="bg-primary/20 rounded-2xl rounded-tr-sm p-3.5 text-xs leading-relaxed ml-auto w-[85%] text-right border border-primary/20 shadow-sm text-foreground/90"
              >
                {conv.inbound}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="relative flex items-center justify-between pt-2 mt-2 border-t border-border/40">
        <div className="flex items-center gap-1.5 text-[10px] text-[oklch(0.8_0.16_155)]">
          <Check className="w-3 h-3" /> 184 respostas agora
        </div>
        <div className="text-[10px] text-muted-foreground flex items-center gap-1">
          <Activity className="w-3 h-3" /> Monitorando
        </div>
      </div>
    </div>
  );
}

export function Dashboard() {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="relative rounded-3xl border border-border/70 bg-card/80 backdrop-blur-2xl shadow-elegant overflow-hidden">
        <LiveNotifications />
        
        <div className="flex items-center justify-between px-5 py-3 border-b border-border/60 bg-background/50">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-destructive/70 shadow-[0_0_8px_var(--color-destructive)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary/70 shadow-[0_0_8px_var(--color-primary)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-success/70 shadow-[0_0_8px_var(--color-success)]" />
          </div>
          <div className="text-xs text-muted-foreground flex items-center gap-2">
            recobra.app / dashboard
          </div>
          <div className="w-12" />
        </div>

        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-0">
          <div className="hidden md:flex flex-col gap-1 p-4 border-r border-border/60 text-sm bg-background/20">
            {[
              ["Visão geral", true],
              ["Campanhas", false],
              ["Clientes", false],
              ["Mensagens", false],
              ["Relatórios", false],
            ].map(([label, active]) => (
              <div
                key={label as string}
                className={`px-3 py-2 rounded-lg transition-colors cursor-default ${
                  active ? "bg-primary/10 text-foreground font-medium" : "text-muted-foreground hover:bg-muted/50"
                }`}
              >
                {label}
              </div>
            ))}
          </div>

          <div className="md:col-span-3 lg:col-span-4 p-5 md:p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm text-muted-foreground">Últimos 30 dias</h3>
                <p className="text-lg font-semibold text-foreground">Visão geral do engajamento</p>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[oklch(0.8_0.16_155)]/10 border border-[oklch(0.8_0.16_155)]/20 shadow-[0_0_15px_oklch(0.8_0.16_155/0.15)]">
                <motion.span 
                  animate={{ opacity: [1, 0.4, 1] }} 
                  transition={{ repeat: Infinity, duration: 2 }} 
                  className="w-1.5 h-1.5 rounded-full bg-[oklch(0.8_0.16_155)]" 
                />
                <span className="text-[10px] uppercase tracking-wider text-[oklch(0.8_0.16_155)] font-semibold">
                  sistema ativo
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              <Metric label="Mensagens enviadas" end={12480} delta="campanhas ativas" icon={MessageCircle} delay={300} />
              <Metric label="Clientes reativados" end={1327} delta="voltaram a responder" icon={Users} delay={450} />
              <Metric label="Campanhas em execução" end={12} delta="automações ativas" icon={Activity} delay={600} />
              <Metric label="Taxa de resposta" end={18.4} suffix="%" decimals={1} delta="engajamento da base" icon={TrendingUp} delay={750} />
            </div>

            <div className="grid lg:grid-cols-5 gap-3 lg:gap-4">
              <div className="lg:col-span-3 rounded-2xl border border-border/60 bg-background/40 p-5 group hover:border-border transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                    Campanhas e reativações nos últimos dias
                  </span>
                  <div className="flex items-center gap-2">
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} className="w-3 h-3 rounded-full border-2 border-primary border-t-transparent" />
                    <span className="text-xs font-medium">Atividade alta</span>
                  </div>
                </div>
                <div className="flex items-end gap-2 h-32">
                  {[28, 42, 35, 58, 48, 70, 62, 84, 76, 92, 88, 96].map((h, i) => (
                    <Bar key={i} h={h} active={i >= 8} i={i} />
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
                  <span>S1</span><span>S4</span><span>S8</span><span>Hoje</span>
                </div>
              </div>

              <ChatSimulation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
