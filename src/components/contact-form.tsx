"use client";

import { useActionState } from "react";
import { sendMessage, type ContactState } from "@/app/contact/actions";

const field =
  "w-full border-[3px] border-ink bg-chalk px-4 py-3 text-base text-ink placeholder:text-steel focus:bg-white focus:outline-none focus-visible:outline-[3px] focus-visible:outline-ember aria-[invalid=true]:border-ember";
const label = "font-mono text-xs font-bold uppercase";

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendMessage, { status: "idle" });

  if (state.status === "sent") {
    return (
      <div role="status" className="flex min-h-[26rem] flex-col justify-center gap-4 border-[3px] border-ink bg-ember p-8 shadow-[8px_8px_0_var(--color-ink)]">
        <p className="text-[clamp(2rem,4vw,3rem)] font-bold uppercase leading-none tracking-[-0.02em]">Got it.</p>
        <p className="max-w-[40ch] text-lg">Thanks for writing. I read everything myself and usually reply within two days.</p>
      </div>
    );
  }

  const bad = state.status === "error";
  return (
    <form action={action} className="flex flex-col gap-6 border-[3px] border-ink bg-mist p-6 shadow-[8px_8px_0_var(--color-ink)] md:p-8" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" name="name" autoComplete="name" required maxLength={100} defaultValue={state.fields?.name} className={field} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required maxLength={200} defaultValue={state.fields?.email} className={field} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={label}>What are you working on?</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          minLength={10}
          maxLength={5000}
          defaultValue={state.fields?.message}
          placeholder="A role, a project, a model that won't behave..."
          aria-describedby="form-status"
          className={`${field} resize-y`}
        />
      </div>
      {/* Honeypot, hidden from people and screen readers. */}
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-status" role="alert" className={`text-sm ${bad ? "font-bold text-ink" : "text-steel"}`}>
          {bad ? (
            <><span className="mr-2 inline-block bg-ember px-1.5 font-mono text-xs">ERROR</span>{state.message}</>
          ) : (
            "Goes straight to my inbox."
          )}
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 border-[3px] border-ink bg-ink px-8 font-mono text-sm font-bold uppercase text-chalk shadow-[5px_5px_0_var(--color-ember)] hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--color-ember)] active:translate-y-0.5 active:shadow-none disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Sending..." : <>Send message <span aria-hidden>→</span></>}
        </button>
      </div>
    </form>
  );
}
