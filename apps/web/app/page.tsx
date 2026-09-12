import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  HardHat,
  Wifi,
  ShieldCheck,
  MapPinned,
  UserRound,
  Landmark,
} from "lucide-react";
import { company } from "@ai-pacino/shared";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/section";
import { CertificationBadge } from "@/components/CertificationBadge";

const trust = [
  {
    icon: ShieldCheck,
    title: "Registered company",
    body: `Reg. No ${company.registration} · owner-managed since 2015`,
  },
  {
    icon: MapPinned,
    title: "National footprint",
    body: "Gauteng head office, active across South Africa",
  },
  {
    icon: Landmark,
    title: "Municipal track record",
    body: "City of Ekurhuleni panel — electrical & HVAC",
  },
  {
    icon: UserRound,
    title: "Accountable leadership",
    body: "Direct owner engagement on every project",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-950">
        <div className="grid-lines absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="container-site relative grid items-center gap-12 py-24 sm:py-32 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              {company.name} · Est. 2015
            </p>
            <h1 className="mt-6 font-construction text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
              Built.
              <br />
              Connected.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300">
              One company, two disciplines. From civil construction and
              engineering to complete ICT solutions — we deliver infrastructure
              and technology you can depend on, anywhere in South Africa.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#divisions"
                className="rounded-full bg-amber-500 px-8 py-4 text-sm font-semibold text-stone-950 transition-colors hover:bg-amber-400"
              >
                Explore our divisions
              </Link>
              <Link
                href="/quote"
                className="rounded-full border border-stone-600 px-8 py-4 text-sm font-semibold text-stone-100 transition-colors hover:border-stone-400 hover:text-white"
              >
                Request a quote
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CertificationBadge />
              <span className="text-sm text-stone-400">
                Quality Management System · audited to ISO 9001
              </span>
            </div>
          </div>

          <div className="hidden gap-4 lg:grid">
            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400">
                  <HardHat className="h-5 w-5" />
                </span>
                <p className="font-construction text-lg font-semibold uppercase tracking-wide text-white">
                  Construction
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-stone-400">
                Roadworks, water infrastructure, electrical engineering, HVAC
                commissioning & maintenance, landscaping and fencing.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                  <Wifi className="h-5 w-5" />
                </span>
                <p className="font-display text-lg font-semibold tracking-tight text-white">
                  ICT Solutions
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                From assessment and supply to installation, integration and
                ongoing support — a full lifecycle technology partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why strip */}
      <section className="border-b border-stone-200 bg-white">
        <div className="container-site grid gap-px py-14 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.title} className="flex items-start gap-4 py-4 pr-6">
              <t.icon className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
              <div>
                <h3 className="text-sm font-semibold text-stone-900">{t.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-500">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Two division doors */}
      <section id="divisions" className="bg-plaster py-20 sm:py-24">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Two divisions, one standard
            </p>
            <h2 className="mt-3 font-construction text-3xl font-semibold uppercase tracking-wide text-stone-900 sm:text-4xl">
              Choose your door
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-600">
              Every engagement — whether it&apos;s a site, a server or a
              service level — is run on the same principles: quality,
              accountability and long-term reliability.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Construction door */}
            <Reveal className="h-full">
              <Link
                href="/construction"
                className="group flex h-full flex-col rounded-3xl bg-stone-900 p-8 transition-all hover:-translate-y-1.5 hover:shadow-2xl sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-stone-950">
                    <HardHat className="h-7 w-7" />
                  </span>
                  <ArrowUpRight className="h-7 w-7 text-stone-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-amber-400" />
                </div>
                <h3 className="mt-8 font-construction text-4xl font-semibold uppercase tracking-wide text-white">
                  Construction
                </h3>
                <p className="mt-3 leading-relaxed text-stone-400">
                  A multidisciplinary team delivering efficient, safe and
                  sustainable civil works — to the highest standards of
                  workmanship and professionalism.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Roadworks",
                    "Water infrastructure",
                    "Electrical",
                    "HVAC",
                    "Landscaping",
                    "Fencing",
                  ].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-stone-700 px-3 py-1 text-xs font-medium text-stone-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-auto pt-8 text-sm font-semibold text-amber-400">
                  Enter the division{" "}
                  <ArrowRight className="ml-1 inline h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </Link>
            </Reveal>

            {/* ICT door */}
            <Reveal className="h-full" delay={120}>
              <Link
                href="/it"
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1.5 hover:shadow-2xl sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <Wifi className="h-7 w-7" />
                  </span>
                  <ArrowUpRight className="h-7 w-7 text-slate-300 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-600" />
                </div>
                <h3 className="mt-8 font-display text-4xl font-semibold tracking-tight text-stone-900">
                  ICT Solutions
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  A full-lifecycle technology partner — from assessing your
                  environment and supplying equipment, to installing,
                  integrating and supporting what runs your business.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "IT support",
                    "Networks",
                    "Equipment supply",
                    "Cybersecurity",
                    "Cloud",
                    "Software",
                  ].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-auto pt-8 text-sm font-semibold text-blue-600">
                  Enter the division{" "}
                  <ArrowRight className="ml-1 inline h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Proven delivery
            </p>
            <h2 className="mt-3 font-construction text-3xl font-semibold uppercase tracking-wide text-stone-900 sm:text-4xl">
              On the City of Ekurhuleni&apos;s panel
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600">
              AI Pacino is appointed to the municipal{" "}
              <strong className="font-semibold text-stone-900">
                Panel of Electrical Engineers
              </strong>{" "}
              and performs{" "}
              <strong className="font-semibold text-stone-900">
                HVAC commissioning and maintenance
              </strong>{" "}
              on an as-and-when-required basis. The appointment is a mark of
              technical credibility, compliance capacity and dependable
              delivery.
            </p>
            <Link
              href="/construction/projects"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-800 transition-colors hover:text-amber-950"
            >
              See the construction track record
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl bg-stone-950 p-8 sm:p-10">
              <div className="grid-lines absolute inset-0 opacity-30" aria-hidden="true" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
                  <Landmark className="h-6 w-6" />
                </span>
                <blockquote className="mt-6 text-xl font-medium leading-relaxed text-white sm:text-2xl">
                  &ldquo;First-class technical execution, delivered the way a
                  municipality requires — compliant, safe and on time.&rdquo;
                </blockquote>
                <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-amber-400">
                  City of Ekurhuleni
                </p>
                <p className="mt-1 text-sm text-stone-400">
                  Panel of Electrical Engineers · HVAC Commissioning &amp; Maintenance
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        tone="construction"
        eyebrow="Let&apos;s talk"
        heading="What do you need built or connected?"
        body="Tell us about your project or technology requirements and we'll respond with a clear, honest proposal."
        primaryHref="/quote"
        primaryLabel="Request a quote"
        secondaryHref="/contact"
        secondaryLabel="Contact us"
      />
    </>
  );
}