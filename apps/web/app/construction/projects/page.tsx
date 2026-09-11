import Link from "next/link";
import { ArrowRight, Landmark, Calendar, Building } from "lucide-react";
import { constructionTrackRecord } from "@al-pacino/shared";
import { Reveal } from "@/components/Reveal";
import { PageHero, CtaBanner } from "@/components/section";

export default function ConstructionProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Track record"
        title="A track record you can verify."
        body="The projects below reflect active and completed engagements — including municipal panel appointments that confirm technical credibility, compliance and dependable delivery."
        tone="construction"
      />

      {/* Ekurhuleni record */}
      <section className="bg-plaster-2 py-20 sm:py-24">
        <div className="container-site space-y-14">
          <Reveal>
            <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                  <Landmark className="h-4 w-4" />
                  Municipal engagement
                </div>
                <h2 className="mt-4 font-construction text-3xl font-semibold uppercase tracking-wide text-stone-900 sm:text-4xl">
                  {constructionTrackRecord.client}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-stone-600">
                  {constructionTrackRecord.summary}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-stone-500">
                  {constructionTrackRecord.note}
                </p>
              </div>
              <div className="rounded-2xl bg-stone-900 p-6 sm:p-8">
                <div className="space-y-4 text-sm text-stone-300">
                  <div className="flex items-start gap-3">
                    <Building className="mt-0.5 h-4 w-4 text-amber-400" />
                    <div>
                      <p className="font-medium text-white">Client</p>
                      <p>{constructionTrackRecord.client}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-4 w-4 text-amber-400" />
                    <div>
                      <p className="font-medium text-white">Type</p>
                      <p>As-and-when-required panel appointment</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-white">Scope</p>
                    <ul className="mt-1.5 space-y-1 text-stone-400">
                      <li>Panel of Electrical Engineers</li>
                      <li>HVAC Commissioning</li>
                      <li>HVAC Maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Additional projects placeholder */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <h2 className="font-construction text-3xl font-semibold uppercase tracking-wide text-stone-900 sm:text-4xl">
              More projects
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-600">
              We are currently compiling a broader project portfolio for this
              page. In the meantime, our panel appointments and client
              references speak to the standard of work we deliver.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10 rounded-3xl border border-dashed border-stone-300 bg-stone-50 p-8 text-center">
              <p className="text-sm text-stone-500">
                Additional project details will appear here soon.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        tone="construction"
        eyebrow="Start your project"
        heading="Have a project in mind?"
        body="From municipal panel work to private development — we plan, price and deliver."
        primaryHref="/quote"
        primaryLabel="Request a quote"
        secondaryHref="/contact"
        secondaryLabel="Contact us"
      />
    </>
  );
}