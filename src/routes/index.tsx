import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Results } from "@/components/landing/Results";
import { Included } from "@/components/landing/Included";
import { NotSpam } from "@/components/landing/NotSpam";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Recobra — Recupere clientes do seu restaurante automaticamente" },
      {
        name: "description",
        content:
          "Recupere clientes pelo WhatsApp, aumente pedidos e faturamento sem depender só do iFood. Sistema híbrido de reativação para restaurantes, deliverys e food service.",
      },
      { property: "og:title", content: "Recobra — Mais pedidos. Mais recorrência. Mais faturamento." },
      {
        property: "og:description",
        content:
          "Recuperação automática de clientes para restaurantes via WhatsApp. ROI médio de 9x.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Results />
      <Included />
      <NotSpam />
      <FinalCTA />
      <Footer />
    </main>
  );
}
