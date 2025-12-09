import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className, showText = true, size = "md" }: LogoProps) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        className={cn(sizes[size], "text-foreground")}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagon base */}
        <path
          d="M30 6L52 18V42L30 54L8 42V18L30 6Z"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Inner connecting lines */}
        <path
          d="M30 6V22M30 38V54"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 18L22 26M38 34L52 42"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M52 18L38 26M22 34L8 42"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Center node */}
        <circle cx="30" cy="30" r="6" fill="currentColor" />
      </svg>
      {showText && (
        <span className={cn("font-mono font-bold tracking-tight", textSizes[size])}>
          borgesoft
        </span>
      )}
    </div>
  );
};
