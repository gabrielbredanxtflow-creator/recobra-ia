import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Results } from "@/components/landing/Results";
import { Included } from "@/components/landing/Included";
import { NotSpam } from "@/components/landing/NotSpam";
import { Transition } from "@/components/landing/Transition";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Recobra Reativação automática de clientes para restaurantes" },
      {
        name: "description",
        content:
          "Recupere clientes pelo WhatsApp, aumente o engajamento e a recorrência sem depender só do iFood. Sistema híbrido de reativação para restaurantes e deliverys.",
      },
      { property: "og:title", content: "Recobra Reativação automática. Mais engajamento. Mais recorrência." },
      {
        property: "og:description",
        content:
          "Recuperação automática de clientes para restaurantes via WhatsApp. Engajamento ativo e inteligente.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Results />
      <Included />
      <NotSpam />
      <Transition />
      <FinalCTA />
      <Footer />
    </main>
  );
}
