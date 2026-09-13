"use client";

import { useState } from "react";
import {
  Send,
  MessageCircle,
  CheckCircle2,
  Construction,
  Wifi,
} from "lucide-react";
import { company, constructionServices, itServices } from "@ai-pacino/shared";

export function QuoteForm() {
  const [division, setDivision] = useState<"construction" | "it" | "">("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = (form.get("name") as string || "").trim();
    const email = (form.get("email") as string || "").trim();
    const phone = (form.get("phone") as string || "").trim();
    const service = (form.get("service") as string || "").trim();
    const location = (form.get("location") as string || "").trim();
    const message = (form.get("message") as string || "").trim();

    const lines = [
      `Quote request`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Division: ${division === "construction" ? "Construction" : "ICT Solutions"}`,
      service ? `Service: ${service}` : "",
      location ? `Location: ${location}` : "",
      ``,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const text = encodeURIComponent(lines);
    window.open(
      `https://wa.me/${company.whatsapp}?text=${text}`,
      "_blank",
      "noopener"
    );
    setSent(true);
  }

  return sent ? (
    <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
      <CheckCircle2 className="mx-auto h-10 w-10 text-green-600" />
      <h3 className="mt-4 text-lg font-semibold text-green-900">
        Opening WhatsApp…
      </h3>
      <p className="mt-2 text-sm text-green-700">
        You can also call us directly at{" "}
        <a href={`tel:${company.phonePrimary.replace(/\s/g, "")}`} className="underline">
          {company.phonePrimary}
        </a>
      </p>
    </div>
  ) : (
    <form
      onSubmit={onSubmit}
      className="space-y-6 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"
    >
      {/* Division selector */}
      <div>
        <label className="block text-sm font-medium text-stone-700">
          Which division?
        </label>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setDivision("construction")}
            className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${
              division === "construction"
                ? "border-amber-500 bg-amber-50"
                : "border-stone-200 hover:border-stone-300"
            }`}
          >
            <Construction className={`h-5 w-5 ${division === "construction" ? "text-amber-700" : "text-stone-400"}`} />
            <div>
              <p className="text-sm font-semibold text-stone-900">Construction</p>
              <p className="text-xs text-stone-500">Roads, water, electrical, HVAC</p>
            </div>
          </button>
          <button
            type="button"
            onClick={() => setDivision("it")}
            className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${
              division === "it"
                ? "border-blue-500 bg-blue-50"
                : "border-stone-200 hover:border-stone-300"
            }`}
          >
            <Wifi className={`h-5 w-5 ${division === "it" ? "text-blue-600" : "text-stone-400"}`} />
            <div>
              <p className="text-sm font-semibold text-stone-900">ICT Solutions</p>
              <p className="text-xs text-stone-500">Networks, support, cloud</p>
            </div>
          </button>
        </div>
      </div>

      {division && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="q-name" className="block text-sm font-medium text-stone-700">
              Full name
            </label>
            <input
              type="text"
              name="name"
              id="q-name"
              required
              className="mt-1.5 block w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div>
            <label htmlFor="q-email" className="block text-sm font-medium text-stone-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="q-email"
              required
              className="mt-1.5 block w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div>
            <label htmlFor="q-phone" className="block text-sm font-medium text-stone-700">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="q-phone"
              className="mt-1.5 block w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div>
            <label htmlFor="q-service" className="block text-sm font-medium text-stone-700">
              Service
            </label>
            <select
              name="service"
              id="q-service"
              className="mt-1.5 block w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="">Select a service</option>
              {(division === "construction" ? constructionServices : itServices).map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="q-location" className="block text-sm font-medium text-stone-700">
              Project / site location
            </label>
            <input
              type="text"
              name="location"
              id="q-location"
              placeholder="e.g. Lenyenye, Limpopo"
              className="mt-1.5 block w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>
      )}

      {division && (
        <div>
          <label htmlFor="q-message" className="block text-sm font-medium text-stone-700">
            Brief description of requirements
          </label>
          <textarea
            name="message"
            id="q-message"
            rows={4}
            required
            placeholder="Tell us what you need, any deadlines, and anything else we should know."
            className="mt-1.5 block w-full resize-none rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      )}

      {division && (
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
        >
          <MessageCircle className="h-4 w-4" />
          Send via WhatsApp
        </button>
      )}
    </form>
  );
}