import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl space-y-5",
        centered && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "soft-label",
            light && "border-white/30 bg-white/10 text-white/80",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-4">
        <h2
          className={cn(
            "text-pretty text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1.02]",
            light ? "text-white" : "text-foreground",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "max-w-2xl text-pretty",
              centered && "mx-auto",
              light && "text-white/82",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
