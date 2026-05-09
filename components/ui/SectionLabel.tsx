interface SectionLabelProps {
  children: string;
  color?: "brick" | "sage" | "muted";
}

export default function SectionLabel({
  children,
  color = "brick",
}: SectionLabelProps) {
  const colors = {
    brick: "text-brick",
    sage: "text-sage-deep",
    muted: "text-ink-muted",
  };

  return (
    <p
      className={`font-inter font-medium ${colors[color]}`}
      style={{ fontSize: "11px", letterSpacing: "2px" }}
    >
      {children.toUpperCase()}
    </p>
  );
}
