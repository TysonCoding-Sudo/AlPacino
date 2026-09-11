"use client";

import { useState, useTransition } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { company } from "@al-pacino/shared";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = (form.get("name") as string || "").trim();
    const email = (form.get("email") as string || "").trim();
    const phone = (form.get("phone") as string || "").trim();
    const message = (form.get("message") as string || "").trim();
    const subject = encodeURIComponent(`Contact form — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );
    window.open(`mailto:${company.email}?subject=${subject}&body=${body}`, "_self");
    setSent(true);
  }

  return sent ? (
    <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
      <CheckCircle2 className="mx-auto h-10 w-10 text-green-600" />
      <h3 className="mt-4 text-lg font-semibold text-green-900">
        Opening your email client…
      </h3>
      <p className="mt-2 text-sm text-green-700">
        You can also reach us at{" "}
        <a
          href={`mailto:${company.email}`}
          className="underline"
        >
          {company.email}
        </a>
      </p>
    </div>
  ) : (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700">
            Full name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1.5 block w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1.5 block w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-stone-700">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="mt-1.5 block w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-700">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-1.5 block w-full resize-none rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-700"
      >
        <Send className="h-4 w-4" />
        Send message
      </button>
    </form>
  );
}