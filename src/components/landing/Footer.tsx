import { Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-semibold">
          <span className="w-7 h-7 rounded-lg bg-gradient-primary grid place-items-center">
            <Flame className="w-3.5 h-3.5 text-primary-foreground" />
          </span>
          Recobra
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Recobra. Recuperação automática de clientes para food service.
        </p>
        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
          <a href="#" className="hover:text-foreground transition-colors">Termos</a>
          <a href="#cta" className="hover:text-foreground transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
}
