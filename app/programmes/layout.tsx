import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Explore AAE Foundation programmes supporting education, women and youth empowerment, healthcare, girls' wellbeing, entrepreneurship, and community development.",
};

export default function ProgrammesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}