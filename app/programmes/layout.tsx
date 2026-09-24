import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Programmes | AAE Foundation",
  description:
    "Explore the programmes and community initiatives of the AAE Foundation across education, empowerment, healthcare, girls' support, and community development.",
};

export default function ProgrammesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}