import { cn } from "@/lib/utils";

interface HexagonPatternProps {
  className?: string;
}

export const HexagonPattern = ({ className }: HexagonPatternProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Floating hexagons */}
      <svg
        className="absolute -right-20 top-10 w-80 h-80 animate-float opacity-20"
        viewBox="0 0 200 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 10L185 55V145L100 190L15 145V55L100 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-teal"
        />
        <path
          d="M100 40L155 70V130L100 160L45 130V70L100 40Z"
          stroke="currentColor"
          strokeWidth="1"
          className="text-teal"
        />
      </svg>

      <svg
        className="absolute -right-10 top-60 w-60 h-60 animate-float-delayed opacity-15"
        viewBox="0 0 200 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 10L185 55V145L100 190L15 145V55L100 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-teal"
        />
      </svg>

      <svg
        className="absolute right-40 top-96 w-40 h-40 animate-float opacity-10"
        viewBox="0 0 200 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 10L185 55V145L100 190L15 145V55L100 10Z"
          stroke="currentColor"
          strokeWidth="2"
          className="text-teal"
        />
      </svg>

      {/* Grid pattern */}
      <div className="absolute inset-0 hexagon-pattern animate-pulse-slow" />
    </div>
  );
};
