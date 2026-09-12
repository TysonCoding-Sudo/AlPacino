import Link from "next/link";
import {
  ArrowRight,
  HardHat,
  Droplets,
  Zap,
  Fan,
  Leaf,
  ShieldCheck,
} from "lucide-react";
import { constructionServices } from "@ai-pacino/shared";
import { Reveal } from "@/components/Reveal";
import { PageHero, CtaBanner } from "@/components/section";

const iconMap = [HardHat, Droplets, Zap, Fan, Leaf, ShieldCheck];

const detail = [
  {
    title: "Roadworks & Civil Paving",
    body: "From graded access roads to paved surfaces and rehabilitation — we deliver civil works with efficient planning, safe traffic management and durable surfacing. Our construction team brings technical expertise and practical site experience to every road project.",
  },
  {
    title: "Water Infrastructure",
    body: "Water and sewer reticulation, bulk pipelines, stormwater drainage and associated civil infrastructure. We build what communities depend on — designed for long-term reliability and compliant with municipal and SANS standards.",
  },
  {
    title: "Electrical Engineering",
    body: "Electrical installations, distribution networks, reticulation and associated engineering for commercial, industrial and municipal clients. Our qualified team handles projects from substations to internal building installations.",
  },
  {
    title: "HVAC Commissioning & Maintenance",
    body: "Commissioning, preventive maintenance, breakdown response and repair of heating, ventilation and air-conditioning systems. We operate on an as-and-when-required basis, with a particular strength in municipal panel work.",
  },
  {
    title: "Landscaping",
    body: "Hard and soft landscaping for civic, commercial and residential environments — from irrigation and turf to planting, paving, seating and outdoor finishes that make a site presentable and functional.",
  },
  {
    title: "Fencing & Perimeter",
    body: "Perimeter fencing, palisade, security barriers, pedestrian access control and boundary infrastructure. We protect people, plant and property with appropriate, well-installed perimeter solutions.",
  },
];

export default function ConstructionServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Construction services"
        title="Six disciplines. One team."
        body="A multidisciplinary construction practice covering civil works, electrical infrastructure, HVAC, landscaping and perimeter — all under one accountable management structure."
        tone="construction"
      />

      <section className="bg-plaster-2 py-20 sm:py-24">
        <div className="container-site space-y-14">
          {detail.map((d, i) => {
            const Icon = iconMap[i];
            const s = constructionServices[i];
            return (
              <Reveal key={d.title}>
                <div
                  className={`grid items-start gap-8 rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 lg:grid-cols-[auto_1fr] lg:gap-10`}
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-900">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-stone-900">
                      {d.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-stone-600">
                      {d.body}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-stone-500">
                      {s.blurb}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-stone-900 py-14">
        <div className="container-site flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Ready to start?
            </p>
            <h2 className="mt-2 font-construction text-3xl font-semibold uppercase tracking-wide text-white sm:text-4xl">
              Tell us what you need.
            </h2>
          </div>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-amber-400"
          >
            Request a quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}