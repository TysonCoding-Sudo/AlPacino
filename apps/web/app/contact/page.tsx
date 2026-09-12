import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Building2,
} from "lucide-react";
import { company } from "@ai-pacino/shared";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/section";
import { ContactForm } from "@/components/ContactForm";

const channels = [
  {
    icon: Phone,
    title: "Phone",
    lines: company.phones,
    href: `tel:${company.phones[0].replace(/\s/g, "")}`,
    linkLabel: company.phones[0],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["Prefer messaging? Chat to us directly."],
    href: `https://wa.me/${company.whatsapp}`,
    linkLabel: "Message us on WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["Send us your project details."],
    href: `mailto:${company.email}`,
    linkLabel: company.email,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's talk about your project."
        body="Tell us what you need — construction, ICT, or both — and we'll respond with a clear, honest proposal."
        tone="ink"
      />

      <section className="bg-plaster py-20 sm:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-2xl bg-stone-900 p-6">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-amber-400" />
                  <p className="text-sm font-semibold text-white">
                    {company.name}
                  </p>
                </div>
                <p className="mt-1 text-xs text-stone-400">
                  Reg: {company.registration}
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                <div>
                  <p className="text-sm font-semibold text-stone-900">Head office</p>
                  <p className="mt-1 text-sm text-stone-600">{company.address}</p>
                </div>
              </div>
            </Reveal>

            {channels.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <a
                  href={c.href}
                  className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition-colors hover:border-stone-300 hover:bg-stone-50"
                >
                  <c.icon className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                  <div>
                    <p className="text-sm font-semibold text-stone-900">{c.title}</p>
                    {c.lines.map((l) => (
                      <p key={l} className="mt-1 text-sm text-stone-600">
                        {l}
                      </p>
                    ))}
                    <p className="mt-1 text-sm font-medium text-amber-800">
                      {c.linkLabel}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal>
              <div className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                <div>
                  <p className="text-sm font-semibold text-stone-900">Business hours</p>
                  <p className="mt-1 text-sm text-stone-600">{company.openingHours}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={80}>
              <ContactForm />
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-sm text-stone-500">
                This form opens your email client with the message pre-filled.
                Prefer WhatsApp? You can{" "}
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  className="font-medium text-amber-800 underline"
                >
                  message us here
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}