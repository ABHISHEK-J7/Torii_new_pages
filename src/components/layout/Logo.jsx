import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Torii Minds "Step IN, Stand OUT" mark — an open gate with an asterisk and
 * IN / OUT legs. Inline SVG keeps it crisp at any size and recolours with the
 * brand token.
 */
export function Logo({ className }) {
  return (
    <Link
      href="/"
      aria-label="Torii Minds — Step IN, Stand OUT"
      className={cn(
        "group inline-flex items-center",
        className,
      )}
    >
      <svg
        width="56"
        height="45"
        viewBox="0 0 60 48"
        fill="none"
        role="img"
        aria-label="Torii Minds"
        className="text-brand transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        {/* Gate: ⊓ shape (two legs + top bar) */}
        <path
          d="M12 34 V12 H48 V34"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Asterisk inside the gate */}
        <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M30 15 V23" />
          <path d="M26.5 16.8 L33.5 21.2" />
          <path d="M33.5 16.8 L26.5 21.2" />
        </g>
        {/* IN / OUT under the legs */}
        <text
          x="14"
          y="45"
          textAnchor="middle"
          fontSize="8"
          fontWeight="600"
          fill="currentColor"
        >
          IN
        </text>
        <text
          x="46"
          y="45"
          textAnchor="middle"
          fontSize="8"
          fontWeight="600"
          fill="currentColor"
        >
          OUT
        </text>
      </svg>
    </Link>
  );
}
