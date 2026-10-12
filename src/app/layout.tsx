import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plan B — Shift coverage, sorted",
  description: "When a hospitality shift breaks, Plan B helps restaurants find cover fast.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
