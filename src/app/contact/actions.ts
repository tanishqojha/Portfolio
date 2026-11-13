"use server";

import { email as inbox } from "@/lib/socials";

export type ContactState = {
  status: "idle" | "sent" | "error";
  message?: string;
  fields?: { name: string; email: string; message: string };
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Sends the contact form to the inbox through Resend's REST API (no SDK needed).
 * Needs RESEND_API_KEY. Without a verified domain Resend only delivers to the
 * account owner's address, which is exactly the inbox here.
 */
export async function sendMessage(_prev: ContactState, form: FormData): Promise<ContactState> {
  const fields = {
    name: String(form.get("name") ?? "").trim(),
    email: String(form.get("email") ?? "").trim(),
    message: String(form.get("message") ?? "").trim(),
  };

  // Honeypot: real people never see or fill this field.
  if (form.get("company")) return { status: "sent" };

  if (!fields.name || fields.name.length > 100) return { status: "error", message: "Please add your name.", fields };
  if (!EMAIL_RE.test(fields.email) || fields.email.length > 200)
    return { status: "error", message: "That email address doesn't look right.", fields };
  if (fields.message.length < 10 || fields.message.length > 5000)
    return { status: "error", message: "Write a little more (10 to 5000 characters).", fields };

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("contact: RESEND_API_KEY is not set");
    return { status: "error", message: `The form isn't connected yet. Email me directly at ${inbox}.`, fields };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
      to: [inbox],
      reply_to: fields.email,
      subject: `Portfolio: message from ${fields.name}`,
      text: `${fields.message}\n\n${fields.name} <${fields.email}>`,
    }),
  }).catch(() => null);

  if (!res?.ok) {
    console.error("contact: send failed", res?.status, await res?.text().catch(() => ""));
    return { status: "error", message: `Something broke on my side. Email me directly at ${inbox}.`, fields };
  }
  return { status: "sent" };
}
