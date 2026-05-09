"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Send } from "lucide-react";

interface FormState {
  nom: string;
  email: string;
  objet: string;
  message: string;
}

const WEBHOOK_URL =
  "https://n8n-u41084.vm.elestio.app/webhook/398745ca-e909-4cd7-a0d5-8afd949979b7";

const initialState: FormState = { nom: "", email: "", objet: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-12 text-center">
        <p className="font-cormorant text-2xl text-ink mb-3">
          Message envoyé.
        </p>
        <p className="font-inter text-sm text-ink-soft">
          Merci, je reviendrai vers vous rapidement.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-inter text-sm text-brick underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      {[
        { name: "nom", label: "Nom", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "objet", label: "Objet", type: "text", required: false },
      ].map((field) => (
        <div key={field.name} className="group">
          <label
            htmlFor={field.name}
            className="block font-inter text-ink-muted mb-2"
            style={{ fontSize: "11px", letterSpacing: "1.5px" }}
          >
            {field.label.toUpperCase()}
            {field.required && (
              <span className="text-brick ml-1" aria-hidden>
                *
              </span>
            )}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            required={field.required}
            value={form[field.name as keyof FormState]}
            onChange={handleChange}
            className="w-full bg-transparent border-0 border-b pb-2 font-inter text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-muted/40"
            style={{
              borderBottom: "1px solid rgba(212,168,140,0.5)",
            }}
            onFocus={(e) => {
              e.target.style.borderBottomColor = "#2C3A2E";
            }}
            onBlur={(e) => {
              e.target.style.borderBottomColor = "rgba(212,168,140,0.5)";
            }}
          />
        </div>
      ))}

      <div>
        <label
          htmlFor="message"
          className="block font-inter text-ink-muted mb-2"
          style={{ fontSize: "11px", letterSpacing: "1.5px" }}
        >
          MESSAGE <span className="text-brick" aria-hidden>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full bg-transparent border-0 border-b pb-2 font-inter text-sm text-ink outline-none transition-colors duration-200 resize-none placeholder:text-ink-muted/40"
          style={{
            borderBottom: "1px solid rgba(212,168,140,0.5)",
          }}
          onFocus={(e) => {
            e.target.style.borderBottomColor = "#2C3A2E";
          }}
          onBlur={(e) => {
            e.target.style.borderBottomColor = "rgba(212,168,140,0.5)";
          }}
        />
      </div>

      {status === "error" && (
        <p className="font-inter text-sm text-brick">
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}

      <Button type="submit" variant="primary" className="gap-2" disabled={status === "loading"}>
        <Send size={14} />
        {status === "loading" ? "Envoi…" : "Envoyer"}
      </Button>
    </form>
  );
}
