"use client";

import { ShieldCheck, Settings2, Workflow, FileCheck } from "lucide-react";
import Tag from "@/components/ui/Tag";
import FadeInWhenVisible from "@/components/shared/FadeInWhenVisible";
import type { Expertise } from "@/data/expertises";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldCheck,
  Settings2,
  Workflow,
  FileCheck,
};

interface ExpertiseCardProps {
  expertise: Expertise;
  delay?: number;
}

export default function ExpertiseCard({ expertise, delay = 0 }: ExpertiseCardProps) {
  const Icon = iconMap[expertise.icon] || ShieldCheck;

  return (
    <FadeInWhenVisible delay={delay}>
      <div
        className="bg-cream rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:scale-[1.02]"
        style={{ border: "1px solid rgba(212,168,140,0.3)" }}
      >
        <div className="w-12 h-12 rounded-full bg-peach flex items-center justify-center mb-6">
          <Icon size={20} className="text-terracotta-deep" />
        </div>
        <h3 className="font-cormorant text-2xl text-ink mb-4">
          {expertise.title}
        </h3>
        <p className="font-inter text-sm text-ink-soft leading-relaxed flex-1 mb-6">
          {expertise.description}
        </p>
        <Tag variant="sage">{expertise.referentiel}</Tag>
      </div>
    </FadeInWhenVisible>
  );
}
