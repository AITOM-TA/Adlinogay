interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "sage" | "brick";
}

export default function Tag({ children, variant = "default" }: TagProps) {
  const styles = {
    default: "bg-peach text-ink-soft border border-terracotta/30",
    sage: "bg-sage/30 text-sage-deep border border-sage/40",
    brick: "bg-peach-deep/20 text-brick border border-brick/20",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-inter font-medium ${styles[variant]}`}
      style={{ letterSpacing: "0.5px" }}
    >
      {children}
    </span>
  );
}
