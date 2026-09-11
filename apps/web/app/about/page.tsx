import {
  ShieldCheck,
  MapPinned,
  UserRound,
  Landmark,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { company, itValues } from "@al-pacino/shared";
import { Reveal } from "@/components/Reveal";
import { PageHero, CtaBanner } from "@/components/section";

const timeline = [
  {
    year: "2015",
    title: "Registered",
    body: `${company.name} registered in South Africa (Reg. No: ${company.registration}). Head office established in Gauteng.`,
  },
  {
    year: "Construction",
    title: "Civil engineering & infrastructure",
    body: "Roadworks, water infrastructure, electrical engineering, HVAC commissioning and maintenance, landscaping and fencing — building the physical infrastructure that operations depend on.",
  },
  {
    year: "ICT",
    title: "Technology & support",
    body: "End-to-end ICT solutions — from assessment and supply to installation, integration and ongoing support. A full lifecycle technology practice.",
  },
  {
    year: "Now",
    title: "National footprint",
    body: "Active across South Africa. Municipal track record, private-sector engagement and long-term client relationships.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the company"
        title="Built on capability. Connected by discipline."
        body={`${company.name} is an owner-managed South African company with two divisions: Construction and ICT Solutions. We deliver physical infrastructure and technology services — the same principles, the same standard, regardless of discipline.`}
        tone="ink"
      />

      {/* Overview */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center bg-stone-900 font-construction text-lg font-semibold tracking-wide text-white">
                  AP
                </span>
                <div>
                  <p className="font-construction text-lg font-semibold uppercase tracking-wide text-stone-900">
                    {company.shortName} (Pty) Ltd
                  </p>
                  <p className="text-sm text-stone-500">
                    Reg. No: {company.registration}
                  </p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-stone-600">
                {company.name} was established in 2015 with a clear idea: build
                and supply real, practical infrastructure — physical and digital
                — with technical credibility, practical experience and a
                commitment to long-term reliability.
              </p>
              <p className="text-base leading-relaxed text-stone-600">
                The company operates as one entity with two specialist
                divisions. Construction delivers civil engineering, electrical,
                HVAC and landscaping works. ICT Solutions provides equipment
                supply, network infrastructure, software development, cloud,
                cybersecurity and managed support — a full lifecycle technology
                partner.
              </p>
              <p className="text-base leading-relaxed text-stone-600">
                Both divisions are run on the same principles: customer focus,
                quality, integrity, innovation, reliability and partnership.
                Whether it&apos;s a road, a server room or a support contract —
                the standard is the same.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-xl bg-plaster p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                    Head office
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-900">
                    Gauteng, South Africa
                  </p>
                </div>
                <div className="rounded-xl bg-plaster p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                    Footprint
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-900">
                    National — South Africa
                  </p>
                </div>
                <div className="rounded-xl bg-plaster p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                    Structure
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-900">
                    Owner-managed
                  </p>
                </div>
                <div className="rounded-xl bg-plaster p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                    Divisions
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-900">
                    Construction · ICT Solutions
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-3xl bg-stone-950 p-8 sm:p-10">
              <div className="grid-lines absolute inset-0 opacity-20" aria-hidden="true" />
              <div className="relative space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                  Trust markers
                </p>
                {[
                  { icon: ShieldCheck, text: `Registered: ${company.registration}` },
                  { icon: MapPinned, text: company.footprint },
                  { icon: Landmark, text: "City of Ekurhuleni — Panel of Electrical Engineers & HVAC" },
                  { icon: UserRound, text: "Owner-managed, accountable leadership" },
                  { icon: Phone, text: company.phones.join(" / ") },
                  { icon: Mail, text: company.email },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <p className="text-sm leading-relaxed text-stone-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-plaster py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <h2 className="font-construction text-3xl font-semibold uppercase tracking-wide text-stone-900 sm:text-4xl">
              Where we are now
            </h2>
          </Reveal>
          <div className="mt-12 space-y-0">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 60}>
                <div className="grid gap-6 border-b border-stone-300/60 py-8 last:border-b-0 lg:grid-cols-[8rem_1fr] lg:gap-12">
                  <p className="font-construction text-lg font-semibold uppercase tracking-wide text-amber-700">
                    {t.year}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-900">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{t.body}</p>
                  </div>
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
            <h2 className="font-construction text-3xl font-semibold uppercase tracking-wide text-stone-900 sm:text-4xl">
              What drives every decision
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-600">
              Six values. They apply to construction and ICT alike — and they
              are the same values we expect from our suppliers and partners.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {itValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                  <CheckCircle2 className="h-5 w-5 text-amber-600" />
                  <h3 className="mt-3 text-base font-semibold text-stone-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {v.blurb}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Let's work together"
        heading="Ready to get started?"
        body="Tell us about your project or requirements — construction, ICT or both."
        primaryHref="/quote"
        primaryLabel="Request a quote"
        secondaryHref="/contact"
        secondaryLabel="Contact us"
      />
    </>
  );
}