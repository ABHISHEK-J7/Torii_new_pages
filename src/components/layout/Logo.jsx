import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Torii Minds brand logo — the official "Step IN, Stand OUT" gate mark.
 * Source: public/logo.png (trimmed from the supplied transparent PNG).
 */
export function Logo({ className }) {
  return (
    <Link
      href="/"
      aria-label="Torii Minds — Home"
      className={cn("group inline-flex items-center", className)}
    >
      <Image
        // next/image does NOT auto-prepend basePath to a string src, so we
        // include it explicitly. The app is served under /placement-trainings
        // (see basePath in next.config.mjs); public/logo.png is therefore
        // served at /placement-trainings/logo.png.
        src="/placement-trainings/logo.png"
        alt="Torii Minds"
        width={794}
        height={256}
        priority
        unoptimized
        className="h-[30px] w-auto transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
