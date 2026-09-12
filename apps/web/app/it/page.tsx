import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Wifi,
  Headphones,
  Network,
  Package,
  Wrench,
  Workflow,
  Code,
  Cloud,
  Lock,
  Server,
  Settings,
  ClipboardList,
  Repeat,
  CheckCircle2,
} from "lucide-react";
import {
  itServices,
  itValues,
  itApproach,
  itWhyUs,
} from "@ai-pacino/shared";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading, ServiceCard, CtaBanner } from "@/components/section";

const serviceIcons = [
  Headphones, Network, Package, Wrench, Workflow, Code,
  Cloud, Lock, Server, Settings, ClipboardList, Repeat,
];

const previewServices = itServices.slice(0, 6);

export default function ItHub() {
  return (
    <>
      <PageHero
        eyebrow="ICT Solutions"
        title="Your technology partner — from supply to support."
        body="We assess your environment, supply the right equipment, install and integrate it, then back it with ongoing support and improvement."
        tone="tech"
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/it/services"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            View all 12 services <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/it/approach"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
          >
            Our approach <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      {/* Services preview */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              tone="tech"
              eyebrow="Core services"
              title="Everything your technology needs"
              lead="Six of the twelve services we deliver — covering support, networks, equipment, integration, software and cloud."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {previewServices.map((s, i) => {
              const Icon = serviceIcons[i];
              return (
                <Reveal key={s.title} delay={i * 60} className="h-full">
                  <ServiceCard
                    icon={Icon}
                    title={s.title}
                    blurb={s.blurb}
                    tone="tech"
                  />
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={400}>
            <p className="mt-8 text-center text-sm font-semibold text-blue-600">
              <Link href="/it/services" className="inline-flex items-center gap-2 transition-colors hover:text-blue-800">
                View all 12 services <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Approach strip */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              tone="tech"
              eyebrow="Lifecycle approach"
              title="Supply → Support"
              lead="Nine steps — from understanding your environment to continuous improvement."
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3 lg:grid-cols-9">
            {itApproach.map((s, i) => (
              <Reveal key={s.step} delay={i * 40}>
                <div className="flex flex-col bg-white p-5 text-center">
                  <span className="text-xs font-bold text-blue-600">{s.step}</span>
                  <span className="mt-2 text-sm font-semibold text-stone-900">{s.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <p className="mt-6 text-center text-sm text-slate-500">
              Each step is client-facing and measured — no hidden phases.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              tone="tech"
              eyebrow="Why AI Pacino ICT"
              title="Six reasons to choose us"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {itWhyUs.map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <div className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                  <p className="text-sm leading-relaxed text-slate-300">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              tone="tech"
              eyebrow="Values"
              title="How we work"
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {itValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-base font-semibold text-stone-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        tone="tech"
        eyebrow="Get started"
        heading="Need a technology partner?"
        body="Tell us about your ICT requirements — from a single server to a national network — and we'll design a solution."
        primaryHref="/quote"
        primaryLabel="Request a quote"
        secondaryHref="/contact"
        secondaryLabel="Contact us"
      />
    </>
  );
}