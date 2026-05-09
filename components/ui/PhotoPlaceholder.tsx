interface PhotoPlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: "4/5" | "1/1" | "16/9" | "3/2";
}

export default function PhotoPlaceholder({
  label = "photo",
  className = "",
  aspectRatio = "4/5",
}: PhotoPlaceholderProps) {
  const ratioMap = {
    "4/5": "aspect-[4/5]",
    "1/1": "aspect-square",
    "16/9": "aspect-video",
    "3/2": "aspect-[3/2]",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${ratioMap[aspectRatio]} ${className}`}
      style={{
        background: "linear-gradient(135deg, #F5D9C8 0%, #D4A88C 100%)",
      }}
    >
      <div className="absolute inset-0 flex items-end p-4">
        <p className="font-cormorant italic text-brick/60 text-sm">
          {label}
        </p>
      </div>
      {/* Motif décoratif subtil */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #B8845F 0, #B8845F 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}
