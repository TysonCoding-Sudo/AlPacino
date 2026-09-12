import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { itApproach } from "@ai-pacino/shared";
import { Reveal } from "@/components/Reveal";
import { PageHero, CtaBanner } from "@/components/section";

const longDetail = [
  "We sit with your team, map your operations and understand what your business actually needs — not just what the spec sheet says.",
  "We audit your current technology estate, identify gaps, risks and bottlenecks — so the solution is grounded in reality.",
  "We architect a fit-for-purpose, budgeted solution — documented, agreed and scoped before anything moves.",
  "We source genuine equipment and software — on time, on budget, with procurement managed end to end.",
  "We deploy with a site-aware rollout plan — professional installation with minimal disruption to operations.",
  "We configure and bring your new environment into full operation — users trained, handover complete.",
  "We validate against agreed criteria before formal handover — nothing goes live until it's proven.",
  "We back every deployment with responsive, measured support — SLA-driven and reported transparently.",
  "We review performance and recommend improvements — your technology evolves with your business.",
];

export default function ItApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our approach"
        title="From supply to support — a complete lifecycle."
        body="Nine clearly defined steps. Each one is client-facing, measurable and designed so there are no surprises."
        tone="tech"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-site space-y-0">
          {itApproach.map((s, i) => (
            <Reveal key={s.step}>
              <div className="grid items-start gap-8 border-b border-slate-100 py-10 last:border-b-0 lg:grid-cols-[6rem_auto_1fr] lg:gap-10">
                <div className="text-center lg:text-right">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 font-display text-sm font-bold text-white">
                    {s.step}
                  </span>
                </div>
                <div className="lg:min-w-[10rem]">
                  <h3 className="text-xl font-semibold text-stone-900">{s.title}</h3>
                </div>
                <p className="text-base leading-relaxed text-slate-600">
                  {longDetail[i]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Supply > Support strip */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              The lifecycle
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Supply → Support
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
              Every engagement follows the same nine steps — whether it&apos;s
              a single server or a national rollout.
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {itApproach.map((s, i) => (
              <Reveal key={s.step} delay={i * 40}>
                <span className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
                  <span className="font-bold text-blue-400">{s.step}</span>
                  {s.title}
                  {i < itApproach.length - 1 && (
                    <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-slate-600" />
                  )}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        tone="tech"
        eyebrow="Let's begin"
        heading="Ready to improve your technology?"
        body="Tell us where you are and where you want to go — we'll map the path."
        primaryHref="/quote"
        primaryLabel="Request a quote"
        secondaryHref="/contact"
        secondaryLabel="Contact us"
      />
    </>
  );
}