"use client";

import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-inter text-sm font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-terracotta-deep";

  const styles = {
    primary:
      "bg-ink text-cream hover:bg-brick",
    outline:
      "border border-ink text-ink hover:border-brick hover:text-brick",
  };

  const combined = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${combined} disabled:opacity-50 disabled:cursor-not-allowed`}>
      {children}
    </button>
  );
}
