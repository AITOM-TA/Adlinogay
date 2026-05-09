import Button from "@/components/ui/Button";
import FadeInWhenVisible from "@/components/shared/FadeInWhenVisible";

export default function PersonalTeaser() {
  return (
    <section className="py-28 px-6 md:px-12 lg:px-24 bg-cream">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInWhenVisible>
          <p
            className="font-inter text-brick mb-8"
            style={{ fontSize: "11px", letterSpacing: "2px" }}
          >
            AU-DELÀ DU LABORATOIRE
          </p>
          <blockquote
            className="font-cormorant italic text-ink mb-10 leading-relaxed"
            style={{ fontSize: "clamp(24px, 3vw, 34px)" }}
          >
            «&thinsp;La rigueur n&apos;a jamais empêché la curiosité — elle la rend plus juste.&thinsp;»
          </blockquote>
          <Button variant="primary" href="/personnel">
            Découvrir mes passions
          </Button>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
