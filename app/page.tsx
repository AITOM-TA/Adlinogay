import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import QuickStats from "@/components/home/QuickStats";
import ExpertiseTeaser from "@/components/home/ExpertiseTeaser";
import MiniTimeline from "@/components/home/MiniTimeline";
import PersonalTeaser from "@/components/home/PersonalTeaser";

export const metadata: Metadata = {
  title: "Adeline Auguet — Pharmacienne Industrielle",
  description:
    "Pharmacienne industrielle, cheffe de projet et experte en validation & qualification. Entre rigueur scientifique et curiosité humaine.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <QuickStats />
      <ExpertiseTeaser />
      <MiniTimeline />
      <PersonalTeaser />
    </>
  );
}
