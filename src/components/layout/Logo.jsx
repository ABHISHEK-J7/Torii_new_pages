import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// The app is served under basePath /placement-trainings (see next.config.mjs).
// next/image does NOT auto-prepend basePath to a string src, so it's explicit.
const BASE = "/placement-trainings";

/**
 * Torii Minds wordmark logo. Two variants toggle with the theme via CSS:
 *   - logo-light.png : dark "TORII" text (for light mode)
 *   - logo-dark.png  : white "TORII" text (for dark mode)
 * The Link's aria-label provides the accessible name, so the images are
 * decorative (empty alt) and only one is visible at a time.
 */
export function Logo({ className }) {
  return (
    <Link
      href="/"
      aria-label="Torii Minds — Home"
      className={cn("group inline-flex items-center", className)}
    >
      <Image
        src={`${BASE}/logo-light.png`}
        alt=""
        width={750}
        height={255}
        priority
        unoptimized
        className="block h-[30px] w-auto transition-transform duration-300 group-hover:-translate-y-0.5 dark:hidden"
      />
      <Image
        src={`${BASE}/logo-dark.png`}
        alt=""
        width={750}
        height={255}
        priority
        unoptimized
        className="hidden h-[30px] w-auto transition-transform duration-300 group-hover:-translate-y-0.5 dark:block"
      />
    </Link>
  );
}
