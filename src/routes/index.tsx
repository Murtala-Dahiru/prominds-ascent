import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { StatsStrip } from "@/components/home/StatsStrip";
import { DivisionsGrid } from "@/components/home/DivisionsGrid";
import { WhyUs } from "@/components/home/WhyUs";
import { ParentPreview } from "@/components/home/ParentPreview";
import { PricingCards } from "@/components/home/PricingCards";
import { Testimonials } from "@/components/home/Testimonials";
import { TutorsStrip } from "@/components/home/TutorsStrip";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { CtaBand } from "@/components/home/CtaBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProMinds Education Group — Premium Academic Excellence" },
      {
        name: "description",
        content:
          "Elite tutorials, career services, academic document support, and parent education — built for measurable student success.",
      },
      { property: "og:title", content: "ProMinds Education Group" },
      {
        property: "og:description",
        content:
          "Building academic excellence for the next generation — premium tutorials, career services, and parent education.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <DivisionsGrid />
      <WhyUs />
      <ParentPreview />
      <PricingCards />
      <Testimonials />
      <TutorsStrip />
      <FaqAccordion />
      <CtaBand />
    </>
  );
}
