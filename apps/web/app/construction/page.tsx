import Link from "next/link";
import {
  ArrowRight,
  HardHat,
  Droplets,
  Zap,
  Fan,
  Leaf,
  ShieldCheck,
  Landmark,
} from "lucide-react";
import { constructionServices } from "@al-pacino/shared";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading, ServiceCard, CtaBanner } from "@/components/section";

const iconMap = [HardHat, Droplets, Zap, Fan, Leaf, ShieldCheck];

const values = [
  { icon: HardHat, title: "Safety", blurb: "People first — disciplined health and safety on every site." },
  { icon: Leaf, title: "Sustainability", blurb: "Responsible use of materials, water and energy — built to last." },
  { icon: Zap, title: "Workmanship", blurb: "The highest standards of workmanship and professionalism, always." },
  { icon: ShieldCheck, title: "Efficiency", blurb: "Technical expertise and practical experience, delivered on time." },
];

export default function ConstructionHub() {
  return (
    <>
      <PageHero
        eyebrow="Construction"
        title="We build what your operations stand on."
        body="From roads and water networks to electrical infrastructure and HVAC systems — a multidisciplinary team delivering efficient, safe and sustainable works to the highest standards of workmanship."
        tone="construction"
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/construction/services"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-700"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-800 transition-colors hover:bg-stone-100"
          >
            Request a quote
          </Link>
        </div>
      </PageHero>

      {/* Services grid */}
      <section className="bg-plaster-2 py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              tone="construction"
              eyebrow="Disciplines"
              title="What we build"
              lead="Six core disciplines — from heavy civil works to specialist HVAC engineering — delivered by one accountable team."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {constructionServices.map((s, i) => {
              const Icon = iconMap[i];
              return (
                <Reveal key={s.title} delay={i * 60} className="h-full">
                  <ServiceCard
                    icon={Icon}
                    title={s.title}
                    blurb={s.blurb}
                    tone="construction"
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              tone="construction"
              eyebrow="Principles"
              title="How we work"
              lead="Efficient, safe and sustainable — the values that guide every site we touch."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                  <v.icon className="h-6 w-6 text-amber-600" />
                  <h3 className="mt-4 text-base font-semibold text-stone-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{v.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="bg-plaster py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Track record
            </p>
            <h2 className="mt-3 font-construction text-3xl font-semibold uppercase tracking-wide text-stone-900 sm:text-4xl">
              City of Ekurhuleni
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600">
              Al Pacino is appointed to the City of Ekurhuleni&apos;s{" "}
              <strong className="font-semibold text-stone-900">
                Panel of Electrical Engineers
              </strong>{" "}
              with responsibility for{" "}
              <strong className="font-semibold text-stone-900">
                HVAC commissioning and maintenance
              </strong>{" "}
              on an as-and-when-required basis. The appointment is a mark of
              technical credibility and compliance capacity.
            </p>
            <Link
              href="/construction/projects"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-800 transition-colors hover:text-amber-950"
            >
              Full track record <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl bg-stone-900 p-8">
              <Landmark className="h-8 w-8 text-amber-400" />
              <blockquote className="mt-4 text-lg font-medium leading-relaxed text-white">
                &ldquo;Appointed to the Panel of Electrical Engineers and
                HVAC commissioning and maintenance — on an
                as-and-when-required basis.&rdquo;
              </blockquote>
              <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-amber-400">
                City of Ekurhuleni
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        tone="construction"
        eyebrow="Start your project"
        heading="Tell us what you need built."
        body="Roads, water networks, electrical, HVAC or full turnkey — we'll plan it, price it and deliver it."
        primaryHref="/quote"
        primaryLabel="Request a quote"
        secondaryHref="/contact"
        secondaryLabel="Contact us"
      />
    </>
  );
}