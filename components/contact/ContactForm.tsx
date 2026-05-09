"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Send } from "lucide-react";

interface FormState {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}

const initialState: FormState = { nom: "", email: "", sujet: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: brancher Resend ou Formspree pour l'envoi réel
    const mailto = `mailto:adelineauguet@orange.fr?subject=${encodeURIComponent(
      form.sujet || "Message depuis le site"
    )}&body=${encodeURIComponent(
      `Nom : ${form.nom}\nEmail : ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <p className="font-cormorant text-2xl text-ink mb-3">
          Message transmis.
        </p>
        <p className="font-inter text-sm text-ink-soft">
          Votre client mail devrait s'ouvrir automatiquement.
        </p>
        <button
          onClick={() => setSubmitted(false)}
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
        { name: "sujet", label: "Sujet", type: "text", required: false },
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

      <Button type="submit" variant="primary" className="gap-2">
        <Send size={14} />
        Envoyer
      </Button>
    </form>
  );
}
