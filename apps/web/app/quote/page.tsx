import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/section";
import { QuoteForm } from "@/components/QuoteForm";

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Get a clear, honest quote."
        body="Select your division, tell us what you need, and send it through. We respond with a structured proposal — no surprises."
        tone="ink"
      />

      <section className="bg-plaster py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <Reveal>
              <h2 className="font-construction text-2xl font-semibold uppercase tracking-wide text-stone-900">
                Before you send
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-stone-600">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" />
                  Give us the location and rough scale of your project or
                  requirement.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" />
                  Include any deadlines or milestones that matter to you.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" />
                  For ICT, a short description of your current environment
                  helps us scope accurately.
                </li>
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-2xl bg-stone-900 p-6 text-sm leading-relaxed text-stone-300">
                <p className="font-semibold text-white">What happens next?</p>
                <p className="mt-3">
                  Your request arrives on WhatsApp or email. We review it, ask
                  any clarifying questions, and respond with a structured quote
                  — usually within one business day.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}