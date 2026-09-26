import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GetInvolvedHero from "@/components/get-involved/GetInvolvedHero";
import WhyGetInvolved from "@/components/get-involved/WhyGetInvolved";
import WaysToGetInvolved from "@/components/get-involved/WaysToGetInvolved";
import WorkTogether from "@/components/get-involved/WorkTogether";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Discover ways to support AAE Foundation through volunteering, partnerships, programme support, and helping amplify our work.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[var(--aae-background)]">
        <GetInvolvedHero />
        <WhyGetInvolved />
        <WaysToGetInvolved />
        <WorkTogether />
      </main>

      <Footer />
    </>
  );
}